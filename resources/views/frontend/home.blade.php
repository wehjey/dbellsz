@extends('frontend.layouts.master')
@section('content')

<div class="wc-wrapper">
  <div class="container">
    <div class="large-text">
      I'm a photographer
    </div>
    <span class="small-text">Let's make your dream photo come true.</span>
    <div class="msg-btn-div" style="margin-left:0">
      <a class="msg-btn">Send a message</a>
    </div>
  </div><!-- end container -->
</div><!-- end wc-wrapper -->

@include('frontend.include.services')

@include('frontend.include.gallery')

@include('frontend.include.about')

@include('frontend.include.footer')

@endsection