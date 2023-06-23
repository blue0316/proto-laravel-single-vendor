$(document).ready(function() {
    'use strict';

    $('#selling_location').change(function() {
        if($(this).val() == 'all') {
            $('#sell_to_specific_countries_container').addClass('d-none');
        } else {
            $('#sell_to_specific_countries_container').removeClass('d-none');
        }
    })

    $('#selling_location').trigger('change');

    $('#shipping_location').change(function() {
        if($(this).val() != 'specific') {
            $('#ship_to_specific_countries_container').addClass('d-none');
        } else {
            $('#ship_to_specific_countries_container').removeClass('d-none');
        }
    })

    $('#shipping_location').trigger('change');
})