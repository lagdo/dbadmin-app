<!DOCTYPE html>
<html lang="en">

<head>
  @include('html.header')

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
    /*
     * This fixes the <footer> at the bottom of the page. 
     */
    #layoutSidenav_content {
      height: 100vh;
    }
    #layoutSidenav_content > main {
      overflow-y: auto;
      margin-bottom: 3px;
    }
  </style>
  @yield('css')
</head>

<body class="sb-nav-fixed">
  <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    @include('page.header')
  </nav>

  <div id="layoutSidenav">
    <div id="layoutSidenav_nav">
      <nav class="sb-sidenav accordion sb-sidenav-light" id="sidenavAccordion">
        @yield('sidebar')

        <div class="sb-sidenav-footer py-3">
          @include('page.user')
        </div>
      </nav>
    </div>

    <div id="layoutSidenav_content">
      <main>
        @yield('content')
      </main>

      <footer class="bg-light py-3 mt-auto">
        <div class="container-fluid px-4">
          @include('page.footer')
        </div>
      </footer>
    </div>
  </div>

  @include('html.footer')

  @yield('js')
</body>

</html>
