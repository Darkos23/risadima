<?php

use App\Http\Controllers\PublicController;
use App\Http\Controllers\Admin;
use Illuminate\Support\Facades\Route;

Route::get('/', [PublicController::class, 'home'])->name('home');
Route::get('/archives', [PublicController::class, 'archives'])->name('archives');
Route::get('/a-propos', [PublicController::class, 'aPropos'])->name('a-propos');
Route::get('/comite', [PublicController::class, 'comite'])->name('comite');
Route::get('/soumissions', [PublicController::class, 'soumissions'])->name('soumissions');
Route::get('/numeros/{issue}', [PublicController::class, 'issue'])->name('issue.show');
Route::get('/articles/{article}', [PublicController::class, 'article'])->name('article.show');
Route::get('/articles/{article}/download', [PublicController::class, 'downloadArticle'])->name('article.download');
Route::get('/recherche', [PublicController::class, 'recherche'])->name('recherche');
Route::get('/actes/adima-1', [PublicController::class, 'actesAdima1'])->name('actes.adima1');

Route::prefix('admin')->name('admin.')->group(function () {
    Route::middleware('guest')->group(function () {
        Route::get('/login', [Admin\AuthController::class, 'showLogin'])->name('login');
        Route::post('/login', [Admin\AuthController::class, 'login']);
    });
    Route::middleware('auth')->group(function () {
        Route::post('/logout', [Admin\AuthController::class, 'logout'])->name('logout');
        Route::get('/', [Admin\DashboardController::class, 'index'])->name('dashboard');
        Route::resource('numeros', Admin\IssueController::class)->except(['show']);
        Route::patch('numeros/{numero}/toggle-publish', [Admin\IssueController::class, 'togglePublish'])->name('numeros.toggle-publish');
        Route::resource('articles', Admin\ArticleController::class)->except(['show']);
        Route::patch('articles/{article}/toggle-publish', [Admin\ArticleController::class, 'togglePublish'])->name('articles.toggle-publish');
        Route::resource('auteurs', Admin\AuthorController::class)->except(['show']);
        Route::resource('utilisateurs', Admin\UserController::class)->except(['show']);
        Route::get('parametres', [Admin\SettingController::class, 'index'])->name('parametres');
        Route::post('parametres', [Admin\SettingController::class, 'update'])->name('parametres.update');
    });
});
