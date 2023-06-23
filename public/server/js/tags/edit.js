$(document).ready(function () {
    'use strict';

    var id;
    $('.delete-button').click(function () {
        id = $(this).data('id');

        $.magnificPopup.open({
            items: {
                src: '#delete-confirm-modal'
            },
            type: 'inline'
        });
    });

    $('.modal-confirm').click(function () {
        $.ajax({
            url: baseUrl + '/admin/tags/' + id,
            type: 'DELETE',
            headers: {
                'X-CSRF-TOKEN': $('#csrf-token').attr('content')
            },
            success: function () {
                location.href = baseUrl + '/admin/tags/' + $('#tag-type').val();
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
})