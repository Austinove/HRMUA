<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Event;
use App\Home;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $event = Event::orderBy("startdate", "DESC")->limit(100)->get();
        $slides = Home::all();
        $events = Event::where("startdate",">=", now())->orderBy("startdate", "ASC")->get();
        return response()->json([
            "events" => $event,
            "slides" => $slides,
            "currentEvents" => $events
        ], 200);
    }

    public function infinite(Request $request){
        $event = Event::orderBy("created_at", "DESC")
                     ->limit(1)->offset($request->offset)->get();        
        return response()->json($event);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            
            'image' => 'required',
            'title' => 'required',
            'description' => 'required',
            
            
        ]);

        if ($validator->fails()) {
            // return response
            $response = [
                'success' => false,
                'message' => 'Validation Error.', $validator->errors(),
            ];
            return response()->json($response, 404);
        }

        $leadership = Leadership::create($input);

        // return response
        $response = [
            'success' => true,
            'message' => 'Home screen Items added successfully!',
        ];
        return response()->json($response, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $home = Home::find($id);

        if (is_null($home)) {
            // return response
            $response = [
                'success' => false,
                'message' => 'Home screen Item not found.',
            ];
            return response()->json($response, 404);
        }

        // return response
        $response = [
            'success' => true,
            'message' => 'Home screen Items successfully.',
        ];
        return response()->json($response, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Home $home)
    {
        $input = $request->all();

        $validator = Validator::make($input, [

            'image' => 'required',
            'title' => 'required',
            'description' => 'required',
        ]);

        if ($validator->fails()) {
            // return response
            $response = [
                'success' => false,
                'message' => 'Validation Error.', $validator->errors(),
            ];
            return response()->json($response, 404);
        }

        $home->image = $input['image'];
        $home->title = $input['title'];
        $home->description = $input['description'];
        $home->save();
        // return response
        $response = [
            'success' => true,
            'message' => 'Home screen items updated successfully.',
        ];
        return response()->json($response, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Home $home)
    {
        $event->delete();

        // return response
        $response = [
            'success' => true,
            'message' => 'Home screen item deleted successfully!',
        ];
        return response()->json($response, 200);
       
    }
}