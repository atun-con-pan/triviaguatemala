<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Controllers\PreguntaController;
use Illuminate\Support\Facades\URL;

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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


/* Route::get('/preguntas', function () {
    return view('preguntas');
}); */

Route::get('/preguntas', [App\Http\Controllers\PreguntaController::class, 'index'])->name('index');
/* Route::get('/dashboard/usuarios/{id}/editar', 'UsuarioController@edit')->name('editar');
Route::get('/dashboard/usuarios/crear', 'UsuarioController@create')->name('crear');
Route::post('/dashboard/usuarios/guardar', 'UsuarioController@store')->name('guardar');
Route::post('/dashboard', 'UsuarioController@update')->name('index');
Route::get('/dashboard/usuarios/{id}/eliminar', 'UsuarioController@destroy')->name('eliminar'); */
