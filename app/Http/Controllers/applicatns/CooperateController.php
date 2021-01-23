<?php

namespace App\Http\Controllers\applicatns;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Corporate;
use App\Professional;
use App\Staff;

class CooperateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $cooperate = Corporate::all();
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