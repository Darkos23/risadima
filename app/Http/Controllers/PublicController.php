<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Issue;
use Inertia\Inertia;

class PublicController extends Controller
{
    public function home()
    {
        $latestIssue = Issue::published()
            ->with('articles.authors')
            ->latest('published_at')
            ->first();

        return Inertia::render('Home', [
            'latestIssue' => $latestIssue,
        ]);
    }

    public function archives()
    {
        $issues = Issue::published()
            ->withCount('articles')
            ->latest('published_at')
            ->get();

        return Inertia::render('Archives', [
            'issues' => $issues,
        ]);
    }

    public function issue(Issue $issue)
    {
        $issue->load('articles.authors');

        return Inertia::render('Issue', [
            'issue' => $issue,
        ]);
    }

    public function aPropos()
    {
        return Inertia::render('APropos');
    }

    public function comite()
    {
        return Inertia::render('Comite');
    }

    public function soumissions()
    {
        return Inertia::render('Soumissions');
    }

    public function article(Article $article)
    {
        $article->load(['authors', 'issue']);

        return Inertia::render('Article', [
            'article' => $article,
        ]);
    }
}
