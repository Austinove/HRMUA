@extends('layouts.master')
@section('content')
    @if(Session::has('success'))
        <div class="alert alert-success text-center" role="alert">
            {{Session::get('success')}}
        </div>
    @endif
<div class="row mt-3">
    <div class="col-sm-12">
        <!--User profile header-->
        <div class="mt-1 mb-3 button-container bg-white border shadow-sm">
            <div class="profile-bg p-5">
                <img src="{{asset('img/jd-150.png')}}" height="125px" width="125px" class="rounded-circle shadow profile-img" />
            </div>
            <div class="profile-bio-main container-fluid">
                <div class="row">
                    <div class="col-md-5 offset-md-3 col-sm-12 offset-sm-0 col-12 bio-header">
                        <h3 class="mt-4">{{Auth::User()->fname." ".Auth::User()->lname}}</h3>
                        <span class="text-muted mt-0 bio-request">Senior Programmer</span>
                    </div>
                </div>
            </div>
        </div>
        <!--/User profile header-->
        <!--/User profile body-->
        
        <!--/User profile body-->

    </div>
</div>
<div class="row mt-3">
    <div class="col-sm-4 col-sm-offset-1">
        <div class="login-form"><!--login form-->

            <form class="form-horizontal" method="POST" action="/updateprofile" enctype="multipart/form-data">
                {{ csrf_field() }}
                <legend>Account Profile</legend>
                <div class="form-group " >
                    <input type="text" class="form-control" name="fname"  value="{{Auth::User()->fname}}">
                </div>
                <div class="form-group " >
                    <input type="text" class="form-control" name="lname"  value="{{Auth::User()->lname}}">
                </div>
                <div class="form-group" >
                    <input type="text" class="form-control" name="email"  value="{{Auth::User()->email}}">
                </div>
                <button type="submit" class="btn btn-primary" style="float: right;">Update Account</button>
                
            </form>

        </div><!--/login form-->
    </div>
    <div class="col-sm-1">
        <h2 class="or">OR</h2>
    </div>
    <div class="col-sm-4"> 
        <div class="signup-form"><!--sign up form-->
            <form class="form-horizontal" method="POST" action="/update-password">
                {{ csrf_field() }}
                <legend>Change Password</legend>
                <div class="form-group{{ $errors->has('current-password') ? ' has-error' : '' }}">
                    <input id="current-password" type="password" class="form-control" name="current-password" placeholder="Current Password" required>
                    @if ($errors->has('current-password'))
                        <span class="help-block">
                            <strong>{{ $errors->first('current-password') }}</strong>
                        </span>
                    @endif
                </div>
                <div class="form-group{{ $errors->has('new-password') ? ' has-error' : '' }}">
                    <input id="new-password" type="password" class="form-control" name="new-password" placeholder="New Password" required>
                    @if ($errors->has('new-password'))
                        <span class="help-block">
                            <strong>{{ $errors->first('new-password') }}</strong>
                        </span>
                    @endif
                </div>
                <div class="form-group">
                    <input id="new-password-confirm" type="password" class="form-control" name="new-password_confirmation" placeholder="Confirm New Password" required>
                </div>
                <button type="submit" class="btn btn-primary" style="float: right;">Update Password</button>
            </form>

        </div><!--/sign up form-->
    </div>

</div>


@endsection