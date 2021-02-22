<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Corporate;
use App\Professional;
use App\Staff;

class CooperateController extends Controller
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
        $cooperate = Corporate::orderBy("created_at", "DESC")->get();;
        return view('admin.applicants.cooperate', compact('cooperate'));
    }

    public function singleCoporate($id){
        $cooperates = Corporate::find($id);
        $staffMembers = Staff::where("coporate_id", $id)->get();
        $cooperate = [
            "id" => $cooperates->id,
            "orgName" => $cooperates->orgName,
            "postalAddress" => $cooperates->postalAddress,
            "telephone" => $cooperates->telephone,
            "fax" => $cooperates->fax,
            "email" => $cooperates->email,
            "contactPerson" => $cooperates->contactPerson,
            "title" => $cooperates->title,
            "sector" => $cooperates->sector,
            "noOfstaff" => $cooperates->noOfstaff,
            "interest" => $cooperates->interest,
            "approve" => $cooperates->approve,
            "dapproved" => $cooperates->dapproved,
            "doApp" => $cooperates->doApp,
            "created_at" => $cooperates->created_at,
            "staff" => $staffMembers
        ];
        return view("admin.applicants.cooperatePage")->with("cooperate", $cooperate);
    }


    
    public function approve($id)
    {
        $cooporate = Corporate::find($id);
        Corporate::find($id)->update([
            'approve' => 1
        ]);
        //sending emails
        $to = $cooporate->email;
        $message = 'Hello there,';
        $message .= '<br/> <strong>HRMUA Application Response</strong>';
        $message .= '<br/> This is to Let You know that your application to be a member of HRMUA has been uproved';
        $subject = "HRMUA Application Response";
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type:text/html;charset=UTF-8' . '\r\n';
        $headers .= "from: info@traford.org\r\n";
        mail($to, $subject, $message, $headers);
        return redirect()->to('cooperates/'.$id);
    }

    public function underReview($id)
    {
        $cooporate = Corporate::find($id);
        Corporate::find($id)->update([
            'approve' => 2
        ]);
        //sending emails
        $to = $cooporate->email;
        $message = 'Hello there,';
        $message .= '<br/> <strong>HRMUA Application Response</strong>';
        $message .= '<br/> This is to Let You know that your application to be a member of HRMUA, is Under Review.';
        $message .= '<br/> <strog>We shall let you know shotly about the results</strog>';
        $subject = "HRMUA Application Response";
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type:text/html;charset=UTF-8' . '\r\n';
        $headers .= "from: info@traford.org\r\n";
        mail($to, $subject, $message, $headers);
        return redirect()->to('cooperates/'.$id);
    }

    public function decline($id)
    {
        $cooporate = Corporate::find($id);
        Corporate::find($id)->update([
            'approve' => 3
        ]);
        // //sending emails
        $to = $cooporate->email;
        $message = 'Hello there,';
        $message .= '<br/> <strong>HRMUA Application Response</strong>';
        $message .= '<br/> This is to Let You know that your application to be a member of HRMUA, is Declined.';
        $message .= '<br/> <strog>Try Again Please...</strog>';
        $subject = "HRMUA Application Response";
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type:text/html;charset=UTF-8' . '\r\n';
        $headers .= "from: info@traford.org\r\n";
        mail($to, $subject, $message, $headers);
        return redirect()->to('cooperates/'.$id);
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