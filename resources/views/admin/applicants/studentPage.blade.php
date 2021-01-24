@extends('layouts.master')
@section('content')
<div class="section__content section__content--p30">
    <div class="container-fluid">
        <div class="row">
            @if ($student)
                <div class="col-md-10">
                    <div class="card">
                        <div class="card-header">
                            <strong class="card-title mb-3 float-left">{{ $student->surname." ".$student->otherNames }}</strong>
                            <span class="text-muted float-right">Student Applicaion</span>
                        </div>
                        <div class="card-body">
                            <div class="row d-flex">
                                <div class="mx-auto d-block">
                                    <div class="phone text-sm-left mt-3">
                                        <i class="fa fa-tint" aria-hidden="true"></i> <span><strong class="ml-1">Title: </strong> {{ $student->title }}</span>
                                    </div>
                                    <div class="phone text-sm-left mt-3">
                                        <i class="fa fa-phone" aria-hidden="true"></i> <span><strong class="ml-1">Contact: </strong> {{ $student->telephone }}</span>
                                    </div>
                                    <div class="location text-sm-left mt-3">
                                        <i class="fa fa-map-marker"></i> <span><strong class="ml-1"> Fax: </strong> {{ $student->fax }}</span>
                                    </div>
                                    <div class="location text-sm-left mt-3">
                                        <i class="fa fa-map-marker"></i> <span><strong class="ml-1"> Nationality: </strong> {{ $student->nationality }}</span>
                                    </div>
                                </div>
                                <div class="mx-auto d-block">
                                    <div class="location text-sm-left mt-3">
                                        <i class="fa fa-birthday-cake" aria-hidden="true"></i><span><strong class="ml-1"> DOB: </strong> {{ $student->dob }}</span>
                                    </div>
                                    <div class="location text-sm-left mt-3">
                                        <i class="fa fa-user" aria-hidden="true"></i> <span><strong class="ml-1"> Sex: </strong> {{ $student->sex }}</span>
                                    </div>
                                    <div class="location text-sm-left mt-3">
                                        <i class="fa fa-envelope" aria-hidden="true"></i><span><strong class="ml-1">Email: </strong> {{ $student->email }}</span>
                                    </div>
                                    <div class="text-sm-left mt-3">
                                        <i class="fa fa-file-archive-o" aria-hidden="true"></i><span><strong class="ml-1">Experience: </strong> {{ $student->experience }}</span>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div class="container">
                                <div class="row d-flex mt-2">
                                    <div class="mx-auto col-md-10">
                                        <div class="card-text text-sm-left">
                                            <strong>Institution</strong><br>
                                            <p>{{ $student->institutionName }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row d-flex mt-2">
                                    <div class="mx-auto col-md-10">
                                        <div class="card-text text-sm-left">
                                            <strong>Qualifications</strong><br>
                                            <p>{{ $student->qualification }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row d-flex mt-2">
                                    <div class="mx-auto col-md-10">
                                        <div class="card-text text-sm-left">
                                            <strong>Completions</strong><br>
                                            <p>{{ $student->completions }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row d-flex mt-2">
                                    <div class="mx-auto col-md-10">
                                        <div class="card-text text-sm-left">
                                            <strong>Interests</strong><br>
                                            <p>{{ $student->target }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div class="container">
                                <div class="row d-flex mt-3">
                                    <div class="mx-auto col-md-10">
                                        <div class="card-text text-sm-left">
                                            <span>
                                                <strong>Student Documents</strong><br/>
                                                @php
                                                    if(stripos($student->studentFile, "pdf")){
                                                        echo '<a target="_blank" class="mt-2 btn btn-sm btn-outline-info" href="/student/file/'. $student->studentFile.'" role="button"><i class="fa fa-file" aria-hidden="true"></i> View Document</a>';
                                                    }else{
                                                        echo '<a target="_blank" class="mt-2 btn btn-sm btn-outline-info" href="/student/image/'.$student->studentFile.'" role="button"><i class="fa fa-file" aria-hidden="true"></i> View Document image</a>';
                                                    }
                                                @endphp
                                                
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div class="container">
                                <div class="row d-flex mt-3">
                                    <div class="mx-auto col-md-10">
                                        <div class="card-text text-sm-left">
                                            <span>
                                                <strong>Status</strong>
                                                @if ($student->approve == 1)
                                                <span class="badge badge-success badge-pill">Approved</span>
                                                @elseif ($student->approve == 3)
                                                    <span class="badge badge-danger badge-pill">Declined</span>
                                                @elseif($student->approve == 2)
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
                                @if ($student->approve != 1)
                                    @if ($student->approve != 3)
                                        <div class="row d-flex">
                                            <div class="col-md-4 col-sm-6">
                                                <a class="mt-2 btn btn-sm btn-outline-success" href="/approve/student/{{ $student->id }}" role="button"><i class="fa fa-check" aria-hidden="true"></i> Approve Applicaion</a>
                                            </div>
                                            @if ($student->approve != 2)
                                                <div class="col-md-4 col-sm-6">
                                                    <a class="mt-2 btn btn-sm btn-outline-primary" href="/review/student/{{ $student->id }}" role="button"><i class="fa fa-minus-circle" aria-hidden="true"></i> Under Review</a>
                                                </div>
                                            @endif
                                            <div class="col-md-4 col-sm-6">
                                                <a class="mt-2 btn btn-sm btn-outline-danger" href="/decline/student/{{ $student->id }}" role="button"><i class="fa fa-times-circle" aria-hidden="true"></i> Decline Applicaion</a>
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