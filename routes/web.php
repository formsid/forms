<?php

use App\Http\Controllers\FormController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/inbox', function () {
    return Inertia::render('Inbox');
})->middleware(['auth', 'verified'])->name('inbox');
Route::get('/integrations', function () {
    return Inertia::render('Integrations');
})->middleware(['auth', 'verified'])->name('integrations');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('forms', FormController::class)->name('*', 'forms');
});

Route::get('/', function () {
    return redirect()->route('login');
})->middleware(['guest']);

require __DIR__.'/auth.php';
