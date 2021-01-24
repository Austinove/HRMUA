@extends('layouts.master')
@section('content')
<div class="section__content section__content--p30">
    <div class="container-fluid">
        <div class="row">
            @if ($cooperate)
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <strong class="card-title mb-3 float-left">{{ $cooperate['contactPerson'] }}</strong>
                            <span class="text-muted float-right">Cooperate Applicaion</span>
                        </div>
                        <div class="card-body">
                            <div class="row d-flex">
                                <div class="mx-auto d-block">
                                    <div class="phone text-sm-left mt-3">
                                        <i class="fa fa-tint" aria-hidden="true"></i> <span><strong class="ml-1">Organization: </strong> {{ $cooperate['orgName'] }}</span>
                                    </div>
                                    <div class="phone text-sm-left mt-3">
                                        <i class="fa fa-phone" aria-hidden="true"></i> <span><strong class="ml-1">Contact: </strong> {{ $cooperate['telephone'] }}</span>
                                    </div>
                                    <div class="location text-sm-left mt-3">
                                        <i class="fa fa-file" aria-hidden="true"></i> <span><strong class="ml-1"> Fax: </strong> {{ $cooperate['fax'] }}</span>
                                    </div>
                                    <div class="text-sm-left mt-3">
                                        <i class="fa fa-file-archive-o" aria-hidden="true"></i><span><strong class="ml-1">Physical Address: </strong> <Address>{{ $cooperate['postalAddress'] }}</Address></span>
                                    </div>
                                </div>
                                <div class="mx-auto d-block">
                                    <div class="phone text-sm-left mt-3">
                                        <i class="fa fa-tint" aria-hidden="true"></i> <span><strong class="ml-1">Title: </strong> {{ $cooperate['title'] }}</span>
                                    </div>
                                    <div class="location text-sm-left mt-3">
                                        <i class="fas fa-house-damage    "></i><span><strong class="ml-1"> Post Address: </strong> {{ $cooperate['postalAddress'] }}</span>
                                    </div>
                                    <div class="location text-sm-left mt-3">
                                        <i class="fa fa-envelope" aria-hidden="true"></i><span><strong class="ml-1">Email: </strong> {{ $cooperate['email'] }}</span>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div class="container">
                                <div class="row d-flex mt-2">
                                    <div class="mx-auto col-md-10">
                                        <div class="card-text text-sm-left">
                                            <strong>Sector</strong><br>
                                            <p>{{ $cooperate['sector'] }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row d-flex mt-2">
                                    <div class="mx-auto col-md-10">
                                        <div class="card-text text-sm-left">
                                            <strong>Interests</strong><br>
                                            <p>{{ $cooperate['interest'] }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div class="container">
                                <div class="row d-flex mt-2">
                                    <div class="mx-auto col-md-10">
                                        <div class="card-text text-sm-left">
                                            <span>
                                                <strong>Number of Staff Members</strong>
                                                <span class="ml-2 badge badge-success badge-pill">{{ $cooperate['noOfstaff'] }}</span>
                                            </span>
                                        </div>
                                        @if ($cooperate['staff'])
                                            <div class="accordion mt-3" id="accordionExample">
                                                <div class="card">
                                                    <div class="card-header" id="headingOne">
                                                        <h2 class="mb-0">
                                                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            Staff Details List
                                                            </button>
                                                        </h2>
                                                    </div>

                                                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                        @foreach ($cooperate['staff'] as $staff)
                                                            <div class="card-body">
                                                                <strong class="text-muted">{{ $staff->name ." | ". $staff->telephone ." | ". $staff->email }}</strong><br>
                                                                <strong class="mt-3">Interests</strong><br>
                                                                <p>
                                                                {{ $staff->interest }}
                                                                </p>
                                                            </div>
                                                            <hr/>
                                                        @endforeach
                                                    </div>
                                                </div>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="row d-flex mt-3">
                                    <div class="mx-auto col-md-10">
                                        <div class="card-text text-sm-left">
                                            <span>
                                                <strong>Status</strong>
                                                @if ($cooperate['approve'] == 1)
                                                <span class="badge badge-success badge-pill">Approved</span>
                                                @elseif ($cooperate['approve'] == 3)
                                                    <span class="badge badge-danger badge-pill">Declined</span>
                                                @elseif($cooperate['approve'] == 2)
                                                    <span class="badge badge-primary badge-pill">Under Review</span>
                                                @else
                                                <span class="badge badge-info badge-pill">Pending..</span>
                                                @endif
                                            </span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div class="container">
                                @if ($cooperate['approve'] != 1)
                                    @if ($cooperate['approve'] != 3)
                                        <div class="row d-flex">
                                            <div class="col-md-4 col-sm-6">
                                                <a class="mt-2 btn btn-sm btn-outline-success" href="/approve/cooperate/{{ $cooperate['id'] }}" role="button"><i class="fa fa-check" aria-hidden="true"></i> Approve Applicaion</a>
                                            </div>
                                            @if ($cooperate['approve'] != 2)
                                                <div class="col-md-4 col-sm-6">
                                                    <a class="mt-2 btn btn-sm btn-outline-primary" href="/review/cooperate/{{ $cooperate['id'] }}" role="button"><i class="fa fa-minus-circle" aria-hidden="true"></i> Under Review</a>
                                                </div>
                                            @endif
                                            <div class="col-md-4 col-sm-6">
                                                <a class="mt-2 btn btn-sm btn-outline-danger" href="/decline/cooperate/{{ $cooperate['id'] }}" role="button"><i class="fa fa-times-circle" aria-hidden="true"></i> Decline Applicaion</a>
                                            </div>
                                        </div>
                                    @endif
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
            @endif
        </div>
    </div>
</div>
@endsection