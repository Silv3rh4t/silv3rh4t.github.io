$(".content").hide();
$(".project-images").show();

$("#nav-art").click(function(){
    $(".active").removeClass("active");
    var c = $(this);
    $(this).addClass("active");
    $(".content").animate({
        opacity:0
    }, "slow", function(){
        $(".content").hide();
        $(c.attr("data-content")).show();
        $(c.attr("data-content")).animate({
            opacity:100
        }, "slow");
    });
});

$("#nav-pro").click(function(){
    $(".active").removeClass("active");
    var c = $(this);
    $(this).addClass("active");
    $(".content").animate({
        opacity:0
    }, "slow", function(){
        $(".content").hide();
        $(c.attr("data-content")).show();
        $(c.attr("data-content")).animate({
            opacity:100
        }, "slow");
    });
});

$("#nav-bio").click(function(){
    $(".active").removeClass("active");
    var c = $(this);
    $(this).addClass("active");
    $(".content").animate({
        opacity:0
    }, "slow", function(){
        $(".content").hide();
        $(c.attr("data-content")).show();
        $(c.attr("data-content")).animate({
            opacity:100
        }, "slow");
    });
});