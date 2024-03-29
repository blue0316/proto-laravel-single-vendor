$( document ).ready( function () {
    'use strict';

    var productArray; // Media to remove

    /*
    /* Thumbnail: Select
    */
    $( '.select-all' ).on( 'change', function ( ev ) {
        if ( $( this ).is( ':checked' ) ) {
            $( ".table tbody .checkbox-style-1" ).prop( "checked", true );
        } else {
            $( ".table tbody .checkbox-style-1" ).prop( "checked", false );
        }
    } );

    /**
     * Delete Seleted Media
     */
    $( ".bulk-action-apply" ).click( function ( e ) {
        e.preventDefault();

        var $checks = $( ".table tbody :checked" );
        productArray = [];

        for ( var $i = 0; $i < $checks.length; $i++ ) {
            productArray.push( $checks.eq( $i ).data( 'id' ) );
        }

        if ( productArray.length == 0 || $( ".bulk-action" ).val() != "delete" ) {
            new PNotify( {
                title: 'Warning',
                text: 'It will not work.',
                type: 'error',
                addclass: 'notification-warning',
                icon: 'fas fa-exclamation'
            } );
        } else {
            $.magnificPopup.open( {
                items: {
                    src: '#delete-confirm-modal'
                },
                type: 'inline'
            } );
        }
    } );

    /**
    * Delete only one product
    */
    $( '.remove-row' ).click( function () {
        var productId = $( this ).closest( 'tr' ).find( "input[type='checkbox']" ).data( 'id' );

        productArray = [];
        productArray.push( productId );

        $.magnificPopup.open( {
            items: {
                src: '#delete-confirm-modal'
            },
            type: 'inline'
        } );
    } );

    /** 
     * Request delete using ajax
    */
    $( '.modal-confirm' ).click( function () {
        $.ajax( {
            url: baseUrl + '/admin/products/bulk',
            type: 'DELETE',
            data: {
                data: productArray,
            },
            headers: {
                'X-CSRF-TOKEN': $( '#csrf-token' ).attr( 'content' )
            },
            success: function () {
                location.reload();
            },
            error: function ( error ) {
                new PNotify( {
                    title: 'Error',
                    text: error.status == 401 ? error.responseText : 'Error found while database operation.',
                    type: 'error',
                    addclass: 'notification-error',
                    icon: 'fas fa-times'
                } );
            }
        } );
    } );

    /**
     * Modal dismiss
     */
    $( '.modal-dismiss' ).click( function () {
        $.magnificPopup.close();
    } );

    /**
     * Change feature property of a product
     */
    $( '#datatable-ecommerce-list .fa-star:not(".vendor")' ).click( function () {
        var $this = $( this );
        $.ajax( {
            url: baseUrl + '/admin/products/featured',
            type: 'post',
            data: {
                id: $this.data( 'id' ),
            },
            headers: {
                'X-CSRF-TOKEN': $( '#csrf-token' ).attr( 'content' )
            },
            success: function () {
                new PNotify( {
                    title: 'Success',
                    text: 'Featured property changed.',
                    type: 'success',
                    addclass: 'notification-success',
                    icon: 'fas fa-check'
                } );
                $this.toggleClass( 'fas' );
                $this.toggleClass( 'far' );
            },
            error: function ( error ) {
                new PNotify( {
                    title: 'Error',
                    text: error.status == 401 ? error.responseText : 'Error found while database operation.',
                    type: 'error',
                    addclass: 'notification-error',
                    icon: 'fas fa-times'
                } );
            }
        } );
    } );
} );