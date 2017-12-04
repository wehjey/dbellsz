<nav class="navbar navbar-default">
  
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav navbar-right">
        <li class="{{$page == 'home' ? 'active': ''}}"><a href="{{url('/')}}">HOME</a></li>
        <li><a href="#">PORTFOLIO</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Gallery <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Wedding</a></li>
            <li class="divider"></li>
            <li><a href="#">Portraits</a></li>
            <li class="divider"></li>
            <li><a href="#">Babies</a></li>
            <li class="divider"></li>
            <li><a href="#">Lifestyle</a></li>
            <li class="divider"></li>
            <li><a href="#">Fashion</a></li>
          </ul>
        </li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
    </div><!-- /.navbar-collapse -->
</nav>