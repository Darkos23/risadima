<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingController extends Controller
{
    public function index()
    {
        $settings = Setting::all()->pluck('value', 'key')->toArray();

        return Inertia::render('Admin/Settings', ['settings' => $settings]);
    }

    public function update(Request $request)
    {
        $data = $request->validate([
            'nom_revue'         => ['nullable', 'string', 'max:255'],
            'issn_print'        => ['nullable', 'string', 'max:50'],
            'issn_online'       => ['nullable', 'string', 'max:50'],
            'langue'            => ['nullable', 'string', 'max:50'],
            'email_contact'     => ['nullable', 'email', 'max:255'],
            'adresse'           => ['nullable', 'string', 'max:500'],
            'institution'       => ['nullable', 'string', 'max:255'],
            'frequence_parution' => ['nullable', 'string', 'max:100'],
            'acces_libre'       => ['nullable', 'boolean'],
            'frais_publication' => ['nullable', 'string', 'max:255'],
        ]);

        foreach ($data as $key => $value) {
            Setting::set($key, $value);
        }

        return back()->with('success', 'Paramètres enregistrés.');
    }
}
