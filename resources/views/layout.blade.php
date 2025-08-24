<!DOCTYPE html>
<html lang="en">

<head>
  @include('html.header')

  @yield('css')
</head>

<body class="sb-nav-fixed">
  <nav class="sb-topnav navbar navbar-expand navbar-dark bg-primary">
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
