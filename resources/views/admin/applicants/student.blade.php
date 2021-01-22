@extends('layouts.master')
@section('content')
<div class="row mt-3">
    <div class="col-sm-12">
        <!--Striped table-->
        <div class="mt-1 mb-3 p-3 button-container bg-white border shadow-sm">
            <h6 class="mb-2">Student Applications</h6>
            <code class="mb-2">Only students </code>
            <div class="table-responsive">
                <table id="theDataTable" class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Sex</th>
                            <th>Nationality</th>
                            <th>Email</th>
                            <th>Institute Name</th>
                            <th>Qualification</th>
                            <th>Telephone</th>
                            <th>Date Applied</th>
                            <th>Date Approved</th>
                            <th>Status</th>
                            <th>Details </th>
                        </tr>
                    </thead>
                    <tbody>
                        @if (count($student)>0)
                            @foreach ($student as $item)
                                <tr>
                                    <td>{{$item->surname." ".$item->otherNames}}</td>
                                    <td>{{$item->sex}}</td>
                                    <td>{{$item->nationality}}</td>
                                    <td>{{$item->email}}</td>
                                    <td>{{$item->institutionName}}</td>
                                    <td>{{$item->qualification}}</td>
                                    <td>{{$item->telephone}}</td>
                                    <td>{{$item->doApp}}</td>
                                    <td>{{$item->dapproved}}</td>
                                    <td><label class="badge badge-danger badge-pill">{{$item->approve}}</label></td>
                                    <td>{{$item->experience}}</td>
                                    <td>{{$item->interest}}</td>
                                    <td><a href="#">Datails...</a></td>
                                </tr>
                            @endforeach
                        @endif

                    </tbody>
                </table>
            </div>
        </div>
        <!--/Striped table-->
    </div>
</div>
@endsection