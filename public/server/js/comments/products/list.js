$( document ).ready( function () {
    'use restrict';

    var commentsArray; // Tags to remove    

    /**
    * Thumbnail: Select
    */
    $( '.select-all' ).on( 'change', function () {

        if ( $( this ).is( ':checked' ) ) {
            $( ".table tbody .select-item.checkbox-style-1" ).prop( "checked", true );
        } else {
            $( ".table tbody .select-item.checkbox-style-1" ).prop( "checked", false );
        }
    } );

    /**
     * Delete Seleted Tags
     */
    $( ".bulk-action-apply" ).click( function ( e ) {
        e.preventDefault();

        var $checks = $( ".table tbody :checked" );
        commentsArray = [];

        for ( var $i = 0; $i < $checks.length; $i++ ) {
            commentsArray.push( $checks.eq( $i ).data( 'id' ) );
        }

        if ( commentsArray.length == 0 || $( ".bulk-action" ).val() != "delete" ) {
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
    $( '#post-replies-list-form' ).on( 'click', '.remove-row', function () {
        var currentRow = $( this ).closest( 'tr' );
        var commentId = currentRow.find( "input[type='checkbox']" ).data( 'id' );

        commentsArray = [];
        commentsArray.push( commentId );

        $.magnificPopup.open( {
            items: {
                src: '#delete-confirm-modal'
            },
            type: 'inline'
        } );
    } );

    /** 
     * Request delete using ajax.
    */

    $( '.modal-confirm' ).click( function () {
        $.ajax( {
            url: baseUrl + '/admin/products/comments/bulk',
            type: 'DELETE',
            data: {
                data: commentsArray,
            },
            headers: {
                'X-CSRF-TOKEN': $( '#csrf-token' ).attr( 'content' )
            },
            success: function () {
                location.reload();
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

    $( '.modal-dismiss' ).click( function () {
        $.magnificPopup.close();
    } );


    /**
     * Toggle Comment's approved status.
     */

    $( '#post-replies-list-form' ).on( 'change', '.approved-toggle', function () {
        var currentRow = $( this ).closest( 'tr' );
        var commentId = currentRow.find( "input[type='checkbox']" ).data( 'id' );
        var url = baseUrl + '/admin/products/comments/' + commentId;

        $.ajax( {
            url: url,
            type: 'POST',
            data: {
                _method: 'PUT',
                approved: $( this ).is( ':checked' ) ? 1 : 0
            },
            headers: {
                'X-CSRF-TOKEN': $( '#csrf-token' ).attr( 'content' )
            },
            success: function () {
                new PNotify( {
                    title: 'Success',
                    text: 'Review status changed.',
                    type: 'success',
                    addclass: 'notification-success',
                    icon: 'fas fa-check'
                } );
            },
            error: function ( e ) {
            }
        } );
    } );


    /**
     * Add Reply
     */
    $( '#post-replies-list-form' ).on( 'click', '.reply-review', function () {
        var $currentRow = $( this ).closest( 'tr' );
        $( '.reply-row' ).insertAfter( $currentRow );
        $currentRow.addClass( 'reply-to' );
    } );

    $( '.submit-reply' ).click( function () {
        if ( !$( '.reply-row .note-editable' ).text() ) {
            new PNotify( {
                title: 'Error',
                text: 'Please type comment.',
                type: 'error',
                addclass: 'notification-error',
                icon: 'fas fa-times'
            } );
            return;
        }

        var author_name = $( '#username' ).val();
        var author_email = $( '#useremail' ).val();
        var content = $( '.reply-row .note-editable' ).html();

        var parent = $( '.reply-to' ).find( "input[type='checkbox']" ).data( 'id' );
        var product_id = $( '.reply-to' ).find( '.response-to' ).data( 'product-id' );

        $.ajax( {
            url: baseUrl + '/admin/products/comments',
            type: 'POST',
            data: {
                author_name: author_name,
                author_email: author_email,
                content: content,
                parent: parent,
                product_id: product_id
            },
            headers: {
                'X-CSRF-TOKEN': $( '#csrf-token' ).attr( 'content' )
            },
            success: function () {
                location.reload();
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

    $( '.cancel-reply' ).click( function () {
        if ( window.confirm( 'Do you really want to discard changes?' ) ) {
            $( '.reply' ).append( $( '.reply-row' ) );
            $( '.reply-row .note-editable' ).html( '' );
            $( '.reply-to' ).removeClass( 'reply-to' );
        }
    } );
} );