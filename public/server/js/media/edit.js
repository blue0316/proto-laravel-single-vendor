$(document).ready(function() {
    'use strict';
    
    var id;
    $('.delete-button').click(function(e) {
        e.preventDefault();
        id = $(this).data('id');

        $.magnificPopup.open({
            items: {
                src: '#delete-confirm-modal'
            },
            type: 'inline'
        });
    });

    $('.modal-confirm').click(function() {
        $.ajax({
            url: baseUrl + '/admin/media/' + id,
            type: 'DELETE',
            headers: {
                'X-CSRF-TOKEN': $('#csrf-token').attr('content')
            },
            success: function() {
                location.href = baseUrl + '/admin/media/grid';
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
})