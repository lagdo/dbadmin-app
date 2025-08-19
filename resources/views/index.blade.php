@extends('layout')

@section('page-title', 'Database administration')

@section('css')
  @jxnCss
@endsection

@section('js')
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
        <div class="container-fluid px-4" @jxnBind($rqWrapper)>
          @jxnHtml($rqWrapper)
        </div>
@endsection
