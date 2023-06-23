$( document ).ready( function () {
    'use strict';

    $( '#product_enable_reviews' ).change( function () {
        if ( $( this ).is( ':checked' ) ) {
            $( '.product-ratings-container' ).removeClass( 'd-none' );
        } else {
            $( '.product-ratings-container' ).addClass( 'd-none' );
        }
    } );

    $( '#product_enable_reviews' ).trigger( 'change' );

    $( '#product_enable_star_rating' ).change( function () {
        if ( $( this ).is( ':checked' ) ) {
            $( '.product-star-rating-required-container' ).removeClass( 'd-none' );
        } else {
            $( '.product-star-rating-required-container' ).addClass( 'd-none' );
        }
    } );

    $( '#product_enable_star_rating' ).trigger( 'change' );

    $( '#product_enable_stock_management' ).change( function () {
        if ( $( this ).is( ':checked' ) ) {
            $(/*'.hold-stock-container, .notification-container, */ '.low-stock-threshold-container, .out-of-stock-threshold-container' ).removeClass( 'd-none' );
        } else {
            $( '.hold-stock-container, .notification-container, .low-stock-threshold-container, .out-of-stock-threshold-container' ).addClass( 'd-none' );
        }
    } );

    $( '#product_enable_stock_management' ).trigger( 'change' );
} )