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