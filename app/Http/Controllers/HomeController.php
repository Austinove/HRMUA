<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Home;

class HomeController extends Controller
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
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('admin.dashboard');
    }
    public function homepage()
    {
        $home = Home::all();
        return view('admin.homePage')->with('home',$home );
    }
    public function storeHomeImage(Request $request)
    {
        $inputs = $request->all();
        $this->validate($request, [
            'title' => 'required',
            'description' => 'required',
            'image' => 'required|file|mimes:jpg,jpeg,bmp,png',
        ]);
          $home = new Home;
          $home ->title=$request->input('title');
          $home ->description=$request->input('description');
          if ($request->hasFile('image')) {
                $file = $request->file('image');
                $extension=$file ->getClientOriginalExtension();
                $filename = time().'.'.$extension;
                $file->move('uploads/homeImages/',$filename);
                $home ->image=$filename;
            }
            $home  ->save();
        return redirect('/home-image')->with('success','Home image Added');
    }
     /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function editHomeImage(Request $request,$id)
    {
        $home = Home::find($id);
        $home ->title=$request->input('title');
        $home ->description=$request->input('description');
        if($request->hasFile('image')) {
            $image = $request->file('image');
            $filename = $image->getClientOriginalName();
            $image->move(public_path('uploads/homeImages'), $filename);
            $home->image = $request->file('image')->getClientOriginalName();
        }
        $home ->update();
        return redirect('/home-image')->with('success','Home image updated !');
    }
    public function destroyHomeImage($id)
    {
        $news = Home::find($id);
        $news->delete();
        return redirect('/home-image')->with('success','Home Image delete! ');
    }
}
