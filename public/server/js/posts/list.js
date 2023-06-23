$(document).ready(function () {
    'use restrict';

    var postsArray; // Tags to remove    

    /**
    * Thumbnail: Select
    */
    $('.select-all').on('change', function (ev) {

        if ($(this).is(':checked')) {
            $(".table tbody .checkbox-style-1").prop("checked", true);
        } else {
            $(".table tbody .checkbox-style-1").prop("checked", false);
        }
    });

    /**
     * Delete Seleted Tags
     */
    $(".bulk-action-apply").click(function (e) {
        e.preventDefault();

        var $checks = $(".table tbody :checked");
        postsArray = [];

        for (var $i = 0; $i < $checks.length; $i++) {
            postsArray.push($checks.eq($i).data('id'));
        }

        if (postsArray.length == 0 || $(".bulk-action").val() != "delete") {
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
    $('.remove-row').click(function () {
        var tagId = $(this).closest('tr').find("input[type='checkbox']").data('id');

        postsArray = [];
        postsArray.push(tagId);

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

    $('.modal-confirm').click(function () {
        $.ajax({
            url: baseUrl + '/admin/posts/bulk',
            type: 'DELETE',
            data: {
                data: postsArray,
            },
            headers: {
                'X-CSRF-TOKEN': $('#csrf-token').attr('content')
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
        });
    });

    $('.modal-dismiss').click(function () {
        $.magnificPopup.close();
    });
});