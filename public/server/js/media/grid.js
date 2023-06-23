$(document).ready(function() {
    'use strict';

    /*
    /* Thumbnail: Select
    */
    $('.mg-option input[type=checkbox]').on('change', function(ev) {
        var wrapper = $(this).parents('.thumbnail');
        if($(this).is(':checked')) {
            wrapper.addClass('thumbnail-selected');
        } else {
            wrapper.removeClass('thumbnail-selected');
        }
    });

    /**
     * Filter media table
     */
    $("#filter-by").change(function() {
        $("#media-grid-form").submit();
    });
    
    /*
    Toolbar: Select All
    */
    $('#mg-select-all').on('click', function(ev) {
        ev.preventDefault();
        
        var $this = $(this),
            $label = $this.find('> span'),
            $checks = $('.mg-option input[type=checkbox]');
    
        if($this.attr('data-all-selected')) {
            $this.removeAttr('data-all-selected');
            $checks.prop('checked', false).trigger('change');
            $label.html($label.data('all-text'));
        } else {
            $this.attr('data-all-selected', 'true');
            $checks.prop('checked', true).trigger('change');
            $label.html($label.data('none-text'));
        }
    });
    
    /**
     * Delete Seleted Media
     */
    $("#mg-delete-all").click(function(e) {
        e.preventDefault();

        var $checks = $(".mg-files :checked");
        var mediaArray = [];
    
        for(var $i = 0; $i < $checks.length; $i++) {
            mediaArray.push($checks.eq($i).data('id'));
        }
    
        if(mediaArray.length == 0) {
            new PNotify({
                title: 'Warning',
                text: 'Please select at least one.',
                type: 'error',
                addclass: 'notification-warning',
                icon: 'fas fa-exclamation'
            });
        } else {
            $.magnificPopup.open({
                items: {
                    src: '#delete-confirm-modal'
                },
                type: 'inline'
            });

            $('.modal-confirm').click(function() {
                $.ajax({
                    url: baseUrl + '/admin/media/bulk',
                    type: 'DELETE',
                    data: {
                        data: mediaArray,
                    },
                    headers: {
                        'X-CSRF-TOKEN': $('#csrf-token').attr('content')
                    },
                    success: function() {
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
                });
            });
        
            $('.modal-dismiss').click(function() {
                $.magnificPopup.close();
            });
        }
    });
    
    /**
     * Image Preview: Lightbox
     */
    $('.thumb-preview a.thumb-image[href]').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }
    });
    
    $('.thumb-preview .mg-zoom').on('click.lightbox', function( ev ) {
        ev.preventDefault();
        $(this).closest('.thumb-preview').find('a.thumb-image').triggerHandler('click');
    });
    
    /**
     * Thumnail: Dropdown Options
     */
    $('.thumbnail').on('mouseenter', function() {
        var toggle = $(this).find('.mg-toggle');
        if ( toggle.parent().hasClass('open') ) {
            toggle.dropdown('toggle');
        }
    });
});