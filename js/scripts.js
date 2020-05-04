$(document).ready(function () {
        $("#mycarousel").carousel({ interval: 3000 });
                $("#carouselButton").click(function () {
                    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
    $("#carouselButton").children("span").removeClass('fa-pause');
    $("#carouselButton").children("span").addClass('fa-play');
}
                    else if ($("#carouselButton").children("span").hasClass('fa-play')) {
        $("#mycarousel").carousel('cycle');
    $("#carouselButton").children("span").removeClass('fa-play');
    $("#carouselButton").children("span").addClass('fa-pause');
}
});
});
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var modal2 = document.getElementById('myModal2');
var btn2 = document.getElementById("myBtn2");
var span2 = document.getElementsByClassName("close")[1];
btn.onclick = function () {
            modal2.style.display = "none";
        modal.style.display = "block";
}
            span.onclick = function () {
            modal.style.display = "none";
    }
            btn2.onclick = function () {
            modal2.style.display = "block";

    }
            span2.onclick = function () {
            modal2.style.display = "none";
    }
            window.onclick = function (event) {
                if (event.target == modal2) {
            modal2.style.display = "none";
    }
                else if (event.target == modal) {
            modal.style.display = "none";
    }
}
