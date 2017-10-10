$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $("#sidebarInclude").toggleClass("col-md-2");
        $("#sidebarInclude").toggleClass("col-md-1");
        $("#contentTable").toggleClass("col-md-10");
        $("#contentTable").toggleClass("col-md-11");
    });

});