$( document ).ready( function () {
    'use strict';

    // Add new post
    $( '.submit-button' ).click( function ( e ) {
        if ( !$( '.note-editable' ).text() ) {
            new PNotify( {
                title: 'Error',
                text: 'Please input description.',
                type: 'error',
                addclass: 'notification-error',
                icon: 'fas fa-times'
            } );
            e.stopPropagation();
            e.preventDefault();
        }
        var desc = $( '.note-editable' ).html();
        var images = [];
        $( '.mg-post-images .thumbnail .thumb-preview .thumb-image' ).each( function () {
            images.push( $( this ).data( 'id' ) );
        } );
        $( '#description' ).val( desc );
        $( '#post-media-images' ).val( images );
    } );


    // Deleete current post
    var id;
    $( '.delete-button' ).click( function () {
        id = $( this ).data( 'id' );

        $.magnificPopup.open( {
            items: {
                src: '#delete-confirm-modal'
            },
            type: 'inline'
        } );
    } );

    $( '.modal-confirm' ).click( function () {
        $.ajax( {
            url: baseUrl + '/admin/posts/' + id,
            type: 'DELETE',
            headers: {
                'X-CSRF-TOKEN': $( '#csrf-token' ).attr( 'content' )
            },
            success: function () {
                location.href = baseUrl + '/admin/posts/';
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
        if ( $( '#gallery .no-results' ) ) {
            $( '#gallery .no-results' ).remove();
        }

        file.previewElement.setAttribute( 'data-id', JSON.parse( file.xhr.response ).id );
        var temp = '<div class="col-6 col-xs-4 col-sm-3 col-md-1-5 col-lg-2 col-xl-1-8 col-xxl-1-10">\
                        <div class="thumbnail">\
                            <div class="thumb-preview">\
                                <div class="centered">\
                                    <a class="thumb-image" href="' + baseUrl + '/storage/' + JSON.parse( file.xhr.response ).copy_link + '">\
                                        <img src="' + baseUrl + '/storage/' + JSON.parse( file.xhr.response ).copy_link + '" class="img-fluid" alt="Project" />\
                                    </a>\
                                </div>\
                            <div class="mg-thumb-options">\
                                <div class="mg-zoom">\
                                    <i class="fas fa-search"></i>\
                                </div>\
                            <div class="mg-toolbar">\
                                <div class="mg-option checkbox-custom checkbox-inline">\
                                    <input type="checkbox" id="file_' + JSON.parse( file.xhr.response ).id + '" value="1" data-id="' + JSON.parse( file.xhr.response ).id + '" />\
                                    <label for="file_' + JSON.parse( file.xhr.response ).id + '">Select</label>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </div>';
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

    /*
    /* Thumbnail: Select
    */
    $( '#gallery' ).on( 'change', '.mg-option input[type=checkbox]', function ( ev ) {
        var wrapper = $( this ).parents( '.thumbnail' );
        if ( $( this ).is( ':checked' ) ) {
            wrapper.addClass( 'thumbnail-selected' );
        } else {
            wrapper.removeClass( 'thumbnail-selected' );
        }
    } );

    /*
    Thumnail: Dropdown Options
    */
    $( '#gallery' ).on( 'mouseenter', '.thumbnail', function () {
        var toggle = $( this ).find( '.mg-toggle' );
        if ( toggle.parent().hasClass( 'open' ) ) {
            toggle.dropdown( 'toggle' );
        }
    } );


	/*
	Thumbnail: Select
	*/
    $( '.mg-option input[type=checkbox]' ).on( 'change', function ( ev ) {
        var wrapper = $( this ).parents( '.thumbnail' );
        if ( $( this ).is( ':checked' ) ) {
            wrapper.addClass( 'thumbnail-selected' );
        } else {
            wrapper.removeClass( 'thumbnail-selected' );
        }
    } );


    /**
     * Thumbnail set
     */
    $( '.modal-set' ).click( function () {
        var $gallery = $( '.media-gallery .mg-post-images' );

        $( '#gallery .thumbnail-selected' ).each( function () {
            var node = document.createElement( 'div' );
            var $this = $( this );
            var imgSrc = $this.find( 'img' ).attr( 'src' );
            var imgId = $this.find( 'input[type=checkbox]' ).data( 'id' );
            if ( $gallery.parent().find( '[data-id="' + imgId + '"]' ).length == 0 ) {
                $( node ).addClass( 'col-6 col-md-4 col-lg-3' );
                $( node ).append( '\
                    <div class="thumbnail">\
                        <div class="thumb-preview">\
                            <div class="centered">\
                                <a class="thumb-image" href="" data-id="' + imgId + '">\
                                    <img src="' + imgSrc + '" class="img-flulid" alt="Project">\
                                </a>\
                            </div>\
                            <div class="mg-thumb-options">\
                                <div class="mg-remove"><i class="fas fa-times"></i></div>\
                            </div>\
                        </div>\
                    </div>\
                ');
                $gallery.append( node );
            }

        } );


        if ( $( "#gallery .thumbnail-selected" ).length > 0 ) {
            $( ".category-image img" ).attr( 'src', $( "#gallery .thumbnail-selected img" ).attr( 'src' ) );
            $( "#category-media-image" ).val( $( "#gallery .thumbnail-selected .mg-option input" ).data( 'id' ) );
        } else {
            $( ".category-image img" ).prop( 'src', null );
            $( "#category-media-image" ).val( '' );
        }

        $.magnificPopup.close();
    } )

    /**
     * Post Image remove
     */

    $( '.ecommerce-form' ).on( 'click', '.mg-remove', function () {
        var currentThumb = $( this ).closest( '.thumbnail' ).parent();
        currentThumb.remove();
    } );
} )