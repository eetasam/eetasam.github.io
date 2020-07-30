$(function(){

    $(".link").click(function(e) {
        e.preventDefault();
        $link = $(this).attr("href");
        $("body").fadeOut(800,function(){
          window.location =  $link; 
        });
    });   

    $("img").bind('dragstart', function(){
        return false; 
    });

    $(window).scroll(function () {

        if ($(window).scrollTop() > 30) {
            $("header").css("background-color", "rgba(252,252,252,1)");
            $(".link_color").css("color", "#474747");
            $("#logo_color").attr('src', '../img/icons/PC.svg');
            $("header").css("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.03), 0 6px 20px 0 rgba(0, 0, 0, 0.03)");
        }
        else {
            $("header").css("background-color", "rgba(252,252,252,0)");
            $(".link_color").css("color", "#ffffff");
            $("#logo_color").attr('src', '../img/icons/PC_White.svg');
            $("header").css("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0)");
        }

        if ($(window).scrollTop() > 200) {
            $(".go_top").css("display", "block");
        }
        else {
            $(".go_top").fadeOut( 500,function(){
                $(".go_top").css("display", "none");
            });
        }

    });

    $(".go_top").on("click", function() {
        
        $("html,body").animate({scrollTop:$(".top").offset().top},500,);

    });

    $(".scroll-down").on("click", function() {
        
        $("html,body").animate({scrollTop:$(".project_window").offset().top},500,);

    });

});
