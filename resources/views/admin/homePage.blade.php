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
                    <h3 class="title-3 m-b-30">Home Page Images</h3>
                </div>
                <div class="col-sm-4 text-right pb-3 mb-5">
                    <button class="au-btn-plus" data-toggle="modal" data-target="#imageAdd"><i class="zmdi zmdi-plus"></i> </button>
                </div>
            </div>
            
            <div class="table-responsive m-b-40">
                <table class="table table-borderless table-data3">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @if (count($home)>0)    
                            @foreach ($home as $item)
                                <tr>
                                    <td class="align-middle"><img src="{{ asset('uploads/homeImages/'.$item ->image)}}" width="60px" alt="Image"></td>
                                    <td class="align-middle">{{$item->title}}</td>
                                    <td class="align-middle">{{$item->description}}</td>
                                    
                                    <td >
                                        <div class="table-data-feature">
                                            <a href="#" class="item" data-toggle="modal" data-placement="top" data-target='#imageUpdate{{ $item->id }}' title="Edit">
                                                <i class="zmdi zmdi-edit"></i>
                                            </a>
                                            <a href="/delete-image/{{ $item->id }}" class="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                                <i class="zmdi zmdi-delete"></i>
                                            </a>
                                        </div>
                                        
                                    </td> 
                                </tr>
                                <!-- modal medium -->
                                <div class="modal fade" id="imageUpdate{{ $item->id }}" tabindex="-1" role="dialog" aria-labelledby="mediumModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="mediumModalLabel">Edit News Detail</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <form class="form-horizontal mt-4 mb-5" method="POST" action="/edit-image/{{ $item->id }}" enctype="multipart/form-data" id="editform">
                                                @csrf
                                                {{ method_field('PUT') }}
                                                <div class="modal-body">
                                                    <div class="form-group row">
                                                        <label class="control-label col-sm-2" for="title">Title</label>
                                                        <div class="col-sm-10">
                                                            <input type="text" class="form-control" name="title" value="{{$item->title}}"/>
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label class="control-label col-sm-2" for="description">Description</label>
                                                        <div class="col-sm-10">
                                                            <textarea type="text" class = "form-control" rows = "3" name="description" >{{$item->description}}</textarea>
                                                        </div>
                                                    </div>
                                                    <div class="form-group" >
                                                        <img src="{{ asset('uploads/homeImages/'.$item ->image)}}" width="60" alt=" Image" >
                                                        <br></br>
                                                        <input type="file" name="image" class="form-control-file ">
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
                <div class="modal fade" id="imageAdd" tabindex="-1" role="dialog" aria-labelledby="mediumModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="mediumModalLabel">Add News Detail</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form class="form-horizontal mt-4 mb-5" method="POST" action="/post-image" enctype="multipart/form-data" id="editform">
                                @csrf
                                <div class="modal-body">
                                    <div class="form-group row">
                                        <label class="control-label col-sm-2" for="title">Title</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" name="title" placeholder="Image Title" required/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="control-label col-sm-2" for="description">Description</label>
                                        <div class="col-sm-10">
                                            <textarea type="text" class = "form-control" rows = "3" name="description" placeholder = "Image Description" required></textarea>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="control-label col-sm-2" for="image">Upload image</label>
                                        <div class="col-sm-10">
                                            <input type="file" class="form-control" name="image">
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