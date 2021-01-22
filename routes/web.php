<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/dashboard', function () {
    return view('admin.dashboard');
})->name("myDashboard");

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
/*
User
*/
Route::get('/users', 'User\UserController@index');
Route::post('/postUser', 'User\UserController@store');
Route::get('/edituser/{id}/edit', 'User\UserController@edit');
Route::get('/userprofile', 'User\UserController@userprofile');
Route::post('/updateprofile', 'User\UserController@updateprofile');
Route::post('/update-password', 'User\UserController@updatepassword');
/*
General
*/
Route::get('/general', 'applicatns\GeneralController@index');
/*
professionals
*/
Route::get('/professional', 'applicatns\ProfessionalController@index');
/*
Cooperates
*/
Route::get('/cooperates', 'applicatns\CooperateController@index');
/*
Student
*/
Route::get('/student', 'applicatns\StudentController@index');
/*
Retired
*/
Route::get('/retired', 'applicatns\RetiredController@index');
/*
MemberType
*/
Route::get('/memberType', 'others\MemberTypeController@index');
Route::post('/post-membertype', 'others\MemberTypeController@store');
/*
Knowledge Hub
*/
Route::get('/knowHub', 'others\KnowHubController@index');
Route::post('/post-knowHub', 'others\KnowHubController@store');
/*
News,Events and updates
*/
Route::get('/admin-news', 'others\NewsUpdateController@newsupdates');
Route::post('/post-news', 'others\NewsUpdateController@storeNews');
Route::get('/events', 'others\NewsUpdateController@events');
Route::get('/leadership', 'others\NewsUpdateController@leadership');

Route::get('/{any}', function(){
        return view('welcome');
    })->where('any', '.*');