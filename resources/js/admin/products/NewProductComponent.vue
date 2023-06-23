<template>
    <div>
        <form
            class="ecommerce-form"
            action="#"
            method="post"
            @submit.prevent="onSubmit"
        >
            <input
                type="hidden"
                name="_token"
                value="token"
            />
            <input
                type="hidden"
                name="categories"
                id="categories"
            />
            <div class="row mb-4">
                <div class="col">
                    <section class="card card-modern card-big-info">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-2-5 col-xl-1-5">
                                    <i class="card-big-info-icon bx bx-box"></i>
                                    <h2 class="card-big-info-title">General Info</h2>
                                    <p class="card-big-info-desc">
                                        Add here the product description with
                                        all details and necessary information.
                                    </p>
                                    <p v-if="product.id">
                                        <a
                                            :href="baseUrl + 'product/default/' + product.slug"
                                            target="_blank"
                                        >Click here to see the product</a>
                                    </p>
                                </div>
                                <div class="col-lg-3-5 col-xl-4-5">
                                    <div class="row">
                                        <div class="col-xl-9">
                                            <div class="form-group row align-items-center">
                                                <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Product Type</label>
                                                <div class="col-lg-7 col-xl-8">
                                                    <select
                                                        class="form-control form-control-modern select-product-type"
                                                        name="type"
                                                        v-model="product.type"
                                                    >
                                                        <option value="simple">Simple Product</option>
                                                        <option value="variable">Variable Product</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div
                                                class="form-group row align-items-center"
                                                v-if="product.type == 'simple'"
                                            >
                                                <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Additional Info</label>
                                                <div class="col-lg-7 col-xl-8">
                                                    <label
                                                        class="checkbox-inline mr-3 mb-0"
                                                        data-toggle="tooltip"
                                                        title="Virtual products are intangible and are not shipped."
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            class="virtual-product checkbox-style-1"
                                                            v-model="product.virtual"
                                                        />
                                                        Virtual
                                                    </label>
                                                    <label
                                                        class="checkbox-inline ml-5 mb-0"
                                                        data-toggle="tooltip"
                                                        title="Downloadable products give access to a file upon purchase."
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            class="downloadable-product checkbox-style-1"
                                                            name="downloadable"
                                                            v-model="product.downloadable"
                                                        />
                                                        Downloadable
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="form-group row align-items-center">
                                                <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Product Name</label>
                                                <div class="col-lg-7 col-xl-8">
                                                    <input
                                                        type="text"
                                                        class="form-control form-control-modern"
                                                        name="name"
                                                        v-model="product.name"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-lg-5 col-xl-3 control-label text-lg-right pt-2 mt-1 mb-0">Short Description</label>
                                                <div class="col-lg-7 col-xl-8">
                                                    <textarea
                                                        class="form-control form-control-modern"
                                                        name="short_desc"
                                                        rows="3"
                                                        maxlength="254"
                                                        v-model="product.short_desc"
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-lg-5 col-xl-3 control-label text-lg-right pt-2 mt-1 mb-0">Product Description</label>
                                                <div class="col-lg-7 col-xl-8">
                                                    <vue-editor
                                                        v-model="product.description"
                                                        :editorToolbar="[
															[
																{
																	header: [
																		false,
																		1,
																		2,
																		3,
																		4,
																		5,
																		6,
																	],
																},
															],
															[{ color: [] }],
															[
																'bold',
																'italic',
																'underline',
																'strike',
															],
															[
																{
																	list: 'ordered',
																},
																{
																	list: 'bullet',
																},
															],
														]"
                                                    ></vue-editor>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3">
                                            <div class="form-group">
                                                <label class="control-label text-lg-right pt-2 mt-1 mb-2">
                                                    Product Categories
                                                    <span
                                                        class="porto-help-tip"
                                                        data-toggle="tooltip"
                                                        title
                                                        data-original-title="In order to add category, you need to add create category first."
                                                    ></span>
                                                </label>
                                                <div
                                                    class="form-control form-control-modern"
                                                    id="treeCheckbox"
                                                ></div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label text-lg-right pt-2 mt-1 mb-2">Product Tags</label>

                                                <div
                                                    class="bootstrap-tagsinput"
                                                    :class="{'p-0': selectedTags.length === 0}"
                                                    @click="foucsTagInput"
                                                >
                                                    <span
                                                        class="badge badge badge-info"
                                                        v-for="(item, index) in selectedTags"
                                                        :key="'tag-' + index"
                                                    >
                                                        {{ item }}
                                                        <span
                                                            data-role="remove"
                                                            @click="removeTag(index)"
                                                        ></span>
                                                    </span>
                                                    <input
                                                        name="tags"
                                                        id="tags-input"
                                                        :class="{'form-control': selectedTags.length === 0}"
                                                        @keypress="addTag($event)"
                                                    />
                                                </div>
                                                <a
                                                    class="btn btn-link mt-2 px-0"
                                                    href="#"
                                                    v-if="productTags.length > 0"
                                                >Choose from most used tags.</a>

                                                <div
                                                    class="form-control form-control-modern mt-1"
                                                    id="tags"
                                                    v-if="productTags.length > 0"
                                                >
                                                    <a
                                                        href="javascript:;"
                                                        class="btn btn-tag"
                                                        v-for="tag in productTags"
                                                        :key="tag.id"
                                                        @click="selecteTag(tag.name)"
                                                    >{{ tag.name }}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div class="row mb-4">
                <div class="col">
                    <section class="card card-modern card-big-info">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-2-5 col-xl-1-5">
                                    <i class="card-big-info-icon bx bx-camera"></i>
                                    <h2 class="card-big-info-title">Product Image</h2>
                                    <p class="card-big-info-desc">Upload your Product image. You can add multiple images</p>
                                </div>
                                <div class="col-lg-3-5 col-xl-4-5">
                                    <div class="form-group align-items-center">
                                        <div class="row">
                                            <a
                                                class="btn btn-primary ml-auto mb-2 mr-3"
                                                href="#"
                                                @click.prevent="openMediaModal"
                                            >Add images</a>
                                        </div>
                                        <div class="media-gallery product-media-gallery">
                                            <div class="row mg-files">
                                                <div
                                                    class="col-6 col-md-4 col-lg-3"
                                                    v-for="(medium, index) in product.media"
                                                    :key="medium.id"
                                                    :data-id="medium['id']"
                                                >
                                                    <div class="thumbnail">
                                                        <div class="thumb-preview">
                                                            <div class="centered">
                                                                <a
                                                                    class="thumb-image"
                                                                    :href="
																		baseUrl +
																		'storage/' +
																		medium['copy_link']
																	"
                                                                >
                                                                    <img
                                                                        :src="
																			baseUrl +
																			'storage/' +
																			medium['copy_link']
																		"
                                                                        class="img-fluid"
                                                                        alt="Project"
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div class="mg-thumb-options">
                                                                <div
                                                                    class="mg-zoom"
                                                                    @click="openGallery(index)"
                                                                >
                                                                    <i class="fas fa-search"></i>
                                                                </div>
                                                                <div class="mg-toolbar">
                                                                    <div class="mg-option radio-custom radio-inline">
                                                                        <input
                                                                            type="radio"
                                                                            name="defaultImage"
                                                                            value="1"
                                                                            :id="'mfile_' + medium['id']
																			"
                                                                            :checked="medium['pivot']['default']"
                                                                            @click="chooseDefaultImage(medium)"
                                                                        />
                                                                        <label :for="'mfile_' + medium['id']">
                                                                            Set
                                                                            Default
                                                                        </label>
                                                                    </div>
                                                                    <div class="mg-option set-default float-right">
                                                                        <a
                                                                            href="javascript:;"
                                                                            class="text-white mg-remove"
                                                                            @click="cancelMedia(medium)"
                                                                        >
                                                                            <i class="far fa-trash-alt"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div class="row mb-4">
                <div class="col">
                    <section class="card card-modern card-big-info">
                        <div class="card-body">
                            <div
                                class="tabs-modern row"
                                style="min-height: 490px;"
                            >
                                <div class="col-lg-2-5 col-xl-1-5">
                                    <div
                                        class="nav flex-column"
                                        id="tab"
                                        role="tablist"
                                        aria-orientation="vertical"
                                    >
                                        <a
                                            class="nav-link active"
                                            id="price-tab"
                                            data-toggle="pill"
                                            href="#price"
                                            role="tab"
                                            aria-controls="price"
                                            aria-selected="true"
                                        >Price</a>
                                        <a
                                            class="nav-link"
                                            id="inventory-tab"
                                            data-toggle="pill"
                                            href="#inventory"
                                            role="tab"
                                            aria-controls="inventory"
                                            aria-selected="false"
                                        >Inventory</a>
                                        <a
                                            class="nav-link"
                                            id="shipping-tab"
                                            data-toggle="pill"
                                            href="#shipping"
                                            role="tab"
                                            aria-controls="shipping"
                                            aria-selected="false"
                                            v-if="
												!(
													product.type == 'simple' &&
													product.virtual
												)
											"
                                        >Shipping</a>
                                        <a
                                            class="nav-link"
                                            id="linked-products-tab"
                                            data-toggle="pill"
                                            href="#linked-products"
                                            role="tab"
                                            aria-controls="linked-products"
                                            aria-selected="false"
                                        >Linked Products</a>
                                        <a
                                            class="nav-link"
                                            id="attributes-tab"
                                            data-toggle="pill"
                                            href="#attributes"
                                            role="tab"
                                            aria-controls="attributes"
                                        >Attributes</a>
                                        <a
                                            class="nav-link"
                                            id="variations-tab"
                                            data-toggle="pill"
                                            href="#variations"
                                            role="tab"
                                            aria-controls="variations"
                                            v-if="product.type == 'variable'"
                                            @click="variationTabClick"
                                        >Variations</a>
                                        <a
                                            class="nav-link"
                                            id="advanced-tab"
                                            data-toggle="pill"
                                            href="#advanced"
                                            role="tab"
                                            aria-controls="advanced"
                                        >Advanced</a>
                                    </div>
                                </div>
                                <div class="col-lg-3-5 col-xl-4-5">
                                    <div
                                        class="tab-content"
                                        id="tabContent"
                                    >
                                        <div
                                            class="tab-pane fade show active"
                                            id="price"
                                            role="tabpanel"
                                            aria-labelledby="price-tab"
                                        >
                                            <div
                                                class="form-group row align-items-center"
                                                v-if="product.type == 'simple'"
                                            >
                                                <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Regular Price ($)</label>
                                                <div class="col-lg-7 col-xl-6">
                                                    <input
                                                        type="text"
                                                        class="form-control form-control-modern"
                                                        name="price"
                                                        :min="product.sale_price"
                                                        v-model="product.price"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                class="form-group row align-items-center"
                                                v-if="product.type == 'simple'"
                                            >
                                                <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Sale Price ($)</label>
                                                <div class="col-lg-7 col-xl-6">
                                                    <input
                                                        type="number"
                                                        class="form-control form-control-modern"
                                                        name="sale_price"
                                                        :max="product.price"
                                                        min="0"
                                                        v-model="product.sale_price"
                                                    />
                                                </div>
                                                <div
                                                    class="col-auto"
                                                    v-if="!product.sale_schedule"
                                                >
                                                    <a
                                                        class="btn btn-link set-schedule"
                                                        href="#"
                                                        @click.prevent="product.sale_schedule = !product.sale_schedule"
                                                    >Schedule</a>
                                                </div>
                                            </div>
                                            <div
                                                class="form-group row align-items-center"
                                                id="sale-price"
                                                v-if="product.sale_schedule"
                                            >
                                                <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Sale Price Dates</label>
                                                <div class="col-lg-7 col-xl-6">
                                                    <div
                                                        class="input-daterange input-group"
                                                        data-plugin-datepicker
                                                    >
                                                        <span class="input-group-prepend">
                                                            <span class="input-group-text">
                                                                <i class="fas fa-calendar-alt"></i>
                                                            </span>
                                                        </span>
                                                        <date-picker
                                                            v-model="product.sale_start"
                                                            :format="'YYYY-MM-DD'"
                                                            :max="product.sale_end"
                                                        ></date-picker>
                                                        <span class="input-group-text border-left-0 border-right-0 rounded-0">to</span>
                                                        <date-picker
                                                            v-model="product.sale_end"
                                                            :format="'YYYY-MM-DD'"
                                                            :min="product.sale_start"
                                                        ></date-picker>
                                                    </div>
                                                </div>
                                                <div class="col-auto">
                                                    <a
                                                        class="btn btn-link cancel-schedule float-right"
                                                        href="#"
                                                        @click.prevent="product.sale_schedule = !product.sale_schedule"
                                                    >Cancel</a>
                                                </div>
                                            </div>
                                            <div
                                                class="form-group"
                                                v-if="product.type == 'simple' && product.downloadable"
                                            >
                                                <input
                                                    type="hidden"
                                                    name="downloadable_files"
                                                />
                                                <div class="row mb-3">
                                                    <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Downloadable files</label>
                                                    <div class="col-lg-7 col-xl-9">
                                                        <table class="table table-responsive-lg table-downloadable">
                                                            <thead>
                                                                <tr>
                                                                    <th>Name</th>
                                                                    <th>File URL</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr
                                                                    v-for="(file, index) in product.files"
                                                                    :key="index"
                                                                >
                                                                    <td>
                                                                        <input
                                                                            type="text"
                                                                            class="form-control form-control-modern"
                                                                            v-model="file.pivot.name"
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        <div class="input-group">
                                                                            <input
                                                                                type="text"
                                                                                class="form-control form-control-modern"
                                                                                v-model="file.copy_link"
                                                                                placeholder="file path"
                                                                            />
                                                                            <div class="input-group-append">
                                                                                <button
                                                                                    type="button"
                                                                                    class="btn btn-primary"
                                                                                    @click="openFileModal(index)"
                                                                                >Choose File</button>
                                                                                <button
                                                                                    type="button"
                                                                                    class="btn btn-danger btn-remove"
                                                                                    @click="removeDownloadableFile(index)"
                                                                                >
                                                                                    <i class="bx bx-trash text-4 mt-1"></i>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                            <tfoot>
                                                                <tr>
                                                                    <th>
                                                                        <a
                                                                            href="javascript:;"
                                                                            class="btn btn-primary"
                                                                            @click="addDownloadableFile"
                                                                        >Add file</a>
                                                                    </th>
                                                                    <th></th>
                                                                </tr>
                                                            </tfoot>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row align-items-center">
                                                <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">
                                                    Tax status
                                                    <span
                                                        class="porto-help-tip"
                                                        data-toggle="tooltip"
                                                        title
                                                        data-original-title="Define whether or not the entire product is taxable, or just the cost of shipping it."
                                                    ></span>
                                                </label>
                                                <div class="col-lg-7 col-xl-6">
                                                    <select
                                                        class="form-control form-control-modern"
                                                        name="tax_status"
                                                        v-model="product.tax_status"
                                                    >
                                                        <option value="taxable">Taxable</option>
                                                        <option value="shipping">Shipping Only</option>
                                                        <option value="none">None</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div
                                                class="form-group row align-items-center"
                                                v-if="product.tax_status != 'none'"
                                            >
                                                <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">
                                                    Tax class
                                                    <span
                                                        class="porto-help-tip"
                                                        data-toggle="tooltip"
                                                        title
                                                        data-original-title="Choose a tax class for this product. Tax classes are used to apply different tax rates specific to certain types of product."
                                                    ></span>
                                                </label>
                                                <div class="col-lg-7 col-xl-6">
                                                    <select
                                                        class="form-control form-control-modern"
                                                        name="tax_type_id"
                                                        v-model="product.tax_type_id"
                                                    >
                                                        <option
                                                            :value="taxType.id"
                                                            v-for="taxType in taxTypes"
                                                            :key="taxType.id"
                                                        >{{ taxType.name }}</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="tab-pane fade"
                                            id="inventory"
                                            role="tabpanel"
                                            aria-labelledby="inventory-tab"
                                        >
                                            <div class="form-group row align-items-center">
                                                <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">
                                                    SKU
                                                    <span
                                                        class="porto-help-tip"
                                                        data-toggle="tooltip"
                                                        title
                                                        data-original-title="SKU refers to a Stock-keeping unit, a unique identifier for each distinct product and service that can be purchased."
                                                    ></span>
                                                </label>
                                                <div class="col-lg-7 col-xl-6">
                                                    <input
                                                        type="text"
                                                        class="form-control form-control-modern"
                                                        name="sku"
                                                        v-model="product.sku"
                                                    />
                                                </div>
                                            </div>
                                            <template v-if="product.type=='simple'">
                                                <div
                                                    class="form-group"
                                                    v-if="settings.product_enable_stock_management == '1'"
                                                >
                                                    <div class="row align-items-center">
                                                        <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Manage Stock?</label>
                                                        <div class="col-lg-7 col-xl-6">
                                                            <div class="checkbox">
                                                                <label class="my-2">
                                                                    <input
                                                                        type="checkbox"
                                                                        value
                                                                        name="manage_stock"
                                                                        class="checkbox-style-1"
                                                                        v-model="product.manage_stock"
                                                                    />
                                                                    Enable stock management at product level
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        id="manageStock"
                                                        v-show="product.manage_stock"
                                                    >
                                                        <div class="row pt-3 mb-3 align-items-center">
                                                            <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">
                                                                Stock Quantity
                                                                <span
                                                                    class="porto-help-tip"
                                                                    data-toggle="tooltip"
                                                                    title
                                                                    data-original-title="Stock quantity. If this is a variable product this value will be used to control stock for all variations, unless you define stock at variation level."
                                                                ></span>
                                                            </label>
                                                            <div class="col-lg-7 col-xl-6">
                                                                <input
                                                                    type="number"
                                                                    class="form-control form-control-modern"
                                                                    name="stock_quantity"
                                                                    v-model="product.stock_quantity"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div class="row pt-3 mb-3 align-items-center">
                                                            <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">
                                                                Allow backorders
                                                                <span
                                                                    class="porto-help-tip"
                                                                    data-toggle="tooltip"
                                                                    title
                                                                    data-original-title="If managing stock, this controls whether or not backorders are allowed. If enabled, stock quantity can go below 0."
                                                                ></span>
                                                            </label>
                                                            <div class="col-lg-7 col-xl-6">
                                                                <select
                                                                    class="form-control form-control-modern"
                                                                    name="allow_backorder"
                                                                    v-model="product.allow_backorder"
                                                                >
                                                                    <option value="no">Do not allow</option>
                                                                    <option value="yes">Allow</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="row pt-3 mb-3 align-items-center">
                                                            <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">
                                                                Low stock threshold
                                                                <span
                                                                    class="porto-help-tip"
                                                                    data-toggle="tooltip"
                                                                    title
                                                                    data-original-title="When product stock reaches this amount you will be notified by email"
                                                                ></span>
                                                            </label>
                                                            <div class="col-lg-7 col-xl-6">
                                                                <input
                                                                    type="number"
                                                                    min="0"
                                                                    value="2"
                                                                    class="form-control form-control-modern"
                                                                    name="low_stock_threshold"
                                                                    v-model="product.low_stock_threshold"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="form-group row align-items-center"
                                                    v-if="!product.manage_stock"
                                                >
                                                    <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">
                                                        Stock Status
                                                        <span
                                                            class="porto-help-tip"
                                                            data-toggle="tooltip"
                                                            data-original-title="Controls whether or not the product is listed as 'in stock' or 'out of stock' on the frontend."
                                                        ></span>
                                                    </label>
                                                    <div class="col-lg-7 col-xl-6">
                                                        <select
                                                            class="form-control form-control-modern"
                                                            name="stock_status"
                                                            v-model="product.stock_status"
                                                        >
                                                            <option value="in-stock">In Stock</option>
                                                            <option value="out-of-stock">Out of Stock</option>
                                                            <option value="on-backorder">On Backorder</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </template>
                                            <div class="form-group row align-items-center">
                                                <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Sold Individually</label>
                                                <div class="col-lg-7 col-xl-6">
                                                    <div class="checkbox">
                                                        <label class="my-2">
                                                            <input
                                                                type="checkbox"
                                                                name="sold_individually"
                                                                class="checkbox-style-1"
                                                                v-model="product.sold_individually"
                                                            />
                                                            Enable this to only allow one of this item to be bought in a single order
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="tab-pane fade"
                                            id="shipping"
                                            role="tabpanel"
                                            aria-labelledby="shipping-tab"
                                        >
                                            <div class="form-group row align-items-center">
                                                <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">
                                                    Weight ({{ settings.product_weight_unit }})
                                                    <span
                                                        class="porto-help-tip"
                                                        data-toggle="tooltip"
                                                        title
                                                        data-original-title="Weight in decimal form"
                                                    ></span>
                                                </label>
                                                <div class="col-lg-7 col-xl-6">
                                                    <input
                                                        type="number"
                                                        class="form-control form-control-modern"
                                                        name="weight"
                                                        v-model="product.weight"
                                                    />
                                                </div>
                                            </div>
                                            <div class="form-group row align-items-center">
                                                <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">
                                                    Dimensions ({{ settings.product_dimentions_unit }})
                                                    <span
                                                        class="porto-help-tip"
                                                        data-toggle="tooltip"
                                                        title
                                                        data-original-title="LxWxH in decimal form"
                                                    ></span>
                                                </label>
                                                <div class="col-lg-7 col-xl-6">
                                                    <div class="row">
                                                        <div class="col-xl-4 mb-3 mb-xl-0">
                                                            <input
                                                                type="number"
                                                                class="form-control form-control-modern"
                                                                name="length"
                                                                v-model="product.length"
                                                                placeholder="Length"
                                                            />
                                                        </div>
                                                        <div class="col-xl-4 mb-3 mb-xl-0">
                                                            <input
                                                                type="number"
                                                                class="form-control form-control-modern"
                                                                name="weight"
                                                                v-model="product.width"
                                                                placeholder="Width"
                                                            />
                                                        </div>
                                                        <div class="col-xl-4">
                                                            <input
                                                                type="number"
                                                                class="form-control form-control-modern"
                                                                name="height"
                                                                v-model="product.height"
                                                                placeholder="Height"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="tab-pane fade"
                                            id="linked-products"
                                            role="tabpanel"
                                            aria-labelledby="linked-products-tab"
                                        >
                                            <div class="form-group row align-items-center">
                                                <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">
                                                    Upsells
                                                    <span
                                                        class="porto-help-tip"
                                                        data-toggle="tooltip"
                                                        title
                                                        data-original-title="Upsells are products which you recommend instead of the currently viewed product, for example, products that are more profitable or better quality or more expensive."
                                                    ></span>
                                                </label>
                                                <div class="col-lg-7 col-xl-6">
                                                    <Select2
                                                        name="upsells"
                                                        id="upsells"
                                                        v-model="product.upsells"
                                                        :settings="{
															minimumInputLength: 3,
															multiple: true,
                                                            ajax: {
                                                                url: baseUrl + 'admin/products/search',
                                                                delay: 500
                                                            },
														}"
                                                        :options="upsells"
                                                    />
                                                </div>
                                            </div>
                                            <div class="form-group row align-items-center">
                                                <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">
                                                    Cross-sells
                                                    <span
                                                        class="porto-help-tip"
                                                        data-toggle="tooltip"
                                                        title
                                                        data-original-title="Cross-sells are products which you promote in the cart, based on the current product."
                                                    ></span>
                                                </label>
                                                <div class="col-lg-7 col-xl-6">
                                                    <Select2
                                                        name="cross_sells"
                                                        id="cross_sells"
                                                        v-model="product.cross_sells"
                                                        :settings="{
															minimumInputLength: 3,
															multiple: true,
                                                            ajax: {
                                                                url: baseUrl + 'admin/products/search',
                                                                delay: 500
                                                            },
														}"
                                                        :options="cross_sells"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="tab-pane fade"
                                            id="attributes"
                                            role="tabpanel"
                                            aria-labelledby="attributes-tab"
                                        >
                                            <div
                                                class="ecommerce-attributes-wrapper"
                                                v-if="attributes.length > 0"
                                                key="product-attributes"
                                            >
                                                <div
                                                    class="form-group ecommerce-attribute-add justify-content-center row mb-0 pb-3 border-bottom"
                                                    v-if="!disableAttributeAdd"
                                                >
                                                    <div class="col-xl-9">
                                                        <select
                                                            class="form-control form-control-modern float-left w-auto mr-3"
                                                            name="attributes"
                                                        >
                                                            <option
                                                                :value="attribute.id"
                                                                v-for="attribute in selectedAttributes"
                                                                :key="attribute.id"
                                                                :disabled="attribute.disabled"
                                                            >{{ attribute.name }}</option>
                                                        </select>
                                                        <a
                                                            href="#"
                                                            class="ecommerce-attribute-add-new btn btn-primary font-weight-semibold float-left"
                                                            @click="addAttribute"
                                                        >+ New</a>
                                                    </div>
                                                </div>
                                                <div
                                                    class="form-group row justify-content-center ecommerce-attribute-row"
                                                    v-for="attribute in product.attributes"
                                                    :key="attribute.id"
                                                >
                                                    <div class="col-xl-3">
                                                        <label class="control-label">Name</label>
                                                        <label
                                                            type="text"
                                                            class="form-control form-control-modern mb-2"
                                                        >{{ attribute.name }}</label>
                                                        <label class="for-variations">
                                                            <input
                                                                type="checkbox"
                                                                class="checkbox-style-1"
                                                                v-model="attribute.pivot.show_product_page"
                                                            />
                                                            Show on product page.
                                                        </label>
                                                        <label
                                                            class="for-variations"
                                                            v-if="product.type == 'variable'"
                                                        >
                                                            <input
                                                                type="checkbox"
                                                                class="checkbox-style-1"
                                                                v-model="attribute.pivot.used_for_variation"
                                                            />
                                                            Used for variations.
                                                        </label>
                                                    </div>
                                                    <div class="col-xl-6">
                                                        <a
                                                            href="#"
                                                            class="ecommerce-attribute-remove text-color-danger float-right"
                                                            @click="removeAttribute(attribute.id, $event)"
                                                        >Remove</a>
                                                        <label class="control-label">Value(s)</label>
                                                        <Select2
                                                            v-model="attribute.pivot.term_ids"
                                                            :settings="{multiple: true,}"
                                                            :options="attribute.termOptions"
                                                            :id="'term-selector-' +attribute.id"
                                                        />
                                                        <!-- <div
															class="attribute-value-add mt-3"
														>
															<div
																class="input-group float-right w-auto"
															>
																<input
																	type="text"
																	class="form-control form-control-modern w-auto"
																	placeholder="Add new value"
																/>
																<span
																	class="input-group-append"
																>
																	<button
																		type="button"
																		class="btn btn-primary attribute-value-add-new"
																		@click="
																			addTerm(
																				attribute.id,
																				index,
																				$event
																			)
																		"
																	>
																		Add
																	</button>
																</span>
															</div>
                                                        </div>-->
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="ecommerce-attributes-wrapper"
                                                v-else
                                                key="no-attributes"
                                            >
                                                <div class="card-body p-3 border">
                                                    <div class="widget-summary widget-summary-sm">
                                                        <div class="widget-summary-col widget-summary-col-icon">
                                                            <div class="summary-icon bg-primary">
                                                                <i class="fas fa-life-ring"></i>
                                                            </div>
                                                        </div>
                                                        <div class="widget-summary-col">
                                                            <div class="summary">
                                                                <h4 class="title">Before you can add a attribute you need to create attributes on Products/Attribute Page.</h4>
                                                            </div>
                                                            <div class="summary-footer">
                                                                <a
                                                                    class="text-muted text-uppercase primary-color"
                                                                    href="https://d-themes.com/laravel/porto/porto-docs"
                                                                    target="_blank"
                                                                >(Learn More)</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="tab-pane fade"
                                            id="variations"
                                            role="tabpanel"
                                            aria-labelledby="variations-tab"
                                        >
                                            <div
                                                class="ecommerce-variations-wrapper"
                                                v-if="vAttrSelectOptions.length > 0"
                                                key="variations"
                                            >
                                                <div class="form-group">
                                                    <div class="d-flex float-left align-items-center">
                                                        <label class="control-label mb-0 text-nowrap">Default Form Values</label>
                                                        <select
                                                            class="form-control form-control-modern mx-2 w-auto"
                                                            v-model="select.value"
                                                            v-for="(select, index) in vAttrSelectOptions"
                                                            :key="index"
                                                        >
                                                            <option
                                                                :value="opt.id"
                                                                v-for="opt in select.options"
                                                                :key="opt.id"
                                                            >{{ opt.text }}</option>
                                                        </select>
                                                    </div>
                                                    <div class="float-right">
                                                        <a
                                                            href="javscript:;"
                                                            class="ecommerce-variations-add btn btn-primary font-weight-semibold float-right"
                                                            @click="addVariation"
                                                        >+ Add variation</a>
                                                    </div>
                                                </div>
                                                <div
                                                    class="ecommerce-variations-group"
                                                    v-for="(variation, index) in variations"
                                                    :key="index"
                                                >
                                                    <div class="ecommerce-variation">
                                                        <div
                                                            class="ecommerce-variation-header d-flex justify-content-between"
                                                            :class="{'border-top-0': index != 0}"
                                                            @click.self.prevent="variation.open = !variation.open"
                                                        >
                                                            <div class="form-group d-flex mb-0">
                                                                <select
                                                                    class="form-control form-control-modern mx-2 w-auto"
                                                                    v-model="variation.excerpt[index1].termId"
                                                                    v-for="(select, index1) in variation.vAttrSelectOptions"
                                                                    :key="index1"
                                                                >
                                                                    <option
                                                                        :value="opt.id"
                                                                        v-for="opt in select.options"
                                                                        :key="opt.id"
                                                                    >{{ opt.text }}</option>
                                                                </select>
                                                            </div>
                                                            <div class="ecommerce-variation-header-action d-flex align-items-center">
                                                                <a
                                                                    href="#"
                                                                    class="ecommerce-variation-slide-toggle mr-2"
                                                                    @click.prevent="variation.open = !variation.open"
                                                                >{{ variation.open ? "Collapse" : "Expand" }}</a>
                                                                <a
                                                                    href="#"
                                                                    class="ecommerce-variation-remove text-color-danger"
                                                                    @click.prevent="removeVariation(index)"
                                                                >Remove</a>
                                                            </div>
                                                        </div>
                                                        <VueSlideToggle
                                                            :open="variation.open"
                                                            tag="section"
                                                            :duration="500"
                                                        >
                                                            <div class="ecommerce-variation-content d-block">
                                                                <div class="form-group row">
                                                                    <div class="col-6">
                                                                        <div class="variation-img">
                                                                            <a
                                                                                class="modal-sizes btn btn-outline-primary"
                                                                                href="#"
                                                                                @click.prevent="openVariationImageModal(index)"
                                                                            >
                                                                                <img
                                                                                    width="100"
                                                                                    height="100"
                                                                                    alt="Variation"
                                                                                    :src="
																						medium.copy_link
																							? baseUrl + 'storage/' + medium.copy_link
																							: baseUrl + 'img/placeholder-img.png'
																					"
                                                                                    v-for="medium in variation.media"
                                                                                    :key="medium.id"
                                                                                />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-6">
                                                                        <label class="control-label">SKU</label>
                                                                        <input
                                                                            type="text"
                                                                            class="form-control form-control-modern"
                                                                            name="sku"
                                                                            v-model="variation.sku"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div class="form-group">
                                                                    <div class="checkbox-custom checkbox-default checkbox-inline mr-3">
                                                                        <input
                                                                            type="checkbox"
                                                                            :id="'virtual-check' + index"
                                                                            v-model="variation.virtual"
                                                                        />
                                                                        <label :for="'virtual-check' + index">Virtual</label>
                                                                    </div>
                                                                    <div class="checkbox-custom checkbox-default checkbox-inline mr-3">
                                                                        <input
                                                                            type="checkbox"
                                                                            :id="'download-check' + index"
                                                                            v-model="variation.downloadable"
                                                                        />
                                                                        <label :for="'download-check' + index">Downloadable</label>
                                                                    </div>
                                                                    <div
                                                                        class="checkbox-custom checkbox-default checkbox-inline"
                                                                        v-if="settings.product_enable_stock_management == '1'"
                                                                    >
                                                                        <input
                                                                            type="checkbox"
                                                                            :id="'stock-check' + index"
                                                                            v-model="variation.manage_stock"
                                                                        />
                                                                        <label :for="'stock-check' + index">Manage stock?</label>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group">
                                                                    <div class="row">
                                                                        <div class="col-6">
                                                                            <label class="control-label">Regular Price ($)</label>
                                                                            <input
                                                                                type="text"
                                                                                class="form-control form-control-modern"
                                                                                :min="variation.sale_price"
                                                                                v-model="variation.price"
                                                                                required
                                                                            />
                                                                        </div>
                                                                        <div class="col-6">
                                                                            <label class="control-label">Sale Price ($)</label>
                                                                            <div class="d-flex">
                                                                                <input
                                                                                    type="number"
                                                                                    class="form-control form-control-modern"
                                                                                    :max="variation.price"
                                                                                    name="salePrice"
                                                                                    v-model="variation.sale_price"
                                                                                />
                                                                                <a
                                                                                    class="btn btn-link toggle-schedule"
                                                                                    href="#"
                                                                                    @click.prevent="variation.sale_schedule = !variation.sale_schedule"
                                                                                >Schedule</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        class="row mt-3"
                                                                        v-if="variation.sale_schedule"
                                                                    >
                                                                        <div class="col-6">
                                                                            <div class="input-group">
                                                                                <span class="input-group-prepend">
                                                                                    <span class="input-group-text">From</span>
                                                                                </span>
                                                                                <date-picker
                                                                                    v-model="variation.sale_start"
                                                                                    :format="'YYYY-MM-DD'"
                                                                                ></date-picker>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-6">
                                                                            <div class="input-group">
                                                                                <span class="input-group-prepend">
                                                                                    <span class="input-group-text">To</span>
                                                                                </span>
                                                                                <date-picker
                                                                                    v-model="variation.sale_end"
                                                                                    :format="'YYYY-MM-DD'"
                                                                                ></date-picker>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        class="row mt-3"
                                                                        v-if="variation.manage_stock && settings.product_enable_stock_management == '1'"
                                                                    >
                                                                        <div class="col-6">
                                                                            <label class="control-label">Stock Quantity</label>
                                                                            <input
                                                                                type="number"
                                                                                min="0"
                                                                                class="form-control form-control-modern"
                                                                                name="stockQuantity"
                                                                                v-model="variation.stock_quantity"
                                                                            />
                                                                        </div>
                                                                        <div class="col-6">
                                                                            <label class="control-label">Allow backorders</label>
                                                                            <select
                                                                                class="form-control form-control-modern"
                                                                                name="allow_backorder"
                                                                                v-model="variation.allow_backorder"
                                                                            >
                                                                                <option value="no">Do not allow</option>
                                                                                <option value="yes">Allow</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        class="row mt-3"
                                                                        v-if="!variation.manage_stock"
                                                                    >
                                                                        <div class="col-12">
                                                                            <label class="control-label">Stock Status</label>
                                                                            <select
                                                                                class="form-control form-control-modern"
                                                                                name="stock_status"
                                                                                v-model="variation.stock_status"
                                                                            >
                                                                                <option value="in-stock">In Stock</option>
                                                                                <option value="out-of-stock">Out of Stock</option>
                                                                                <option value="on-backorder">On Backorder</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        class="row show mt-3"
                                                                        v-if="!variation.virtual"
                                                                    >
                                                                        <div class="col-6 mb-3">
                                                                            <label class="control-label">Weight ({{ settings.product_weight_unit }})</label>
                                                                            <input
                                                                                type="number"
                                                                                class="form-control form-control-modern"
                                                                                name="weight"
                                                                                v-model="variation.weight"
                                                                            />
                                                                        </div>
                                                                        <div class="col-6 mb-3">
                                                                            <label class="control-label">Dimensions ({{ settings.product_dimentions_unit }})</label>
                                                                            <div class="row">
                                                                                <div class="col-4">
                                                                                    <input
                                                                                        type="number"
                                                                                        class="form-control form-control-modern"
                                                                                        name="dimensionsLength"
                                                                                        v-model="variation.length"
                                                                                        placeholder="Length"
                                                                                    />
                                                                                </div>
                                                                                <div class="col-4">
                                                                                    <input
                                                                                        type="number"
                                                                                        class="form-control form-control-modern"
                                                                                        name="dimensionsWidth"
                                                                                        v-model="variation.width"
                                                                                        placeholder="Width"
                                                                                    />
                                                                                </div>
                                                                                <div class="col-4">
                                                                                    <input
                                                                                        type="number"
                                                                                        class="form-control form-control-modern"
                                                                                        name="dimensionsHeight"
                                                                                        v-model="variation.height"
                                                                                        placeholder="Height"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row mt-3">
                                                                        <div class="col-12">
                                                                            <label class="control-label">Tax Class</label>
                                                                            <select
                                                                                class="form-control form-control-modern"
                                                                                name="tax_type_id"
                                                                                v-model="variation.tax_type_id"
                                                                            >
                                                                                <option value>Same as parent</option>
                                                                                <option
                                                                                    :value="taxType.id"
                                                                                    v-for="taxType in taxTypes"
                                                                                    :key="taxType.id"
                                                                                >{{ taxType.name }}</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row mt-3">
                                                                        <div class="col-12">
                                                                            <label class="control-label">Description</label>
                                                                            <textarea
                                                                                class="form-control form-control-modern"
                                                                                name="productDescription"
                                                                                rows="2"
                                                                                v-model="variation.description"
                                                                            ></textarea>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        class="row mt-3"
                                                                        v-if="variation.downloadable"
                                                                    >
                                                                        <div class="col-12">
                                                                            <label class="control-label">Downloadable files</label>
                                                                            <table class="table table-responsive-lg table-downloadable">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Name</th>
                                                                                        <th>File URL</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr
                                                                                        v-for="(file,index2) in variation.files"
                                                                                        :key="index2"
                                                                                    >
                                                                                        <td>
                                                                                            <input
                                                                                                type="text"
                                                                                                class="form-control form-control-modern"
                                                                                                v-model="file.pivot.name"
                                                                                            />
                                                                                        </td>
                                                                                        <td>
                                                                                            <div class="input-group">
                                                                                                <input
                                                                                                    type="text"
                                                                                                    class="form-control form-control-modern"
                                                                                                    v-model="file.copy_link"
                                                                                                    placeholder="file path"
                                                                                                />
                                                                                                <div class="input-group-append">
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        class="btn btn-primary"
                                                                                                        @click="openVariationFileModal(index, index2)"
                                                                                                    >Choose File</button>
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        class="btn btn-danger btn-remove"
                                                                                                        @click="removeVariationDownloadableFile(index, index2)"
                                                                                                    >
                                                                                                        <i class="bx bx-trash text-4 mt-1"></i>
                                                                                                    </button>
                                                                                                </div>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                                <tfoot>
                                                                                    <tr>
                                                                                        <th>
                                                                                            <a
                                                                                                href="javascript:;"
                                                                                                class="btn btn-primary"
                                                                                                @click="addVariationDownLoadableFile(index)"
                                                                                            >Add file</a>
                                                                                        </th>
                                                                                        <th></th>
                                                                                    </tr>
                                                                                </tfoot>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </VueSlideToggle>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="ecommerce-variations-wrapper"
                                                v-else
                                                key="no-variations"
                                            >
                                                <div class="card-body p-3 border">
                                                    <div class="widget-summary widget-summary-sm">
                                                        <div class="widget-summary-col widget-summary-col-icon">
                                                            <div class="summary-icon bg-primary">
                                                                <i class="fas fa-life-ring"></i>
                                                            </div>
                                                        </div>
                                                        <div class="widget-summary-col">
                                                            <div class="summary">
                                                                <h4 class="title">Before you can add a variation you need to add some variation attributes on the Attributes tab.</h4>
                                                            </div>
                                                            <div class="summary-footer">
                                                                <a
                                                                    class="text-muted text-uppercase primary-color"
                                                                    href="https://d-themes.com/laravel/porto/porto-docs"
                                                                    target="_blank"
                                                                >(Learn More)</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="tab-pane fade"
                                            id="advanced"
                                            role="tabpanel"
                                            aria-labelledby="advanced-tab"
                                        >
                                            <div class="form-group row">
                                                <label class="col-lg-5 col-xl-3 control-label text-lg-right pt-2 mt-1 mb-0">
                                                    Purchase Note
                                                    <span
                                                        class="porto-help-tip"
                                                        data-toggle="tooltip"
                                                        title
                                                        data-original-title="Enter an optional note to send the customer after purchase."
                                                    ></span>
                                                </label>
                                                <div class="col-lg-7 col-xl-6">
                                                    <textarea
                                                        class="form-control form-control-modern"
                                                        name="purchase_note"
                                                        rows="6"
                                                        v-model="product.purchase_note"
                                                    ></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div class="row action-buttons">
                <div class="col-12 col-md-auto">
                    <button
                        type="submit"
                        class="submit-button btn btn-primary btn-px-4 py-3 d-flex align-items-center font-weight-semibold line-height-1"
                    >
                        <i class="bx bx-save text-4 mr-2"></i> Save Product
                    </button>
                </div>
                <div class="col-12 col-md-auto px-md-0 mt-3 mt-md-0">
                    <a
                        href="#"
                        class="cancel-button btn btn-light btn-px-4 py-3 border font-weight-semibold text-color-dark line-height-1 d-flex h-100 align-items-center"
                    >Back</a>
                </div>
            </div>
        </form>
        <modal
            name="media-modal"
            :height="'80%'"
            :width="'80%'"
        >
            <add-media-component
                :total-media="totalImages"
                :multi-select="true"
                @file-add-success="fileUploadSuccess"
                @file-click="modalFileClick"
                @modal-set="modalSetGallery"
            ></add-media-component>
        </modal>

        <modal
            name="file-modal"
            :height="'80%'"
            :width="'80%'"
        >
            <add-media-component
                :total-media="totalMedia"
                :multi-select="false"
                @file-add-success="fileUploadSuccess"
                @file-click="modalFileClick"
                @modal-set="modalSetFile"
            ></add-media-component>
        </modal>

        <modal
            name="variation-image-modal"
            :height="'80%'"
            :width="'80%'"
        >
            <add-media-component
                :total-media="totalMedia"
                :multi-select="false"
                @file-add-success="fileUploadSuccess"
                @file-click="modalFileClick"
                @modal-set="modalSetVariationImage"
            ></add-media-component>
        </modal>

        <modal
            name="variation-file-modal"
            :height="'80%'"
            :width="'80%'"
        >
            <add-media-component
                :total-media="totalMedia"
                :multi-select="false"
                @file-add-success="fileUploadSuccess"
                @file-click="modalFileClick"
                @modal-set="modalSetVariationFile"
            ></add-media-component>
        </modal>

        <LightBox
            ref="lightbox"
            class="porto-light-box"
            :media="lightboxMedia"
            :show-caption="true"
            :show-light-box="false"
        />
    </div>
