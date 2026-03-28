<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::orderBy('name')->get(['id', 'name', 'email', 'created_at']);

        return Inertia::render('Admin/Users/Index', ['users' => $users]);
    }

    public function create()
    {
        return Inertia::render('Admin/Users/Form', ['user' => null]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name'                  => ['required', 'string', 'max:255'],
            'email'                 => ['required', 'email', 'max:255', 'unique:users,email'],
            'password'              => ['required', 'string', 'min:8', 'confirmed'],
            'password_confirmation' => ['required'],
        ]);

        User::create([
            'name'     => $data['name'],
            'email'    => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        return redirect()->route('admin.utilisateurs.index')->with('success', 'Utilisateur créé.');
    }

    public function edit(User $utilisateur)
    {
        return Inertia::render('Admin/Users/Form', [
            'user' => [
                'id'    => $utilisateur->id,
                'name'  => $utilisateur->name,
                'email' => $utilisateur->email,
            ],
        ]);
    }

    public function update(Request $request, User $utilisateur)
    {
        $data = $request->validate([
            'name'                  => ['required', 'string', 'max:255'],
            'email'                 => ['required', 'email', 'max:255', 'unique:users,email,' . $utilisateur->id],
            'password'              => ['nullable', 'string', 'min:8', 'confirmed'],
            'password_confirmation' => ['nullable'],
        ]);

        $utilisateur->name  = $data['name'];
        $utilisateur->email = $data['email'];

        if (!empty($data['password'])) {
            $utilisateur->password = bcrypt($data['password']);
        }

        $utilisateur->save();

        return redirect()->route('admin.utilisateurs.index')->with('success', 'Utilisateur mis à jour.');
    }

    public function destroy(User $utilisateur)
    {
        if (User::count() <= 1) {
            return back()->with('error', 'Impossible de supprimer le dernier utilisateur.');
        }

        $utilisateur->delete();

        return redirect()->route('admin.utilisateurs.index')->with('success', 'Utilisateur supprimé.');
    }
}
