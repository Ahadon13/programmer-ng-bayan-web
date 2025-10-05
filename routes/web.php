<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

Route::get('/', function () {
    return Inertia::render('Home', [
        'title' => 'Home - Programmer ng Bayan'
    ]);
})->name('home');
Route::get('/about-us', function () {
    return Inertia::render('About-Us', [
        'title' => 'About Us - Programmer ng Bayan'
    ]);
})->name('about-us');
Route::get('/services', function () {
    return Inertia::render('Services', [
        'title' => 'Services - Programmer ng Bayan'
    ]);
})->name('services');
Route::get('/projects', function () {
    return Inertia::render('Projects', [
        'title' => 'Projects - Programmer ng Bayan'
    ]);
})->name('projects');
Route::get('/contact-us', function () {
    return Inertia::render('Contact', [
        'title' => 'Contact Us - Programmer ng Bayan'
    ]);
})->name('contact-us');


require __DIR__.'/auth.php';
