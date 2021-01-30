<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Auth;
use App\Retired;

class RetiredController extends Controller
{
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $retired = Retired::all();
        
        return response()->json([
            'success' => true,
            'data' => $retired
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
            'otherName' => 'required',
            'title' => 'required',
            'sex' => 'required',
            'DOB' => 'required',
            // 'mailadd' => 'required',
            'Nationality' => 'required',
            'telephone' => 'required',
            'fax' => 'required',
            'email' => 'required',
            'interest' => 'required',
            'qualification' => 'required',
            'experience' => 'required',
  
        ]);

        if ($validator->fails()) {
            // return response
            $response = [
                'success' => false,
                'message' => 'Validation Error.', $validator->errors(),
            ];
            return response()->json($response, 404);
        }

        $retired = Retired::create([
            'surname' => $request->surname,
            'otherNames' => $request->otherName,
            'title' => $request->title,
            'sex' => $request->sex,
            'dob' => $request->DOB,
            'mailadd' => $request->mailadd,
            'nationality' => $request->Nationality,
            'telephone' => $request->telephone,
            'fax' => $request->fax,
            'email' => $request->email,
            'interest' => $request->interest,
            'qualification' => $request->qualification,
            'experience' => $request->experience,
        ]);

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
        $retired = Retired::find($id);

        if (is_null($retired)) {
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
    public function update(Request $request, Retired $retired)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'surname' => 'required',
            'otherNames' => 'required',
            'title' => 'required',
            'sex' => 'required',
            'dob' => 'required',
            'mailadd' => 'required',
            'nationality' => 'required',
            'telephone' => 'required',
            'fax' => 'required',
            'email' => 'required',
            'interest' => 'required',
            'qualification' => 'required',
            'experience' => 'required',
        ]);

        if ($validator->fails()) {
            // return response
            $response = [
                'success' => false,
                'message' => 'Validation Error.', $validator->errors(),
            ];
            return response()->json($response, 404);
        }

        $retired->surname = $input['surname'];
        $retired->otherNames = $input['otherNames'];
        $retired->title = $input['title'];
        $retired->sex = $input['sex'];
        $retired->dob = $input['dob'];
        $retired->mailadd = $input['mailadd'];
        $retired->nationality = $input['nationality'];
        $retired->telephone = $input['telephone'];
        $retired->fax = $input['fax'];
        $retired->email = $input['email'];
        $retired->interest = $input['interest'];
        $retired->qualification = $input['qualification'];
        $retired->experience = $input['experience'];
        
        
        $retired->save();

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
    public function destroy(Retired $retired)
    {
        $retired->delete();

        // return response
        $response = [
            'success' => true,
            'message' => 'Apllicant deleted successfully.',
        ];
        return response()->json($response, 200);
       
    }
}