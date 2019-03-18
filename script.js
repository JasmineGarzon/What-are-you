$(".Diomedes").hide();
$(".Temperantia").hide();
$(".Sloth").hide();
$(".Sapientia").hide();
$("button").click(function() {
    var Side=$(".light").val();
    var Age=$(".Age").val();
        if(Side==="dark"&& Age>10){
         $(".Diomedes").text("Diomedes");
        $(".Diomedes").show();
        console.log("Diomedes");
        $(".Side").text("You are evil, but you manage to help others in their time of need");
        }
                else if (Side==="light" && Age>10){
                    $(".Temperantia").text("Temperantia");
                    $(".Temperantia").show();
                    console.log("Temperantia");
                    $(".Side").text("Leader, will help others in their time of need. You are very trustworthy");
                    } 
                        else if (Side==="dark" && Age<17){
                           $(".Sloth").text("Sloth"); 
                        $(".Sloth").text("Sloth");
                        $(".Sloth").show();
                        console.log("Sloth");
                       $(".Side").text("Quick, smart and cunning. Very mischievous");
                        
        } 
          else if (Side==="light" && Age<17){
              $(".Sapientia").text("Sapientia");
            $(".Sapientia").text("Sapientia");
            $(".Sapientia").show();
                    console.log("Sapientia");
                    $(".Side").text("Young leader, will help others usually stubborn");
        } 
    else{
        $(".Side").text("Error");
    }

});


