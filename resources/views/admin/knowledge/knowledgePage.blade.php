@extends('layouts.master')
@section('content')
<div class="row">
    <div class="col-md-10">
        @if ($knowhub->id)
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title mb-3"><strong>{{ $knowhub->title }}</strong></h4>
                    <h5 class="card-title mb-3 text-muted">Uploaded File: <a class="mt-2 btn-sm btn-outline-primary" download href={{ asset('/uploads/document/'.$knowhub->document)}} role="button"><i class="fa fa-download" aria-hidden="true"></i> Download file...</a></h5>
                    <p class="card-text">{{ $knowhub->description }}</p>
                </div>
            </div>
        @endif
    </div>
</div>
@endsection