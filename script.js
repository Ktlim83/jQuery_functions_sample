$(document).ready(function () {
    $('#add-class button').click(function () {
        $('#add-class p').addClass("red");
    });
    $('#slide-toggle button').click(function () {
        $('#slide-toggle img').slideToggle(2000);
    });
    $('#btn-append').click(function () {
        var html_str = ("You are appending!!!");
        $('#info-append').append(html_str);
    });
    $('#slideDown #btn-down').click(function () {
        $('#slideDown #info').slideDown("slow");
    });
    $('#slideDown #btn-up').click(function () {
        $('#slideDown #info').slideUp("slow");
    });
    $('#fade #fade-in').click(function () {
        $('#fade #info-fade').fadeIn(2000);
    });
    $('#fade #fade-out').click(function () {
        $('#fade #info-fade').fadeOut(2000);
    });

    $('#before-after #before').click(function () {
        $('#header').before("before the header?");
    });
    $('#before-after #after').click(function () {
        $('#header').after("after the header?");
    });

    $("#html-swap").click(function () {
        $('#swapHtml').html("<p>To get to the other side!</p>");
    });

    $("#text").click(function () {
        var str = $("#first").first().text();
        $("#last").last().html(str + "now its here.");
    });

    $('.attr2').click(function(){
        $("#attr").attr("class", "red")
    })













}) // end doc ready