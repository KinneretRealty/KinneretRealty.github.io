$(document).ready(function() {
    $('#minusEmployees').click(function() {
        $('#numOfEmployees').value = str(int($('#numOfEmployees').value) - 1);
    })
})
