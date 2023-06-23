$(document).ready(function() {
    'use strict';

    $('#selling_locations').change(function() {
        if($(this).val() == 'all') {
            $('#sell_to_specific_countries_container').addClass('d-none');
        } else {
            $('#sell_to_specific_countries_container').removeClass('d-none');
        }
    })

    $('#selling_locations').trigger('change');

    $('#shipping_locations').change(function() {
        if($(this).val() != 'specific') {
            $('#ship_to_specific_countries_container').addClass('d-none');
        } else {
            $('#ship_to_specific_countries_container').removeClass('d-none');
        }
    })

    $('#shipping_locations').trigger('change');
})