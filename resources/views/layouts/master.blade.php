<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="au theme template">
    <meta name="author" content="Hau Nguyen">
    <meta name="keywords" content="au theme template">

    <!-- Title Page-->
    <link rel="icon" href="{{ asset('assets/img/logo/icon.PNG')}}" type="image/png">
    <title>HRMUA</title>

    <!-- Fontfaces CSS-->
    <link href="{{ asset('css/font-face.css') }}" rel="stylesheet" media="all">
    <link href="{{ asset('vendor/font-awesome-4.7/css/font-awesome.min.css') }}" rel="stylesheet" media="all">
    <link href="{{ asset('vendor/font-awesome-5/css/fontawesome-all.min.css') }}" rel="stylesheet" media="all">
    <link href="{{ asset('vendor/mdi-font/css/material-design-iconic-font.min.css') }}" rel="stylesheet" media="all">

    <!-- Bootstrap CSS-->
    <link href="{{ asset('vendor/bootstrap-4.1/bootstrap.min.css') }}" rel="stylesheet" media="all">
  <link href="{{ asset('css/custom.css') }}" rel="stylesheet" media="all">
    <!-- Vendor CSS-->
    {{-- <link href="{{ asset('vendor/animsition/animsition.min.css') }}" rel="stylesheet" media="all"> --}}
    {{-- <link href="{{ asset('vendor/bootstrap-progressbar/bootstrap-progressbar-3.3.4.min.css') }}" rel="stylesheet" media="all"> --}}
    {{-- <link href="{{ asset('vendor/wow/animate.css') }}" rel="stylesheet" media="all"> --}}
    {{-- <link href="{{ asset('vendor/css-hamburgers/hamburgers.min.css') }}" rel="stylesheet" media="all"> --}}
    {{-- <link href="{{ asset('vendor/slick/slick.css') }}" rel="stylesheet" media="all"> --}}
    <link href="{{ asset('vendor/select2/select2.min.css') }}" rel="stylesheet" media="all">
    {{-- <link href="{{ asset('vendor/perfect-scrollbar/perfect-scrollbar.css') }}" rel="stylesheet" media="all"> --}}

    <!-- Main CSS-->
    <link href="{{ asset('css/theme.css') }}" rel="stylesheet" media="all">

</head>

<body class="animsition">
    <div class="page-wrapper">
        @include('admin.adminNav')
        <div class="page-container3">
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-3 mt-4">
                            @include('admin.sidebar')
                        </div>
                        <div class="col-xl-9 mt-4">
                            @yield('content')
                            <div class="page-content">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="copyright">
                                            <p>Copyright © 2021 HRMUA. All rights reserved.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>

    <!-- Jquery JS-->
    <script src="{{ asset('vendor/jquery-3.2.1.min.js') }}"></script>
    <!-- Bootstrap JS-->
    <script src="{{ asset('vendor/bootstrap-4.1/popper.min.js') }}"></script>
    <script src="{{ asset('vendor/bootstrap-4.1/bootstrap.min.js') }}"></script>
    <!-- Vendor JS       -->
    {{-- <script src="{{ asset('vendor/slick/slick.min.js') }}">
    </script>
    <script src="{{ asset('vendor/wow/wow.min.js') }}"></script> --}}
    <script src="{{ asset('vendor/animsition/animsition.min.js') }}"></script>
    {{-- <script src="{{ asset('vendor/bootstrap-progressbar/bootstrap-progressbar.min.js') }}">
    </script> --}}
    {{-- <script src="{{ asset('vendor/counter-up/jquery.waypoints.min.js') }}"></script>
    <script src="{{ asset('vendor/counter-up/jquery.counterup.min.js') }}">
    </script> --}}
    {{-- <script src="{{ asset('vendor/circle-progress/circle-progress.min.js') }}"></script> --}}
    {{-- <script src="vendor/perfect-scrollbar/perfect-scrollbar.js"></script> --}}
    {{-- <script src="{{ asset('vendor/chartjs/Chart.bundle.min.js') }}"></script> --}}
    <script src="{{ asset('vendor/select2/select2.min.js') }}">
    </script>

    <!-- Main JS-->
    <script src="{{ asset('js/main.js') }}"></script>

</body>

</html>
<!-- end document-->