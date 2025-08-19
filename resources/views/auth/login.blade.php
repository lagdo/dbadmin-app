@extends('auth.layout')

@section('page-title', __('Login'))

@section('content')
              <div class="col-lg-5">
                <div class="card shadow-lg border-0 rounded-lg mt-5">
                  <div class="card-header"><h3 class="text-center font-weight-light my-4">{{ __('Login') }}</h3></div>

                  <div class="card-body">
                    <form method="POST" action="{{ route('login') }}" class="needs-validation" novalidate="">
                      @csrf

                      <div class="form-floating mb-3">
                        <input class="form-control @error('email')is-invalid @enderror" id="inputEmail" type="email" name="email" placeholder="name@example.com" />
                        <label for="inputEmail">{{ __('Email') }}</label>
                        <div class="invalid-feedback">{{ $errors->first('email') }}</div>
                      </div>

                      <div class="form-floating mb-3">
                        <input class="form-control @error('password')is-invalid @enderror" id="inputPassword" type="password" name="password" placeholder="Password" />
                        <label for="inputPassword">{{ __('Password') }}</label>
                        <div class="invalid-feedback">{{ $errors->first('password') }}</div>
                      </div>

                      <div class="form-check mb-3">
                        <input class="form-check-input" id="inputRememberPassword" type="checkbox" name="remember" checked />
                        <label class="form-check-label" for="inputRememberPassword">{{ __('Remember Me') }}</label>
                      </div>

                      <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                        <a class="small" href="password.html">{{ __('Forgot Your Password?') }}</a>
                        <button type="submit" class="btn btn-primary" tabindex="4">{{ __('Login') }}</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
@endsection
