<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\General;
use Auth;
class GeneralController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $general = General::all();
        
        return response()->json([
            'success' => true,
            'data' => $general
        ]);
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
            'surname' => 'required',
            'otherNames' => 'required',
            'sex' => 'required',
            'title' => 'required',
            'dob' => 'required',
            'nationality' => 'required',
            'mailingAdd' => 'required',
            'telephone' => 'required',
            'fax' => 'required',
            'email' => 'required',
            'interest' => 'required',
            'experience' => 'required'
        ]);

        if ($validator->fails()) {
            // return response
            $response = [
                'success' => false,
                'message' => 'Validation Error.', $validator->errors(),
            ];
            return response()->json($response, 404);
        }

        $general = General::create($input);

        // return response
        $response = [
            'success' => true,
            'message' => 'Application successfully.',
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
        
        $general = General::find($id);

        if (is_null($general)) {
            // return response
            $response = [
                'success' => false,
                'message' => 'Application not found.',
            ];
            return response()->json($response, 404);
        }

        // return response
        $response = [
            'success' => true,
            'message' => 'Applicant retrieved successfully.',
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
    public function update(Request $request, General $general)
    {
        //
        $input = $request->all();

        $validator = Validator::make($input, [
            'surname' => 'required',
            'otherNames' => 'required',
            'sex' => 'required',
            'title' => 'required',
            'dob' => 'required',
            'nationality' => 'required',
            'mailingAdd' => 'required',
            'telephone' => 'required',
            'fax' => 'required',
            'email' => 'required',
            'interest' => 'required',
            'experience' => 'required'
        ]);

        if ($validator->fails()) {
            // return response
            $response = [
                'success' => false,
                'message' => 'Validation Error.', $validator->errors(),
            ];
            return response()->json($response, 404);
        }

        $general->surname = $input['surname'];
        $general->otherNames = $input['otherNames'];
        $general->sex = $input['sex'];
        $general->title = $input['title'];
        $general->dob = $input['dob'];
        $general->nationality = $input['nationality'];
        $general->mailingAdd = $input['mailingAdd'];
        $general->telephone = $input['telephone'];
        $general->fax = $input['fax'];
        $general->email = $input['email'];
        $general->interest = $input['interest'];
        $general->experience = $input['experience'];
        $general->save();

        // return response
        $response = [
            'success' => true,
            'message' => 'Applicant updated successfully.',
        ];
        return response()->json($response, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(General $general)
    {
        $general->delete();

        // return response
        $response = [
            'success' => true,
            'message' => 'Apllicant deleted successfully.',
        ];
        return response()->json($response, 200);
    }
}
