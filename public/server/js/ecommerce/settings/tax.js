$(document).ready(function() {
    'use strict';

    var taxArray;
    $('.filter-by').change(function() {
       $('.ecommerce-tax-class-form').submit();
    });

    /*
    /* tax class select
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
    $('.bulk-action-apply').click(function(e) {
        e.preventDefault();

        var $checks = $('.table tbody :checked');
        taxArray = [];
    
        for(var $i = 0; $i < $checks.length; $i++) {
            taxArray.push($checks.eq($i).data('id'));
        }

        if(taxArray.length == 0 || $('.bulk-action').val() != 'delete') {
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
        var taxId = $(this).closest('tr').find("input[type='checkbox']").data('id');

        taxArray = [];
        taxArray.push(taxId);

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
            url: baseUrl + '/admin/ecommerce/settings/tax/bulk',
            type: 'DELETE',
            data: {
                data: taxArray,
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
})