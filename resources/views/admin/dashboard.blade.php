
@extends('layouts.master')
@section('content')
<!-- PAGE CONTENT-->
<div class="page-content">
    <div class="row">
        <div class="col-sm-6 col-md-6">
            <div class="overview-item">
                <div class="overview__inner">
                    <div class="overview-box clearfix">
                        <div class="icon text-black">
                            <i class="zmdi text-black zmdi-account-o"></i>
                        </div>
                        <div class="text text-black">
                            <h2 class="text-black">{{DB::table('professionals')->count()}}</h2>
                            <span class="text-black">Proffesional Members</span>
                        </div>
                    </div>
                    <div class="overview-chart">
                        <canvas id="widgetChart1"></canvas>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-6">
            <div class="overview-item">
                <div class="overview__inner">
                    <div class="overview-box clearfix">
                        <div class="icon">
                            <i class="zmdi text-black zmdi-account-o"></i>
                        </div>
                        <div class="text">
                            <h2 class="text-black">{{DB::table('corporates')->count()}}</h2>
                            <span class="text-black">Cooporate Members</span>
                        </div>
                    </div>
                    <div class="overview-chart">
                        <canvas id="widgetChart2"></canvas>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-6">
            <div class="overview-item">
                <div class="overview__inner">
                    <div class="overview-box clearfix">
                        <div class="icon">
                            <i class="zmdi text-black zmdi-account-o"></i>
                        </div>
                        <div class="text">
                            <h2 class="text-black">{{DB::table('students')->count()}}</h2>
                            <span class="text-black">Students Members</span>
                        </div>
                    </div>
                    <div class="overview-chart">
                        <canvas id="widgetChart3"></canvas>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-6">
            <div class="overview-item">
                <div class="overview__inner">
                    <div class="overview-box clearfix">
                        <div class="icon">
                            <i class="zmdi text-black zmdi-account-o"></i>
                        </div>
                        <div class="text">
                            <h2 class="text-black">{{DB::table('retireds')->count()}}</h2>
                            <span class="text-black">Retiered Members</span>
                        </div>
                    </div>
                    <div class="overview-chart">
                        <canvas id="widgetChart3"></canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection