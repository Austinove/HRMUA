<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Professional;
use Auth;

class ProfessionalController extends Controller
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
        $professional = Professional::all();
        
        return response()->json([
            'success' => true,
            'data' => $professional
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
            // 'mailingAdd' => 'required',
            'telephone' => 'required',
            'fax' => 'required',
            'email' => 'required',
            'interest' => 'required',
            'experience' => 'required',
            'employer' => 'required',
            'jobTitle' => 'required',
            'employerEmail' => 'required',
            'employerLocation' => 'required',
            'qualification' => 'required'
        ]);

        if ($validator->fails()) {
            // return response
            $response = [
                'success' => false,
                'message' => 'Validation Error.', $validator->errors(),
            ];
            return response()->json($response, 404);
        }

        $professional = Professional::create($input);

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
        $professional = Professional::find($id);

        if (is_null($professional)) {
            // return response
            $response = [
                'success' => false,
                'message' => 'Applicant not found.',
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
    public function update(Request $request, Professional $professional)
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
            'experience' => 'required',
            'employer' => 'required',
            'jobTitle' => 'required',
            'employerEmail' => 'required',
            'employerLocation' => 'required'
        ]);

        if ($validator->fails()) {
            // return response
            $response = [
                'success' => false,
                'message' => 'Validation Error.', $validator->errors(),
            ];
            return response()->json($response, 404);
        }

        $professional->surname = $input['surname'];
        $professional->otherNames = $input['otherNames'];
        $professional->sex = $input['sex'];
        $professional->title = $input['title'];
        $professional->dob = $input['dob'];
        $professional->nationality = $input['nationality'];
        $professional->mailingAdd = $input['mailingAdd'];
        $professional->telephone = $input['telephone'];
        $professional->fax = $input['fax'];
        $professional->email = $input['email'];
        $professional->interest = $input['interest'];
        $professional->experience = $input['experience'];
        $professional->employer = $input['employer'];
        $professional->jobTitle = $input['jobTitle'];
        $professional->employerEmail = $input['employerEmail'];
        $professional->employerLocation = $input['employerLocation'];
        $professional->save();

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
    public function destroy(Professional $professional)
    {
        $professional->delete();

        // return response
        $response = [
            'success' => true,
            'message' => 'Apllicant deleted successfully.',
        ];
        return response()->json($response, 200);
    }
}