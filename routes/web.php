<?php

use App\Http\Controllers\PublicController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PublicController::class, 'home'])->name('home');
Route::get('/archives', [PublicController::class, 'archives'])->name('archives');
Route::get('/a-propos', [PublicController::class, 'aPropos'])->name('a-propos');
Route::get('/comite', [PublicController::class, 'comite'])->name('comite');
Route::get('/soumissions', [PublicController::class, 'soumissions'])->name('soumissions');
Route::get('/numeros/{issue}', [PublicController::class, 'issue'])->name('issue.show');
Route::get('/articles/{article}', [PublicController::class, 'article'])->name('article.show');
