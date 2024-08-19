$('#name').keyup(function () {
$.ajax({
    type: "GET",
    url :"server.php",
    data:{nameValue: $('#name').val() },
    DataType:"JSON",
    success: function (respomse) {
        $('#result').text(respomse);
    }
});
});