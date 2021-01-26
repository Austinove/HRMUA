<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Auth;
use App\Student;

class StudentController extends Controller
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
        $student = Student::all();
        
        return response()->json([
            'success' => true,
            'data' => $student
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
            'institutionName' => 'required',
            'qualification' => 'required',
            'target' => 'required',
            'dob' => 'required',
            'nationality' => 'required',
            'telephone' => 'required',
            'fax' => 'required',
            'email' => 'required',
            'studentFile' => 'required',
            'experience' => 'required',
            'completions' => 'required',
            'title' => 'required'
        ]);

        if ($validator->fails()) {
            $response = [
                'success' => false,
                'message' => 'Validation Error.', $validator->errors(),
            ];
            return response()->json($response, 404);
        }
        if ($request->file("studentFile")) {
            $file = $request->file("studentFile");
            $nameWithExt = $file->getClientOriginalName();
            $name = pathinfo($nameWithExt, PATHINFO_FILENAME);
            $extension = $file->getClientOriginalExtension();
            $saveName = "qualifications_".time().".".$extension;
            $file->move("students", $saveName);
            
            $student = Student::create([
                'surname' => $request->surname,
                'otherNames' => $request->otherNames,
                'sex' => $request->sex,
                'institutionName' => $request->institutionName,
                'qualification' => $request->qualification,
                'target' => $request->target,
                'dob' => $request->dob,
                'nationality' => $request->nationality,
                'telephone' => $request->telephone,
                'fax' => $request->fax,
                'studentFile' => $saveName,
                'email' => $request->email,
                'experience' => $request->experience,
                'completions' => $request->completions,
                'title' => $request->title,
                'approve' => 0
            ]);
            $response = [
            'success' => true,
            'message' => 'Application successfully.',
        ];
        return response()->json($response, 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $student = Student::find($id);

        if (is_null($student)) {
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
    public function update(Request $request, Student $student)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'surname' => 'required',
            'otherNames' => 'required',
            'sex' => 'required',
            'institutionName' => 'required',
            'qualification' => 'required',
            'target' => 'required',
            'dob' => 'required',
            'nationality' => 'required',
            'telephone' => 'required',
            'fax' => 'required',
            'email' => 'required'
        ]);

        if ($validator->fails()) {
            // return response
            $response = [
                'success' => false,
                'message' => 'Validation Error.', $validator->errors(),
            ];
            return response()->json($response, 404);
        }

        $student->surname = $input['surname'];
        $student->otherNames = $input['otherNames'];
        $student->sex = $input['sex'];
        $student->institutionName = $input['institutionName'];
        $student->qualification = $input['qualification'];
        $student->target = $input['target'];
        $student->dob = $input['dob'];
        $student->nationality = $input['nationality'];
        $student->telephone = $input['telephone'];
        $student->fax = $input['fax'];
        $student->email = $input['email'];
        $student->save();

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
    public function destroy(Student $student)
    {
        $student->delete();

        // return response
        $response = [
            'success' => true,
            'message' => 'Apllicant deleted successfully.',
        ];
        return response()->json($response, 200);
       
    }
}