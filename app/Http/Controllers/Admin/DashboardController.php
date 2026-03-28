<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Author;
use App\Models\Issue;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $stats = [
            'issues'             => Issue::count(),
            'articles'           => Article::count(),
            'authors'            => Author::count(),
            'articles_published' => Article::where('is_published', true)->count(),
            'total_downloads'    => Article::sum('downloads_count'),
        ];

        $latestArticles = Article::with(['issue', 'authors'])
            ->latest()
            ->take(5)
            ->get()
            ->map(fn($a) => [
                'id'           => $a->id,
                'title'        => $a->title,
                'is_published' => $a->is_published,
                'issue'        => $a->issue ? ['title' => $a->issue->title, 'number' => $a->issue->number] : null,
                'authors'      => $a->authors->map(fn($au) => $au->first_name . ' ' . $au->last_name)->join(', '),
                'created_at'   => $a->created_at?->format('d/m/Y'),
            ]);

        return Inertia::render('Admin/Dashboard', [
            'stats'          => $stats,
            'latestArticles' => $latestArticles,
        ]);
    }
}
