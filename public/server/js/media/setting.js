$(document).ready(function() {
    'use strict';

    $('#btn-reset').click(function() {
        $('.card-body input').val('');

        $("#media-setting-form").submit();
    })
})