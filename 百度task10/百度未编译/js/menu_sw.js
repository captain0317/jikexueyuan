$(document).ready(function() {
    $("#one").on('click', function() {
        $(this).parent().css({ "background": "#9a9da2", "background-image": 'url("img/user.png")', "background-repeat": 'no-repeat', "background-position": '15px center' });
        $("#two").parent().css({ background: "#ffffff" });
        $("#three").parent().css({ background: "#ffffff" })
        $("#myFocus .guide").css({ display: "block" });
        $("#myFocus .recommend").css({ display: "none" });
        $("#myFocus .direct").css({ display: "none" });
    });
    $("#two").on('click', function() {
        $(this).parent().css({ background: "#9a9da2" });
        $("#one").parent().css({ background: "#ffffff", "background-image": 'url("img/user.png")', "background-repeat": 'no-repeat', "background-position": '15px center' });
        $("#three").parent().css({ background: "#ffffff" })
        $("#myFocus .recommend").css({ display: "block" });
        $("#myFocus .guide").css({ display: "none" });
        $("#myFocus .direct").css({ display: "none" });
    });
    $("#three").on('click', function() {
        $(this).parent().css({ background: "#9a9da2" });
        $("#one").parent().css({ background: "#ffffff", "background-image": 'url("img/user.png")', "background-repeat": 'no-repeat', "background-position": '15px center' });
        $("#two").parent().css({ background: "#ffffff" })
        $("#myFocus .direct").css({ display: "block" });
        $("#myFocus .recommend").css({ display: "none" });
        $("#myFocus .guide").css({ display: "none" });
    });
});