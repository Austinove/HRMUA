<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Knowledgehub;

class KnowHubController extends Controller
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
        $knowledgehub =Knowledgehub::all();
        return view('admin.knowledge.knowHub')->with('knowledgehub',$knowledgehub);
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
        $inputs = $request->all();
        $this->validate($request, [
            'title' => 'required',
            'description' => 'required',
            'document' => 'required|file|mimes:doc,docx,,xlsx,xls,pdf,',
        ]);
          
        $knowhub = new Knowledgehub;
        $knowhub->title=$request->input('title');
        $knowhub->description=$request->input('description');
        if ($request->hasFile('document')) {
            $file = $request->file('document');
            $extension=$file->getClientOriginalExtension();
            $filename = time().'.'.$extension;
            $file->move('uploads/document/',$filename);
            $knowhub->document=$filename;
        }

        $knowhub->save();
        return redirect('/knowHub')->with('success','Item Added');
    }

    public function edit(Request $request,$id)
    {
        $inputs = $request->all();
        $this->validate($request, [
            'document' => 'required|file|mimes:doc,docx,,xlsx,xls,pdf,',
        ]);
        $knowhub = Knowledgehub::find($id);
        $knowhub->title=$request->input('title');
        $knowhub->description=$request->input('description');
        if($request->hasFile('document')) {
            $document = $request->file('document');
            $filename = $document->getClientOriginalName();
            $document->move(public_path('uploads/document'), $filename);
            $knowhub->document = $request->file('document')->getClientOriginalName();
        }
        $knowhub->update();
        return redirect('/knowHub')->with('success','Document updated');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $knowhub = Knowledgehub::find($id);
        return view('admin.knowledge.knowledgePage')->with('knowhub',$knowhub);
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
        $knowhub = Knowledgehub::find($id);
        $knowhub->delete();
        return redirect('/knowHub')->with('success','Document delete! ');
    }
}