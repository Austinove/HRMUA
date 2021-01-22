<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\User;
use Hash;
use Auth;

class AuthController extends Controller
{

    /**
     * Register User
     */
    public function register(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|min:4',
            'email' => 'required|email',
            
        ]);

        $generatedPassword = 'official';
 
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($generatedPassword)
        ]);
       
        $token = $user->createToken('HrmauApp')->accessToken;
 
        return response()->json(['message' => 'User Successfully!', 'token' => $token], 200);
    }
  
    /**
     * Login
     */
    public function login(Request $request)
    {
        $data = [
            'email' => $request->email,
            'password' => $request->password
        ];
 
        if (auth()->attempt($data)) {
            $token = auth()->user()->createToken('HrmauApp')->accessToken;
            return response()->json(['user'=>auth()->user(),'token' => $token], 200);
        } else {
            return response()->json(['error' => 'Unauthorised'], 401);
        }
    } 
    /**
     * Logout
     */

    public function logout(Request $res)
    {
      if (Auth::user()) {
        $user = Auth::user()->token();
        $user->revoke();

        return response()->json([
          'success' => true,
          'message' => 'Logout successfully'
      ]);
      }else {
        return response()->json([
          'success' => false,
          'message' => 'Unable to Logout'
        ]);
      }
     }
    /**
     * Show all users
     */
    public function allusers(){
        $allUser =User::all();
        
        return response()->json([
            'success' => true,
            'data' => $allUser
        ]);
    }

    /**
     * update User
     */
    public function update(Request $request, User $user)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'name' => 'required',
            'email' => 'required',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            // return response
            $response = [
                'success' => false,
                'message' => 'Validation Error.', $validator->errors(),
            ];
            return response()->json($response, 404);
        }
        $user->name = $input['name'];
        $user->email = $input['email'];
        $user->password = $input['password'];
        $user->save();

        // return response
        $response = [
            'success' => true,
            'message' => 'User updated successfully.',
        ];
        return response()->json($response, 200);
    }
     /**
     * Delete User
     */
    public function destroy($id)
    {
        
        $deleteuser =User::find($id);
 
        if (!$deleteuser) {
            return response()->json([
                'success' => false,
                'message' => 'User not found'
            ], 400);
        }
 
        if ($deleteuser->delete()) {
            return response()->json([
                'success' => true
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'User can not be deleted'
            ], 500);
        }
    }




}
