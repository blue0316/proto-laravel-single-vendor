$( document ).ready( function () {
    $( '.modal-sizes' ).magnificPopup( {
        type: 'inline',
        preloader: false,
        modal: true
    } );

    $( '.modal-dismiss' ).click( function () {
        $.magnificPopup.close();
    } );

    /** 
     * Request delete using ajax
    */
    $( '#add-withdraw-form' ).submit( function ( e ) {
        e.preventDefault();
        $.ajax( {
            url: $( this ).attr( 'action' ),
            type: 'POST',
            data: {
                amount: $( "#add-amount" ).val()
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
                    text: error.responseJSON.message,
                    type: 'error',
                    addclass: 'notification-error',
                    icon: 'fas fa-times'
                } );
            }
        } );
    } );

    /**
     * Cancel Withdraw
     */
    $( '.cancel-withdraw' ).click( function ( e ) {
        e.preventDefault();
        $.ajax( {
            url: window.baseUrl + '/admin/ecommerce/vendor-withdraw/cancel/' + $( this ).data( 'id' ),
            type: 'PUT',
            headers: {
                'X-CSRF-TOKEN': $( '#csrf-token' ).attr( 'content' )
            },
            success: function () {
                location.reload();
            },
            error: function ( error ) {
                new PNotify( {
                    title: 'Error',
                    text: error.responseJSON.message,
                    type: 'error',
                    addclass: 'notification-error',
                    icon: 'fas fa-times'
                } );
            }
        } );
    } );
} )