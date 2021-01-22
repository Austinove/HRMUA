<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register','Api\AuthController@register');
Route::post('/login','Api\AuthController@login');
Route::get('/logout','Api\AuthController@logout');
Route::get('/allusers','Api\AuthController@allusers');
Route::delete('/destroy/{id}','Api\AuthController@destroy');
Route::put('/update/{id}','Api\AuthController@update');
//General
Route::post('/general','Api\GeneralController@store');
Route::get('/allgeneral','Api\GeneralController@index');
Route::get('/onegeneral/{id}','Api\GeneralController@show');
Route::put('/updategeneral/{id}','Api\GeneralController@update');
Route::delete('/destroygeneral/{id}','Api\GeneralController@destroy');
//Corporate
Route::post('/corporate','Api\CorporateController@store');
Route::get('/allcorporate','Api\CorporateController@index');
Route::get('/onecorporate/{id}','Api\CorporateController@show');
Route::put('/updatecorporatel/{id}','Api\CorporateController@update');
Route::delete('/destroycorporate/{id}','Api\CorporateController@destroy');
//Professional
Route::post('/professional','Api\ProfessionalController@store');
Route::get('/allprofessional','Api\ProfessionalController@index');
Route::get('/oneprofessional/{id}','Api\ProfessionalController@show');
Route::put('/updateprofessional/{id}','Api\ProfessionalController@update');
Route::delete('/destroyprofessional/{id}','Api\ProfessionalController@destroy');
//student
Route::post('/student','Api\StudentController@store');
Route::get('/allstudent','Api\StudentController@index');
Route::get('/onestudent/{id}','Api\StudentController@show');
Route::put('/updatestudent/{id}','Api\StudentController@update');
Route::delete('/destroystudent/{id}','Api\StudentController@destroy');
//retired
Route::post('/retired','Api\RetiredController@store');
Route::get('/allretired','Api\RetiredController@index');
Route::get('/oneretired/{id}','Api\RetiredController@show');
Route::put('/updateretired/{id}','Api\RetiredController@update');
Route::delete('/destroyretired/{id}','Api\RetiredController@destroy');
//News Lettter
Route::post('/newsletter','Api\NewsletterController@store');
Route::post('/news/infinite', 'Api\NewsletterController@infinite');
Route::get('/allnewsletter','Api\NewsletterController@index');
Route::get('/onenewsletter/{id}','Api\NewsletterController@show');
Route::put('/updatenewsletter/{id}','Api\NewsletterController@update');
Route::delete('/destroynewsletter/{id}','Api\NewsletterController@destroy');
//Member Typegit 
Route::post('/membertype','Api\MembertypeController@store');
Route::get('/allmembertype','Api\MembertypeController@index');
Route::get('/onemembertype/{id}','Api\MembertypeController@show');
Route::put('/updatemembertype/{id}','Api\MembertypeController@update');
Route::delete('/destroymembertype/{id}','Api\MembertypeController@destroy');
//Knowledgehub
Route::post('/knowledgehub','Api\KnowledgehubController@store');
Route::post('/allknowledgehub/infinite', 'Api\KnowledgehubController@infinite');
Route::get('/allknowledgehub','Api\KnowledgehubController@index');
Route::get('/oneknowledgehub/{id}','Api\KnowledgehubController@show');
Route::put('/updateknowledgehub/{id}','Api\KnowledgehubController@update');
Route::delete('/destroyknowledgehub/{id}','Api\KnowledgehubController@destroy');
//Event
Route::post('/event','Api\EventController@store');
Route::get('/allevent','Api\EventController@index');
Route::get('/currentEvents', 'Api\EventController@currentEvents');
Route::post('/events/infinite', 'Api\HomeController@infinite');
Route::get('/oneevent/{id}','Api\EventController@show');
Route::put('/updateevent/{id}','Api\EventController@update');
Route::delete('/destroyevent/{id}','Api\EventController@destroy');
//Leadership
Route::post('/leadership','Api\LeadershipController@store');
Route::get('/allleadership','Api\LeadershipController@index');
Route::get('/oneleadership/{id}','Api\LeadershipController@show');
Route::put('/updateleadership/{id}','Api\LeadershipController@update');
Route::delete('/destroyleadership/{id}','Api\LeadershipController@destroy');
//Staff
Route::post('/staff','Api\StaffController@store');
Route::get('/allstaff','Api\StaffController@index');
Route::get('/onestaff/{id}','Api\StaffController@show');
Route::put('/updatestaff/{id}','Api\StaffController@update');
Route::delete('/destroystaff/{id}','Api\StaffController@destroy');
//Home
Route::post('/home','Api\HomeController@store');
Route::get('/allhome','Api\HomeController@index');
Route::get('/onehome/{id}','Api\HomeController@show');
Route::put('/updatehome/{id}','Api\HomeController@update');
Route::delete('/destroyhome/{id}','Api\HomeController@destroy');