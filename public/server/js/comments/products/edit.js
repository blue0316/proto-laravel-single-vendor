$(document).ready(function () {
    'use strict';

    // Update comment
    $('.submit-button').click(function () {
        var desc = $('.note-editable').html();
        $('#content').val(desc);
    })

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
            url: window.baseUrl + '/admin/products/comments/' + id,
            type: 'DELETE',
            headers: {
                'X-CSRF-TOKEN': $('#csrf-token').attr('content')
            },
            success: function () {
                location.href = window.baseUrl + '/admin/products/comments';
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