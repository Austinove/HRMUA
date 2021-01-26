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
Route::get('/professional/{id}', 'applicatns\ProfessionalController@singlePro');
Route::get('/approve/professional/{id}', 'applicatns\ProfessionalController@approve');
Route::get('/review/professional/{id}', 'applicatns\ProfessionalController@underReview');
Route::get('/decline/professional/{id}', 'applicatns\ProfessionalController@decline');
/*
Cooperates
*/
Route::get('/cooperates', 'applicatns\CooperateController@index');
Route::get('/cooperates/{id}', 'applicatns\CooperateController@singleCoporate');
Route::get('/approve/cooperate/{id}', 'applicatns\CooperateController@approve');
Route::get('/review/cooperate/{id}', 'applicatns\CooperateController@underReview');
Route::get('/decline/cooperate/{id}', 'applicatns\CooperateController@decline');
/*
Student
*/
Route::get('/student', 'applicatns\StudentController@index');
Route::get('/student/{id}', 'applicatns\StudentController@singleStudent');
Route::get('/student/file/{id}', 'applicatns\StudentController@viewFile');
Route::get('/student/image/{id}', 'applicatns\StudentController@viewImage');
Route::get('/approve/student/{id}', 'applicatns\StudentController@approve');
Route::get('/review/student/{id}', 'applicatns\StudentController@underReview');
Route::get('/decline/student/{id}', 'applicatns\StudentController@decline');
/*
Retired
*/
Route::get('/retired', 'applicatns\RetiredController@index');
Route::get('/retired/{id}', 'applicatns\RetiredController@singleRetired');
Route::get('/approve/retired/{id}', 'applicatns\RetiredController@approve');
Route::get('/review/retired/{id}', 'applicatns\RetiredController@underReview');
Route::get('/decline/retired/{id}', 'applicatns\RetiredController@decline');
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
Route::get('/knowHub', 'KnowHubController@index');
Route::post('/post-knowHub', 'KnowHubController@store');
Route::put('/edit-knowHub/{id}', 'KnowHubController@edit');
Route::get('/delete-knowhub/{id}', 'KnowHubController@destroy');
/*
News,Events and updates
*/
Route::get('/news', 'NewsUpdateController@newsupdates');
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