$( document ).ready( function () {
    'use strict';

    var taxRates;
    $( '.filter-by' ).change( function () {
        $( '.ecommerce-tax-rate-form' ).submit();
    } );

    /*
    /* tax class select
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
    $( '.bulk-action-apply' ).click( function ( e ) {
        e.preventDefault();

        var $checks = $( '.table tbody :checked' );
        taxRates = [];

        for ( var $i = 0; $i < $checks.length; $i++ ) {
            taxRates.push( $checks.eq( $i ).data( 'id' ) );
        }

        if ( taxRates.length == 0 || $( '.bulk-action' ).val() != 'delete' ) {
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
     * Delete only one tag
     */
    $( '.remove-row' ).click( function () {
        var taxId = $( this ).data( 'id' );

        taxRates = [];
        taxRates.push( taxId );

        $.magnificPopup.open( {
            items: {
                src: '#delete-confirm-modal'
            },
            type: 'inline'
        } );
    } );

    /*
	Sizes
	*/
    $( '.modal-add, .edit-tax-rate' ).magnificPopup( {
        type: 'inline',
        preloader: false,
        modal: true
    } );

    /**
     * Tax rate modal form
     */
    $( '#tax-rate-add-form' ).submit( function ( e ) {
        e.preventDefault();
        if ( !$( this ).data( 'id' ) ) {
            new PNotify( {
                title: 'Error',
                text: 'Please save tax rate first',
                type: 'error',
                addclass: 'notification-error',
                icon: 'fas fa-times'
            } );
            $.magnificPopup.close();
        }

        var type = 'POST';
        var url = baseUrl + '/admin/ecommerce/settings/tax/tax-rate';
        if ( $( this ).data( 'rate-id' ) ) {
            type = 'PUT';
            url = baseUrl + '/admin/ecommerce/settings/tax/tax-rate/' + $( this ).data( 'rate-id' )
        }

        $.ajax( {
            url: url,
            type: type,
            data: {
                'name': $( '#name' ).val(),
                'country': $( '#country' ).val(),
                'state': $( '#state' ).val(),
                'postcode': $( '#postcode' ).val(),
                'city': $( '#city' ).val(),
                'rate': $( '#rate' ).val(),
                'is_shipping': $( '#is_shipping' ).prop( 'checked' ),
                'tax_type_id': $( this ).data( 'id' )
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
     * Modal edit
     */
    $( '.edit-tax-rate' ).click( function () {
        var $tds = $( this ).closest( 'tr' ).children();
        var temp = $tds.eq( 1 ).text();
        if ( temp == '*' ) {
            $( '#name' ).attr( 'placeholder', '*' )
        } else {
            $( '#name' ).val( temp );
        }

        temp = $tds.eq( 2 ).text();
        if ( temp == '*' ) {
            $( '#country' ).attr( 'placeholder', '*' )
        } else {
            $( '#country' ).val( temp );
        }

        temp = $tds.eq( 3 ).text();
        if ( temp == '*' ) {
            $( '#state' ).attr( 'placeholder', '*' )
        } else {
            $( '#state' ).val( temp );
        }

        temp = $tds.eq( 4 ).text();
        if ( temp == '*' ) {
            $( '#postcode' ).attr( 'placeholder', '*' )
        } else {
            $( '#postcode' ).val( temp );
        }

        temp = $tds.eq( 5 ).text();
        if ( temp == '*' ) {
            $( '#city' ).attr( 'placeholder', '*' )
        } else {
            $( '#city' ).val( temp );
        }

        temp = $tds.eq( 6 ).text();
        if ( temp == '*' ) {
            $( '#rate' ).attr( 'placeholder', '*' )
        } else {
            $( '#rate' ).val( temp );
        }

        $( '#is_shipping' ).prop( 'checked', $tds.eq( 7 ).text() == 'Enabled' ? true : false );
        $( '#tax-rate-add-form' ).data( 'rate-id', $( this ).data( 'id' ) );
    } );


    /** 
     * Request delete using ajax
    */
    $( '.modal-confirm' ).click( function () {
        $.ajax( {
            url: baseUrl + '/admin/ecommerce/settings/tax/tax-rate/bulk',
            type: 'DELETE',
            data: {
                data: taxRates,
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

    $( '.modal-dismiss' ).click( function () {
        $.magnificPopup.close();
    } );
} )