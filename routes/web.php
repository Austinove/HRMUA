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
Home page Image
*/
Route::get('/home-image', 'HomeController@homepage');
Route::post('/post-image', 'HomeController@storeHomeImage');
Route::put('/edit-image/{id}', 'HomeController@editHomeImage');
Route::get('/delete-image/{id}', 'HomeController@destroyHomeImage');
/*
User
*/
Route::get('/users', 'User\UserController@index');
Route::post('/postUser', 'User\UserController@store');
Route::put('/edituser/{id}', 'User\UserController@edit');
Route::get('/delete-user/{id}', 'User\UserController@destroy');
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
Route::put('/edit-member-Type/{id}', 'others\MemberTypeController@edit');
Route::get('/delete-type/{id}', 'others\MemberTypeController@destroy');
/*
Knowledge Hub
*/
Route::get('/knowHub', 'others\KnowHubController@index');
Route::post('/post-knowHub', 'others\KnowHubController@store');
Route::put('/edit-knowHub/{id}', 'others\KnowHubController@edit');
Route::get('/delete-knowhub/{id}', 'others\KnowHubController@destroy');
/*
News,Events and updates
*/
Route::get('/news', 'others\NewsUpdateController@newsupdates');
Route::post('/post-news', 'others\NewsUpdateController@storeNews');
Route::put('/edit-news/{id}', 'others\NewsUpdateController@editNews');
Route::get('/delete-news/{id}', 'others\NewsUpdateController@destroyNews');

Route::get('/events', 'others\NewsUpdateController@events');
Route::post('/post-event', 'others\NewsUpdateController@storeEvents');
Route::put('/edit-event/{id}', 'others\NewsUpdateController@editEvent');
Route::get('/delete-event/{id}', 'others\NewsUpdateController@destroyEvent');

Route::get('/leadership', 'others\NewsUpdateController@leadership');
Route::post('/post-leader', 'others\NewsUpdateController@storeLeader');
Route::put('/edit-post-leader/{id}', 'others\NewsUpdateController@editleader');
Route::get('/delete-leader/{id}', 'others\NewsUpdateController@destroyLeader');

Route::get('/{any}', function(){
        return view('welcome');
    })->where('any', '.*');