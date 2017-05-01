$("#navbar").on("click", "a", function() {
    var parent = $(this).parent().parent();
    var children = $(parent).find("a");
    var lenght = children.length;
    for (var i = 0; i < lenght; i += 1) {
        $(children[i]).removeClass("clickedNavBar");
    }
    $(this).addClass("clickedNavBar");
});