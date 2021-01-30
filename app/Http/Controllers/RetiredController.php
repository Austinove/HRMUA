<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Retired;

class RetiredController extends Controller
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
        //
        $retired = Retired::orderBy("created_at", "DESC")->get();
        return view('admin.applicants.retired')->with('retired',$retired);
    }

    public function singleRetired($id){
        $retired = Retired::find($id);
        return view("admin.applicants.retiredPage")->with("retired", $retired);
    }

    public function approve($id)
    {
        $retired = Retired::find($id);
        Retired::find($id)->update([
            'approve' => 1
        ]);
        //sending emails
        $to = $retired->email;
        $message = 'Hello there,';
        $message .= '<br/> <strong>HRMUA Application Response</strong>';
        $message .= '<br/> This is to Let You know that your application to be a member of HRMUA has been uproved';
        $subject = "<strong>HRMUA Application Response</strong>";
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type:text/html;charset=UTF-8' . '\r\n';
        $headers .= "from: info@traford.org\r\n";
        mail($to, $subject, $message, $headers);
        return redirect()->to('retired/'.$id);
    }

    public function underReview($id)
    {
        $retired = Retired::find($id);
        Retired::find($id)->update([
            'approve' => 2
        ]);
        //sending emails
        $to = $retired->email;
        $message = 'Hello there,';
        $message .= '<br/> <strong>HRMUA Application Response</strong>';
        $message .= '<br/> This is to Let You know that your application to be a member of HRMUA, is Under Review.';
        $message .= '<br/> <strog>We shall let you know shotly about the results</strog>';
        $subject = "<strong>HRMUA Application Response</strong>";
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type:text/html;charset=UTF-8' . '\r\n';
        $headers .= "from: info@traford.org\r\n";
        mail($to, $subject, $message, $headers);
        return redirect()->to('retired/'.$id);
    }

    public function decline($id)
    {
        $retired = Retired::find($id);
        Retired::find($id)->update([
            'approve' => 3
        ]);
        // //sending emails
        $to = $retired->email;
        $message = 'Hello there,';
        $message .= '<br/> <strong>HRMUA Application Response</strong>';
        $message .= '<br/> This is to Let You know that your application to be a member of HRMUA, is Declined.';
        $message .= '<br/> <strog>Try Again Please...</strog>';
        $subject = "<strong>HRMUA Application Response</strong>";
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type:text/html;charset=UTF-8' . '\r\n';
        $headers .= "from: info@traford.org\r\n";
        mail($to, $subject, $message, $headers);
        return redirect()->to('retired/'.$id);
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