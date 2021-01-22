@extends('layouts.master')
@section('content')
<div class="row mt-3">
    <div class="col-sm-12">
        <!--Striped table-->
        <div class="mt-1 mb-3 p-3 button-container bg-white border shadow-sm">
            <h6 class="mb-2">Events</h6>
            <code class="mb-2">Event setup</code>
            
            <table class="table table-striped" id="project_table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Venue</th>
                    </tr>
                </thead>
                <tbody>
                    @if (count($event)>0)    
                        @foreach ($event as $item)
                            <tr>
                                <td>{{$item->id}}</td>
                                <td>{{$item->eventName}}</td>
                                <td>{{$item->eventDesc}}</td>
                                <td>{{$item->startdate}}</td>
                                <td>{{$item->endate}}</td>
                                <td>{{$item->venue}}</td>
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