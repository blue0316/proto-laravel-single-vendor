$(document).ready(function () {
    'use strict';

    var zoneArray = [];
    var methodId;
    var $tr;
    $('.add-shipping-button').click(function () {
        new PNotify({
            title: 'Warning',
            text: 'Please save shipping zone first',
            type: 'error',
            addclass: 'notification-warning',
            icon: 'fas fa-exclamation'
        });
    });

    $('.create-shipping-button').click(function () {
        var method = $('.method-add-select').val();
        var shipping_zone_id = $('.ecommerce-setting-form').data('zone-id');
        var name, description, type;

        if (method == 'free') {
            name = 'Free shipping';
            description = 'Lets you charge a fixed rate for shipping.';
            type = 'free';
        } else if (method == 'flat') {
            name = 'Flat rate';
            description = 'Free shipping is a special method which can be triggered with coupons and minimum spends.';
            type = 'flat';
        } else if (method = 'local') {
            name = 'Local pickup';
            description = 'Allow customers to pick up orders themselves. By default, when using local pickup store base taxes will apply regardless of customer address.';
            type = 'local'
        }

        $.ajax({
            url: baseUrl + '/admin/ecommerce/settings/shipping/method',
            type: 'POST',
            data: {
                'name': name,
                'description': description,
                'shipping_zone_id': shipping_zone_id,
                'type': type
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

    $('.switch input').change(function (e) {
        var id = $(this).closest('tr').data('id');

        $.ajax({
            url: baseUrl + '/admin/ecommerce/settings/shipping/method/status',
            type: 'POST',
            data: {
                'id': id,
                'enabled': $(this).prop('checked') ? 1 : 0
            },
            headers: {
                'X-CSRF-TOKEN': $('#csrf-token').attr('content')
            },
            success: function () {
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
    })

    $('.delete-zone-button, .remove-row').click(function () {
        if (!$(this).data('id')) return;

        zoneArray.push($(this).data('id'));
        $.magnificPopup.open({
            items: {
                src: '#delete-confirm-modal'
            },
            type: 'inline'
        });
    });

    $('.remove-shipping-method').click(function () {
        var id = $(this).closest('tr').data('id');

        $.ajax({
            url: baseUrl + '/admin/ecommerce/settings/shipping/method/' + id,
            type: 'DELETE',
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

    $(document).on('change', '.freeshipping-requirement', function () {
        if ($(this).val() == 'min_amount' || $(this).val() == 'both' || $(this).val() == 'either') {
            $('#minOrderAmount').css('display', 'flex');
        } else {
            $('#minOrderAmount').css('display', 'none');
        }
    });

    $('.method-link').click(function () {
        $tr = $(this).closest('tr');

        methodId = $tr.data('id');

        $.magnificPopup.open({
            type: 'ajax',
            tLoading: '',
            preloader: false,
            removalDelay: 350,
            items: {
                src: baseUrl + '/admin/ecommerce/settings/shipping/method/' + methodId
            },
            callbacks: {
                parseAjax: function (mfpResponse) {
                    if (mfpResponse.data.type == 'free') {
                        mfpResponse.data = '<div id="freeShippingModal" class="modal-block modal-block-lg">\
                                            <section class="card">\
                                                <header class="card-header">\
                                                    <h2 class="card-title">Free Shipping</h2>\
                                                </header>\
                                                <div class="card-body">\
                                                    <div class="modal-wrapper">\
                                                        <div class="form-group row align-items-center">\
                                                            <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Title</label>\
                                                            <div class="col-lg-7 col-xl-6">\
                                                                <input type="text" class="form-control form-control-modern method-name" value="' + mfpResponse.data.name + '">\
                                                            </div>\
                                                        </div>\
                                                        <div class="form-group row align-items-center">\
                                                            <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Free shipping requires...</label>\
                                                            <div class="col-lg-7 col-xl-6">\
                                                                <select class="form-control form-control-modern freeshipping-requirement">\
                                                                    <option value="">N\A</option>\
                                                                    <option value="coupon" ' + (mfpResponse.data.free_shipping_requirement == "coupon" ? 'selected' : '') + '>A valid free shipping coupon </option>\
                                                                    <option value="min_amount" ' + (mfpResponse.data.free_shipping_requirement == "min_amount" ? 'selected' : '') + '>A minimum order amount</option>\
                                                                    <option value="either" ' + (mfpResponse.data.free_shipping_requirement == "either" ? 'selected' : '') + '>A minimum order amount OR a coupon</option>\
                                                                    <option value="both" ' + (mfpResponse.data.free_shipping_requirement == "both" ? 'selected' : '') + '>A minimum order amount AND a coupon</option>\
                                                                </select>\
                                                            </div>\
                                                        </div>\
                                                        <div class="form-group row align-items-center" id="minOrderAmount">\
                                                            <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Minimum order amount</label>\
                                                            <div class="col-lg-7 col-xl-6">\
                                                                <input type="number" class="form-control form-control-modern order-amount" value="' + mfpResponse.data.minimum_order_amount + '">\
                                                            </div>\
                                                        </div>\
                                                    </div>\
                                                </div>\
                                                <footer class="card-footer">\
                                                    <div class="row">\
                                                        <div class="col-md-12 text-right">\
                                                            <button class="btn btn-primary method-save-confirm">Confirm</button>\
                                                            <button class="btn btn-default modal-dismiss">Cancel</button>\
                                                        </div>\
                                                    </div>\
                                                </footer>\
                                            </section>\
                                        </div>';

                    } else if (mfpResponse.data.type == 'local') {
                        mfpResponse.data = '<div id="localPickupModal" class="modal-block modal-block-lg">\
                                                <section class="card">\
                                                    <header class="card-header">\
                                                        <h2 class="card-title">Local pickup</h2>\
                                                    </header>\
                                                    <div class="card-body">\
                                                        <div class="modal-wrapper">\
                                                            <div class="form-group row align-items-center">\
                                                                <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Title</label>\
                                                                <div class="col-lg-7 col-xl-6">\
                                                                    <input type="text" class="form-control form-control-modern method-name" value="' + mfpResponse.data.name + '">\
                                                                </div>\
                                                            </div>\
                                                            <div class="form-group row align-items-center">\
                                                                <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Tax status</label>\
                                                                <div class="col-lg-7 col-xl-6">\
                                                                    <select class="form-control form-control-modern tax-status">\
                                                                        <option value="taxable" ' + (mfpResponse.data.tax_status == "taxable" ? 'selected' : '') + '>Taxable</option>\
                                                                        <option value="none" ' + (mfpResponse.data.tax_status == "none" ? 'selected' : '') + '>None</option>\
                                                                    </select>\
                                                                </div>\
                                                            </div>\
                                                            <div class="form-group row align-items-center">\
                                                                <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Cost</label>\
                                                                <div class="col-lg-7 col-xl-6">\
                                                                    <input type="number" class="form-control form-control-modern cost" value="' + mfpResponse.data.cost + '">\
                                                                </div>\
                                                            </div>\
                                                        </div>\
                                                    </div>\
                                                    <footer class="card-footer">\
                                                        <div class="row">\
                                                            <div class="col-md-12 text-right">\
                                                                <button class="btn btn-primary method-save-confirm">Confirm</button>\
                                                                <button class="btn btn-default modal-dismiss">Cancel</button>\
                                                            </div>\
                                                        </div>\
                                                    </footer>\
                                                </section>\
                                            </div>';
                    } else {
                        mfpResponse.data = '<div id="flatRateModal" class="modal-block modal-block-lg">\
                                                <section class="card">\
                                                    <header class="card-header">\
                                                        <h2 class="card-title">Flat rate</h2>\
                                                    </header>\
                                                    <div class="card-body">\
                                                        <div class="modal-wrapper">\
                                                            <div class="form-group row align-items-center">\
                                                                <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Title</label>\
                                                                <div class="col-lg-7 col-xl-6">\
                                                                    <input type="text" class="form-control form-control-modern method-name" value="' + mfpResponse.data.name + '">\
                                                                </div>\
                                                            </div>\
                                                            <div class="form-group row align-items-center">\
                                                                <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Tax status</label>\
                                                                <div class="col-lg-7 col-xl-6">\
                                                                    <select class="form-control form-control-modern tax-status">\
                                                                        <option value="taxable" ' + (mfpResponse.data.tax_status == "taxable" ? 'selected' : '') + '>Taxable</option>\
                                                                        <option value="none" ' + (mfpResponse.data.tax_status == "none" ? 'selected' : '') + '>None</option>\
                                                                    </select>\
                                                                </div>\
                                                            </div>\
                                                            <div class="form-group row align-items-center">\
                                                                <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Cost</label>\
                                                                <div class="col-lg-7 col-xl-6">\
                                                                    <input type="number" class="form-control form-control-modern cost" value="' + mfpResponse.data.cost + '">\
                                                                </div>\
                                                            </div>\
                                                        </div>\
                                                    </div>\
                                                    <footer class="card-footer">\
                                                        <div class="row">\
                                                            <div class="col-md-12 text-right">\
                                                                <button class="btn btn-primary method-save-confirm">Confirm</button>\
                                                                <button class="btn btn-default modal-dismiss">Cancel</button>\
                                                            </div>\
                                                        </div>\
                                                    </footer>\
                                                </section>\
                                            </div>';
                    }
                },
                ajaxContentAdded: function () {
                    // Ajax content is loaded and appended to DOM
                    $('.freeshipping-requirement').trigger('change');
                }
            },
            ajax: {
                tError: '',
            }
        });
    });

    /** 
     * Request delete using ajax
    */
    $('.modal-confirm').click(function () {
        $.ajax({
            url: baseUrl + '/admin/ecommerce/settings/shipping/bulk',
            type: 'DELETE',
            data: {
                data: zoneArray
            },
            headers: {
                'X-CSRF-TOKEN': $('#csrf-token').attr('content')
            },
            success: function () {
                location.href = baseUrl + '/admin/ecommerce/settings/shipping';
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

    $('body').on('click', '.method-save-confirm', function () {
        var $info = $(this).closest('.card');

        $.ajax({
            url: baseUrl + '/admin/ecommerce/settings/shipping/method/' + methodId,
            type: 'PUT',
            data: {
                name: $info.find('.method-name').val(),
                tax_status: $info.find('.tax-status').val(),
                cost: $info.find('.cost').val(),
                minimum_order_amount: $info.find('.order-amount').val(),
                free_shipping_requirement: $info.find('.freeshipping-requirement').val()
            },
            headers: {
                'X-CSRF-TOKEN': $('#csrf-token').attr('content')
            },
            success: function (response) {
                $tr.find('.method-link').text(response.name);
                $.magnificPopup.close();
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

    $('body').on('click', '.modal-dismiss', function () {
        $.magnificPopup.close();
    });

    /**
     * Delete Seleted Media
     */
    $('.bulk-action-apply').click(function (e) {
        e.preventDefault();

        var $checks = $('.table tbody :checked');
        zoneArray = [];

        for (var $i = 0; $i < $checks.length; $i++) {
            zoneArray.push($checks.eq($i).data('id'));
        }

        if (zoneArray.length == 0 || $('.bulk-action').val() != 'delete') {
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
});