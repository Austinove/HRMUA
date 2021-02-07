@extends('layouts.master')
@section('content')
<div class="row">
    <div class="col-md-10">
        @if ($news->id)
            <div class="card">
                <img class="img-fluid" style="height: 350px;" src="{{ asset('/uploads/news/'.$news->image)}}" alt="News Image">
                <div class="card-body">
                    <h4 class="card-title mb-3"><strong>{{ $news->newsTitle }}</strong></h4>
                    <h5 class="card-title mb-3 text-muted">{{ $news->newsCategory }}</h5>
                    <p class="card-text">{{ $news->newsDesc }}</p>
                </div>
            </div>
        @endif
    </div>
</div>
@endsection