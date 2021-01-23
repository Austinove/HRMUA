@extends('layouts.master')
@section('content')
<div class="row mt-3">
    <div class="col-sm-12">
        <!--Striped table-->
        <div class="mt-1 mb-3 p-3 button-container bg-white border shadow-sm">
            <h5 class="mb-4 font-weight-bold">Professional Applications</h5>
            <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a class="nav-item nav-link active" id="nav-pending-tab" data-toggle="tab" href="#nav-pending" role="tab" aria-controls="nav-pending" aria-selected="true">Pending</a>
                <a class="nav-item nav-link" id="nav-underReview-tab" data-toggle="tab" href="#nav-underReview" role="tab" aria-controls="nav-underReview" aria-selected="false">Under Review</a>
                <a class="nav-item nav-link" id="nav-approved-tab" data-toggle="tab" href="#nav-approved" role="tab" aria-controls="nav-approved" aria-selected="false">Approved</a>
            </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-pending" role="tabpanel" aria-labelledby="nav-pending-tab">
                    <h5 class="mb-3 mt-4 text-muted font-weight-bold">Pending Applications</h5>
                    <div class="table-responsive">
                        <table id="theDataTable" class="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Telephone</th>
                                    <th>Email</th>
                                    <th>Date Applied</th>
                                    <th>Actions </th>
                                </tr>
                            </thead>
                            <tbody>
                                @if (count($proffessionals)>0)    
                                    @foreach ($proffessionals as $item)
                                        <tr>
                                            <td>{{$item->surname." ".$item->otherNames}}</td>
                                            <td>{{$item->telephone}}</td>
                                            <td>{{$item->email}}</td>
                                            <td>{{$item->created_at}}</td>
                                            <td><a class="mt-2 btn btn-sm btn-outline-primary" href="/professional/{{ $item->id }}" role="button"> Details...</a></td>
                                        </tr>
                                    @endforeach       
                                @endif
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="tab-pane fade" id="nav-underReview" role="tabpanel" aria-labelledby="nav-underReview-tab">
                    <h5 class="mb-3 mt-4 text-muted font-weight-bold">Under Review Applications</h5>
                    <div class="table-responsive">
                        <table id="theDataTable" class="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Telephone</th>
                                    <th>Email</th>
                                    <th>Date Applied</th>
                                    <th>Actions </th>
                                </tr>
                            </thead>
                            <tbody>
                                @if (count($proffessionals)>0)    
                                    @foreach ($proffessionals as $item)
                                        <tr>
                                            <td>{{$item->surname." ".$item->otherNames}}</td>
                                            <td>{{$item->telephone}}</td>
                                            <td>{{$item->email}}</td>
                                            <td>{{$item->created_at}}</td>
                                            <td><a class="mt-2 btn btn-sm btn-outline-primary" href="/professional/{{ $item->id }}" role="button"> Details...</a></td>
                                        </tr>
                                    @endforeach       
                                @endif
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="tab-pane fade" id="nav-approved" role="tabpanel" aria-labelledby="nav-approved-tab">
                    <h5 class="mb-3 mt-4 text-muted font-weight-bold">Approved Applications</h5>
                    <div class="table-responsive">
                        <table id="theDataTable" class="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Telephone</th>
                                    <th>Email</th>
                                    <th>Date Applied</th>
                                    <th>Actions </th>
                                </tr>
                            </thead>
                            <tbody>
                                @if (count($proffessionals)>0)    
                                    @foreach ($proffessionals as $item)
                                        <tr>
                                            <td>{{$item->surname." ".$item->otherNames}}</td>
                                            <td>{{$item->telephone}}</td>
                                            <td>{{$item->email}}</td>
                                            <td>{{$item->created_at}}</td>
                                            <td><a class="mt-2 btn btn-sm btn-outline-primary" href="/professional/{{ $item->id }}" role="button"> Details...</a></td>
                                        </tr>
                                    @endforeach       
                                @endif
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!--/Striped table-->
    </div>
</div>
@endsection