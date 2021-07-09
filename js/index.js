$("#content").hide();
setTimeout(function(){
    $("#loading").hide();
    $("#content").show();
    $(".header").animate({
        left: "+=10px",
        opacity: 1
    },1000, function(){
        $(".text-intro").animate({
            left: "+=10px",
            opacity: 1
        },500, function(){
            $(".sections").animate({
                left: "+=10px",
                opacity: 1
            },1000, function(){
                
            });
        });
    });
}, 1000);