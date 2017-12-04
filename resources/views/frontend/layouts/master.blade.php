<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{$title}}</title>

        
        @include('frontend.include.head')

        @yield('head')

    </head>
    <body>

      <div class="nav-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-sm-5 col-xs-10">

              <img class="logo pull-left" src="{{url('images/logo-3.png')}}"/>
              
              <div class="logo-text pull-left">Dbellsz Shots</div>

            </div><!-- end col-md-4 -->
            <div class="col-sm-7 col-xs-2">
              @include('frontend.include.nav')
            </div><!-- end col-md-8 -->
          </div>
        </div>
      </div><!-- end nav-wrapper -->

      @yield('content')
        
      @include('frontend.include.foot')
      @yield('foot')
    </body>
</html>
