<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Auth;
use App\Event;

class EventController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $event = Event::all();
        return response()->json([
            'success' => true,
            'data' => $event
        ]);
    }

    public function currentEvents()
    {
        $events = Event::where("startdate",">=", now())->orderBy("startdate", "ASC")->get();
        return response()->json($events, 200);
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
            'eventName' => 'required',
            'eventDesc' => 'required',
            'startdate' => 'required',
            'endate' => 'required',
            'venue' => 'required'
            
        ]);

        if ($validator->fails()) {
            // return response
            $response = [
                'success' => false,
                'message' => 'Validation Error.', $validator->errors(),
            ];
            return response()->json($response, 404);
        }

        $event = Event::create($input);

        // return response
        $response = [
            'success' => true,
            'message' => 'Event successfully created!',
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
        
        $event = Event::find($id);

        if (is_null($event)) {
            // return response
            $response = [
                'success' => false,
                'message' => 'Event not found.',
            ];
            return response()->json($response, 404);
        }

        // return response
        $response = [
            'success' => true,
            'message' => 'Event retrieved successfully.',
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
    public function update(Request $request, Event $event)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'eventName' => 'required',
            'eventDesc' => 'required',
            'startdate' => 'required',
            'endate' => 'required',
            'venue' => 'required'
        ]);

        if ($validator->fails()) {
            // return response
            $response = [
                'success' => false,
                'message' => 'Validation Error.', $validator->errors(),
            ];
            return response()->json($response, 404);
        }

        $event->eventName = $input['eventName'];
        $event->eventDesc = $input['eventDesc'];
        $event->startdate = $input['startdate'];
        $event->endate = $input['endate'];
        $event->venue = $input['venue'];
        $event->save();

        // return response
        $response = [
            'success' => true,
            'message' => 'Event updated successfully.',
        ];
        return response()->json($response, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Event $event)
    {
        $event->delete();

        // return response
        $response = [
            'success' => true,
            'message' => 'Event deleted successfully.',
        ];
        return response()->json($response, 200);
       
    }
}