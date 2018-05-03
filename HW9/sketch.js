$(document).ready(function() {

    var data = {
        website: "",,

        setwebsite: function(value) {
            data.website = value;
            $('#website').val(value);
        },


        populaterandomwebsite: function() {
            $('#website').html(data.website);
        },


    $('#submitrandom').on('click', function() {
        $.getJSON('', function(result) {
            data.website();
        });
    });

    $('#clear-button').on('click', function() {
        data.clearInput();
    });

});
