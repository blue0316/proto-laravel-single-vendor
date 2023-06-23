$(document).ready(function () {
    'use restrict';

    var attributeToRemove; // Tags to remove    

    /**
     * Delete only one tag
     */
    $('.remove-row').click(function () {
        var attributeId = $(this).closest('tr').find("input[type='checkbox']").data('id');

        attributeToRemove = attributeId;

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
            url: baseUrl + '/admin/products/attributes/' + attributeToRemove,
            type: 'DELETE',
            headers: {
                'X-CSRF-TOKEN': $('#csrf-token').attr('content')
            },
            success: function () {
                location.reload();
            },
            error: function (error) {
                $.magnificPopup.close();
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