@extends('admin.layout')

@section('vendor-css')
@endsection

@section('custom-css')
<style>
    /**
    *  Nestable css
    */
    .nestable .btn.btn-xs {
        font-size: 1rem;
    }

    .dd {
        position: relative;
        display: block;
        margin: 0;
        padding: 0;
        max-width: 600px;
        list-style: none;
        font-size: 15px;
        line-height: 20px;
    }

    .dd-list {
        display: block;
        position: relative;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .dd-list .dd-list {
        padding-left: 30px;
    }

    .dd-collapsed .dd-list {
        display: none;
    }

    .dd-item,
    .dd-empty,
    .dd-placeholder {
        display: block;
        position: relative;
        margin: 0;
        padding: 0;
        min-height: 20px;
        font-size: 13px;
        line-height: 25px;
    }

    .dd-handle {
        display: block;
        height: 34px;
        margin: 5px 0;
        padding: 4px 10px;
        color: #333;
        text-decoration: none;
        font-weight: bold;
        border: 1px solid #ccc;
        background: #fafafa;
        background: -webkit-linear-gradient(top, #fafafa 0%, #eee 100%);
        background: -moz-linear-gradient(top, #fafafa 0%, #eee 100%);
        background: linear-gradient(top, #fafafa 0%, #eee 100%);
        -webkit-border-radius: 3px;
        border-radius: 3px;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
    }

    .dd-handle:hover {
        color: #2ea8e5;
        background: #fff;
    }

    .dd-item > button {
        display: block;
        position: relative;
        cursor: pointer;
        float: left;
        width: 25px;
        height: 20px;
        margin: 5px 0;
        padding: 0;
        text-indent: 100%;
        white-space: nowrap;
        overflow: hidden;
        border: 0;
        background: transparent;
        font-size: 12px;
        line-height: 1;
        text-align: center;
        font-weight: bold;
    }

    .dd-item > button:before {
        content: '+';
        display: block;
        position: absolute;
        width: 100%;
        text-align: center;
        text-indent: 0;
    }

    .dd-item > button[data-action="collapse"]:before {
    content: '-';
    }

    .dd-placeholder,
    .dd-empty {
        margin: 5px 0;
        padding: 0;
        min-height: 30px;
        background: #f2fbff;
        border: 1px dashed #b6bcbf;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
    }

    .dd-empty {
    border: 1px dashed #bbb;
    min-height: 100px;
    background-color: #e5e5e5;
    background-image: -webkit-linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff),
        -webkit-linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff);
    background-image: -moz-linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff),
        -moz-linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff);
    background-image: linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff),
        linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff);
    background-size: 60px 60px;
    background-position: 0 0, 30px 30px;
    }

    .dd-dragel {
    position: absolute;
    pointer-events: none;
    z-index: 9999;
    }

    .dd-dragel > .dd-item .dd-handle {
    margin-top: 0;
    }

    .dd-dragel .dd-handle {
    -webkit-box-shadow: 2px 4px 6px 0 rgba(0, 0, 0, .1);
    box-shadow: 2px 4px 6px 0 rgba(0, 0, 0, .1);
    }

    /**
    * Nestable Extras
    */
    .nestable-lists {
    display: block;
    clear: both;
    padding: 30px 0;
    width: 100%;
    border: 0;
    border-top: 2px solid #ddd;
    border-bottom: 2px solid #ddd;
    }

    #nestable-menu {
    padding: 0;
    margin: 20px 0;
    }

    #nestable-output,
    #nestable2-output {
    width: 100%;
    height: 7em;
    font-size: 0.75em;
    line-height: 1.333333em;
    font-family: Consolas, monospace;
    padding: 5px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    }

    #nestable2 .dd-handle {
    color: #fff;
    border: 1px solid #999;
    background: #bbb;
    background: -webkit-linear-gradient(top, #bbb 0%, #999 100%);
    background: -moz-linear-gradient(top, #bbb 0%, #999 100%);
    background: linear-gradient(top, #bbb 0%, #999 100%);
    }

    #nestable2 .dd-handle:hover {
    background: #bbb;
    }

    #nestable2 .dd-item > button:before {
    color: #fff;
    }

    .dd {
    //  float: left;
    //  width: 48 %;
    width: 80%;
    }

    .dd + .dd {
    margin-left: 2%;
    }

    .dd-hover > .dd-handle {
    background: #2ea8e5 !important;
    }

    /**
    * Nestable Draggable Handles
    */
    .dd3-content {
    display: block;
    height: 30px;
    margin: 5px 0;
    padding: 5px 10px 5px 40px;
    color: #333;
    text-decoration: none;
    font-weight: bold;
    border: 1px solid #ccc;
    background: #fafafa;
    background: -webkit-linear-gradient(top, #fafafa 0%, #eee 100%);
    background: -moz-linear-gradient(top, #fafafa 0%, #eee 100%);
    background: linear-gradient(top, #fafafa 0%, #eee 100%);
    -webkit-border-radius: 3px;
    border-radius: 3px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    }

    .dd3-content:hover {
    color: #2ea8e5;
    background: #fff;
    }

    .dd-dragel > .dd3-item > .dd3-content {
    margin: 0;
    }

    .dd3-item > button {
    margin-left: 30px;
    }

    .dd3-handle {
    position: absolute;
    margin: 0;
    left: 0;
    top: 0;
    cursor: pointer;
    width: 30px;
    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;
    border: 1px solid #aaa;
    background: #ddd;
    background: -webkit-linear-gradient(top, #ddd 0%, #bbb 100%);
    background: -moz-linear-gradient(top, #ddd 0%, #bbb 100%);
    background: linear-gradient(top, #ddd 0%, #bbb 100%);
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    }

    .dd3-handle:before {
    content: '≡';
    display: block;
    position: absolute;
    left: 0;
    top: 3px;
    width: 100%;
    text-align: center;
    text-indent: 0;
    color: #fff;
    font-size: 20px;
    font-weight: normal;
    }

    .dd3-handle:hover {
    background: #ddd;
    }


    /*
    * Nestable++
    */
    .button-delete {
        position: absolute;
        top: 0;
        right: -40px;
    }

    .button-edit {
    position: absolute;
    top: 0;
    right: -84px;
    }

    #menu-editor {
    margin-top: 40px;
    }

    #saveButton {
    padding-right: 30px;
    padding-left: 30px;
    }

    .output-container {
    margin-top: 20px;
    }

    #json-output {
    margin-top: 20px;
    }

</style>
@endsection

@section('sidebar')
    @include('admin.common.sidebar')
@endsection

@section('page-content')
    @include('admin.common.breadcrumb', ['current_page' => 'Main Menu', 'paths' => ['home' => '/dashboard']])

    <div class="row">
        <div class="col">
            <div class="card card-modern card-big-info">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-2">
                            <i class="card-big-info-icon bx bx-store"></i>
                            <h2 class="card-big-info-title">Edit Here</h2>
                            <p class="card-big-info-desc">Please edit the menu with simple drag &amp; drop</p>
                        </div>
                        <div class="col-md-10">
                            <div class="row">
                                <div class="col-md-6">
                                    <h3>Menu</h3>
                                    <div class="dd interesting"></div>
                                    <div class="dd nestable">
                                        <ol class="dd-list">
                                            {!! config('setting.menu_text') !!}
                                        </ol>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <form id="menu-add">
                                        <h3>Add new menu item</h3>
                                        <div class="form-group">
                                            <label for="addInputName">Name</label>
                                            <input type="text" class="form-control" id="addInputName" placeholder="Item name" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="addInputurl">url</label>
                                            <input type="text" class="form-control" id="addInputurl" placeholder="item-url" required>
                                        </div>
                                        <button class="btn btn-info mt-3" id="addButton">Add</button>
                                    </form>

                                    <form class="" id="menu-editor" style="display: none;">
                                        <h3>Editing <span id="currentEditName"></span></h3>
                                        <div class="form-group">
                                            <label for="addInputName">Name</label>
                                            <input type="text" class="form-control" id="editInputName" placeholder="Item name" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="addInputurl">url</label>
                                            <input type="text" class="form-control" id="editInputurl" placeholder="item-url">
                                        </div>
                                        <button class="btn btn-info mt-3" id="editButton">Edit</button>
                                    </form>
                                </div>
                            </div>

                            <div class="row output-container d-none">
                                <textarea class="form-control" id="json-output" rows="5"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row action-buttons mt-4">
                <div class="col-12 col-md-auto">
                    <button type="submit" class="submit-button btn btn-primary btn-px-4 py-3 d-flex align-items-center font-weight-semibold line-height-1" data-loading-text="Loading...">
                        <i class="bx bx-save text-4 mr-2"></i> Save Changes
                    </button>
                </div>
            </div>
        </div>
    </div>

@endsection

@section('vendor-js')
    <script src="{{ asset('vendor/jquery-nestable/jquery-nestable.js') }}"></script>
@endsection

@section('page-js')
    <script>
        var updateOutput = function (e) {
            var list = e.length ? e : $(e.target),
                output = list.data('output');
            if (window.JSON) {
                if (output) {
                output.val(window.JSON.stringify(list.nestable('serialize')));
                }
            } else {
                alert('JSON browser support required for this page.');
            }
        };

        var nestableList = $(".dd.nestable > .dd-list");

        /***************************************/


        /*************** Delete ***************/
        var deleteFromMenuHelper = function (target) {
            target.fadeOut(function () {
            target.remove();
            updateOutput($('.dd.nestable').data('output', $('#json-output')));
            });
        };

        var deleteFromMenu = function () {
            var targetId = $(this).data('owner-id');
            var target = $('[data-id="' + targetId + '"]');

            var result = confirm("Delete " + target.data('name') + " and all its subitems ?");
            if (!result) {
                return;
            }

            // Remove children (if any)
            target.find("li").each(function () {
                deleteFromMenuHelper($(this));
            });

            // Remove parent
            deleteFromMenuHelper(target);

            // update JSON
            updateOutput($('.dd.nestable').data('output', $('#json-output')));
        };

        /***************************************/


        /*************** Edit ***************/

        var menuEditor = $("#menu-editor");
        var editButton = $("#editButton");
        var editInputName = $("#editInputName");
        var editInputurl = $("#editInputurl");
        var currentEditName = $("#currentEditName");

        // Prepares and shows the Edit Form
        var prepareEdit = function () {
            var targetId = $(this).data('owner-id');
            var target = $('[data-id="' + targetId + '"]');

            editInputName.val(target.data("name"));
            editInputurl.val(target.data("url"));
            currentEditName.html(target.data("name"));
            editButton.data("owner-id", target.data("id"));

            console.log("[INFO] Editing Menu Item " + editButton.data("owner-id"));

            menuEditor.fadeIn();
        };

        // Edits the Menu item and hides the Edit Form
        var editMenuItem = function () {
            var targetId = $(this).data('owner-id');
            var target = $('[data-id="' + targetId + '"]');

            var newName = editInputName.val();
            var newurl = editInputurl.val();

            target.data("name", newName);
            target.data("url", newurl);

            target.find("> .dd-handle").html(newName);

            menuEditor.fadeOut();

            // update JSON
            updateOutput($('.dd.nestable').data('output', $('#json-output')));
        };

        /***************************************/


        /*************** Add ***************/

        var newIdCount = 1;

        var addToMenu = function () {
            var newName = $("#addInputName").val();
            var newurl = $("#addInputurl").val();
            var newId = 'new-' + $(".nestable .dd-item").length + 1;

            nestableList.append(
                '<li class="dd-item" ' +
                'data-id="' + newId + '" ' +
                'data-name="' + newName + '" ' +
                'data-url="' + newurl + '" ' +
                'data-new="1" ' +
                'data-deleted="0">' +
                '<div class="dd-handle">' + newName + '</div> ' +
                '<span class="button-delete btn btn-default btn-xs pull-right" ' +
                'data-owner-id="' + newId + '"> ' +
                '<i class="fa fa-trash" aria-hidden="true"></i> ' +
                '</span>' +
                '<span class="button-edit btn btn-default btn-xs pull-right" ' +
                'data-owner-id="' + newId + '">' +
                '<i class="fa fa-edit" aria-hidden="true"></i>' +
                '</span>' +
                '</li>'
            );

            // update JSON
            updateOutput($('.dd.nestable').data('output', $('#json-output')));

            // set events
            $(".dd.nestable > .dd-list > .dd-item:last-child .button-delete").on("click", deleteFromMenu);
            $(".dd.nestable  > .dd-list > .dd-item:last-child .button-edit").on("click", prepareEdit);
        };

        /***************************************/
        $(function () {
            // output initial serialised data
            updateOutput($('.dd.nestable').data('output', $('#json-output')));

            // set onclick events
            editButton.on("click", editMenuItem);

            $(".dd.nestable .button-delete").on("click", deleteFromMenu);

            $(".dd.nestable .button-edit").on("click", prepareEdit);

            $("#menu-editor").submit(function (e) {
                e.preventDefault();
            });

            $("#menu-add").submit(function (e) {
                e.preventDefault();
                addToMenu();
            });
        });

        $('.dd.nestable').nestable({
            maxDepth: 3
        })
        .on('change', updateOutput);

        $('.submit-button').click(function (e) {
            $(".nestable .dd-list button").remove();
            var text = $(".nestable .dd-list").html();
            $.ajax({
                url: baseUrl + '/admin/customize/menu',
                type: 'post',
                data: {
                    _token: '{{ csrf_token() }}',
                    menu_text: text,
                    menu_json: $("#json-output").val()
                },
                headers: {
                    'X-CSRF-TOKEN': '{{ csrf_token() }}'
                },
                success: function () {
                    location.reload();
                },
                error: function () {
                    new PNotify({
                        title: 'Error',
                        text: 'Error found updating menu data.',
                        type: 'error',
                        addclass: 'notification-error',
                        icon: 'fas fa-times'
                    });
                }
            });
        })
    </script>
@endsection