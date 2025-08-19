@extends('layout')

@section('page-title', 'Database administration')

@section('css')
  <style>
    html {
      font-size: 14px;
    }
    .row {
      margin-bottom: 10px;
    }
    .sb-sidenav-menu {
      padding-top: 20px;
      padding-left: 7px;
    }
    .sb-sidenav-menu > .row {
      margin-right: 0px;
    }
  </style>
  @jxnCss
@endsection

@section('js')
  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
  @jxnJs

  @jxnScript
@endsection

@php
$rqSidebar = rq(Lagdo\DbAdmin\Ajax\App\Sidebar::class);
$rqWrapper = rq(Lagdo\DbAdmin\Ajax\App\Wrapper::class);
@endphp

@section('sidebar')
        <div class="sb-sidenav-menu" @jxnBind($rqSidebar)>
          @jxnHtml($rqSidebar)
        </div>
@endsection

@section('content')
        <div class="container-fluid" id="jaxon-dbadmin" @jxnBind($rqWrapper)>
          @jxnHtml($rqWrapper)
        </div>
@endsection
