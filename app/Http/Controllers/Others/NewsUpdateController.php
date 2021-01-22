<?php

namespace App\Http\Controllers\others;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Newsletter;
use App\Event;
use App\Leadership;

class NewsUpdateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function newsupdates()
    {
        //
        $newsletter =Newsletter::all();
        return view('admin.knowledge.news')->with('newsletter',$newsletter);
    }

    //..........Events............
    public function events()
    {
        //
        $event = Event::all();
        return view('admin.knowledge.events')->with('event',$event);
    }
    //..........leadership............
    public function leadership()
    {
        //
        $leadership = Leadership::all();
        return view('admin.knowledge.leadership')->with('leadership',$leadership);
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
    public function storeNews(Request $request)
    {
        $inputs = $request->all();
        $this->validate($request, [
            'newsTitle' => 'required',
            'newsCategory' => 'required',
            'newsDesc' => 'required',
        ]);
          $news = new Newsletter;
          $news ->newsTitle=$request->input('newsTitle');
          $news ->newsCategory=$request->input('newsCategory');
          $news ->newsDesc=$request->input('newsDesc');
          if ($request->hasFile('image')) {
                $file = $request->file('image');
                $extension=$file ->getClientOriginalExtension();
                $filename = time().'.'.$extension;
                $file->move('uploads/news/',$filename);
                $news ->image=$filename;
            }
            $news  ->save();
        return redirect('/news')->with('success','News Added');
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
