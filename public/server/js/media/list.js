$(document).ready(function() {
    'use strict';

    var mediaArray; // Media to remove

    /**
     * Filter media table
     */
    $("#filter-by").change(function() {
        $("#media-list-form").submit();
    });

    /*
    /* Thumbnail: Select
    */
    $('.select-all').on('change', function(ev) {
        
        if($(this).is(':checked')) {
            $(".table tbody .checkbox-style-1").prop("checked", true);
        } else {
            $(".table tbody .checkbox-style-1").prop("checked", false);
        }
    });
    
    /**
     * Delete Seleted Media
     */
    $(".bulk-action-apply").click(function(e) {
        e.preventDefault();

        var $checks = $(".table tbody :checked");
        mediaArray = [];
    
        for(var $i = 0; $i < $checks.length; $i++) {
            mediaArray.push($checks.eq($i).data('id'));
        }

        if(mediaArray.length == 0 || $(".bulk-action").val() != "delete") {
            new PNotify({
                title: 'Warning',
                text: 'It will not work.',
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
        }
    });

    /**
     * Delete only one tag
     */
    $('.remove-row').click(function() {
        var mediaId = $(this).closest('tr').find("input[type='checkbox']").data('id');

        mediaArray = [];
        mediaArray.push(mediaId);

        $.magnificPopup.open({
            items: {
                src: '#delete-confirm-modal'
            },
            type: 'inline'
        });
    });
    
    /** 
     * Request delete using ajax
    */
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
});