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
Route::get('/general', 'GeneralController@index');
/*
professionals
*/
Route::get('/professional', 'ProfessionalController@index');
Route::get('/professional/{id}', 'ProfessionalController@singlePro');
Route::get('/approve/professional/{id}', 'ProfessionalController@approve');
Route::get('/review/professional/{id}', 'ProfessionalController@underReview');
Route::get('/decline/professional/{id}', 'ProfessionalController@decline');
/*
Cooperates
*/
Route::get('/cooperates', 'CooperateController@index');
Route::get('/cooperates/{id}', 'CooperateController@singleCoporate');
Route::get('/approve/cooperate/{id}', 'CooperateController@approve');
Route::get('/review/cooperate/{id}', 'CooperateController@underReview');
Route::get('/decline/cooperate/{id}', 'CooperateController@decline');
/*
Student
*/
Route::get('/student', 'StudentController@index');
Route::get('/student/{id}', 'StudentController@singleStudent');
Route::get('/student/file/{id}', 'StudentController@viewFile');
Route::get('/student/image/{id}', 'StudentController@viewImage');
Route::get('/approve/student/{id}', 'StudentController@approve');
Route::get('/review/student/{id}', 'StudentController@underReview');
Route::get('/decline/student/{id}', 'StudentController@decline');
/*
Retired
*/
Route::get('/retired', 'RetiredController@index');
Route::get('/retired/{id}', 'RetiredController@singleRetired');
Route::get('/approve/retired/{id}', 'RetiredController@approve');
Route::get('/review/retired/{id}', 'RetiredController@underReview');
Route::get('/decline/retired/{id}', 'RetiredController@decline');
/*
MemberType
*/
Route::get('/memberType', 'MemberTypeController@index');
Route::post('/post-membertype', 'MemberTypeController@store');
Route::put('/edit-member-Type/{id}', 'MemberTypeController@edit');
Route::get('/delete-type/{id}', 'MemberTypeController@destroy');
/*
Knowledge Hub
*/
Route::get('/knowledge/more/{id}', 'KnowHubController@show');
Route::get('/knowHub', 'KnowHubController@index');
Route::post('/post-knowHub', 'KnowHubController@store');
Route::put('/edit-knowHub/{id}', 'KnowHubController@edit');
Route::get('/delete-knowhub/{id}', 'KnowHubController@destroy');
/*
News,Events and updates
*/
Route::get('/news/more/{id}', 'NewsUpdateController@show');
Route::get('/newsView', 'NewsUpdateController@newsupdates');
Route::post('/post-news', 'NewsUpdateController@storeNews');
Route::put('/edit-news/{id}', 'NewsUpdateController@editNews');
Route::get('/delete-news/{id}', 'NewsUpdateController@destroyNews');

Route::get('/events', 'NewsUpdateController@events');
Route::post('/post-event', 'NewsUpdateController@storeEvents');
Route::put('/edit-event/{id}', 'NewsUpdateController@editEvent');
Route::get('/delete-event/{id}', 'NewsUpdateController@destroyEvent');

Route::get('/leadership', 'NewsUpdateController@leadership');
Route::post('/post-leader', 'NewsUpdateController@storeLeader');
Route::put('/edit-post-leader/{id}', 'NewsUpdateController@editleader');
Route::get('/delete-leader/{id}', 'NewsUpdateController@destroyLeader');

Route::get('/{any}', function(){
        return view('welcome');
    })->where('any', '.*');