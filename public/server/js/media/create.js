$(document).ready(function() {
    'use strict';
    /**
     * Create new dropzone
     */
    var dropZone = new Dropzone('#dropzone-form-image', {
        url: baseUrl + '/admin/media',
        method: 'post',
        addRemoveLinks: true,
        chunking: true,
        headers: {
            'X-CSRF-TOKEN': $('#csrf-token').attr('content')
        },
        init: function() {
            if( $('#dropzone-form-image').hasClass('dz-filled') ) {
                var dropzoneObj = Dropzone.forElement("#dropzone-form-image"),
                    mockFile = { name: "Image Name", size: 12345 };

                    dropzoneObj.displayExistingFile(mockFile, 'img/products/product-1.jpg');
            }

            $('#dropzone-form-image').addClass('dropzone initialized');
        }
    });

    dropZone.on('success', function(file) {
        file.previewElement.setAttribute('data-id', JSON.parse(file.xhr.response)['id']);
    });

    dropZone.on('removedfile', function(file) {
        var mediaId = file.previewElement.getAttribute('data-id');
        if(mediaId) {
            $.ajax({
                url: baseUrl + '/admin/media/' + mediaId,
                type: 'DELETE',
                headers: {
                    'X-CSRF-TOKEN': $('#csrf-token').attr('content')
                }
            });
        }
    });
});