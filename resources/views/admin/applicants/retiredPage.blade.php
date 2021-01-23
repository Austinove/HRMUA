@extends('layouts.master')
@section('content')
<div class="section__content section__content--p30">
    <div class="container-fluid">
        <div class="row">
            @if ($retired)
                <div class="col-md-10">
                    <div class="card">
                        <div class="card-header">
                            <strong class="card-title mb-3 float-left">{{ $retired->surname." ".$retired->otherNames }}</strong>
                            <span class="text-muted float-right">Retired Applicaion</span>
                        </div>
                        <div class="card-body">
                            <div class="row d-flex">
                                <div class="mx-auto d-block">
                                    <div class="phone text-sm-left mt-3">
                                        <i class="fa fa-tint" aria-hidden="true"></i> <span><strong class="ml-1">Title: </strong> {{ $retired->title }}</span>
                                    </div>
                                    <div class="phone text-sm-left mt-3">
                                        <i class="fa fa-phone" aria-hidden="true"></i> <span><strong class="ml-1">Contact: </strong> {{ $retired->telephone }}</span>
                                    </div>
                                    <div class="location text-sm-left mt-3">
                                        <i class="fa fa-map-marker"></i> <span><strong class="ml-1"> Nationality: </strong> {{ $retired->nationality }}</span>
                                    </div>
                                </div>
                                <div class="mx-auto d-block">
                                    <div class="email text-sm-left mt-3">
                                        <div class="location text-sm-left mt-3">
                                        <i class="fa fa-user" aria-hidden="true"></i> <span><strong class="ml-1"> Sex: </strong> {{ $retired->sex }}</span>
                                    </div>
                                        <i class="fa fa-envelope" aria-hidden="true"></i><span><strong class="ml-1">Email: </strong> {{ $retired->email }}</span></div>
                                        <div class="text-sm-left mt-3">
                                        <i class="fa fa-file-archive-o" aria-hidden="true"></i><span><strong class="ml-1">Experience: </strong> {{ $retired->experience }}</span></div>
                                </div>
                            </div>
                            <hr/>
                            <div class="container">
                                <div class="row d-flex mt-2">
                                    <div class="mx-auto col-md-10">
                                        <div class="card-text text-sm-left">
                                            <strong>Qualifications</strong><br>
                                            <p>{{ $retired->qualification }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row d-flex mt-2">
                                    <div class="mx-auto col-md-10">
                                        <div class="card-text text-sm-left">
                                            <strong>Interests</strong><br>
                                            <p>{{ $retired->interest }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row d-flex mt-3">
                                    <div class="mx-auto col-md-10">
                                        <div class="card-text text-sm-left">
                                            <span>
                                                <strong>Status</strong>
                                                <span class="badge badge-success badge-pill">Approved</span>
                                            </span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div class="container">
                                <div class="row d-flex">
                                    <div class="col-md-4 col-sm-6">
                                        <a class="mt-2 btn btn-sm btn-outline-success" href="#" role="button"><i class="fa fa-check" aria-hidden="true"></i> Approve Applicaion</a>
                                    </div>
                                    <div class="col-md-4 col-sm-6">
                                        <a class="mt-2 btn btn-sm btn-outline-primary" href="#" role="button"><i class="fa fa-minus-circle" aria-hidden="true"></i> Under Review</a>
                                    </div>
                                    <div class="col-md-4 col-sm-6">
                                        <a class="mt-2 btn btn-sm btn-outline-danger" href="#" role="button"><i class="fa fa-times-circle" aria-hidden="true"></i> Decline Applicaion</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            @endif
        </div>
    </div>
</div>
@endsection