$(function () {
    $(function () {
        $(".accordion").accordion();
    });
    $('.accordion').accordion({
        active: false,
        collapsible: true,
        heightStyle: "content",
    });

    $(".accordion").click(function () {
        console.log(active);
        $("#folder" + active).switchClass("fa-folder-open", "fa-folder");
        active = $(".accordion").accordion("option", "active");
        console.log(active);
        $("#folder" + active).switchClass("fa-folder", "fa-folder-open");
    });
});