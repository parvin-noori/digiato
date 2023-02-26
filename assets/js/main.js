$(document).ready(function () {
    //variables
    var searchBtn = document.getElementById('searchBtn');
    var searchArea = document.getElementById('searchArea');


    //open search form inside header
    $('#searchArea').click(function (e) {
        e.stopPropagation();
        $(this).addClass('active')
    });

    //close search form after click on window
    window.onclick = function (event) {
        if (event.target !== $('#searchArea')) {
            $('#searchArea').removeClass('active')
        }
    }
})