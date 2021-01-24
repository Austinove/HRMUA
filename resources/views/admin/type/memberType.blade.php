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
                    <h3 class="title-3 m-b-30">Member Type</h3>
                </div>
                <div class="col-sm-4 text-right pb-3 mb-5">
                    <button class="au-btn-plus" data-toggle="modal" data-target="#meberAdd"><i class="zmdi zmdi-plus"></i> </button>
                </div>
            </div>
            
            <div class="table-responsive">
                <table class="table table-top-campaign">
                    
                    <tbody>
                        @if(count($memberType)>0)
                            @foreach ($memberType as $item)
                            <tr>
                                <td >{{$item->id}}</td>
                                <td >{{$item->typeName}}</td>
                                <td >
                                    <div class="table-data-feature">
                                        <a href="#" class="item" data-toggle="modal" data-placement="top" data-target='#memberUpdate{{ $item->id }}' title="Edit">
                                            <i class="zmdi zmdi-edit"></i>
                                        </a>
                                        <a href="/delete-type/{{ $item->id }}" class="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                            <i class="zmdi zmdi-delete"></i>
                                        </a>
                                    </div>
                                    
                                </td> 
                            </tr>
                            <!-- modal medium -->
                            <div class="modal fade" id="memberUpdate{{ $item->id }}" tabindex="-1" role="dialog" aria-labelledby="mediumModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="mediumModalLabel">Edit Member Type</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <form class="form-horizontal mt-4 mb-5" method="POST" action="/edit-member-Type/{{ $item->id }}" enctype="multipart/form-data" id="editform">
                                            @csrf
                                            {{ method_field('PUT') }}
                                            <div class="modal-body">
                                                <div class="form-group row">
                                                    <label class="control-label col-sm-2" for="typeName">Type Name</label>
                                                    <div class="col-sm-10">
                                                        <input type="text" class="form-control" name="typeName"  value="{{$item->typeName}}" />
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
                <div class="modal fade" id="meberAdd" tabindex="-1" role="dialog" aria-labelledby="mediumModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="mediumModalLabel">Add Member Type</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form class="form-horizontal mt-4 mb-5" method="POST" action="/post-membertype" enctype="multipart/form-data" id="editform">
                                @csrf
                                <div class="modal-body">
                                    <div class="form-group row">
                                        <label class="control-label col-sm-2" for="typeName">Type Name</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" name="typeName" placeholder="Member Type" required/>
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