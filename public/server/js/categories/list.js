$( document ).ready( function () {
    'use restrict';

    var categoriesArray; // Categories to remove

    /**
    * Thumbnail: Select
    */
    $( '.select-all' ).on( 'change', function ( ev ) {

        if ( $( this ).is( ':checked' ) ) {
            $( ".table tbody .checkbox-style-1" ).prop( "checked", true );
        } else {
            $( ".table tbody .checkbox-style-1" ).prop( "checked", false );
        }
    } );

    /**
     * Delete Seleted Tags
     */
    $( ".bulk-action-apply" ).click( function ( e ) {
        e.preventDefault();

        var $checks = $( ".table tbody :checked" );
        categoriesArray = [];

        for ( var $i = 0; $i < $checks.length; $i++ ) {
            categoriesArray.push( $checks.eq( $i ).data( 'id' ) );
        }

        if ( categoriesArray.length == 0 || $( ".bulk-action" ).val() != "delete" ) {
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
        var currentRow = $( this ).closest( 'tr' );
        var categoryId = currentRow.find( "input[type='checkbox']" ).data( 'id' );

        categoriesArray = [];
        categoriesArray.push( categoryId );

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
            url: baseUrl + '/admin/categories/bulk',
            type: 'DELETE',
            data: {
                data: categoriesArray,
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

    $( '.modal-sizes' ).magnificPopup( {
        type: 'inline',
        preloader: false,
        modal: true
    } );

    /**
     * Create new dropzone
     */
    var dropZone = new Dropzone( '#dropzone-form-image', {
        url: baseUrl + '/admin/media',
        method: 'post',
        addRemoveLinks: true,
        headers: {
            'X-CSRF-TOKEN': $( '#csrf-token' ).attr( 'content' )
        },
        init: function () {
            if ( $( '#dropzone-form-image' ).hasClass( 'dz-filled' ) ) {
                var dropzoneObj = Dropzone.forElement( "#dropzone-form-image" ),
                    mockFile = { name: "Image Name", size: 12345 };

                dropzoneObj.displayExistingFile( mockFile, 'img/products/product-1.jpg' );
            }

            $( '#dropzone-form-image' ).addClass( 'dropzone initialized' );
        }
    } );

    dropZone.on( 'success', function ( file ) {
        file.previewElement.setAttribute( 'data-id', JSON.parse( file.xhr.response ).id );
        var temp = '<div class="col-6 col-xs-4 col-sm-3 col-md-1-5 col-lg-2 col-xl-1-8 col-xxl-1-10"><div class="thumbnail"><div class="thumb-preview"><div class="centered"><a class="thumb-image" href="' + baseUrl + '/storage/' + JSON.parse( file.xhr.response ).copy_link + '"><img src="' + baseUrl + '/storage/' + JSON.parse( file.xhr.response ).copy_link + '" class="img-fluid" alt="Project"></a></div><div class="mg-thumb-options"><div class="mg-zoom"><i class="fas fa-search"></i></div><div class="mg-toolbar"><div class="mg-option checkbox-custom checkbox-inline"><input type="checkbox" id="file_' + JSON.parse( file.xhr.response ).id + '" value="1" data-id="' + JSON.parse( file.xhr.response ).id + '"><label for="file_' + JSON.parse( file.xhr.response ).id + '">Select</label></div></div></div></div></div></div>';
        $( '#gallery .row.mg-files' ).prepend( temp );
    } );

    dropZone.on( 'removedfile', function ( file ) {
        var mediaId = file.previewElement.getAttribute( 'data-id' );
        if ( mediaId ) {
            $.ajax( {
                url: baseUrl + '/admin/media/' + mediaId,
                type: 'DELETE',
                headers: {
                    'X-CSRF-TOKEN': $( '#csrf-token' ).attr( 'content' )
                }
            } );
        }
    } );

    /**
     * Thumbnail: Select
     */
    $( '#gallery' ).on( 'change', '.mg-option input[type=checkbox]', function ( ev ) {
        var wrapper = $( this ).parents( '.thumbnail' );
        if ( $( this ).is( ':checked' ) ) {
            $( '#gallery .thumbnail-selected' ).removeClass( 'thumbnail-selected' );
            $( '#gallery input:checked' ).prop( 'checked', false );
            $( this ).prop( 'checked', 'true' );
            wrapper.addClass( 'thumbnail-selected' );
        } else {
            wrapper.removeClass( 'thumbnail-selected' );
        }
    } );

    /**
     * Thumnail: Dropdown Options
     */
    $( '#gallery' ).on( 'mouseenter', '.thumbnail', function () {
        var toggle = $( this ).find( '.mg-toggle' );
        if ( toggle.parent().hasClass( 'open' ) ) {
            toggle.dropdown( 'toggle' );
        }
    } );

    /**
     * Thumbnail set
     */
    $( '.modal-set' ).click( function () {
        if ( $( "#gallery .thumbnail-selected" ).length > 0 ) {
            $( ".category-image img" ).attr( 'src', $( "#gallery .thumbnail-selected img" ).attr( 'src' ) );
            $( "#category-media-image" ).val( $( "#gallery .thumbnail-selected .mg-option input" ).data( 'id' ) );
        } else {
            $( ".category-image img" ).prop( 'src', null );
            $( "#category-media-image" ).val( '' );
        }

        $.magnificPopup.close();
    } )
} );