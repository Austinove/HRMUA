<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Hash;
use Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $user =User::all();
        return view('admin.users.userList')->with('user', $user);
    }

    public function userprofile()
    {
        return view('admin.users.userprofile');
        // return Auth::User();
    }
    public function updateprofile(Request $request)
    {
        $user_id = Auth::User()->id;
        $user = User::findOrFail($user_id );
        $user ->fname=$request->input('fname');
        $user ->lname=$request->input('lname');
        $user ->email=$request->input('email');
        $user ->update();
        return back()->with('success','Accouint Updated!');

    }
    public function updatepassword(Request $request)
    {
        if (!(Hash::check($request->get('current-password'), Auth::user()->password))) {
            // The passwords matches
            return redirect()->back()->with("error","Your current password does not match with the password you provided. Please try again.");
        }

        if(strcmp($request->get('current-password'), $request->get('new-password')) == 0){
            //Current password and new password are same
            return redirect()->back()->with("error","New Password cannot be same as your current password. Please choose a different password.");
        }

        $validatedData = $request->validate([
            'current-password' => 'required',
            'new-password' => 'required|string|min:6|confirmed',
        ]);

        //Change Password
        $user = Auth::user();
        $user->password = bcrypt($request->get('new-password'));
        $user->save();

        return redirect()->back()->with("success","Password changed successfully !");
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
            'fname' => 'required',
            'lname' => 'required',
            'email' => 'unique:users,email',
        ]);
          // $password = Hash::make($request->password);
          $generatedPassword = 'official';
          $users = new User;
          $users ->fname=$request->input('fname');
          $users ->lname=$request->input('lname');
          $users ->email=$request->input('email');
          $users ->password = Hash::make($generatedPassword);
          if ($request->hasFile('image')) {
                $file = $request->file('image');
                $extension=$file ->getClientOriginalExtension();
                $filename = time().'.'.$extension;
                $file->move('uploads/clients/',$filename);
                $users ->image=$filename;
            }
            $users  ->save();
        return redirect('/users')->with('success','User Added');
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
        $user = User::find($id);

	    return response()->json([
	      'data' => $user
	    ]);
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
