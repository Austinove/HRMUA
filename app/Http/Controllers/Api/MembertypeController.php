<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Auth;
use App\MemberType;
use Illuminate\Http\Request;

class MembertypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $memberType = MemberType::all();
        
        return response()->json([
            'success' => true,
            'data' => $memberType
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

            'typeName' => 'required',
            
        ]);

        if ($validator->fails()) {
            // return response
            $response = [
                'success' => false,
                'message' => 'Validation Error.', $validator->errors(),
            ];
            return response()->json($response, 404);
        }

        $memberType = MemberType::create($input);

        // return response
        $response = [
            'success' => true,
            'message' => 'Member type successfully created!',
        ];
        return response()->json($response, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $nemberType = MemberType::find($id);

        if (is_null($nemberType)) {
            // return response
            $response = [
                'success' => false,
                'message' => 'Member type not found.',
            ];
            return response()->json($response, 404);
        }

        // return response
        $response = [
            'success' => true,
            'message' => 'Member type retrieved successfully.',
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
    public function update(Request $request, MemberType $memberType)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'typeName' => 'required',
            
        ]);

        if ($validator->fails()) {
            // return response
            $response = [
                'success' => false,
                'message' => 'Validation Error.', $validator->errors(),
            ];
            return response()->json($response, 404);
        }

        $memberType->newsTitle = $input['typeName'];
        $memberType->save();

        // return response
        $response = [
            'success' => true,
            'message' => 'Member type updated successfully.',
        ];
        return response()->json($response, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(MemberType $newsletter)
    {
        $newsletter->delete();

        // return response
        $response = [
            'success' => true,
            'message' => 'Memeber type deleted successfully.',
        ];
        return response()->json($response, 200);
       
    }
}
