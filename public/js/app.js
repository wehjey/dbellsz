//Show dropdown on hover
$('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

//Array of images which you want to show: Use path you want.
var images = new Array('{{url("images/IMG_8861.jpg")}}', '{{url("images/MG_0483-Lahrge.jpg")}}', '{{url("images/services/Untitled-1.jpg")}}');
var nextimage = 0;
doSlideshow();

function doSlideshow() {
    if (nextimage >= images.length) { nextimage = 0; }
    $('.wc-wrapper')
        .css('background-image', 'url("' + images[nextimage++] + '")')
        .fadeIn(5000, function() {
            setTimeout(doSlideshow, 3000);
        });
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollBtn").style.display = "block";
    } else {
        document.getElementById("scrollBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $('html').animate({ scrollTop: 0 }, 'slow'); //IE, FF
    $('body').animate({ scrollTop: 0 }, 'slow'); //chrome, don't know if Safari works
}