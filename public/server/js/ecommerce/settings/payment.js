$( document ).ready( function () {
    $( '.payment-method-checkbox' ).change( function ( e ) {
        $.ajax( {
            url: baseUrl + '/admin/ecommerce/settings/payment/' + $( this ).data( 'id' ) + '/changeStatus',
            type: 'POST',
            data: {
                'enabled': $( this )[ 0 ].checked
            },
            headers: {
                'X-CSRF-TOKEN': $( '#csrf-token' ).attr( 'content' )
            },
            success: function ( response ) {
                new PNotify( {
                    title: 'Success',
                    text: 'Payment status changed.',
                    type: 'success',
                    addclass: 'notification-success',
                    icon: 'fas fa-check'
                } );
            },
            error: function(error) {
                new PNotify({
                    title: 'Error',
                    text: error.status == 401 ? error.responseText : 'Error found while database operation.',
                    type: 'error',
                    addclass: 'notification-error',
                    icon: 'fas fa-times'
                });
            }
        } );
    } );
} );