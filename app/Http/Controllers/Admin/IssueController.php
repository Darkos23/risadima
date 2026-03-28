<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Issue;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class IssueController extends Controller
{
    public function index()
    {
        $issues = Issue::withCount('articles')
            ->orderByDesc('published_at')
            ->orderByDesc('volume')
            ->orderByDesc('number')
            ->get()
            ->map(fn($i) => [
                'id'             => $i->id,
                'volume'         => $i->volume,
                'number'         => $i->number,
                'title'          => $i->title,
                'is_published'   => $i->is_published,
                'published_at'   => $i->published_at?->format('d/m/Y'),
                'articles_count' => $i->articles_count,
                'cover_image'    => $i->cover_image,
            ]);

        return Inertia::render('Admin/Issues/Index', ['issues' => $issues]);
    }

    public function create()
    {
        return Inertia::render('Admin/Issues/Form', ['issue' => null]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'volume'       => ['required', 'integer'],
            'number'       => ['required', 'integer'],
            'title'        => ['required', 'string', 'max:255'],
            'description'  => ['nullable', 'string'],
            'published_at' => ['nullable', 'date'],
            'is_published' => ['boolean'],
            'cover_image'  => ['nullable', 'image', 'max:2048'],
        ]);

        if ($request->hasFile('cover_image')) {
            $data['cover_image'] = $request->file('cover_image')->store('covers', 'public');
        } else {
            unset($data['cover_image']);
        }

        Issue::create($data);

        return redirect()->route('admin.numeros.index')->with('success', 'Numéro créé avec succès.');
    }

    public function edit(Issue $numero)
    {
        return Inertia::render('Admin/Issues/Form', [
            'issue' => [
                'id'           => $numero->id,
                'volume'       => $numero->volume,
                'number'       => $numero->number,
                'title'        => $numero->title,
                'description'  => $numero->description,
                'cover_image'  => $numero->cover_image,
                'published_at' => $numero->published_at?->format('Y-m-d'),
                'is_published' => $numero->is_published,
            ],
        ]);
    }

    public function update(Request $request, Issue $numero)
    {
        $data = $request->validate([
            'volume'       => ['required', 'integer'],
            'number'       => ['required', 'integer'],
            'title'        => ['required', 'string', 'max:255'],
            'description'  => ['nullable', 'string'],
            'published_at' => ['nullable', 'date'],
            'is_published' => ['boolean'],
            'cover_image'  => ['nullable', 'image', 'max:2048'],
        ]);

        if ($request->hasFile('cover_image')) {
            if ($numero->cover_image) {
                Storage::disk('public')->delete($numero->cover_image);
            }
            $data['cover_image'] = $request->file('cover_image')->store('covers', 'public');
        } else {
            unset($data['cover_image']);
        }

        $numero->update($data);

        return redirect()->route('admin.numeros.index')->with('success', 'Numéro mis à jour.');
    }

    public function destroy(Issue $numero)
    {
        if ($numero->cover_image) {
            Storage::disk('public')->delete($numero->cover_image);
        }
        $numero->delete();

        return redirect()->route('admin.numeros.index')->with('success', 'Numéro supprimé.');
    }
}
