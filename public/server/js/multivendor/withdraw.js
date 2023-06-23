$( document ).ready( function () {
    /**
     * Cancel Withdraw
     */
    $( '.on-default' ).click( function ( e ) {
        e.preventDefault();
        $.ajax( {
            url: window.baseUrl + '/admin/multivendor/' + $( this ).data( 'title' ) + '/' + $( this ).data( 'id' ),
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