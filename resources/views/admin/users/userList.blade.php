@extends('layouts.master')
@section('content')
    @if(Session::has('success'))
        <div class="alert alert-success text-center" role="alert">
            {{Session::get('success')}}
        </div>
    @endif

<div class="mt-4 mb-4 p-3 bg-white border shadow-sm lh-sm">
    <!--Product Listing-->
    <div class="product-list">
        
        <div class="row border-bottom mb-4">
            <div class="col-sm-8 pt-2"><h6 class="mb-4 bc-header">User List </h6></div>
            <div class="col-sm-4 text-right pb-3">
                <button class="btn btn-round btn-theme" data-toggle="modal" data-target="#userAdd"><i class="fa fa-plus"></i> Add User</button>
            </div>
        </div>
        
        <div class="table-responsive product-list">
            
            <table class="table table-bordered table-striped mt-3" id="theDataTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th width="6%">Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    @if (count($user)>0)    
                        @foreach ($user as $item)
                            <tr>
                                <td>{{$item->id}}</td>
                                <td class="align-middle"><img src="assets/img/prod10.png" width="80px"  alt=""></td>
                                <td class="align-middle">
                                    <h6><strong>{{$item->fname}}</strong></h6>
                                    <p>{{$item->lname}}</p>
                                </td>
                                <td class="align-middle">{{$item->email}}</td>
                                <td class="align-middle text-center">
                                    <a href ="#"  class="btn text-theme p-1" data-toggle="modal" data-target='#userUpdate' id="edit" data-id="{{ $item->id }}"><i class="fas fa-edit"></i></i></a>
                                    <button class="btn btn-link text-danger p-1"><i class="fas fa-trash"></i></button>
                                </td>
                            </tr>
                        @endforeach       
                    @endif
                </tbody>
            </table>
        </div>
    </div>
    <!--User Add-->
    <div class="modal fade" id="userAdd" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">User Add</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form class="form-horizontal mt-4 mb-5" method="POST" action="/postUser" enctype="multipart/form-data">
                    @csrf
                    <div class="modal-body">
                        <div class="form-group row">
                            <label class="control-label col-sm-2" for="fname">First Name</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" name="fname" placeholder="John" required/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="control-label col-sm-2" for="fname">Last Name</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" name="lname" placeholder="Doe" required/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="control-label col-sm-2" for="email">Email</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" name="email" placeholder="johndoe@gmail.com" required/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="control-label col-sm-2" for="image">File input</label>
                            <div class="col-sm-10">
                                <input type="file" class="form-control" name="image">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary" >Save</button>
                    </div>
                </form> 
            </div>
        </div>
    </div>
    <!--User updating-->
    <div class="modal fade" id="userUpdate" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">User Update</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form class="form-horizontal mt-4 mb-5" method="POST" action="/edituser" enctype="multipart/form-data" id="editform">
                    @csrf
                    {{ method_field('PUT') }}
                    <div class="modal-body">
                        <div class="form-group row">
                            <label class="control-label col-sm-2" for="fname">First Name</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" name="fname" id="fname" value="{{$item->fname}}" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="control-label col-sm-2" for="lname">Last Name</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" name="lname" id="lname" value="{{$item->lname}}" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="control-label col-sm-2" for="email">Email</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" name="email" id="email" value="{{$item->email}}" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="control-label col-sm-2" for="exampleFormControlFile1">File input</label>
                            <div class="col-sm-10">
                                <input type="file" class="form-control" id="exampleFormControlFile1">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary" data-dismiss="modal">Save</button>
                    </div>
                </form> 
                
            </div>
        </div>
    </div>
</div>
@endsection