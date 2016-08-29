$(document).ready(function() {
    // navigation click actions 
    $('.scroll-link').on('click', function(event){
        event.preventDefault();
        var sectionID = $(this).attr("data-id");
        scrollToID('#' + sectionID, 750);
    });
    // scroll to top action
    $('.scroll-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop:0}, 'slow');         
    });
    // mobile nav toggle
    $('#nav-toggle').on('click', function (event) {
        event.preventDefault();
        $('#subnav').toggleClass("open");
    });

    var sections = {},
        _height  = $("p").height(),
        i        = 0;
    
    // Grab positions of our sections 
    $('.section').each(function(){
        sections[this.id] = $(this).offset().top;
    });

    $(document).scroll(function(){
        var $this = $(this),
            pos   = $this.scrollTop();
            
        for(i in sections){
            if(sections[i] > pos && sections[i] < pos + _height){
                $('a').removeClass('active');
                $('#nav_' + i).addClass('active');
                console.log(i);
            }  
        }
    });
});

// scroll function
function scrollToID(id, speed){
    var offSet = 50;
    var targetOffset = $(id).offset().top - offSet;
    var mainNav = $('#subnav');
    $('html,body').animate({scrollTop:targetOffset}, speed);
    if (mainNav.hasClass("open")) {
        mainNav.css("height", "1px").removeClass("in").addClass("collapse");
        mainNav.removeClass("open");
    }
}

if (typeof console === "undefined") {
    console = {
        log: function() { }
    };
}