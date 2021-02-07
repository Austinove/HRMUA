<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Auth;
use App\Newsletter;
use Illuminate\Http\Request;

class NewsletterController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $newsletter = Newsletter::orderBy("created_at", "DESC")->limit(100)->get();
        $news = [];
        foreach ($newsletter as $value) {
            $row = [
                "id" => $value->id,
                "newsTitle" => $value->newsTitle,
                "newsCategory" => $value->newsCategory,
                "newsDesc" => $value->newsDesc,
                "image" => $value->image,
                "date" => date("d-m-yy", strtotime($value->created_at))."(".$value->created_at->diffForHumans().")"
            ];
            array_push($news, $row);
        }
        return response()->json($news);
    }

    public function infinite(Request $request){
        $newsletter = Newsletter::orderBy("created_at", "DESC")
                     ->limit(100)->offset($request->offset)->get();
        $news = [];
        foreach ($newsletter as $value) {
            $row = [
                "id" => $value->id,
                "newsTitle" => $value->newsTitle,
                "newsCategory" => $value->newsCategory,
                "newsDesc" => $value->newsDesc,
                "image" => $value->image,
                "date" => date("d-m-yy", strtotime($value->created_at))."(".$value->created_at->diffForHumans().")"
            ];
            array_push($news, $row);
        }
        return response()->json($news);
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

            'newsTitle' => 'required',
            'newsCategory' => 'required',
            'newsDesc' => 'required',
            'image'=>'required'
            
        ]);

        if ($validator->fails()) {
            // return response
            $response = [
                'success' => false,
                'message' => 'Validation Error.', $validator->errors(),
            ];
            return response()->json($response, 404);
        }

        $newsletter = Newsletter::create($input);

        // return response
        $response = [
            'success' => true,
            'message' => 'News successfully created!',
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
        $newsletter = Newsletter::find($id);

        if (is_null($newsletter)) {
            // return response
            $response = [
                'success' => false,
                'message' => 'News not found.',
            ];
            return response()->json($response, 404);
        }

        // return response
        $response = [
            'success' => true,
            'message' => 'News retrieved successfully.',
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
    public function update(Request $request, Newsletter $newsletter)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'newsTitle' => 'required',
            'newsCategory' => 'required',
            'newsDesc' => 'required',
            'image'=>'required'
        ]);

        if ($validator->fails()) {
            // return response
            $response = [
                'success' => false,
                'message' => 'Validation Error.', $validator->errors(),
            ];
            return response()->json($response, 404);
        }

        $newsletter->newsTitle = $input['newsTitle'];
        $newsletter->newsCategory = $input['newsCategory'];
        $newsletter->newsDesc = $input['newsDesc'];
        $newsletter->image = $input['image'];
        $newsletter->save();

        // return response
        $response = [
            'success' => true,
            'message' => 'News updated successfully.',
        ];
        return response()->json($response, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Newsletter $newsletter)
    {
        $newsletter->delete();

        // return response
        $response = [
            'success' => true,
            'message' => 'News deleted successfully.',
        ];
        return response()->json($response, 200);
       
    }
}