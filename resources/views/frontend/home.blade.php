@extends('frontend.layouts.master')
@section('content')

<div class="wc-wrapper">
  <div class="container">
    <div class="large-text">
      I'm a photographer
    </div>
    <span class="small-text">Let's make your dream photo come true.</span>
    <div class="msg-btn-div">
      <a class="msg-btn">Send a message</a>
    </div>
  </div><!-- end container -->
</div><!-- end wc-wrapper -->

<div class="sc-wrapper">
  <div class="container-fluid">
    <div class="section-title" align="center">
      <h2>OUR SERVICES</h2>
      <h5><i>We provide a range of services that will meet your desired needs.</i></h5>
    </div><!-- end section-title -->
    <div class="row">
      <div class="col-sm-3">
      
        <center>
        
          <img class=" img-responsive" src="{{url('images/services/IMG_3940-Large.jpg')}}" />

          <div class="img-text">
            Baby Photography
          </div>
        
        </center>

      </div>
      <div class="col-sm-3">
      
        <center>
        
          <img class=" img-responsive" src="{{url('images/services/wedding.jpg')}}" />

          <div class="img-text">
            Wedding Photography
          </div>
        
        </center>

      </div>
      <div class="col-sm-3">
      
        <center>
        
          <img class=" img-responsive" src="{{url('images/services/IMG_3940-Large.jpg')}}" />

          <div class="img-text">
            Baby Photography
          </div>
        
        </center>

      </div>
      <div class="col-sm-3">
      
        <center>
        
          <img class=" img-responsive" src="{{url('images/services/IMG_3940-Large.jpg')}}" />

          <div class="img-text">
            Baby Photography
          </div>
        
        </center>

      </div>
    </div><!-- end row -->
  </div><!-- end container -->
</div><!-- end sc-wrapper -->

@endsection