<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Author;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthorController extends Controller
{
    public function index()
    {
        $authors = Author::withCount('articles')
            ->orderBy('last_name')
            ->get()
            ->map(fn($a) => [
                'id'             => $a->id,
                'first_name'     => $a->first_name,
                'last_name'      => $a->last_name,
                'email'          => $a->email,
                'institution'    => $a->institution,
                'orcid'          => $a->orcid,
                'articles_count' => $a->articles_count,
            ]);

        return Inertia::render('Admin/Authors/Index', ['authors' => $authors]);
    }

    public function create()
    {
        return Inertia::render('Admin/Authors/Form', ['author' => null]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'first_name'  => ['required', 'string', 'max:255'],
            'last_name'   => ['required', 'string', 'max:255'],
            'email'       => ['nullable', 'email', 'max:255'],
            'institution' => ['nullable', 'string', 'max:255'],
            'orcid'       => ['nullable', 'string', 'max:255'],
        ]);

        Author::create($data);

        return redirect()->route('admin.auteurs.index')->with('success', 'Auteur créé avec succès.');
    }

    public function edit(Author $auteur)
    {
        return Inertia::render('Admin/Authors/Form', [
            'author' => [
                'id'          => $auteur->id,
                'first_name'  => $auteur->first_name,
                'last_name'   => $auteur->last_name,
                'email'       => $auteur->email,
                'institution' => $auteur->institution,
                'orcid'       => $auteur->orcid,
            ],
        ]);
    }

    public function update(Request $request, Author $auteur)
    {
        $data = $request->validate([
            'first_name'  => ['required', 'string', 'max:255'],
            'last_name'   => ['required', 'string', 'max:255'],
            'email'       => ['nullable', 'email', 'max:255'],
            'institution' => ['nullable', 'string', 'max:255'],
            'orcid'       => ['nullable', 'string', 'max:255'],
        ]);

        $auteur->update($data);

        return redirect()->route('admin.auteurs.index')->with('success', 'Auteur mis à jour.');
    }

    public function destroy(Author $auteur)
    {
        $auteur->delete();

        return redirect()->route('admin.auteurs.index')->with('success', 'Auteur supprimé.');
    }
}
