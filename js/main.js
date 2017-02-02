function searchWiki(term) {
    url = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=";
    url += term;
    $.get(url, function(response) {
        var resList = response.query.search;
        for (var i = 0; i < resList.length; i++ ) {
            title = resList[i].title;
            snippet = resList[i].snippet;
            var txt1 = "<h3>" + title + "</h3>";
            var txt2 = "<p>" + snippet + "</p>";
            $(".container").append("<div class='search-res'>" +
                txt1 + txt2 + "</div>");
        }
    }, "jsonp");
}

$(document).ready(function() {
    //Remove search icon and add input field
    $(".search-icon").on("click", function() {
        $(this).remove();
        $(".search").append("<input type='search' name='term' class='keyword'>");
    });

    //Launch search on enter
    $(".search").on("keydown", function(event) {
        if (event.keyCode == 13) {
            $(".heading").css("margin", "0px");
            var term = $(".keyword").val();
            if (term.length > 0) {
                searchWiki(term);
            }

        }
    });

    //Style icon on mouseover
    $(".search-icon").hover(
        function() {
            $(this).css("color", "#cc8500")
                .css("cursor", "pointer");
        },
        function() {
            $(this).css("color", "#ffa500");
        }
    );

})



