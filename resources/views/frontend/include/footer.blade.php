<footer class="footer-wrapper">
    <div class="container">
        <div class="section-title" align="center">
            <h2>GET IN TOUCH</h2>
        </div><!-- end section-title -->
        

        <div class="row">
            <div class="col-sm-7">
                    <h5>For rates and other inquiries, kindly leave your message below and We would get back to you as soon as possible.
                            Thank You.</h5>
                <form method="POST">
                    {{csrf_field()}}
                    <p>Note: All fields are required.</p>
                    <div class="form-group">
                        <div class="col-sm-6 " style="padding-left:0">
                            <input name="firstname" class="textbox" type="text" placeholder="Enter first name"/>
                        </div>
                        <div class="col-sm-6 " style="padding-left:0">
                            <input name="lastname" class="textbox" type="text" placeholder="Enter last name"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-12 " style="padding-left:0">
                            <input name="email" class="textbox" type="email" placeholder="Enter email"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-12 " style="padding-left:0">
                            <textarea name="message" class="textbox" placeholder="Enter message" col="10"></textarea>
                        </div>
                    </div>
                    <div class="form-group col-sm-12" style="padding-left:0">
                       <input class="send-btn" type="submit" value="Send Message"/>
                    </div>
                </form>
            </div><!-- end col-sm-7 -->
            <div class="col-sm-5 social" style="font-size:20px">

                <h5 style="font-size:14px;color:#fff">Quick Links</h5>

                <nav class="f-nav">
                    <a href="{{url('/')}}">Home</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="{{url('/')}}">Gallery</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="{{url('/')}}">Portfolio</a>
                </nav>

                <br/>

                <h5 style="font-size:14px;color:#fff">Follow Me</h5>
                    
                <a href="https://twitter.com/dbellszshots" target="_blank">
                    <span class="fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
        
                <a href="https://www.facebook.com/dbellszshots" target="_blank">
                    <span class="fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
        
                <a href="https://www.instagram.com/dbellszshots" target="_blank">
                    <span class="fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-instagram fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
        
                <a href="mailto:contact@dbellszshots.com" target="_blank">
                    <span class="fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-envelope fa-stack-1x fa-inverse"></i>
                    </span>
                </a>

            </div><!-- end col-sm-5 -->
        </div>
        
    </div>
</footer>
<div class="bottom-bar" align="center">
    <div class="container">
        <ul class="list-inline">
            <li>&copy; {{date('Y')}} Dbellsz Shots. All Rights Reserved.</li>
        </ul>
    </div>
</div>

<button onclick="topFunction()" id="scrollBtn" title="Go to top"><span class="fa fa-chevron-up"></span></button>