</template>

<script>
import LightBox from "vue-image-lightbox";
import Select2 from "v-select2-component";
import DatePicker from "vue2-datepicker";
import { VueSlideToggle } from "vue-slide-toggle";
import { VueEditor } from "vue2-editor";

import AddMediaComponent from "./AddMediaComponent";
import "vue2-datepicker/index.css";
import "vue-image-lightbox/dist/vue-image-lightbox.min.css";

export default {
    components: {
        DatePicker,
        Select2,
        LightBox,
        VueSlideToggle,
        AddMediaComponent,
    },
    props: {
        productTags: Array,
        taxTypes: Array,
        token: String,
        upsells: Array,
        cross_sells: Array,
        initialProduct: {
            type: Object,
            default: function () {
                return {
                    type: "simple",
                    sale_schedule: false,
                    virtual: false,
                    downloadable: false,
                    tax_status: "taxable",
                    tax_type_id: 1,
                    allow_backorder: "no",
                    stock_status: "in-stock",
                    manage_stock: false,
                    attributes: [],
                    media: [],
                    tags: [],
                    files: [],
                    upsells: [],
                    cross_sells: []
                };
            },
        },
        baseUrl: String,
        attributes: Array,
        vProducts: {
            type: Array,
            default: function () {
                return [];
            },
        },
        settings: {
            type: Object,
            default: function () {
                return {
                    product_weight_unit: "kg",
                    product_dimentions_unit: "cm",
                };
            },
        },
    },
    data: function () {
        return {
            product: {},
            selectedAttributes: [], // attributes shown in attribute select.
            totalMedia: [],
            variations: [],
            checkedIndex1: 0,
            checkedIndex2: 0,
            selectedTags: [],
            mediaFetched: false
        };
    },
    computed: {
        disableAttributeAdd: function () {
            return this.selectedAttributes.reduce( ( acc, cur ) => {
                return acc & cur.disabled;
            }, true );
        },
        totalImages: function () {
            return this.totalMedia.filter( ( medium ) =>
                medium.type.includes( "image" )
            );
        },
        lightboxMedia: function () {
            return this.product.media.reduce( ( acc, cur ) => {
                return [
                    ...acc,
                    {
                        thumb: this.baseUrl + "storage/" + cur.copy_link,
                        src: this.baseUrl + "storage/" + cur.copy_link,
                        caption: "<h4>" + cur.name + "<h4>",
                    },
                ];
            }, [] );
        },
        vAttrSelectOptions: function () {
            var attrOpts = [];
            this.product.attributes.map( ( attr ) => {
                if (
                    attr.pivot.used_for_variation &&
                    attr.pivot.term_ids.length > 0
                ) {
                    var options = [
                        {
                            id: null,
                            text: "Any " + attr.name,
                        },
                    ];
                    for ( var i = 0; i < attr.pivot.term_ids.length; i++ ) {
                        var result = attr.termOptions.find(
                            ( option ) => option.id == attr.pivot.term_ids[ i ]
                        );
                        if ( result ) {
                            options.push( result );
                        }
                    }
                    attrOpts.push( {
                        value: null,
                        id: attr.id,
                        options: options,
                    } );
                }
            } );
            return attrOpts;
        },
    },
    created: function () {
        this.product = {
            ...this.initialProduct,
            sale_start: this.initialProduct.sale_start
                ? new Date( this.initialProduct.sale_start )
                : null,
            sale_end: this.initialProduct.sale_end
                ? new Date( this.initialProduct.sale_end )
                : null,
        };

        this.selectedAttributes = this.attributes.reduce( ( acc, cur ) => {
            for ( let i = 0; i < this.product.attributes.length; i++ ) {
                if ( cur.id == this.product.attributes[ i ].id ) {
                    return [
                        ...acc,
                        {
                            ...cur,
                            disabled: true,
                        },
                    ];
                }
            }

            return [
                ...acc,
                {
                    ...cur,
                    disabled: false,
                },
            ];
        }, [] );

        this.product.attributes = this.product.attributes.reduce( ( acc, cur ) => {
            for ( let i = 0; i < this.attributes.length; i++ ) {
                if ( cur.id == this.attributes[ i ].id ) {
                    let termOptions = this.attributes[ i ].terms.reduce(
                        ( acc, cur ) => {
                            return [
                                ...acc,
                                {
                                    id: cur.id,
                                    text: this.isColor( cur.name )
                                        ? cur.slug.replace(
                                            cur.slug[ 0 ],
                                            cur.slug[ 0 ].toUpperCase()
                                        )
                                        : cur.name,
                                },
                            ];
                        },
                        []
                    );

                    return [
                        ...acc,
                        {
                            ...cur,
                            pivot: {
                                ...cur.pivot,
                                term_ids: cur.pivot.term_ids.split( "," ),
                            },
                            termOptions: termOptions,
                        },
                    ];
                }
            }

            return acc;
        }, [] );

        this.variations = this.vProducts.reduce( ( acc, cur ) => {
            return [
                ...acc,
                {
                    ...cur,
                    excerpt: JSON.parse( cur.excerpt ),
                    open: false,
                    sale_start: cur.sale_start
                        ? new Date( cur.sale_start )
                        : null,
                    sale_end: cur.sale_end ? new Date( cur.sale_end ) : null,
                },
            ];
        }, [] );
    },
    mounted: function () {
        let tagNames = [];
        this.product.tags.map( ( item, index ) => {
            tagNames.push( item.name );
        } );
        this.selectedTags = tagNames;
    },
    methods: {
        // Add tags on typing
        addTag: function ( e ) {
            let currentTarget = e.currentTarget;
            currentTarget.setAttribute( 'size', Math.max( 1, currentTarget.value.length ) );

            if ( e.key === 'Enter' ) {
                e.preventDefault();
                currentTarget.setAttribute( 'size', 1 );

                if ( !this.selectedTags.includes( currentTarget.value ) && currentTarget.value.length > 0 ) {
                    this.selectedTags.push( currentTarget.value );
                }
                currentTarget.value = '';
            }
        },

        // Selecte existing tags
        selecteTag: function ( tagName ) {
            if ( !this.selectedTags.includes( tagName ) )
                this.selectedTags.push( tagName );
        },

        // Remove tag
        removeTag: function ( index ) {
            this.selectedTags.splice( index, 1 );
        },

        // Make the input tag focused
        foucsTagInput: function ( e ) {
            e.currentTarget.querySelector( 'input' ).focus();
        },

        // Open media gallery modal
        openMediaModal: async function () {
            if ( !this.mediaFetched ) {
                await window.axios
                    .get( baseUrl + '/admin/media/fetch' )
                    .then( ( response ) => {
                        this.totalMedia = response.data.data;
                    } )
                    .catch( ( error ) => {
                        console.log( "error occured", error );
                    } )

                this.totalMedia = this.totalMedia.reduce( ( acc, cur ) => {
                    for ( let i = 0; i < this.product.media.length; i++ ) {
                        if ( cur.id == this.product.media[ i ].id ) {
                            return [
                                ...acc,
                                {
                                    ...cur,
                                    selected: true,
                                },
                            ];
                        }
                    }

                    return [
                        ...acc,
                        {
                            ...cur,
                            selected: false,
                        },
                    ];
                }, [] );

                this.mediaFetched = true;
            }

            this.$modal.show( "media-modal" );
        },

        // Open downloadable files modal
        openFileModal: function ( index ) {
            this.totalMedia = this.totalMedia.reduce( ( acc, cur ) => {
                return [
                    ...acc,
                    {
                        ...cur,
                        selected: false,
                    },
                ];
            }, [] );
            this.checkedIndex1 = index;
            this.$modal.show( "file-modal" );
        },

        // Open variation image modal
        openVariationImageModal: function ( index ) {
            this.totalMedia = this.totalMedia.reduce( ( acc, cur ) => {
                return [
                    ...acc,
                    {
                        ...cur,
                        selected: false,
                    },
                ];
            }, [] );

            this.checkedIndex1 = index;
            this.$modal.show( "variation-image-modal" );
        },

        // Open variation downloadable file
        openVariationFileModal: function ( index1, index2 ) {
            this.totalMedia = this.totalMedia.reduce( ( acc, cur ) => {
                return [
                    ...acc,
                    {
                        ...cur,
                        selected: false,
                    },
                ];
            }, [] );
            this.checkedIndex1 = index1;
            this.checkedIndex2 = index2;
            this.$modal.show( "variation-file-modal" );
        },

        onSubmit: function () {
            if (
                this.product.type == "variable" &&
                this.variations.length == 0
            ) {
                this.$vToastify.setSettings( {
                    withBackdrop: false,
                    position: "top-right",
                    errorDuration: 2000,
                } );
                this.$vToastify.error(
                    "Variable product should have at least one variation."
                );
                return;
            }

            if ( this.product.type == "simple" && !this.product.price ) {
                this.$vToastify.setSettings( {
                    withBackdrop: false,
                    position: "top-right",
                    errorDuration: 2000,
                } );
                this.$vToastify.error( "Product should have price." );
                return;
            }

            if ( !this.product.id ) this.create();
            else this.update();
        },

        // Add attribute in attribute tab
        addAttribute: function ( e ) {
            e.preventDefault();
            let id = e.target.previousElementSibling.value;

            for ( let i = 0; i < this.product.attributes.length; i++ ) {
                if ( this.product.attributes[ i ].id == id ) {
                    return;
                }
            }

            let attr = {};
            this.selectedAttributes = this.selectedAttributes.reduce(
                ( acc, cur ) => {
                    if ( cur.id == id ) {
                        attr = { ...cur };

                        return [
                            ...acc,
                            {
                                ...cur,
                                disabled: true,
                            },
                        ];
                    } else {
                        return [ ...acc, cur ];
                    }
                },
                []
            );

            let termOptions = attr.terms.reduce( ( acc, cur ) => {
                return [
                    ...acc,
                    {
                        id: cur.id,
                        text: this.isColor( cur.name )
                            ? cur.slug.replace(
                                cur.slug[ 0 ],
                                cur.slug[ 0 ].toUpperCase()
                            )
                            : cur.name,
                    },
                ];
            }, [] );

            this.product.attributes.push( {
                ...attr,
                pivot: {
                    term_ids: [],
                    show_product_page: true,
                    used_for_variation: false,
                },
                termOptions: termOptions,
            } );
        },

        // Add attribute
        removeAttribute: function ( id, event ) {
            this.product = {
                ...this.product,
                attributes: this.product.attributes.filter(
                    ( attr ) => attr.id != id
                ),
            };

            this.selectedAttributes = this.selectedAttributes.reduce(
                ( acc, cur ) => {
                    if ( cur.id == id ) {
                        return [
                            ...acc,
                            {
                                ...cur,
                                disabled: false,
                            },
                        ];
                    }

                    return [ ...acc, cur ];
                },
                []
            );
            event.preventDefault();
        },

        // Add new term
        addTerm: async function ( attributeId, index, event ) {
            event.preventDefault();
            let name = event.target.parentNode.previousElementSibling.value;
            if ( !name ) {
                this.$vToastify.setSettings( {
                    withBackdrop: false,
                    position: "top-right",
                    errorDuration: 1000,
                } );
                this.$vToastify.error( "Term could not be empty" );
                return;
            }

            this.$vToastify.setSettings( {
                withBackdrop: true,
                position: "center-center",
            } );
            this.$vToastify.loader( "Please wait..." );
            await window.axios
                .post( "/admin/products/attributes/terms/ajax", {
                    name: name,
                    attribute_id: attributeId,
                } )
                .then( ( response ) => {
                    this.$vToastify.stopLoader();

                    this.product.attributes[ index ] = {
                        ...this.product.attributes[ index ],
                        pivot: {
                            ...this.product.attributes[ index ].pivot,
                            term_ids: [
                                ...this.product.attributes[ index ].pivot
                                    .term_ids,
                                response.data.id,
                            ],
                        },
                        termOptions: [
                            ...this.product.attributes[ index ].termOptions,
                            {
                                id: response.data.id,
                                text: response.data.name,
                            },
                        ],
                    };
                    this.product.attributes = [ ...this.product.attributes ];
                } )
                .catch( ( error ) => {
                    this.$vToastify.stopLoader();
                    this.$vToastify.setSettings( {
                        withBackdrop: false,
                        position: "top-right",
                        errorDuration: 1000,
                    } );
                    this.$vToastify.error( "Term has already been created" );
                } );
        },

        // Ajust variation when click variation tab
        variationTabClick () {
            this.variations = this.variations.reduce( ( acc, cur ) => {
                var excerpt = [];
                this.vAttrSelectOptions.forEach( ( select, index ) => {
                    var result = cur.excerpt.find(
                        ( exc ) => exc.attrId == select.id
                    );
                    if ( result ) {
                        if (
                            result.termId == null ||
                            ( result.termId != null &&
                                !select.options.find(
                                    ( option ) => option.id == result.termId
                                ) )
                        ) {
                            excerpt.push( {
                                attrId: result.attrId,
                                termId: null,
                            } );
                        } else {
                            excerpt.push( {
                                attrId: result.attrId,
                                termId: result.termId,
                            } );
                        }
                    } else {
                        excerpt.push( {
                            attrId: select.id,
                            termId: null,
                        } );
                    }
                } );

                if ( excerpt.length > 0 ) {
                    return [
                        ...acc,
                        {
                            ...cur,
                            excerpt: excerpt,
                            vAttrSelectOptions: this.vAttrSelectOptions,
                        },
                    ];
                } else {
                    return acc;
                }
            }, [] );
        },

        // determine whether a term is color
        isColor: function ( value ) {
            return value.includes( "#" );
        },

        // save new product
        create: async function () {
            this.$vToastify.setSettings( {
                withBackdrop: true,
                position: "center-center",
            } );
            this.$vToastify.loader( "Please wait..." );

            window.axios
                .post( "/admin/products", {
                    ...this.product,
                    product_tags: this.selectedTags,
                    product_categories: $( "#treeCheckbox" )
                        .jstree()
                        .get_checked(),
                    variations: this.variations,
                } )
                .then( ( response ) => {
                    window.location =
                        window.baseUrl +
                        "/admin/products/" +
                        response.data[ 0 ].id +
                        "/edit";
                } )
                .catch( ( error ) => {
                    this.$vToastify.stopLoader();
                    this.$vToastify.setSettings( {
                        withBackdrop: false,
                        position: "top-right",
                        errorDuration: 1000,
                    } );
                    this.$vToastify.error( "Product creation error" );
                } );
        },

        // update existing product
        update: async function () {
            this.$vToastify.setSettings( {
                withBackdrop: true,
                position: "center-center",
            } );
            this.$vToastify.loader( "Please wait..." );

            window.axios
                .put( "/admin/products/" + this.product.id, {
                    ...this.product,
                    product_tags: this.selectedTags,
                    product_categories: $( "#treeCheckbox" )
                        .jstree()
                        .get_checked(),
                    variations: this.variations,
                } )
                .then( ( response ) => {
                    this.$vToastify.stopLoader();
                    this.product = {
                        ...response.data[ 0 ],
                        attributes: [ ...this.product.attributes ],
                        sale_start: response.data[ 0 ].sale_start
                            ? new Date( response.data[ 0 ].sale_start )
                            : null,
                        sale_end: response.data[ 0 ].sale_end
                            ? new Date( response.data[ 0 ].sale_end )
                            : null,
                    };
                    this.variations = response.data[ 1 ].reduce( ( acc, cur ) => {
                        return [
                            ...acc,
                            {
                                ...cur,
                                excerpt: JSON.parse( cur.excerpt ),
                                open: false,
                                sale_start: cur.sale_start
                                    ? new Date( cur.sale_start )
                                    : null,
                                sale_end: cur.sale_end
                                    ? new Date( cur.sale_end )
                                    : null,
                                vAttrSelectOptions: this.vAttrSelectOptions,
                            },
                        ];
                    }, [] );
                } )
                .catch( ( error ) => {
                    this.$vToastify.stopLoader();
                    this.$vToastify.setSettings( {
                        withBackdrop: false,
                        position: "top-right",
                        errorDuration: 1000,
                    } );
                    this.$vToastify.error( "Product update error" );
                } );
        },

        // Add Image when image upload
        fileUploadSuccess: function ( medium, selected ) {
            this.totalMedia = [
                ...this.totalMedia,
                {
                    ...medium,
                    selected: selected,
                },
            ];
        },

        // modal file click
        modalFileClick: function ( medium, multiSelect ) {
            this.totalMedia = this.totalMedia.reduce( ( acc, cur ) => {
                if ( medium.id == cur.id ) {
                    return [
                        ...acc,
                        {
                            ...cur,
                            selected: !cur.selected,
                        },
                    ];
                } else {
                    if ( multiSelect ) {
                        return [ ...acc, cur ];
                    } else {
                        return [
                            ...acc,
                            {
                                ...cur,
                                selected: false,
                            },
                        ];
                    }
                }
            }, [] );
        },

        // Action after media modal set
        modalSetGallery: function ( media ) {
            var mediaArray = [];

            media.map( ( medium ) => {
                if ( medium.type.includes( "image" ) ) {
                    mediaArray.push( {
                        ...medium,
                        pivot: {
                            default: false,
                        },
                    } );

                    for ( let i = 0; i < this.product.media.length; i++ ) {
                        if ( medium.id == this.product.media[ i ].id ) {
                            mediaArray.pop();
                            mediaArray.push( {
                                ...this.product.media[ i ],
                            } );
                            break;
                        }
                    }
                }
            } );

            this.product.media = [ ...mediaArray ];
        },

        // Action after file modal set
        modalSetFile: function ( media ) {
            media.map( ( medium ) => {
                if ( medium.selected ) {
                    this.product.files[ this.checkedIndex1 ].id = medium.id;
                    this.product.files[ this.checkedIndex1 ].pivot.name =
                        this.product.files[ this.checkedIndex1 ].pivot.name ==
                            null
                            ? medium.name
                            : this.product.files[ this.checkedIndex1 ].pivot.name;
                    this.product.files[ this.checkedIndex1 ].copy_link =
                        medium.copy_link;
                    this.product.files[ this.checkedIndex1 ].name = medium.name;
                }
            } );
        },

        // Action after variation image modal set
        modalSetVariationImage: function ( media ) {
            media.map( ( medium ) => {
                if ( medium.selected && medium.type.includes( "image" ) ) {
                    this.variations[ this.checkedIndex1 ].media.push( {
                        id: medium.id,
                        copy_link: medium.copy_link,
                        name: medium.name,
                        pivot: {
                            default: true,
                        },
                    } );
                }
            } );
        },

        // Action after variation file modal set
        modalSetVariationFile: function ( media ) {
            media.map( ( medium ) => {
                if ( medium.selected ) {
                    this.variations[ this.checkedIndex1 ].files[
                        this.checkedIndex2
                    ].id = medium.id;
                    this.variations[ this.checkedIndex1 ].files[
                        this.checkedIndex2
                    ].pivot.name =
                        this.variations[ this.checkedIndex1 ].files[
                            this.checkedIndex2
                        ].pivot.name == null
                            ? medium.name
                            : this.variations[ this.checkedIndex1 ].files[
                                this.checkedIndex2
                            ].pivot.name;
                    this.variations[ this.checkedIndex1 ].files[
                        this.checkedIndex2
                    ].copy_link = medium.copy_link;
                    this.variations[ this.checkedIndex1 ].files[
                        this.checkedIndex2
                    ].name = medium.name;
                }
            } );
        },

        // cancel media
        cancelMedia: function ( medium ) {
            this.product.media = this.product.media.filter(
                ( item ) => item.id != medium.id
            );

            this.totalMedia = this.totalMedia.reduce( ( acc, cur ) => {
                for ( let i = 0; i < this.product.media.length; i++ ) {
                    if ( cur.id == this.product.media[ i ].id ) {
                        return [
                            ...acc,
                            {
                                ...cur,
                                selected: true,
                            },
                        ];
                    }
                }

                return [
                    ...acc,
                    {
                        ...cur,
                        selected: false,
                    },
                ];
            }, [] );
        },

        // select default media image
        chooseDefaultImage: function ( medium ) {
            this.product.media = this.product.media.reduce( ( acc, cur ) => {
                if ( cur.id == medium.id ) {
                    return [
                        ...acc,
                        {
                            ...cur,
                            pivot: {
                                ...cur.pivot,
                                default: true,
                            },
                        },
                    ];
                }

                return [
                    ...acc,
                    {
                        ...cur,
                        pivot: {
                            ...cur.pivot,
                            default: false,
                        },
                    },
                ];
            }, [] );
        },

        // Open image lightbox
        openGallery: function ( index ) {
            this.$refs.lightbox.showImage( index );
        },

        // Add downloadable file
        addDownloadableFile: function () {
            this.product.files.push( {
                id: null,
                copy_link: null,
                pivot: {
                    name: null,
                },
            } );
        },

        // downloadable file remove
        removeDownloadableFile: function ( index ) {
            this.product.files = this.product.files.filter(
                ( item, id ) => id != index
            );
        },

        // Add variations to product
        addVariation: function () {
            var excerpt = [];
            this.vAttrSelectOptions.map( ( select, index ) => {
                excerpt.push( {
                    attrId: select.id,
                    termId: select.value,
                } );
            } );
            this.variations.push( {
                excerpt: excerpt,
                open: false,
                virtual: false,
                downloadable: false,
                tax_status: "taxable",
                tax_type_id: 1,
                allow_backorder: "no",
                stock_status: "in-stock",
                sale_schedule: false,
                manage_stock: false,
                media: [],
                files: [],
                vAttrSelectOptions: this.vAttrSelectOptions,
            } );
        },

        removeVariation: function ( index ) {
            this.variations = this.variations.filter(
                ( variation, id ) => id != index
            );
        },

        // Add variation downladable file
        addVariationDownLoadableFile: function ( index ) {
            this.variations[ index ].files.push( {
                id: null,
                copy_link: null,
                pivot: {
                    name: null,
                },
            } );
        },

        // remove variation downloadable file
        removeVariationDownloadableFile: function ( index1, index2 ) {
            this.variations[ index1 ].files = this.product.files.filter(
                ( item, id ) => id != index2
            );
        },
    },
};
</script>