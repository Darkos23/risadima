<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Author;
use App\Models\Issue;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = Article::with(['issue', 'authors'])
            ->orderByDesc('created_at')
            ->get()
            ->map(fn($a) => [
                'id'              => $a->id,
                'title'           => $a->title,
                'doi'             => $a->doi,
                'is_published'    => $a->is_published,
                'pages_start'     => $a->pages_start,
                'pages_end'       => $a->pages_end,
                'downloads_count' => $a->downloads_count,
                'issue'           => $a->issue ? [
                    'id'     => $a->issue->id,
                    'title'  => $a->issue->title,
                    'number' => $a->issue->number,
                    'volume' => $a->issue->volume,
                ] : null,
                'authors'      => $a->authors->map(fn($au) => [
                    'id'   => $au->id,
                    'name' => $au->first_name . ' ' . $au->last_name,
                ]),
            ]);

        return Inertia::render('Admin/Articles/Index', ['articles' => $articles]);
    }

    public function create()
    {
        return Inertia::render('Admin/Articles/Form', [
            'article' => null,
            'issues'  => Issue::orderByDesc('volume')->orderByDesc('number')->get(['id', 'title', 'volume', 'number']),
            'authors' => Author::orderBy('last_name')->get(['id', 'first_name', 'last_name']),
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title'       => ['required', 'string', 'max:255'],
            'abstract'    => ['nullable', 'string'],
            'keywords'    => ['nullable', 'string'],
            'issue_id'    => ['nullable', 'exists:issues,id'],
            'doi'         => ['nullable', 'string', 'max:255'],
            'pages_start' => ['nullable', 'integer'],
            'pages_end'   => ['nullable', 'integer'],
            'sort_order'  => ['nullable', 'integer'],
            'is_published' => ['boolean'],
            'pdf_path'    => ['nullable', 'file', 'mimes:pdf', 'max:20480'],
            'author_ids'  => ['nullable', 'array'],
            'author_ids.*' => ['exists:authors,id'],
        ]);

        if ($request->hasFile('pdf_path')) {
            $data['pdf_path'] = $request->file('pdf_path')->store('pdfs', 'public');
        } else {
            unset($data['pdf_path']);
        }

        $authorIds = $data['author_ids'] ?? [];
        unset($data['author_ids']);

        $article = Article::create($data);

        if (!empty($authorIds)) {
            $sync = [];
            foreach ($authorIds as $idx => $id) {
                $sync[$id] = ['sort_order' => $idx];
            }
            $article->authors()->sync($sync);
        }

        return redirect()->route('admin.articles.index')->with('success', 'Article créé avec succès.');
    }

    public function edit(Article $article)
    {
        $article->load('authors');
        return Inertia::render('Admin/Articles/Form', [
            'article' => [
                'id'           => $article->id,
                'title'        => $article->title,
                'abstract'     => $article->abstract,
                'keywords'     => $article->keywords,
                'issue_id'     => $article->issue_id,
                'doi'          => $article->doi,
                'pages_start'  => $article->pages_start,
                'pages_end'    => $article->pages_end,
                'sort_order'   => $article->sort_order,
                'is_published' => $article->is_published,
                'pdf_path'     => $article->pdf_path,
                'author_ids'   => $article->authors->pluck('id')->toArray(),
            ],
            'issues'  => Issue::orderByDesc('volume')->orderByDesc('number')->get(['id', 'title', 'volume', 'number']),
            'authors' => Author::orderBy('last_name')->get(['id', 'first_name', 'last_name']),
        ]);
    }

    public function update(Request $request, Article $article)
    {
        $data = $request->validate([
            'title'        => ['required', 'string', 'max:255'],
            'abstract'     => ['nullable', 'string'],
            'keywords'     => ['nullable', 'string'],
            'issue_id'     => ['nullable', 'exists:issues,id'],
            'doi'          => ['nullable', 'string', 'max:255'],
            'pages_start'  => ['nullable', 'integer'],
            'pages_end'    => ['nullable', 'integer'],
            'sort_order'   => ['nullable', 'integer'],
            'is_published' => ['boolean'],
            'pdf_path'     => ['nullable', 'file', 'mimes:pdf', 'max:20480'],
            'author_ids'   => ['nullable', 'array'],
            'author_ids.*' => ['exists:authors,id'],
        ]);

        if ($request->hasFile('pdf_path')) {
            if ($article->pdf_path) {
                Storage::disk('public')->delete($article->pdf_path);
            }
            $data['pdf_path'] = $request->file('pdf_path')->store('pdfs', 'public');
        } else {
            unset($data['pdf_path']);
        }

        $authorIds = $data['author_ids'] ?? [];
        unset($data['author_ids']);

        $article->update($data);

        $sync = [];
        foreach ($authorIds as $idx => $id) {
            $sync[$id] = ['sort_order' => $idx];
        }
        $article->authors()->sync($sync);

        return redirect()->route('admin.articles.index')->with('success', 'Article mis à jour.');
    }

    public function togglePublish(Article $article)
    {
        $article->update(['is_published' => !$article->is_published]);
        return back()->with('success', $article->is_published ? 'Article publié.' : 'Article dépublié.');
    }

    public function destroy(Article $article)
    {
        if ($article->pdf_path) {
            Storage::disk('public')->delete($article->pdf_path);
        }
        $article->delete();

        return redirect()->route('admin.articles.index')->with('success', 'Article supprimé.');
    }
}
