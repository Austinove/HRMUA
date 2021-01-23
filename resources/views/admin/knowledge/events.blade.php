@extends('layouts.master')
@section('content')
<div class="container">
    <!-- ALERT-->
    @if(Session::has('success'))
        <div class="alert au-alert-success alert-dismissible fade show au-alert au-alert--70per" role="alert">
            <i class="zmdi zmdi-check-circle"></i>
            <span class="content">{{Session::get('success')}}</span>
            <button class="close" type="button" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">
                    <i class="zmdi zmdi-close-circle"></i>
                </span>
            </button>
        </div>
    @endif
    <!-- END ALERT-->
</div>

<div class="row mt-3">
    <div class="col-md-12">
        <!-- TOP CAMPAIGN-->
        <div class="top-campaign">
            <div class="row border-bottom mb-4">
                <div class="col-sm-8 pt-2">
                    <h3 class="title-3 m-b-30">Events setup</h3>
                </div>
                <div class="col-sm-4 text-right pb-3 mb-5">
                    <button class="au-btn-plus" data-toggle="modal" data-target="#eventAdd"><i class="zmdi zmdi-plus"></i> </button>
                </div>
            </div>
            
            <div class="table-responsive m-b-40">
                <table class="table table-borderless table-data3">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Venue</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @if (count($event)>0)    
                            @foreach ($event as $item)
                                <tr>
                                    <td class="align-middle">{{$item->eventName}}</td>
                                    <td class="align-middle">{{$item->eventDesc}}</td>
                                    <td class="align-middle">{{$item->venue}}</td>
                                    <td class="align-middle">{{$item->startdate}}</td>
                                    <td class="align-middle">{{$item->endate}}</td>
                                    <td >
                                        <div class="table-data-feature">
                                            <a href="#" class="item" data-toggle="modal" data-placement="top" data-target='#eventUpdate{{ $item->id }}' title="Edit">
                                                <i class="zmdi zmdi-edit"></i>
                                            </a>
                                            <a href="/delete-event/{{ $item->id }}" class="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                                <i class="zmdi zmdi-delete"></i>
                                            </a>
                                        </div>
                                        
                                    </td> 
                                </tr>
                                <!-- modal medium -->
                                <div class="modal fade" id="eventUpdate{{ $item->id }}" tabindex="-1" role="dialog" aria-labelledby="mediumModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="mediumModalLabel">Edit Event Detail</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <form class="form-horizontal mt-4 mb-5" method="POST" action="/edit-event/{{ $item->id }}" enctype="multipart/form-data" id="editform">
                                                @csrf
                                                {{ method_field('PUT') }}
                                                <div class="modal-body">
                                                    <div class="form-group row">
                                                        <label class="control-label col-sm-2" for="eventName">Title</label>
                                                        <div class="col-sm-10">
                                                            <input type="text" class="form-control" name="eventName" value="{{$item->eventName}}"/>
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label class="control-label col-sm-2" for="venue">Event Venue</label>
                                                        <div class="col-sm-10">
                                                            <input type="text" class="form-control" name="venue" value="{{$item->venue}}"/>
                                                        </div>
                                                    </div>
                                                    <div class="form-row ">
                                                        <div class="form-group col-sm-2">
                                                        </div>
                                                        <div class="form-group col-sm-5">
                                                            <label class="control-label col-sm-4" for="startdate">Start Date</label>
                                                            <div class="col-sm-10">
                                                                <input type="date" class="form-control" name="startdate" value="{{$item->startdate}}" />
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-sm-5">
                                                            <label class="control-label col-sm-4" for="endate">End Date</label>
                                                            <div class="col-sm-10">
                                                                <input type="date" class="form-control" name="endate" value="{{$item->endate}}" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label class="control-label col-sm-2" for="eventDesc">Event Description</label>
                                                        <div class="col-sm-10">
                                                            <textarea type="text" class = "form-control" rows = "3" name="eventDesc" >{{$item->eventDesc}}</textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="submit" class="btn btn-primary btn-sm">
                                                        <i class="fa fa-dot-circle-o"></i> Submit
                                                    </button>
                                                    <button type="reset" class="btn btn-danger btn-sm" data-dismiss="modal">
                                                        <i class="fa fa-ban"></i> Close
                                                    </button>
                                                </div>
                                            </form>
                                        
                                        </div>
                                    </div>
                                </div>
                                <!-- end modal medium -->
                            @endforeach
                        @endif()
                       
                    </tbody>
                </table>
                <div class="modal fade" id="eventAdd" tabindex="-1" role="dialog" aria-labelledby="mediumModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="mediumModalLabel">Add News Detail</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form class="form-horizontal mt-4 mb-5" method="POST" action="/post-event" enctype="multipart/form-data" id="editform">
                                @csrf
                                <div class="modal-body">
                                    <div class="form-group row">
                                        <label class="control-label col-sm-2" for="eventName">Title</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" name="eventName" placeholder="Event Title" required/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="control-label col-sm-2" for="venue">Event Venue</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" name="venue" placeholder="Venue" required/>
                                        </div>
                                    </div>
                                    <div class="form-row ">
                                        <div class="form-group col-sm-2">
                                        </div>
                                        <div class="form-group col-sm-5">
                                            <label class="control-label col-sm-4" for="startdate">Start Date</label>
                                            <div class="col-sm-10">
                                                <input type="date" class="form-control" name="startdate" placeholder="18/01/2021" />
                                            </div>
                                        </div>
                                        <div class="form-group col-sm-5">
                                            <label class="control-label col-sm-4" for="endate">End Date</label>
                                            <div class="col-sm-10">
                                                <input type="date" class="form-control" name="endate" placeholder="22/01/2021" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="control-label col-sm-2" for="eventDesc">Event Description</label>
                                        <div class="col-sm-10">
                                            <textarea type="text" class = "form-control" rows = "3" name="eventDesc" placeholder = "Event Description" required></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="submit" class="btn btn-primary btn-sm">
                                        <i class="fa fa-dot-circle-o"></i> Submit
                                    </button>
                                    <button type="reset" class="btn btn-danger btn-sm" data-dismiss="modal">
                                        <i class="fa fa-ban"></i> Close
                                    </button>
                                </div>
                            </form>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--  END TOP CAMPAIGN-->
    </div>
</div>
@endsection