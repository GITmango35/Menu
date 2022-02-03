// LAB 2 Last VERSION 
$(document).ready(function() {
    
    // 2 boutons (qui toggle)
    $("button#restoreMe").hide();
    $("button#vegOn").show();

// Fonction pour afficher le menu vegetarien.
$("#vegOn").click(function(){

    $("button#restoreMe").toggle();
    $("button#vegOn").toggle();
    $("#proscuttio").replaceWith("<li id='proscuttio'>Tofu</li>");
    $("#lamb_shoulder").replaceWith("<li id='lamb_shoulder'><em><b>Tofu</b></em></li>");
    $("#eggs").replaceWith("<li id='eggs'><em><b>Tofu</b></em></li>");
    $("#chicken").replaceWith("<li id='chicken'><em><b>Tofu</b></em></li>");
    $("#chick").replaceWith("<li id='chick'><em><b>Tofu</b></em></li>");
    $("#steak").replaceWith("<li id='steak'><em><b>Tofu</b></em></li>");
    $("#pork").replaceWith("<li id='pork'><em><b>Tofu</b></em></li>");
    $('.leaf').prepend('<img src="images/leaf.png" />');
    $(".fishes").hide();
    $(".hamburger").replaceWith("<li class='mushroom'><em><b>Portobello Mushroom</b></em></li>");
}); 

// Fonction pour afficher le menu original.
$("#restoreMe").click(function(){
    
    $("button#restoreMe").toggle();
    $("button#vegOn").toggle();
    $("#proscuttio").replaceWith("<li id='proscuttio'>proscuttio</li>");
    $("#lamb_shoulder").replaceWith("<li id='lamb_shoulder'>lamb shoulder</li>");
    $("#eggs").replaceWith("<li id='eggs'>eggs</li>");
    $("#chicken").replaceWith("<li id='chicken'>chicken</li>");
    $("#chick").replaceWith("<li id='chick'>charbroiled or blackened chicken</li>");
    $("#steak").replaceWith("<li id='steak'>grilled steak</li>");
    $("#pork").replaceWith("<li id='pork'>roasted pork</li>");
    $(".mushroom").replaceWith("<li class='hamburger'>hamburger</li>");
    $(".fishes").show();
    $(".leaf > img").remove();
});
 
});