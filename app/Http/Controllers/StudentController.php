<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Student;
use Response;

class StudentController extends Controller
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
        $student = Student::orderBy("created_at", "DESC")->get();
        return view('admin.applicants.student')->with('student',$student);
    }

    public function approve($id)
    {
        $student = Student::find($id);
        Student::find($id)->update([
            'approve' => 1
        ]);
        //sending emails
        $to = $student->email;
        $message = 'Hello there,';
        $message .= '<br/> <strong>HRMUA Application Response</strong>';
        $message .= '<br/> This is to Let You know that your application to be a member of HRMUA has been uproved';
        $subject = "HRMUA Application Response";
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type:text/html;charset=UTF-8' . '\r\n';
        $headers .= "from: info@traford.org\r\n";
        mail($to, $subject, $message, $headers);
        return redirect()->to('student/'.$id);
    }

    public function underReview($id)
    {
        $student = Student::find($id);
        Student::find($id)->update([
            'approve' => 2
        ]);
        //sending emails
        $to = $student->email;
        $message = 'Hello there,';
        $message .= '<br/> <strong>HRMUA Application Response</strong>';
        $message .= '<br/> This is to Let You know that your application to be a member of HRMUA, is Under Review.';
        $message .= '<br/> <strog>We shall let you know shotly about the results</strog>';
        $subject = "HRMUA Application Response";
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type:text/html;charset=UTF-8' . '\r\n';
        $headers .= "from: info@traford.org\r\n";
        mail($to, $subject, $message, $headers);
        return redirect()->to('student/'.$id);
    }

    public function decline($id)
    {
        $student = Student::find($id);
        Student::find($id)->update([
            'approve' => 3
        ]);
        // //sending emails
        $to = $student->email;
        $message = 'Hello there,';
        $message .= '<br/> <strong>HRMUA Application Response</strong>';
        $message .= '<br/> This is to Let You know that your application to be a member of HRMUA, is Declined.';
        $message .= '<br/> <strog>Try Again Please...</strog>';
        $subject = "HRMUA Application Response";
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type:text/html;charset=UTF-8' . '\r\n';
        $headers .= "from: info@traford.org\r\n";
        mail($to, $subject, $message, $headers);
        return redirect()->to('student/'.$id);
    }

    public function singleStudent($id)
    {
        $student = Student::find($id);
        return view("admin.applicants.studentPage")->with("student", $student);
    }
    //view file
    public function viewFile($fileName)
    {
        $pathName = 'students/'.$fileName;
        return Response::make(file_get_contents(public_path().'/'.$pathName), 200, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'inline; filename='
        ]);
    }

    //image file
    public function viewImage($fileName){
        $pathName = 'students/'.$fileName;
        return Response::make(file_get_contents(public_path().'/'.$pathName), 200, [
            'Content-Type' => 'image',
            'Content-Disposition' => 'inline; filename='
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}