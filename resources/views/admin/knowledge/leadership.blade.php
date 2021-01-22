@extends('layouts.master')
@section('content')
<div class="row mt-3">
    <div class="col-sm-12">
        <!--Striped table-->
        <div class="mt-1 mb-3 p-3 button-container bg-white border shadow-sm">
            <h6 class="mb-2">Leadership</h6>
            <code class="mb-2">Leaders displayed </code>
            
            <table class="table table-striped" id="project_table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    @if (count($leadership)>0)    
                        @foreach ($leadership as $item)
                            <tr>
                                <td>{{$item->id}}</td>
                                <td>{{$item->name}}</td>
                                <td>{{$item->title}}</td>
                                <td>{{$item->description}}</td>
                            </tr>
                        @endforeach       
                    @endif
                </tbody>
            </table>
        </div>
        <!--/Striped table-->
    </div>
</div>
@endsection