<!DOCTYPE html>
<html lang="en">

<head>
	@include('auth.html.header')
</head>

<body class="bg-primary">
  <div id="layoutAuthentication">
    <div id="layoutAuthentication_content">
      <main>
        <div class="container">
          <div class="row justify-content-center">

@yield('content')

          </div>
        </div>
      </main>
    </div>
    <div id="layoutAuthentication_footer">
      <footer class="py-4 bg-light mt-auto">
        <div class="container-fluid px-4">
          @include('page.footer')
        </div>
      </footer>
    </div>
  </div>

  @include('auth.html.footer')
</body>

</html>
