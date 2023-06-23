<template>
    <div @click="contentClick($event)">
        <div class="theme-settings-container">
            <iframe
                ref="shop"
                class="preview"
                :src="baseUrl"
                width="100%"
                allowfullscreen="true"
            >
            </iframe>
            <aside class="sidebar order-lg-first">
                <div class="sidebar-header h-auto">
                    <a
                        class="btn btn-default btn-dismiss"
                        href="#"
                        @click.prevent="leaveSettingPage"
                    ><i class="fa fa-times"></i></a>
                    <button
                        class="btn btn-sm btn-primary ml-auto px-1 mr-3"
                        type="submit"
                        form="theme-settings-form"
                    >
                        Save
                    </button>
                </div>
                <form
                    id="theme-settings-form"
                    :action="baseUrl + '/admin/ecommerce/settings/theme'"
                    method="post"
                >
                    <input
                        type="hidden"
                        name="_token"
                        :value="csrfToken"
                        required
                    />
                    <div class="sidebar-content">
                        <div
                            class="tab-content"
                            id="themeSettings"
                        >
                            <div
                                class="tab-pane fade show active"
                                id="home"
                                role="tabpanel"
                            >
                                <div class="tab-header">
                                    <div class="current-setting">
                                        Please choose one option to customize
                                        your site?
                                    </div>
                                </div>
                                <ul class="nav flex-column">
                                    <li class="nav-item">
                                        <a
                                            class="nav-link"
                                            id="header-tab"
                                            data-toggle="tab"
                                            href="#header"
                                            role="tab"
                                        >Header</a>
                                    </li>
                                    <li class="nav-item">
                                        <a
                                            class="nav-link"
                                            id="color-tab"
                                            data-toggle="tab"
                                            href="#color"
                                            role="tab"
                                        >Color</a>
                                    </li>
                                    <li class="nav-item">
                                        <a
                                            class="nav-link"
                                            id="typography-tab"
                                            data-toggle="tab"
                                            href="#typography"
                                            role="tab"
                                        >Typography</a>
                                    </li>
                                    <li class="nav-item">
                                        <a
                                            class="nav-link"
                                            id="shop-tab"
                                            data-toggle="tab"
                                            href="#shop"
                                            role="tab"
                                        >Ecommerce</a>
                                    </li>
                                    <li class="nav-item">
                                        <a
                                            class="nav-link"
                                            id="blog-tab"
                                            data-toggle="tab"
                                            href="#blog"
                                            role="tab"
                                        >Blog</a>
                                    </li>
                                    <li class="nav-item">
                                        <a
                                            class="nav-link"
                                            id="footer-tab"
                                            data-toggle="tab"
                                            href="#footer"
                                            role="tab"
                                        >Footer</a>
                                    </li>
                                    <li class="nav-item">
                                        <a
                                            class="nav-link"
                                            id="custom-css-tab"
                                            data-toggle="tab"
                                            href="#custom-css"
                                            role="tab"
                                        >Custom CSS</a>
                                    </li>
                                </ul>
                            </div>
                            <div
                                class="tab-pane fade"
                                id="header"
                                role="tabpanel"
                            >
                                <div class="tab-header">
                                    <a
                                        class="nav-link"
                                        data-toggle="tab"
                                        href="#home"
                                        role="tab"
                                    ></a>
                                    <div class="current-setting">
                                        You are customizing
                                        <h4>Header</h4>
                                    </div>
                                </div>
                                <ul class="nav flex-column">
                                    <li class="nav-item">
                                        <a
                                            class="nav-link"
                                            id="profile-tab"
                                            data-toggle="tab"
                                            href="#header-preset"
                                            role="tab"
                                        >Preset</a>
                                    </li>
                                    <li class="nav-item">
                                        <a
                                            class="nav-link"
                                            id="contact-tab"
                                            data-toggle="tab"
                                            href="#logo-site"
                                            role="tab"
                                        >Logo &amp; Site Identity</a>
                                    </li>
                                    <li class="nav-item">
                                        <a
                                            class="nav-link"
                                            id="header-icon-tab"
                                            data-toggle="tab"
                                            href="#header-icons"
                                            role="tab"
                                        >Header Icons</a>
                                    </li>
                                    <li class="nav-item">
                                        <a
                                            class="nav-link"
                                            id="contact-tab"
                                            data-toggle="tab"
                                            href="#cart-menu-type"
                                            role="tab"
                                        >Mini Cart Type</a>
                                    </li>
                                    <li class="nav-item">
                                        <a
                                            class="nav-link"
                                            id="search-form-tab"
                                            data-toggle="tab"
                                            href="#search-form"
                                            role="tab"
                                        >Search Form</a>
                                    </li>
                                </ul>
                            </div>
                            <div
                                class="tab-pane fade"
                                id="header-preset"
                                role="tabpanel"
                            >
                                <div class="tab-header">
                                    <a
                                        class="nav-link"
                                        data-toggle="tab"
                                        href="#header"
                                        role="tab"
                                    ></a>
                                    <div class="current-setting">
                                        Customizing
                                        <i class="fa fa-angle-right"></i>
                                        Header
                                        <h4>Presets</h4>
                                    </div>
                                </div>
                                <div class="settings-panel">
                                    <input
                                        type="hidden"
                                        name="header_type"
                                        :value="headerType"
                                    />
                                    <div
                                        class="preset-preview"
                                        :class="{
											active:
												headerType ===
												'HeaderOneComponent',
										}"
                                        @click="
											headerTypeSelect(
												'HeaderOneComponent'
											)
										"
                                    >
                                        <img
                                            :src="
												baseUrl +
												'/server/images/settings/headers/header-one.png'
											"
                                            alt="Header Type"
                                            width="1250"
                                            height="247"
                                        />
                                    </div>
                                    <div
                                        class="preset-preview"
                                        :class="{
											active:
												headerType ===
												'HeaderTwoComponent',
										}"
                                        @click="
											headerTypeSelect(
												'HeaderTwoComponent'
											)
										"
                                    >
                                        <img
                                            :src="
												baseUrl +
												'/server/images/settings/headers/header-two.png'
											"
                                            alt="Header Type"
                                            width="1250"
                                            height="247"
                                        />
                                    </div>
                                    <div
                                        class="preset-preview"
                                        :class="{
											active:
												headerType ===
												'HeaderThreeComponent',
										}"
                                        @click="
											headerTypeSelect(
												'HeaderThreeComponent'
											)
										"
                                    >
                                        <img
                                            :src="
												baseUrl +
												'/server/images/settings/headers/header-three.png'
											"
                                            alt="Header Type"
                                            width="1250"
                                            height="247"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                class="tab-pane fade"
                                id="logo-site"
                                role="tabpanel"
                            >
                                <div class="tab-header">
                                    <a
                                        class="nav-link"
                                        data-toggle="tab"
                                        href="#header"
                                        role="tab"
                                    ></a>
                                    <div class="current-setting">
                                        Customizing
                                        <i class="fa fa-angle-right"></i>
                                        Header
                                        <h4>
                                            Logo &amp; Site Identity
                                        </h4>
                                    </div>
                                </div>
                                <div class="settings-panel">
                                    <div class="form-group">
                                        <label class="control-label">Site title</label>
                                        <input
                                            class="form-control form-control-modern"
                                            name="site_title"
                                            type="text"
                                            v-model="siteTitle"
                                            required
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Tagline</label>
                                        <input
                                            class="form-control form-control-modern"
                                            name="tagline"
                                            type="text"
                                            v-model="tagline"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">
                                            Logo Image
                                        </label>
                                        <img
                                            class="logo"
                                            v-lazy="`${baseUrl}/${logoImage}`"
                                            alt="Logo"
                                            :width="logoImageWidth"
                                            :height="logoImageHeight"
                                        />
                                        <button
                                            class="btn btn-sm btn-default px-1 my-3 mr-2"
                                            :disabled="
												logoImage ===
												settings.logo_image
											"
                                            type="button"
                                            @click="resetLogo"
                                        >
                                            Reset
                                        </button>
                                        <button
                                            class="btn btn-sm btn-primary px-1 my-3 mr-3"
                                            type="button"
                                            @click="openMediaModal"
                                        >
                                            Select
                                        </button>
                                        <input
                                            type="hidden"
                                            name="logo_image"
                                            v-model="logoImage"
                                        />
                                        <input
                                            type="hidden"
                                            name="logo_image_width"
                                            v-model="logoImageWidth"
                                        />
                                        <input
                                            type="hidden"
                                            name="logo_image_height"
                                            v-model="logoImageHeight"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                class="tab-pane fade"
                                id="header-icons"
                                role="tabpanel"
                            >
                                <div class="tab-header">
                                    <a
                                        class="nav-link"
                                        data-toggle="tab"
                                        href="#header"
                                        role="tab"
                                    ></a>
                                    <div class="current-setting">
                                        Customizing
                                        <i class="fa fa-angle-right"></i>
                                        Header
                                        <h4>Header Icons</h4>
                                    </div>
                                </div>
                                <div class="settings-panel">
                                    <div class="form-group">
                                        <label class="control-label">Mobile Menu Icon Style</label>
                                        <div class="row no-gutters">
                                            <div class="radio-custom radio-image col-md-6 col-lg-4">
                                                <input
                                                    type="radio"
                                                    id="mmenu-style-none"
                                                    name="mobile_menu_toggler_style"
                                                    v-model="
														mobileMenuTogglerStyle
													"
                                                    value="null"
                                                    @change="applyThemeSettings"
                                                />
                                                <label for="mmenu-style-none">
                                                    <img
                                                        :src="
															assetUrl +
															'server/images/settings/icons/nav-icon-plain.svg'
														"
                                                        alt="icon"
                                                    />
                                                </label>
                                            </div>
                                            <div class="radio-custom radio-image col-md-6 col-lg-4">
                                                <input
                                                    type="radio"
                                                    name="mobile_menu_toggler_style"
                                                    id="mmenu-outline-circle"
                                                    v-model="
														mobileMenuTogglerStyle
													"
                                                    value="outline circle"
                                                    @change="applyThemeSettings"
                                                />
                                                <label for="mmenu-outline-circle">
                                                    <img
                                                        :src="
															assetUrl +
															'server/images/settings/icons/nav-icon-outline.svg'
														"
                                                        alt="icon"
                                                    />
                                                </label>
                                            </div>
                                            <div class="radio-custom radio-image col-md-6 col-lg-4">
                                                <input
                                                    type="radio"
                                                    id="mmenu-bg-circle"
                                                    name="mobile_menu_toggler_style"
                                                    v-model="
														mobileMenuTogglerStyle
													"
                                                    value="circle fill text-white"
                                                    @change="applyThemeSettings"
                                                />
                                                <label for="mmenu-bg-circle">
                                                    <img
                                                        :src="
															assetUrl +
															'server/images/settings/icons/nav-icon-fill.svg'
														"
                                                        alt="icon"
                                                    />
                                                </label>
                                            </div>
                                            <div class="radio-custom radio-image col-md-6 col-lg-4">
                                                <input
                                                    type="radio"
                                                    id="mmenu-bg-rounded"
                                                    name="fill round text-white"
                                                    v-model="
														mobileMenuTogglerStyle
													"
                                                    value="p-2 bg-primary rounded text-white"
                                                    @change="applyThemeSettings"
                                                />
                                                <label for="mmenu-bg-rounded">
                                                    <img
                                                        :src="
															assetUrl +
															'server/images/settings/icons/nav-icon-fill-round.svg'
														"
                                                        alt="icon"
                                                    />
                                                </label>
                                            </div>
                                            <div class="radio-custom radio-image col-md-6 col-lg-4">
                                                <input
                                                    type="radio"
                                                    id="mmenu-rounded"
                                                    name="round outline"
                                                    v-model="
														mobileMenuTogglerStyle
													"
                                                    value="p-2 border border-primary rounded"
                                                    @change="applyThemeSettings"
                                                />
                                                <label for="mmenu-rounded">
                                                    <img
                                                        :src="
															assetUrl +
															'server/images/settings/icons/nav-icon-outline-round.svg'
														"
                                                        alt="icon"
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Account Icon Style</label>
                                        <div class="row no-gutters">
                                            <div class="radio-custom radio-image col-md-6 col-lg-4">
                                                <input
                                                    type="radio"
                                                    id="account-style-none"
                                                    name="account_icon_style"
                                                    v-model="accountIconStyle"
                                                    value="null"
                                                    @change="applyThemeSettings"
                                                />
                                                <label for="account-style-none">
                                                    <img
                                                        :src="
															assetUrl +
															'server/images/settings/icons/account-icon-plain.svg'
														"
                                                        alt="icon"
                                                    />
                                                </label>
                                            </div>
                                            <div class="radio-custom radio-image col-md-6 col-lg-4">
                                                <input
                                                    type="radio"
                                                    name="account_icon_style"
                                                    id="account-outline-circle"
                                                    v-model="accountIconStyle"
                                                    value="outline circle"
                                                    @change="applyThemeSettings"
                                                />
                                                <label for="account-outline-circle">
                                                    <img
                                                        :src="
															assetUrl +
															'server/images/settings/icons/account-icon-outline.svg'
														"
                                                        alt="icon"
                                                    />
                                                </label>
                                            </div>
                                            <div class="radio-custom radio-image col-md-6 col-lg-4">
                                                <input
                                                    type="radio"
                                                    id="account-bg-circle"
                                                    name="account_icon_style"
                                                    v-model="accountIconStyle"
                                                    value="fill circle text-white"
                                                    @change="applyThemeSettings"
                                                />
                                                <label for="account-bg-circle">
                                                    <img
                                                        :src="
															assetUrl +
															'server/images/settings/icons/account-icon-fill.svg'
														"
                                                        alt="icon"
                                                    />
                                                </label>
                                            </div>
                                            <div class="radio-custom radio-image col-md-6 col-lg-4">
                                                <input
                                                    type="radio"
                                                    id="account-bg-rounded"
                                                    name="account_icon_style"
                                                    v-model="accountIconStyle"
                                                    value="fill round text-white"
                                                    @change="applyThemeSettings"
                                                />
                                                <label for="account-bg-rounded">
                                                    <img
                                                        :src="
															assetUrl +
															'server/images/settings/icons/account-icon-fill-round.svg'
														"
                                                        alt="icon"
                                                    />
                                                </label>
                                            </div>
                                            <div class="radio-custom radio-image col-md-6 col-lg-4">
                                                <input
                                                    type="radio"
                                                    id="account-rounded"
                                                    name="account_icon_style"
                                                    v-model="accountIconStyle"
                                                    value="outline round"
                                                    @change="applyThemeSettings"
                                                />
                                                <label for="account-rounded">
                                                    <img
                                                        :src="
															assetUrl +
															'server/images/settings/icons/account-icon-outline-round.svg'
														"
                                                        alt="icon"
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Cart Icon Style</label>
                                        <div class="row no-gutters">
                                            <div class="radio-custom radio-image col-md-6 col-lg-4">
                                                <input
                                                    type="radio"
                                                    id="cart-style-none"
                                                    name="cart_icon_style"
                                                    v-model="cartIconStyle"
                                                    value="null"
                                                    @change="applyThemeSettings"
                                                />
                                                <label for="cart-style-none">
                                                    <img
                                                        :src="
															assetUrl +
															'server/images/settings/icons/cart-icon-plain.png'
														"
                                                        alt="icon"
                                                        width="100"
                                                        height="72"
                                                    />
                                                </label>
                                            </div>
                                            <div class="radio-custom radio-image col-md-6 col-lg-4">
                                                <input
                                                    type="radio"
                                                    name="cart_icon_style"
                                                    id="cart-outline-circle"
                                                    v-model="cartIconStyle"
                                                    value="outline circle"
                                                    @change="applyThemeSettings"
                                                />
                                                <label for="cart-outline-circle">
                                                    <img
                                                        :src="
															assetUrl +
															'server/images/settings/icons/cart-icon-outline.png'
														"
                                                        alt="icon"
                                                        width="100"
                                                        height="72"
                                                    />
                                                </label>
                                            </div>
                                            <div class="radio-custom radio-image col-md-6 col-lg-4">
                                                <input
                                                    type="radio"
                                                    id="cart-bg-circle"
                                                    name="cart_icon_style"
                                                    v-model="cartIconStyle"
                                                    value="fill circle text-white"
                                                    @change="applyThemeSettings"
                                                />
                                                <label for="cart-bg-circle">
                                                    <img
                                                        :src="
															assetUrl +
															'server/images/settings/icons/cart-icon-fill.png'
														"
                                                        alt="icon"
                                                        width="100"
                                                        height="72"
                                                    />
                                                </label>
                                            </div>
                                            <div class="radio-custom radio-image col-md-6 col-lg-4">
                                                <input
                                                    type="radio"
                                                    id="cart-bg-rounded"
                                                    name="cart_icon_style"
                                                    v-model="cartIconStyle"
                                                    value="fill round text-white"
                                                    @change="applyThemeSettings"
                                                />
                                                <label for="cart-bg-rounded">
                                                    <img
                                                        :src="
															assetUrl +
															'server/images/settings/icons/cart-icon-fill-round.png'
														"
                                                        alt="icon"
                                                        width="100"
                                                        height="72"
                                                    />
                                                </label>
                                            </div>
                                            <div class="radio-custom radio-image col-md-6 col-lg-4">
                                                <input
                                                    type="radio"
                                                    id="cart-rounded"
                                                    name="cart_icon_style"
                                                    v-model="cartIconStyle"
                                                    value="outline round"
                                                    @change="applyThemeSettings"
                                                />
                                                <label for="cart-rounded">
                                                    <img
                                                        :src="
															assetUrl +
															'server/images/settings/icons/cart-icon-outline-round.png'
														"
                                                        alt="icon"
                                                        width="100"
                                                        height="72"
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="tab-pane fade"
                                id="cart-menu-type"
                                role="tabpanel"
                            >
                                <div class="tab-header">
                                    <a
                                        class="nav-link"
                                        data-toggle="tab"
                                        href="#header"
                                        role="tab"
                                    ></a>
                                    <div class="current-setting">
                                        Customizing
                                        <i class="fa fa-angle-right"></i>
                                        Header
                                        <h4>Mini Cart Type</h4>
                                    </div>
                                </div>
                                <div class="settings-panel">
                                    <div class="form-group">
                                        <label class="control-label">Mini Cart Content Type</label>
                                        <div class="row no-gutters">
                                            <div class="radio-custom radio-image col-md-6">
                                                <input
                                                    type="radio"
                                                    id="cart-menu-one"
                                                    name="cart_menu_type"
                                                    v-model="cartMenuType"
                                                    value="CartMenuOneComponent"
                                                    @change="applyThemeSettings"
                                                />
                                                <label
                                                    for="cart-menu-one"
                                                    class="py-3 text-center"
                                                >
                                                    <span>Off Canvas</span>
                                                </label>
                                            </div>
                                            <div class="radio-custom radio-image col-md-6">
                                                <input
                                                    type="radio"
                                                    name="cart_menu_type"
                                                    id="cart-menu-two"
                                                    v-model="cartMenuType"
                                                    value="CartMenuTwoComponent"
                                                    @change="applyThemeSettings"
                                                />
                                                <label
                                                    for="cart-menu-two"
                                                    class="py-3 text-center"
                                                >
                                                    <span>Pop Up</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="tab-pane fade"
                                id="search-form"
                                role="tabpanel"
                            >
                                <div class="tab-header">
                                    <a
                                        class="nav-link"
                                        data-toggle="tab"
                                        href="#header"
                                        role="tab"
                                    ></a>
                                    <div class="current-setting">
                                        Customizing
                                        <i class="fa fa-angle-right"></i>
                                        Header
                                        <h4>Search Form</h4>
                                    </div>
                                </div>
                                <div class="settings-panel">
                                    <div class="form-group">
                                        <label class="control-label">Search Form Style</label>
                                        <div class="row no-gutters">
                                            <div class="radio-custom radio-image col-md-6">
                                                <input
                                                    type="radio"
                                                    id="search-form-rounded"
                                                    name="search_form_style"
                                                    v-model="searchFormStyle"
                                                    value="rounded"
                                                    @change="applyThemeSettings"
                                                />
                                                <label
                                                    for="search-form-rounded"
                                                    class="py-3 text-center"
                                                >
                                                    <span>Rounded</span>
                                                </label>
                                            </div>
                                            <div class="radio-custom radio-image col-md-6">
                                                <input
                                                    type="radio"
                                                    name="search_form_style"
                                                    id="search-form-boxed"
                                                    v-model="searchFormStyle"
                                                    value="boxed"
                                                    @change="applyThemeSettings"
                                                />
                                                <label
                                                    for="search-form-boxed"
                                                    class="py-3 text-center"
                                                >
                                                    <span>Boxed</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="checkbox-custom checkbox-default">
                                            <input
                                                type="hidden"
                                                name="search_form_category"
                                                value="0"
                                            />
                                            <input
                                                type="checkbox"
                                                id="search-form-category"
                                                name="search_form_category"
                                                v-model="searchFormCategory"
                                                @change="applyThemeSettings"
                                            />
                                            <label for="search-form-category">Show Category</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="tab-pane fade"
                                id="color"
                                role="tabpanel"
                            >
                                <div class="tab-header">
                                    <a
                                        class="nav-link"
                                        data-toggle="tab"
                                        href="#home"
                                        role="tab"
                                    ></a>
                                    <div class="current-setting">
                                        You are customizing
                                        <h4>Color</h4>
                                    </div>
                                </div>
                                <div class="settings-panel">
                                    <div class="form-group">
                                        <label class="control-label">Primary Color</label>
                                        <button
                                            type="button"
                                            class="btn color-picker-toggle"
                                            @click="toggleColorPicker(0)"
                                            :style="{
												backgroundColor: primaryColor.hex
													? primaryColor.hex
													: primaryColor,
											}"
                                        >
                                            <span>Select Color</span>
                                        </button>
                                        <input
                                            type="hidden"
                                            name="primary_color"
                                            :value="
												primaryColor.hex
													? primaryColor.hex
													: primaryColor
											"
                                        />
                                        <vue-slide-toggle
                                            :open="showColorPicker === 0"
                                            :duration="500"
                                        >
                                            <sketch
                                                v-model="primaryColor"
                                                @input="applyColorSettings"
                                            ></sketch>
                                        </vue-slide-toggle>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Primary Color Dark</label>
                                        <button
                                            type="button"
                                            class="btn color-picker-toggle"
                                            @click="toggleColorPicker(1)"
                                            :style="{
												backgroundColor: primaryColorDark.hex
													? primaryColorDark.hex
													: primaryColorDark,
											}"
                                        >
                                            <span>Select Color</span>
                                        </button>
                                        <input
                                            type="hidden"
                                            name="primary_color_dark"
                                            :value="
												primaryColorDark.hex
													? primaryColorDark.hex
													: primaryColorDark
											"
                                        />
                                        <vue-slide-toggle
                                            :open="showColorPicker === 1"
                                            :duration="500"
                                        >
                                            <sketch
                                                v-model="primaryColorDark"
                                                @input="applyColorSettings"
                                            ></sketch>
                                        </vue-slide-toggle>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Secondary Color</label>
                                        <button
                                            type="button"
                                            class="btn color-picker-toggle"
                                            @click="toggleColorPicker(2)"
                                            :style="{
												backgroundColor: secondaryColor.hex
													? secondaryColor.hex
													: secondaryColor,
											}"
                                        >
                                            <span>Select Color</span>
                                        </button>
                                        <input
                                            type="hidden"
                                            name="secondary_color"
                                            :value="
												secondaryColor.hex
													? secondaryColor.hex
													: secondaryColor
											"
                                        />
                                        <vue-slide-toggle
                                            :open="showColorPicker === 2"
                                            :duration="500"
                                        >
                                            <sketch
                                                v-model="secondaryColor"
                                                @input="applyColorSettings"
                                            ></sketch>
                                        </vue-slide-toggle>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Secondary Color Dark</label>
                                        <button
                                            type="button"
                                            class="btn color-picker-toggle"
                                            @click="toggleColorPicker(3)"
                                            :style="{
												backgroundColor: secondaryColorDark.hex
													? secondaryColorDark.hex
													: secondaryColorDark,
											}"
                                        >
                                            <span>Select Color</span>
                                        </button>
                                        <input
                                            type="hidden"
                                            name="secondary_color_dark"
                                            :value="
												secondaryColorDark.hex
													? secondaryColorDark.hex
													: secondaryColorDark
											"
                                        />
                                        <vue-slide-toggle
                                            :open="showColorPicker === 3"
                                            :duration="500"
                                        >
                                            <sketch
                                                v-model="secondaryColorDark"
                                                @input="applyColorSettings"
                                            ></sketch>
                                        </vue-slide-toggle>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Body Text Color</label>
                                        <button
                                            type="button"
                                            class="btn color-picker-toggle"
                                            @click="toggleColorPicker(4)"
                                            :style="{
												backgroundColor: bodyColor.hex
													? bodyColor.hex
													: bodyColor,
											}"
                                        >
                                            <span>Select Color</span>
                                        </button>
                                        <input
                                            type="hidden"
                                            name="body_color"
                                            :value="
												bodyColor.hex
													? bodyColor.hex
													: bodyColor
											"
                                        />
                                        <vue-slide-toggle
                                            :open="showColorPicker === 4"
                                            :duration="500"
                                        >
                                            <sketch
                                                v-model="bodyColor"
                                                @input="applyColorSettings"
                                            ></sketch>
                                        </vue-slide-toggle>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Headings Color</label>
                                        <button
                                            type="button"
                                            class="btn color-picker-toggle"
                                            @click="toggleColorPicker(5)"
                                            :style="{
												backgroundColor: headingsColor.hex
													? headingsColor.hex
													: headingsColor,
											}"
                                        >
                                            <span>Select Color</span>
                                        </button>
                                        <input
                                            type="hidden"
                                            name="headings_color"
                                            :value="
												headingsColor.hex
													? headingsColor.hex
													: headingsColor
											"
                                        />
                                        <vue-slide-toggle
                                            :open="showColorPicker === 5"
                                            :duration="500"
                                        >
                                            <sketch
                                                v-model="headingsColor"
                                                @input="applyColorSettings"
                                            ></sketch>
                                        </vue-slide-toggle>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="tab-pane fade"
                                id="typography"
                                role="tabpanel"
                            >
                                <div class="tab-header">
                                    <a
                                        class="nav-link"
                                        data-toggle="tab"
                                        href="#home"
                                        role="tab"
                                    ></a>
                                    <div class="current-setting">
                                        You are customizing
                                        <h4>Typography</h4>
                                    </div>
                                </div>
                                <div class="settings-panel">
                                    <h3 class="text-color-primary mt-0">H1 Font</h3>
                                    <div class="form-group">
                                        <input
                                            type="hidden"
                                            name="h1_font_family"
                                            :value="h1FontFamily"
                                        >
                                        <label
                                            for=""
                                            class="control-label d-flex justify-content-between"
                                        >Font Family <a
                                                href="#"
                                                @click.prevent="h1FontFamily = null; applyTypographySettings()"
                                                v-if="h1FontFamily != null"
                                            >clear</a></label>
                                        <Select2
                                            v-model="h1FontFamily"
                                            :options="fontFamilies"
                                            @change="applyTypographySettings"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input
                                            type="hidden"
                                            name="h1_font_weight"
                                            :value="h1FontWeight"
                                        >
                                        <label
                                            for=""
                                            class="control-label d-flex justify-content-between"
                                        >Font Weight <a
                                                href="#"
                                                @click.prevent="h1FontWeight = null; applyTypographySettings()"
                                                v-if="h1FontWeight != null"
                                            >clear</a></label>
                                        <Select2
                                            v-model="h1FontWeight"
                                            :options="fontWeights(h1FontFamily)"
                                            @change="applyTypographySettings"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label
                                            for=""
                                            class="control-label d-flex justify-content-between"
                                        >Font Color <a
                                                href="#"
                                                @click.prevent="h1Color = ''"
                                                v-if="h1Color != ''"
                                            >clear</a></label>
                                        <button
                                            type="button"
                                            class="btn color-picker-toggle"
                                            @click="toggleColorPicker(11)"
                                            :style="{
												backgroundColor: h1Color && h1Color.hex
													? h1Color.hex
													: h1Color,
											}"
                                        >
                                            <span>Select Color</span>
                                        </button>
                                        <input
                                            type="hidden"
                                            name="h1_color"
                                            :value="
												h1Color && h1Color.hex
													? h1Color.hex
													: h1Color
											"
                                        />
                                        <vue-slide-toggle
                                            :open="showColorPicker === 11"
                                            :duration="500"
                                        >
                                            <sketch
                                                v-model="h1Color"
                                                @input="applyTypographySettings"
                                            ></sketch>
                                        </vue-slide-toggle>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Padding <i class="fa fa-arrow-up"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h1_padding_top"
                                                v-model="h1PaddingTop"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Padding <i class="fa fa-arrow-right"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h1_padding_right"
                                                v-model="h1PaddingRight"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Padding <i class="fa fa-arrow-down"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h1_padding_bottom"
                                                v-model="h1PaddingBottom"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Padding <i class="fa fa-arrow-left"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h1_padding_left"
                                                v-model="h1PaddingLeft"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Margin <i class="fa fa-arrow-up"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h1_margin_top"
                                                v-model="h1MarginTop"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Margin <i class="fa fa-arrow-right"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h1_margin_right"
                                                v-model="h1MarginRight"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Margin <i class="fa fa-arrow-down"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h1_margin_bottom"
                                                v-model="h1MarginBottom"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Margin <i class="fa fa-arrow-left"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h1_margin_left"
                                                v-model="h1MarginLeft"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="">Line height</label>
                                        <input
                                            type="text"
                                            class="w-100"
                                            name="h1_line_height"
                                            v-model="h1LineHeight"
                                            @change="applyTypographySettings"
                                        >
                                    </div>
                                    <div class="form-group">
                                        <label for="">Letter Spacing</label>
                                        <input
                                            type="text"
                                            class="w-100"
                                            name="h1_letter_spacing"
                                            v-model="h1LetterSpacing"
                                            @change="applyTypographySettings"
                                        >
                                    </div>
                                    <hr>

                                    <h3 class="text-color-primary mt-0">H2 Font</h3>
                                    <div class="form-group">
                                        <input
                                            type="hidden"
                                            name="h2_font_family"
                                            :value="h2FontFamily"
                                        >
                                        <label
                                            for=""
                                            class="control-label d-flex justify-content-between"
                                        >Font Family <a
                                                href="#"
                                                @click.prevent="h2FontFamily = null; applyTypographySettings()"
                                                v-if="h2FontFamily != null"
                                            >clear</a></label>
                                        <Select2
                                            v-model="h2FontFamily"
                                            :options="fontFamilies"
                                            @change="applyTypographySettings"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input
                                            type="hidden"
                                            name="h2_font_weight"
                                            :value="h2FontWeight"
                                        >
                                        <label
                                            for=""
                                            class="control-label d-flex justify-content-between"
                                        >Font Weight <a
                                                href="#"
                                                @click.prevent="h2FontWeight = null; applyTypographySettings()"
                                                v-if="h2FontWeight != null"
                                            >clear</a></label>
                                        <Select2
                                            v-model="h2FontWeight"
                                            :options="fontWeights(h2FontFamily)"
                                            @change="applyTypographySettings"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label
                                            for=""
                                            class="control-label d-flex justify-content-between"
                                        >Font Color <a
                                                href="#"
                                                @click.prevent="h2Color = ''"
                                                v-if="h2Color != ''"
                                            >clear</a></label>
                                        <button
                                            type="button"
                                            class="btn color-picker-toggle"
                                            @click="toggleColorPicker(12)"
                                            :style="{
												backgroundColor: h2Color && h2Color.hex
													? h2Color.hex
													: h2Color,
											}"
                                        >
                                            <span>Select Color</span>
                                        </button>
                                        <input
                                            type="hidden"
                                            name="h2_color"
                                            :value="
												h2Color && h2Color.hex
													? h2Color.hex
													: h2Color
											"
                                        />
                                        <vue-slide-toggle
                                            :open="showColorPicker === 12"
                                            :duration="500"
                                        >
                                            <sketch
                                                v-model="h2Color"
                                                @input="applyTypographySettings"
                                            ></sketch>
                                        </vue-slide-toggle>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Padding <i class="fa fa-arrow-up"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h2_padding_top"
                                                v-model="h2PaddingTop"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Padding <i class="fa fa-arrow-right"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h2_padding_right"
                                                v-model="h2PaddingRight"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Padding <i class="fa fa-arrow-down"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h2_padding_bottom"
                                                v-model="h2PaddingBottom"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Padding <i class="fa fa-arrow-left"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h2_padding_left"
                                                v-model="h2PaddingLeft"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Margin <i class="fa fa-arrow-up"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h2_margin_top"
                                                v-model="h2MarginTop"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Margin <i class="fa fa-arrow-right"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h2_margin_right"
                                                v-model="h2MarginRight"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Margin <i class="fa fa-arrow-down"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h2_margin_bottom"
                                                v-model="h2MarginBottom"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Margin <i class="fa fa-arrow-left"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h2_margin_left"
                                                v-model="h2MarginLeft"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="">Line height</label>
                                        <input
                                            type="text"
                                            class="w-100"
                                            name="h2_line_height"
                                            v-model="h2LineHeight"
                                            @change="applyTypographySettings"
                                        >
                                    </div>
                                    <div class="form-group">
                                        <label for="">Letter Spacing</label>
                                        <input
                                            type="text"
                                            class="w-100"
                                            name="h2_letter_spacing"
                                            v-model="h2LetterSpacing"
                                            @change="applyTypographySettings"
                                        >
                                    </div>
                                    <hr>

                                    <h3 class="text-color-primary mt-0">H3 Font</h3>
                                    <div class="form-group">
                                        <input
                                            type="hidden"
                                            name="h3_font_family"
                                            :value="h3FontFamily"
                                        >
                                        <label
                                            for=""
                                            class="control-label d-flex justify-content-between"
                                        >Font Family <a
                                                href="#"
                                                @click.prevent="h3FontFamily = null; applyTypographySettings()"
                                                v-if="h3FontFamily != null"
                                            >clear</a></label>
                                        <Select2
                                            v-model="h3FontFamily"
                                            :options="fontFamilies"
                                            @change="applyTypographySettings"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input
                                            type="hidden"
                                            name="h3_font_weight"
                                            :value="h3FontWeight"
                                        >
                                        <label
                                            for=""
                                            class="control-label d-flex justify-content-between"
                                        >Font Weight <a
                                                href="#"
                                                @click.prevent="h3FontWeight = null; applyTypographySettings()"
                                                v-if="h3FontWeight != null"
                                            >clear</a></label>
                                        <Select2
                                            v-model="h3FontWeight"
                                            :options="fontWeights(h3FontFamily)"
                                            @change="applyTypographySettings"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label
                                            for=""
                                            class="control-label d-flex justify-content-between"
                                        >Font Color <a
                                                href="#"
                                                @click.prevent="h3Color = ''"
                                                v-if="h3Color != ''"
                                            >clear</a></label>
                                        <button
                                            type="button"
                                            class="btn color-picker-toggle"
                                            @click="toggleColorPicker(13)"
                                            :style="{
												backgroundColor: h3Color && h3Color.hex
													? h3Color.hex
													: h3Color,
											}"
                                        >
                                            <span>Select Color</span>
                                        </button>
                                        <input
                                            type="hidden"
                                            name="h3_color"
                                            :value="
												h3Color && h3Color.hex
													? h3Color.hex
													: h3Color
											"
                                        />
                                        <vue-slide-toggle
                                            :open="showColorPicker === 13"
                                            :duration="500"
                                        >
                                            <sketch
                                                v-model="h3Color"
                                                @input="applyTypographySettings"
                                            ></sketch>
                                        </vue-slide-toggle>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Padding <i class="fa fa-arrow-up"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h3_padding_top"
                                                v-model="h3PaddingTop"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Padding <i class="fa fa-arrow-right"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h3_padding_right"
                                                v-model="h3PaddingRight"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Padding <i class="fa fa-arrow-down"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h3_padding_bottom"
                                                v-model="h3PaddingBottom"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Padding <i class="fa fa-arrow-left"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h3_padding_left"
                                                v-model="h3PaddingLeft"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Margin <i class="fa fa-arrow-up"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h3_margin_top"
                                                v-model="h3MarginTop"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Margin <i class="fa fa-arrow-right"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h3_margin_right"
                                                v-model="h3MarginRight"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Margin <i class="fa fa-arrow-down"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h3_margin_bottom"
                                                v-model="h3MarginBottom"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Margin <i class="fa fa-arrow-left"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h3_margin_left"
                                                v-model="h3MarginLeft"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="">Line height</label>
                                        <input
                                            type="text"
                                            class="w-100"
                                            name="h3_line_height"
                                            v-model="h3LineHeight"
                                            @change="applyTypographySettings"
                                        >
                                    </div>
                                    <div class="form-group">
                                        <label for="">Letter Spacing</label>
                                        <input
                                            type="text"
                                            class="w-100"
                                            name="h3_letter_spacing"
                                            v-model="h3LetterSpacing"
                                            @change="applyTypographySettings"
                                        >
                                    </div>
                                    <hr>

                                    <h3 class="text-color-primary mt-0">H4 Font</h3>
                                    <div class="form-group">
                                        <input
                                            type="hidden"
                                            name="h4_font_family"
                                            :value="h4FontFamily"
                                        >
                                        <label
                                            for=""
                                            class="control-label d-flex justify-content-between"
                                        >Font Family <a
                                                href="#"
                                                @click.prevent="h4FontFamily = null; applyTypographySettings()"
                                                v-if="h4FontFamily != null"
                                            >clear</a></label>
                                        <Select2
                                            v-model="h4FontFamily"
                                            :options="fontFamilies"
                                            @change="applyTypographySettings"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input
                                            type="hidden"
                                            name="h4_font_weight"
                                            :value="h4FontWeight"
                                        >
                                        <label
                                            for=""
                                            class="control-label d-flex justify-content-between"
                                        >Font Weight <a
                                                href="#"
                                                @click.prevent="h4FontWeight = null; applyTypographySettings()"
                                                v-if="h4FontWeight != null"
                                            >clear</a></label>
                                        <Select2
                                            v-model="h4FontWeight"
                                            :options="fontWeights(h4FontFamily)"
                                            @change="applyTypographySettings"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label
                                            for=""
                                            class="control-label d-flex justify-content-between"
                                        >Font Color <a
                                                href="#"
                                                @click.prevent="h4Color = ''"
                                                v-if="h4Color != ''"
                                            >clear</a></label>
                                        <button
                                            type="button"
                                            class="btn color-picker-toggle"
                                            @click="toggleColorPicker(14)"
                                            :style="{
												backgroundColor: h4Color && h4Color.hex
													? h4Color.hex
													: h4Color,
											}"
                                        >
                                            <span>Select Color</span>
                                        </button>
                                        <input
                                            type="hidden"
                                            name="h4_color"
                                            :value="
												h4Color && h4Color.hex
													? h4Color.hex
													: h4Color
											"
                                        />
                                        <vue-slide-toggle
                                            :open="showColorPicker === 14"
                                            :duration="500"
                                        >
                                            <sketch
                                                v-model="h4Color"
                                                @input="applyTypographySettings"
                                            ></sketch>
                                        </vue-slide-toggle>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Padding <i class="fa fa-arrow-up"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h4_padding_top"
                                                v-model="h4PaddingTop"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Padding <i class="fa fa-arrow-right"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h4_padding_right"
                                                v-model="h4PaddingRight"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Padding <i class="fa fa-arrow-down"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h4_padding_bottom"
                                                v-model="h4PaddingBottom"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Padding <i class="fa fa-arrow-left"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h4_padding_left"
                                                v-model="h4PaddingLeft"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Margin <i class="fa fa-arrow-up"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h4_margin_top"
                                                v-model="h4MarginTop"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Margin <i class="fa fa-arrow-right"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h4_margin_right"
                                                v-model="h4MarginRight"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Margin <i class="fa fa-arrow-down"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h4_margin_bottom"
                                                v-model="h4MarginBottom"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Margin <i class="fa fa-arrow-left"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h4_margin_left"
                                                v-model="h4MarginLeft"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="">Line height</label>
                                        <input
                                            type="text"
                                            class="w-100"
                                            name="h4_line_height"
                                            v-model="h4LineHeight"
                                            @change="applyTypographySettings"
                                        >
                                    </div>
                                    <div class="form-group">
                                        <label for="">Letter Spacing</label>
                                        <input
                                            type="text"
                                            class="w-100"
                                            name="h4_letter_spacing"
                                            v-model="h4LetterSpacing"
                                            @change="applyTypographySettings"
                                        >
                                    </div>
                                    <hr>

                                    <h3 class="text-color-primary mt-0">H5 Font</h3>
                                    <div class="form-group">
                                        <input
                                            type="hidden"
                                            name="h5_font_family"
                                            :value="h5FontFamily"
                                        >
                                        <label
                                            for=""
                                            class="control-label d-flex justify-content-between"
                                        >Font Family <a
                                                href="#"
                                                @click.prevent="h5FontFamily = null; applyTypographySettings()"
                                                v-if="h5FontFamily != null"
                                            >clear</a></label>
                                        <Select2
                                            v-model="h5FontFamily"
                                            :options="fontFamilies"
                                            @change="applyTypographySettings"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input
                                            type="hidden"
                                            name="h5_font_weight"
                                            :value="h5FontWeight"
                                        >
                                        <label
                                            for=""
                                            class="control-label d-flex justify-content-between"
                                        >Font Weight <a
                                                href="#"
                                                @click.prevent="h5FontWeight = null; applyTypographySettings()"
                                                v-if="h5FontWeight != null"
                                            >clear</a></label>
                                        <Select2
                                            v-model="h5FontWeight"
                                            :options="fontWeights(h5FontFamily)"
                                            @change="applyTypographySettings"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label
                                            for=""
                                            class="control-label d-flex justify-content-between"
                                        >Font Color <a
                                                href="#"
                                                @click.prevent="h5Color = ''"
                                                v-if="h5Color != ''"
                                            >clear</a></label>
                                        <button
                                            type="button"
                                            class="btn color-picker-toggle"
                                            @click="toggleColorPicker(15)"
                                            :style="{
												backgroundColor: h5Color && h5Color.hex
													? h5Color.hex
													: h5Color,
											}"
                                        >
                                            <span>Select Color</span>
                                        </button>
                                        <input
                                            type="hidden"
                                            name="h5_color"
                                            :value="
												h5Color && h5Color.hex
													? h5Color.hex
													: h5Color
											"
                                        />
                                        <vue-slide-toggle
                                            :open="showColorPicker === 15"
                                            :duration="500"
                                        >
                                            <sketch
                                                v-model="h5Color"
                                                @input="applyTypographySettings"
                                            ></sketch>
                                        </vue-slide-toggle>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Padding <i class="fa fa-arrow-up"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h5_padding_top"
                                                v-model="h5PaddingTop"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Padding <i class="fa fa-arrow-right"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h5_padding_right"
                                                v-model="h5PaddingRight"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Padding <i class="fa fa-arrow-down"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h5_padding_bottom"
                                                v-model="h5PaddingBottom"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Padding <i class="fa fa-arrow-left"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h5_padding_left"
                                                v-model="h5PaddingLeft"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Margin <i class="fa fa-arrow-up"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h5_margin_top"
                                                v-model="h5MarginTop"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Margin <i class="fa fa-arrow-right"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h5_margin_right"
                                                v-model="h5MarginRight"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Margin <i class="fa fa-arrow-down"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h5_margin_bottom"
                                                v-model="h5MarginBottom"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Margin <i class="fa fa-arrow-left"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h5_margin_left"
                                                v-model="h5MarginLeft"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="">Line height</label>
                                        <input
                                            type="text"
                                            class="w-100"
                                            name="h5_line_height"
                                            v-model="h5LineHeight"
                                            @change="applyTypographySettings"
                                        >
                                    </div>
                                    <div class="form-group">
                                        <label for="">Letter Spacing</label>
                                        <input
                                            type="text"
                                            class="w-100"
                                            name="h5_letter_spacing"
                                            v-model="h5LetterSpacing"
                                            @change="applyTypographySettings"
                                        >
                                    </div>
                                    <hr>

                                    <h3 class="text-color-primary mt-0">H6 Font</h3>
                                    <div class="form-group">
                                        <input
                                            type="hidden"
                                            name="h6_font_family"
                                            :value="h6FontFamily"
                                        >
                                        <label
                                            for=""
                                            class="control-label d-flex justify-content-between"
                                        >Font Family <a
                                                href="#"
                                                @click.prevent="h6FontFamily = null; applyTypographySettings()"
                                                v-if="h6FontFamily != null"
                                            >clear</a></label>
                                        <Select2
                                            v-model="h6FontFamily"
                                            :options="fontFamilies"
                                            @change="applyTypographySettings"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input
                                            type="hidden"
                                            name="h6_font_weight"
                                            :value="h6FontWeight"
                                        >
                                        <label
                                            for=""
                                            class="control-label d-flex justify-content-between"
                                        >Font Weight <a
                                                href="#"
                                                @click.prevent="h6FontWeight = null; applyTypographySettings()"
                                                v-if="h6FontWeight != null"
                                            >clear</a></label>
                                        <Select2
                                            v-model="h6FontWeight"
                                            :options="fontWeights(h6FontFamily)"
                                            @change="applyTypographySettings"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label
                                            for=""
                                            class="control-label d-flex justify-content-between"
                                        >Font Color <a
                                                href="#"
                                                @click.prevent="h6Color = ''"
                                                v-if="h6Color != ''"
                                            >clear</a></label>
                                        <button
                                            type="button"
                                            class="btn color-picker-toggle"
                                            @click="toggleColorPicker(16)"
                                            :style="{
												backgroundColor: h6Color && h6Color.hex
													? h6Color.hex
													: h6Color,
											}"
                                        >
                                            <span>Select Color</span>
                                        </button>
                                        <input
                                            type="hidden"
                                            name="h6_color"
                                            :value="
												h6Color && h6Color.hex
													? h6Color.hex
													: h6Color
											"
                                        />
                                        <vue-slide-toggle
                                            :open="showColorPicker === 16"
                                            :duration="500"
                                        >
                                            <sketch
                                                v-model="h6Color"
                                                @input="applyTypographySettings"
                                            ></sketch>
                                        </vue-slide-toggle>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Padding <i class="fa fa-arrow-up"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h6_padding_top"
                                                v-model="h6PaddingTop"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Padding <i class="fa fa-arrow-right"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h6_padding_right"
                                                v-model="h6PaddingRight"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Padding <i class="fa fa-arrow-down"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h6_padding_bottom"
                                                v-model="h6PaddingBottom"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Padding <i class="fa fa-arrow-left"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h6_padding_left"
                                                v-model="h6PaddingLeft"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Margin <i class="fa fa-arrow-up"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h6_margin_top"
                                                v-model="h6MarginTop"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Margin <i class="fa fa-arrow-right"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h6_margin_right"
                                                v-model="h6MarginRight"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Margin <i class="fa fa-arrow-down"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h6_margin_bottom"
                                                v-model="h6MarginBottom"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                        <div class="col-sm-6 mb-3">
                                            <label for="">Margin <i class="fa fa-arrow-left"></i></label>
                                            <input
                                                type="text"
                                                class="w-100"
                                                name="h6_margin_left"
                                                v-model="h6MarginLeft"
                                                @change="applyTypographySettings"
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="">Line height</label>
                                        <input
                                            type="text"
                                            class="w-100"
                                            name="h6_line_height"
                                            v-model="h6LineHeight"
                                            @change="applyTypographySettings"
                                        >
                                    </div>
                                    <div class="form-group">
                                        <label for="">Letter Spacing</label>
                                        <input
                                            type="text"
                                            class="w-100"
                                            name="h6_letter_spacing"
                                            v-model="h6LetterSpacing"
                                            @change="applyTypographySettings"
                                        >
                                    </div>
                                </div>
                            </div>
                            <div
                                class="tab-pane fade"
                                id="shop"
                                role="tabpanel"
                            >
                                <div class="tab-header">
                                    <a
                                        class="nav-link"
                                        data-toggle="tab"
                                        href="#home"
                                        role="tab"
                                    ></a>
                                    <div class="current-setting">
                                        You are customizing
                                        <h4>Ecommerce</h4>
                                    </div>
                                </div>
                                <ul class="nav flex-column">
                                    <li class="nav-item">
                                        <a
                                            class="nav-link"
                                            data-toggle="tab"
                                            href="#shop-settings"
                                            role="tab"
                                        >Shop Settings</a>
                                    </li>
                                    <li class="nav-item">
                                        <a
                                            class="nav-link"
                                            data-toggle="tab"
                                            href="#product-settings"
                                            role="tab"
                                        >Product Settings</a>
                                    </li>
                                    <li class="nav-item">
                                        <a
                                            class="nav-link"
                                            data-toggle="tab"
                                            href="#cart-popup-type"
                                            role="tab"
                                        >Cart PopUp Type</a>
                                    </li>
                                </ul>
                            </div>
                            <div
                                class="tab-pane fade"
                                id="shop-settings"
                                role="tabpanel"
                            >
                                <div class="tab-header">
                                    <a
                                        class="nav-link"
                                        data-toggle="tab"
                                        href="#shop"
                                        role="tab"
                                    ></a>
                                    <div class="current-setting">
                                        Customizing
                                        <i class="fa fa-angle-right"></i>
                                        Ecommerce
                                        <h4>Shop Settings</h4>
                                    </div>
                                </div>
                                <div class="settings-panel">
                                    <div class="form-group">
                                        <label class="control-label">Product Type</label>
                                        <div class="row no-gutters">
                                            <div class="radio-custom radio-image col-md-6">
                                                <input
                                                    type="radio"
                                                    id="product-type-one"
                                                    name="product_type"
                                                    v-model="productType"
                                                    value="ProductOneComponent"
                                                    @change="productTypeSelect"
                                                />
                                                <label for="product-type-one">
                                                    <img
                                                        :src="
															assetUrl +
															'server/images/settings/products/product-one.png'
														"
                                                        alt="product"
                                                        width="290"
                                                        height="446"
                                                    />
                                                </label>
                                            </div>
                                            <div class="radio-custom radio-image col-md-6">
                                                <input
                                                    type="radio"
                                                    name="product_type"
                                                    id="product-type-two"
                                                    v-model="productType"
                                                    value="ProductThreeComponent"
                                                    @change="productTypeSelect"
                                                />
                                                <label for="product-type-two">
                                                    <img
                                                        :src="
															assetUrl +
															'server/images/settings/products/product-two.png'
														"
                                                        alt="product"
                                                        width="290"
                                                        height="446"
                                                    />
                                                </label>
                                            </div>
                                            <div class="radio-custom radio-image col-md-6">
                                                <input
                                                    type="radio"
                                                    id="product-type-five"
                                                    name="product_type"
                                                    v-model="productType"
                                                    value="ProductFiveComponent"
                                                    @change="productTypeSelect"
                                                />
                                                <label for="product-type-five">
                                                    <img
                                                        :src="
															assetUrl +
															'server/images/settings/products/product-five.jpg'
														"
                                                        alt="product"
                                                        width="290"
                                                        height="446"
                                                    />
                                                </label>
                                            </div>
                                            <div class="radio-custom radio-image col-md-6">
                                                <input
                                                    type="radio"
                                                    id="product-type-six"
                                                    name="product_type"
                                                    v-model="productType"
                                                    value="ProductSixComponent"
                                                    @change="productTypeSelect"
                                                />
                                                <label for="product-type-six">
                                                    <img
                                                        :src="
															assetUrl +
															'server/images/settings/products/product-six.jpg'
														"
                                                        alt="product"
                                                        width="290"
                                                        height="446"
                                                    />
                                                </label>
                                            </div>
                                            <div class="radio-custom radio-image col-md-6">
                                                <input
                                                    type="radio"
                                                    id="product-type-eight"
                                                    name="product_type"
                                                    v-model="productType"
                                                    value="ProductEightComponent"
                                                    @change="productTypeSelect"
                                                />
                                                <label for="product-type-eight">
                                                    <img
                                                        :src="
															assetUrl +
															'server/images/settings/products/product-eight.jpg'
														"
                                                        alt="product"
                                                        width="290"
                                                        height="407"
                                                    />
                                                </label>
                                            </div>
                                            <div class="radio-custom radio-image col-md-6">
                                                <input
                                                    type="radio"
                                                    id="product-type-seven"
                                                    name="product_type"
                                                    v-model="productType"
                                                    value="ProductSevenComponent"
                                                    @change="productTypeSelect"
                                                />
                                                <label for="product-type-seven">
                                                    <img
                                                        :src="
															assetUrl +
															'server/images/settings/products/product-seven.jpg'
														"
                                                        alt="product"
                                                        width="290"
                                                        height="407"
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Min Filter Price</label>
                                        <input
                                            type="number"
                                            min="0"
                                            class="form-control form-control-modern"
                                            name="filter_min_price"
                                            v-model.number="filterMinPrice"
                                            @change="applyThemeSettings"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Max Filter Price</label>
                                        <input
                                            type="number"
                                            min="0"
                                            class="form-control form-control-modern"
                                            name="filter_max_price"
                                            v-model.number="filterMaxPrice"
                                            @change="applyThemeSettings"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                class="tab-pane fade"
                                id="product-settings"
                                role="tabpanel"
                            >
                                <div class="tab-header">
                                    <a
                                        class="nav-link"
                                        data-toggle="tab"
                                        href="#shop"
                                        role="tab"
                                    ></a>
                                    <div class="current-setting">
                                        Customizing
                                        <i class="fa fa-angle-right"></i>
                                        Shop
                                        <h4>Product Settings</h4>
                                    </div>
                                </div>
                                <div class="settings-panel">
                                    <div class="form-group">
                                        <label class="control-label">Sale Bubble Color</label>
                                        <button
                                            type="button"
                                            class="btn color-picker-toggle"
                                            @click="toggleColorPicker(6)"
                                            :style="{
												backgroundColor: saleBubbleColor.hex
													? saleBubbleColor.hex
													: saleBubbleColor,
											}"
                                        >
                                            <span>Select Color</span>
                                        </button>
                                        <input
                                            type="hidden"
                                            name="sale_bubble_color"
                                            :value="
												saleBubbleColor.hex
													? saleBubbleColor.hex
													: saleBubbleColor
											"
                                        />
                                        <vue-slide-toggle
                                            :open="showColorPicker === 6"
                                            :duration="500"
                                        >
                                            <sketch
                                                v-model="saleBubbleColor"
                                                @input="applyColorSettings"
                                            ></sketch>
                                        </vue-slide-toggle>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Hot Bubble Color</label>
                                        <button
                                            type="button"
                                            class="btn color-picker-toggle"
                                            @click="toggleColorPicker(7)"
                                            :style="{
												backgroundColor: hotBubbleColor.hex
													? hotBubbleColor.hex
													: hotBubbleColor,
											}"
                                        >
                                            <span>Select Color</span>
                                        </button>
                                        <input
                                            type="hidden"
                                            name="hot_bubble_color"
                                            :value="
												hotBubbleColor.hex
													? hotBubbleColor.hex
													: hotBubbleColor
											"
                                        />
                                        <vue-slide-toggle
                                            :open="showColorPicker === 7"
                                            :duration="500"
                                        >
                                            <sketch
                                                v-model="hotBubbleColor"
                                                @input="applyColorSettings"
                                            ></sketch>
                                        </vue-slide-toggle>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">New Bubble Show(x days
                                            before)</label>
                                        <input
                                            type="number"
                                            min="0"
                                            class="form-control form-control-modern"
                                            name="new_bubble_show"
                                            v-model.number="newBubbleShow"
                                            @change="applyThemeSettings"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">New Bubble Color</label>
                                        <button
                                            type="button"
                                            class="btn color-picker-toggle"
                                            @click="toggleColorPicker(8)"
                                            :style="{
												backgroundColor: newBubbleColor.hex
													? newBubbleColor.hex
													: newBubbleColor,
											}"
                                        >
                                            <span>Select Color</span>
                                        </button>
                                        <input
                                            type="hidden"
                                            name="new_bubble_color"
                                            :value="
												newBubbleColor.hex
													? newBubbleColor.hex
													: newBubbleColor
											"
                                        />
                                        <vue-slide-toggle
                                            :open="showColorPicker === 8"
                                            :duration="500"
                                        >
                                            <sketch
                                                v-model="newBubbleColor"
                                                @input="applyColorSettings"
                                            ></sketch>
                                        </vue-slide-toggle>
                                    </div>
                                    <div class="form-group">
                                        <div class="checkbox-custom checkbox-default">
                                            <input
                                                type="hidden"
                                                name="show_product_category"
                                                value="0"
                                            />
                                            <input
                                                type="checkbox"
                                                id="show-category"
                                                name="show_product_category"
                                                v-model="showProductCategory"
                                                @change="applyThemeSettings"
                                            />
                                            <label for="show-category">Show Category</label>
                                        </div>
                                        <div class="checkbox-custom checkbox-default">
                                            <input
                                                type="hidden"
                                                name="show_product_ratings"
                                                value="0"
                                            />
                                            <input
                                                type="checkbox"
                                                id="show-ratings"
                                                name="show_product_ratings"
                                                v-model="showProductRatings"
                                                @change="applyThemeSettings"
                                            />
                                            <label for="show-ratings">Show Ratings</label>
                                        </div>
                                        <div class="checkbox-custom checkbox-default">
                                            <input
                                                type="hidden"
                                                name="show_product_countdown"
                                                value="0"
                                            />
                                            <input
                                                type="checkbox"
                                                id="show-countdown"
                                                name="show_product_countdown"
                                                v-model="showProductCountDown"
                                                @change="applyThemeSettings"
                                            />
                                            <label for="show-countdown">Show Countdown</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="tab-pane fade"
                                id="cart-popup-type"
                                role="tabpanel"
                            >
                                <div class="tab-header">
                                    <a
                                        class="nav-link"
                                        data-toggle="tab"
                                        href="#shop"
                                        role="tab"
                                    ></a>
                                    <div class="current-setting">
                                        Customizing
                                        <i class="fa fa-angle-right"></i>
                                        Ecommerce
                                        <h4>Cart PopUp</h4>
                                    </div>
                                </div>
                                <div class="settings-panel">
                                    <div class="form-group">
                                        <label class="control-label">Cart Purchase PopUp Type</label>
                                        <div class="row no-gutters">
                                            <input
                                                type="hidden"
                                                name="cart_popup_type"
                                                :value="cartPopUpType"
                                            />
                                            <div class="radio-custom radio-image col-md-6">
                                                <input
                                                    type="radio"
                                                    id="cart-popup-one"
                                                    v-model="cartPopUpType"
                                                    value="CartModalOneComponent"
                                                    @change="applyThemeSettings"
                                                />
                                                <label
                                                    for="cart-popup-one"
                                                    class="py-3 text-center"
                                                >
                                                    <span>Classic</span>
                                                </label>
                                            </div>
                                            <div class="radio-custom radio-image col-md-6">
                                                <input
                                                    type="radio"
                                                    id="cart-popup-two"
                                                    v-model="cartPopUpType"
                                                    value="CartModalTwoComponent"
                                                    @change="applyThemeSettings"
                                                />
                                                <label
                                                    for="cart-popup-two"
                                                    class="py-3 text-center"
                                                >
                                                    <span>Modern</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="tab-pane fade"
                                id="blog"
                                role="tabpanel"
                            >
                                <div class="tab-header">
                                    <a
                                        class="nav-link"
                                        data-toggle="tab"
                                        href="#home"
                                        role="tab"
                                    ></a>

                                    <div class="current-setting">
                                        You are customizing
                                        <h4>Blog</h4>
                                    </div>
                                </div>

                                <ul class="nav flex-column">
                                    <li class="nav-item">
                                        <a
                                            class="nav-link"
                                            data-toggle="tab"
                                            href="#blog-global"
                                            role="tab"
                                        >Blog Global Settings</a>
                                    </li>
                                    <li class="nav-item">
                                        <a
                                            class="nav-link"
                                            data-toggle="tab"
                                            href="#single-post"
                                            role="tab"
                                        >Single Post Page</a>
                                    </li>
                                </ul>
                            </div>

                            <div
                                class="tab-pane fade"
                                id="blog-global"
                                role="tabpanel"
                            >
                                <div class="tab-header">
                                    <a
                                        class="nav-link"
                                        data-toggle="tab"
                                        href="#blog"
                                        role="tab"
                                    ></a>

                                    <div class="current-setting">
                                        You are customizing
                                        <h4>Blog Global</h4>
                                    </div>
                                </div>

                                <div class="settings-panel">
                                    <div class="form-group">
                                        <label class="control-label">Post Type</label>
                                        <div class="row no-gutters">
                                            <div class="radio-custom radio-image col-md-6">
                                                <input
                                                    type="radio"
                                                    id="post-type-one"
                                                    name="post_type"
                                                    v-model="postType"
                                                    value="PostOneComponent"
                                                    @change="postTypeSelect"
                                                />
                                                <label for="post-type-one">
                                                    <img
                                                        :src="
															assetUrl +
															'server/images/settings/posts/post-one.png'
														"
                                                        alt="post"
                                                        width="290"
                                                        height="446"
                                                    />
                                                </label>
                                            </div>
                                            <div class="radio-custom radio-image col-md-6">
                                                <input
                                                    type="radio"
                                                    name="post_type"
                                                    id="post-type-three"
                                                    v-model="postType"
                                                    value="PostThreeComponent"
                                                    @change="postTypeSelect"
                                                />
                                                <label for="post-type-three">
                                                    <img
                                                        :src="
															assetUrl +
															'server/images/settings/posts/post-two.png'
														"
                                                        alt="post"
                                                        width="290"
                                                        height="446"
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                class="tab-pane fade"
                                id="single-post"
                                role="tabpanel"
                            >
                                <div class="tab-header">
                                    <a
                                        class="nav-link"
                                        data-toggle="tab"
                                        href="#blog"
                                        role="tab"
                                    ></a>

                                    <div class="current-setting">
                                        You are customizing
                                        <h4>Single Post Page</h4>
                                    </div>
                                </div>

                                <div class="settings-panel">
                                    <label class="control-label">Items to show</label>
                                    <div class="form-group">
                                        <div class="checkbox-custom checkbox-default">
                                            <input
                                                type="hidden"
                                                name="show_post_media"
                                                value="0"
                                            />
                                            <input
                                                type="checkbox"
                                                id="show-post-media"
                                                name="show_post_media"
                                                v-model="showPostMedia"
                                                @change="applyThemeSettings"
                                            />
                                            <label for="show-post-media">Show Media</label>
                                        </div>
                                        <div class="checkbox-custom checkbox-default">
                                            <input
                                                type="hidden"
                                                name="show_meta_author"
                                                value="0"
                                            />
                                            <input
                                                type="checkbox"
                                                id="show-meta-author"
                                                name="show_meta_author"
                                                v-model="showMetaAuthor"
                                                @change="applyThemeSettings"
                                            />
                                            <label for="show-meta-author">Show Meta Author</label>
                                        </div>
                                        <div class="checkbox-custom checkbox-default">
                                            <input
                                                type="hidden"
                                                name="show_post_countdown"
                                                value="0"
                                            />
                                            <input
                                                type="checkbox"
                                                id="show-meta-date"
                                                name="show_post_countdown"
                                                v-model="showMetaDate"
                                                @change="applyThemeSettings"
                                            />
                                            <label for="show-meta-date">Show Meta Date</label>
                                        </div>
                                        <div class="checkbox-custom checkbox-default">
                                            <input
                                                type="hidden"
                                                name="show_comments_count"
                                                value="0"
                                            />
                                            <input
                                                type="checkbox"
                                                id="show-comments-count"
                                                name="show_comments_count"
                                                v-model="showCommentsCount"
                                                @change="applyThemeSettings"
                                            />
                                            <label for="show-comments-count">Show Comments Count</label>
                                        </div>
                                        <div class="checkbox-custom checkbox-default">
                                            <input
                                                type="hidden"
                                                name="show_post_category"
                                                value="0"
                                            />
                                            <input
                                                type="checkbox"
                                                id="show-post-category"
                                                name="show_post_category"
                                                v-model="showPostCategory"
                                                @change="applyThemeSettings"
                                            />
                                            <label for="show-post-category">Show Category</label>
                                        </div>
                                        <div class="checkbox-custom checkbox-default">
                                            <input
                                                type="hidden"
                                                name="show_post_tags"
                                                value="0"
                                            />
                                            <input
                                                type="checkbox"
                                                id="show-post-tags"
                                                name="show_post_tags"
                                                v-model="showPostTags"
                                                @change="applyThemeSettings"
                                            />
                                            <label for="show-post-tags">Show Tags</label>
                                        </div>
                                        <div class="checkbox-custom checkbox-default">
                                            <input
                                                type="hidden"
                                                name="show_related_posts"
                                                value="0"
                                            />
                                            <input
                                                type="checkbox"
                                                id="show-related-posts"
                                                name="show_related_posts"
                                                v-model="showRelatedPosts"
                                                @change="applyThemeSettings"
                                            />
                                            <label for="show-related-posts">Show Related Posts</label>
                                        </div>
                                        <div class="checkbox-custom checkbox-default">
                                            <input
                                                type="hidden"
                                                name="show_comments"
                                                value="0"
                                            />
                                            <input
                                                type="checkbox"
                                                id="show-comments"
                                                name="show_comments"
                                                v-model="showComments"
                                                @change="applyThemeSettings"
                                            />
                                            <label for="show-comments">Show Comments</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                class="tab-pane fade"
                                id="footer"
                                role="tabpanel"
                            >
                                <div class="tab-header">
                                    <a
                                        class="nav-link"
                                        data-toggle="tab"
                                        href="#home"
                                        role="tab"
                                    ></a>
                                    <div class="current-setting">
                                        You are customizing
                                        <h4>Footer</h4>
                                    </div>
                                </div>
                                <div class="settings-panel">
                                    <input
                                        type="hidden"
                                        name="footer_type"
                                        :value="footerType"
                                    />
                                    <div
                                        class="preset-preview"
                                        :class="{
											active:
												footerType ===
												'FooterOneComponent',
										}"
                                        @click="
											footerTypeSelect(
												'FooterOneComponent'
											)
										"
                                    >
                                        <img
                                            :src="
												baseUrl +
												'/server/images/settings/footers/footer-one.png'
											"
                                            alt="Footer Type"
                                            width="1250"
                                            height="464"
                                        />
                                    </div>
                                    <div
                                        class="preset-preview"
                                        :class="{
											active:
												footerType ===
												'FooterTwoComponent',
										}"
                                        @click="
											footerTypeSelect(
												'FooterTwoComponent'
											)
										"
                                    >
                                        <img
                                            :src="
												baseUrl +
												'/server/images/settings/footers/footer-two.png'
											"
                                            alt="Footer Type"
                                            width="1903"
                                            height="507"
                                        />
                                    </div>
                                    <div
                                        class="preset-preview"
                                        :class="{
											active:
												footerType ===
												'FooterThreeComponent',
										}"
                                        @click="
											footerTypeSelect(
												'FooterThreeComponent'
											)
										"
                                    >
                                        <img
                                            :src="
												baseUrl +
												'/server/images/settings/footers/footer-three.png'
											"
                                            alt="Footer Type"
                                            width="1250"
                                            height="467"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                class="tab-pane fade"
                                id="custom-css"
                                role="tabpanel"
                            >
                                <div class="tab-header">
                                    <a
                                        class="nav-link"
                                        data-toggle="tab"
                                        href="#home"
                                        role="tab"
                                    ></a>
                                    <div class="current-setting">
                                        You are adding
                                        <h4>Custom CSS</h4>
                                    </div>
                                </div>
                                <div class="settings-panel">
                                    <textarea
                                        name="custom_css"
                                        class="w-100"
                                        rows="30"
                                        @input="applyCSS"
                                        v-model="customCSS"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </aside>
        </div>

        <modal
            name="media-modal"
            :height="'80%'"
            :width="'80%'"
        >
            <add-media-component
                :total-media="totalImages"
                :base-url="assetUrl"
                :token="csrfToken"
                :multi-select="false"
                @file-add-success="fileUploadSuccess"
                @file-click="modalFileClick"
                @modal-set="modalSetGallery"
            >
            </add-media-component>
        </modal>
    </div>
</template>
<script>
import { Photoshop, Sketch } from "vue-color";
import Select2 from 'v-select2-component';

import AddMediaComponent from "../products/AddMediaComponent";
import { FONTS } from "../../data/constant";

export default {
    components: {
        AddMediaComponent,
        Photoshop,
        Sketch,
        Select2
    },
    props: {
        media: Array,
        settings: Object,
        assetUrl: String,
    },
    data () {
        return {
            fonts: FONTS,
            totalMedia: this.media,
            baseUrl: window.baseUrl,
            fontFamilies: Object.keys( FONTS ),

            // Toggle Flags
            showColorPicker: -1,

            // Header Settings
            headerType: this.settings.header_type,
            siteTitle: this.settings.site_title,
            tagline: this.settings.tagline,
            logoImage: this.settings.logo_image,
            logoImageWidth: this.settings.logo_image_width,
            logoImageHeight: this.settings.logo_image_height,
            mobileMenuTogglerStyle: this.settings.mobile_menu_toggler_style,
            accountIconStyle: this.settings.account_icon_style,
            cartIconStyle: this.settings.cart_icon_style,
            cartMenuType: this.settings.cart_menu_type,
            searchFormStyle: this.settings.search_form_style,
            searchFormCategory: parseInt( this.settings.search_form_category ),

            // Color Settings
            primaryColor: this.settings.primary_color,
            primaryColorDark: this.settings.primary_color_dark,
            secondaryColor: this.settings.secondary_color,
            secondaryColorDark: this.settings.secondary_color_dark,
            bodyColor: this.settings.body_color,
            headingsColor: this.settings.headings_color,

            // Shop Settings
            saleBubbleColor: this.settings.sale_bubble_color,
            hotBubbleColor: this.settings.hot_bubble_color,
            newBubbleShow: this.settings.new_bubble_show,
            newBubbleColor: this.settings.new_bubble_color,
            showProductCategory: parseInt( this.settings.show_product_category ),
            showProductRatings: parseInt( this.settings.show_product_ratings ),
            showProductCountDown: parseInt( this.settings.show_product_countdown ),

            productType: this.settings.product_type,
            postType: this.settings.post_type,
            filterMinPrice: this.settings.filter_min_price,
            filterMaxPrice: this.settings.filter_max_price,

            cartPopUpType: this.settings.cart_popup_type,

            // Single Post Settings
            showPostMedia: parseInt( this.settings.show_post_media ),
            showMetaAuthor: parseInt( this.settings.show_meta_author ),
            showMetaDate: parseInt( this.settings.show_meta_date ),
            showCommentsCount: parseInt( this.settings.show_comments_count ),
            showPostCategory: parseInt( this.settings.show_post_category ),
            showPostTags: parseInt( this.settings.show_post_tags ),
            showRelatedPosts: parseInt( this.settings.show_related_posts ),
            showComments: parseInt( this.settings.show_comments ),

            // Typography
            h1FontFamily: this.settings.h1_font_family,
            h1FontWeight: this.settings.h1_font_weight,
            h1Color: this.settings.h1_color ? this.settings.h1_color : '',
            h1PaddingTop: this.settings.h1_padding_top,
            h1PaddingRight: this.settings.h1_padding_right,
            h1PaddingBottom: this.settings.h1_padding_bottom,
            h1PaddingLeft: this.settings.h1_padding_left,
            h1MarginTop: this.settings.h1_margin_top,
            h1MarginRight: this.settings.h1_margin_right,
            h1MarginBottom: this.settings.h1_margin_bottom,
            h1MarginLeft: this.settings.h1_margin_left,
            h1LineHeight: this.settings.h1_line_height,
            h1LetterSpacing: this.settings.h1_letter_spacing,

            h2FontFamily: this.settings.h2_font_family,
            h2FontWeight: this.settings.h2_font_weight,
            h2Color: this.settings.h2_color ? this.settings.h2_color : '',
            h2PaddingTop: this.settings.h2_padding_top,
            h2PaddingRight: this.settings.h2_padding_right,
            h2PaddingBottom: this.settings.h2_padding_bottom,
            h2PaddingLeft: this.settings.h2_padding_left,
            h2MarginTop: this.settings.h2_margin_top,
            h2MarginRight: this.settings.h2_margin_right,
            h2MarginBottom: this.settings.h2_margin_bottom,
            h2MarginLeft: this.settings.h2_margin_left,
            h2LineHeight: this.settings.h2_line_height,
            h2LetterSpacing: this.settings.h2_letter_spacing,

            h3FontFamily: this.settings.h3_font_family,
            h3FontWeight: this.settings.h3_font_weight,
            h3Color: this.settings.h3_color ? this.settings.h3_color : '',
            h3PaddingTop: this.settings.h3_padding_top,
            h3PaddingRight: this.settings.h3_padding_right,
            h3PaddingBottom: this.settings.h3_padding_bottom,
            h3PaddingLeft: this.settings.h3_padding_left,
            h3MarginTop: this.settings.h3_margin_top,
            h3MarginRight: this.settings.h3_margin_right,
            h3MarginBottom: this.settings.h3_margin_bottom,
            h3MarginLeft: this.settings.h3_margin_left,
            h3LineHeight: this.settings.h3_line_height,
            h3LetterSpacing: this.settings.h3_letter_spacing,

            h4FontFamily: this.settings.h4_font_family,
            h4FontWeight: this.settings.h4_font_weight,
            h4Color: this.settings.h4_color ? this.settings.h4_color : '',
            h4PaddingTop: this.settings.h4_padding_top,
            h4PaddingRight: this.settings.h4_padding_right,
            h4PaddingBottom: this.settings.h4_padding_bottom,
            h4PaddingLeft: this.settings.h4_padding_left,
            h4MarginTop: this.settings.h4_margin_top,
            h4MarginRight: this.settings.h4_margin_right,
            h4MarginBottom: this.settings.h4_margin_bottom,
            h4MarginLeft: this.settings.h4_margin_left,
            h4LineHeight: this.settings.h4_line_height,
            h4LetterSpacing: this.settings.h4_letter_spacing,

            h5FontFamily: this.settings.h5_font_family,
            h5FontWeight: this.settings.h5_font_weight,
            h5Color: this.settings.h5_color ? this.settings.h5_color : '',
            h5PaddingTop: this.settings.h5_padding_top,
            h5PaddingRight: this.settings.h5_padding_right,
            h5PaddingBottom: this.settings.h5_padding_bottom,
            h5PaddingLeft: this.settings.h5_padding_left,
            h5MarginTop: this.settings.h5_margin_top,
            h5MarginRight: this.settings.h5_margin_right,
            h5MarginBottom: this.settings.h5_margin_bottom,
            h5MarginLeft: this.settings.h5_margin_left,
            h5LineHeight: this.settings.h5_line_height,
            h5LetterSpacing: this.settings.h5_letter_spacing,

            h6FontFamily: this.settings.h6_font_family,
            h6FontWeight: this.settings.h6_font_weight,
            h6Color: this.settings.h6_color ? this.settings.h6_color : '',
            h6PaddingTop: this.settings.h6_padding_top,
            h6PaddingRight: this.settings.h6_padding_right,
            h6PaddingBottom: this.settings.h6_padding_bottom,
            h6PaddingLeft: this.settings.h6_padding_left,
            h6MarginTop: this.settings.h6_margin_top,
            h6MarginRight: this.settings.h6_margin_right,
            h6MarginBottom: this.settings.h6_margin_bottom,
            h6MarginLeft: this.settings.h6_margin_left,
            h6LineHeight: this.settings.h6_line_height,
            h6LetterSpacing: this.settings.h6_letter_spacing,

            // Footer Settings
            footerType: this.settings.footer_type,

            // Custom CSS
            customCSS: this.settings.custom_css
        };
    },
    computed: {
        csrfToken: function () {
            return document.getElementById( "csrf-token" ).content;
        },
        totalImages: function () {
            return this.totalMedia.filter( ( medium ) =>
                medium.type.includes( "image" )
            );
        }
    },
    mounted: function () {
        let navLinks = document.querySelectorAll( ".nav-link" );
        navLinks.forEach( ( navLink ) => {
            navLink.addEventListener( "click", this.navClick );
        } );
    },
    beforeDestroy: function () {
        let navLinks = document.querySelectorAll( ".nav-link" );
        navLinks.forEach( ( navLink ) => {
            navLink.removeEventListener( this.navClick );
        } );
    },
    methods: {
        fontWeights: function ( fontFamily ) {
            if ( !fontFamily ) return [];
            else return this.fonts[ fontFamily ].variants.reduce( ( acc, cur ) => {
                return [ ...acc, cur[ 'id' ] ]
            }, [] );
        },
        navClick: function ( e ) {
            e.currentTarget.classList.remove( "active" );

            let parent = e.currentTarget.parentNode;
            if ( parent.classList.contains( "nav-item" ) ) {
                let currentActive = parent.parentNode.querySelector( ".active" );
                if ( currentActive ) {
                    currentActive.classList.remove( "active" );
                }
                if ( parent !== currentActive ) {
                    parent.classList.add( "active" );
                }
            }

            // Change scroll position to see header
            if ( e.currentTarget.href.search( /header$/g ) > -1 ) {
                this.$refs.shop.contentWindow.scrollTo( {
                    top: 0,
                    behavior: "smooth",
                } );
            }

            // Change scroll position to see footer
            if ( e.currentTarget.href.search( /footer$/g ) > -1 ) {
                this.$refs.shop.contentWindow.scrollTo( {
                    top: this.$refs.shop.contentWindow.document.querySelector(
                        "body"
                    ).clientHeight,
                    behavior: "smooth",
                } );
            }

            // Change site's url to shop page
            if (
                e.currentTarget.href.indexOf( "shop-settings" ) > -1 &&
                this.$refs.shop.contentWindow.VueApp.$route.path.indexOf(
                    "/shop"
                ) < 0
            ) {
                this.$refs.shop.contentWindow.VueApp.$router.push(
                    "/shop/default"
                );
            }

            if (
                e.currentTarget.href.indexOf( "blog-global" ) > -1 &&
                this.$refs.shop.contentWindow.VueApp.$route.path.indexOf(
                    "/blog"
                ) < 0
            ) {
                this.$refs.shop.contentWindow.VueApp.$router.push(
                    "/pages/blog"
                );
            }
        },

        headerTypeSelect: function ( type ) {
            this.headerType = type;
            this.$refs.shop.contentWindow.VueApp.$store.commit(
                "setting/SET_THEME_SETTINGS",
                {
                    settings: {
                        header_type: this.headerType,
                    },
                }
            );
        },

        postTypeSelect: function () {
            this.$refs.shop.contentWindow.VueApp.$store.commit(
                "setting/SET_THEME_SETTINGS",
                {
                    settings: {
                        post_type: this.postType
                    }
                }
            );
        },

        productTypeSelect: function () {
            this.$refs.shop.contentWindow.VueApp.$store.commit(
                "setting/SET_THEME_SETTINGS",
                {
                    settings: {
                        product_type: this.productType,
                    },
                }
            );
        },

        footerTypeSelect: function ( type ) {
            this.footerType = type;
            this.$refs.shop.contentWindow.VueApp.$store.commit(
                "setting/SET_THEME_SETTINGS",
                {
                    settings: {
                        footer_type: this.footerType,
                    },
                }
            );
        },

        applyThemeSettings: function () {
            this.$refs.shop.contentWindow.VueApp.$store.commit(
                "setting/SET_THEME_SETTINGS",
                {
                    settings: {
                        mobile_menu_toggler_style: this.mobileMenuTogglerStyle,
                        account_icon_style: this.accountIconStyle,
                        cart_icon_style: this.cartIconStyle,
                        new_bubble_show: this.newBubbleShow,
                        show_product_category: this.showProductCategory
                            ? "1"
                            : "0",
                        show_product_ratings: this.showProductRatings
                            ? "1"
                            : "0",
                        show_product_countdown: this.showProductCountDown
                            ? "1"
                            : "0",

                        show_post_media: this.showPostMedia ? "1" : "0",
                        show_meta_author: this.showMetaAuthor ? "1" : "0",
                        show_meta_date: this.showMetaDate ? "1" : "0",
                        show_comments_count: this.showCommentsCount ? "1" : "0",
                        show_post_category: this.showPostCategory ? "1" : "0",
                        show_post_tags: this.showPostTags ? "1" : "0",
                        show_comments: this.showComments ? "1" : "0",
                        show_related_posts: this.showRelatedPosts ? "1" : "0",

                        filter_min_price: this.filterMinPrice,
                        filter_max_price: this.filterMaxPrice,
                        cart_menu_type: this.cartMenuType,
                        search_form_style: this.searchFormStyle,
                        search_form_category: this.searchFormCategory ? "1" : "0",
                        cart_popup_type: this.cartPopUpType,
                    },
                }
            );
        },

        applyColorSettings: function () {
            this.$refs.shop.contentWindow.VueApp.$store.commit(
                "setting/SET_THEME_SETTINGS",
                {
                    settings: {
                        primary_color: this.primaryColor.hex
                            ? this.primaryColor.hex
                            : this.primaryColor,
                        primary_color_dark: this.primaryColorDark.hex
                            ? this.primaryColorDark.hex
                            : this.primaryColorDark,
                        secondary_color: this.secondaryColor.hex
                            ? this.secondaryColor.hex
                            : this.secondaryColor,
                        secondary_color_dark: this.secondaryColorDark.hex
                            ? this.secondaryColorDark.hex
                            : this.secondaryColorDark,
                        body_color: this.bodyColor.hex
                            ? this.bodyColor.hex
                            : this.bodyColor,
                        headings_color: this.headingsColor.hex
                            ? this.headingsColor.hex
                            : this.headingsColor,
                        hot_bubble_color: this.hotBubbleColor.hex
                            ? this.hotBubbleColor.hex
                            : this.hotBubbleColor,
                        new_bubble_color: this.newBubbleColor.hex
                            ? this.newBubbleColor.hex
                            : this.newBubbleColor,
                        sale_bubble_color: this.saleBubbleColor.hex
                            ? this.saleBubbleColor.hex
                            : this.saleBubbleColor,
                    },
                }
            );
        },

        applyTypographySettings: function () {
            this.$refs.shop.contentWindow.VueApp.$store.commit(
                "setting/SET_THEME_SETTINGS",
                {
                    settings: {
                        h1_font_family: this.h1FontFamily,
                        h1_color: this.h1Color.hex ? this.h1Color.hex : this.h1Color,
                        h1_padding_top: this.h1PaddingTop,
                        h1_padding_left: this.h1PaddingLeft,
                        h1_padding_bottom: this.h1PaddingBottom,
                        h1_padding_right: this.h1PaddingRight,
                        h1_margin_top: this.h1MarginTop,
                        h1_margin_left: this.h1MarginLeft,
                        h1_margin_bottom: this.h1MarginBottom,
                        h1_margin_right: this.h1MarginRight,
                        h1_line_height: this.h1LineHeight,
                        h1_letter_spacing: this.h1LetterSpacing,

                        h2_font_family: this.h2FontFamily,
                        h2_color: this.h2Color.hex ? this.h2Color.hex : this.h2Color,
                        h2_padding_top: this.h2PaddingTop,
                        h2_padding_left: this.h2PaddingLeft,
                        h2_padding_bottom: this.h2PaddingBottom,
                        h2_padding_right: this.h2PaddingRight,
                        h2_margin_top: this.h2MarginTop,
                        h2_margin_left: this.h2MarginLeft,
                        h2_margin_bottom: this.h2MarginBottom,
                        h2_margin_right: this.h2MarginRight,
                        h2_line_height: this.h2LineHeight,
                        h2_letter_spacing: this.h2LetterSpacing,

                        h3_font_family: this.h3FontFamily,
                        h3_color: this.h3Color.hex ? this.h3Color.hex : this.h3Color,
                        h3_padding_top: this.h3PaddingTop,
                        h3_padding_left: this.h3PaddingLeft,
                        h3_padding_bottom: this.h3PaddingBottom,
                        h3_padding_right: this.h3PaddingRight,
                        h3_margin_top: this.h3MarginTop,
                        h3_margin_left: this.h3MarginLeft,
                        h3_margin_bottom: this.h3MarginBottom,
                        h3_margin_right: this.h3MarginRight,
                        h3_line_height: this.h3LineHeight,
                        h3_letter_spacing: this.h3LetterSpacing,

                        h4_font_family: this.h4FontFamily,
                        h4_color: this.h4Color.hex ? this.h4Color.hex : this.h4Color,
                        h4_padding_top: this.h4PaddingTop,
                        h4_padding_left: this.h4PaddingLeft,
                        h4_padding_bottom: this.h4PaddingBottom,
                        h4_padding_right: this.h4PaddingRight,
                        h4_margin_top: this.h4MarginTop,
                        h4_margin_left: this.h4MarginLeft,
                        h4_margin_bottom: this.h4MarginBottom,
                        h4_margin_right: this.h4MarginRight,
                        h4_line_height: this.h4LineHeight,
                        h4_letter_spacing: this.h4LetterSpacing,

                        h5_font_family: this.h5FontFamily,
                        h5_color: this.h5Color.hex ? this.h5Color.hex : this.h5Color,
                        h5_padding_top: this.h5PaddingTop,
                        h5_padding_left: this.h5PaddingLeft,
                        h5_padding_bottom: this.h5PaddingBottom,
                        h5_padding_right: this.h5PaddingRight,
                        h5_margin_top: this.h5MarginTop,
                        h5_margin_left: this.h5MarginLeft,
                        h5_margin_bottom: this.h5MarginBottom,
                        h5_margin_right: this.h5MarginRight,
                        h5_line_height: this.h5LineHeight,
                        h5_letter_spacing: this.h5LetterSpacing,

                        h6_font_family: this.h6FontFamily,
                        h6_color: this.h6Color.hex ? this.h6Color.hex : this.h6Color,
                        h6_padding_top: this.h6PaddingTop,
                        h6_padding_left: this.h6PaddingLeft,
                        h6_padding_bottom: this.h6PaddingBottom,
                        h6_padding_right: this.h6PaddingRight,
                        h6_margin_top: this.h6MarginTop,
                        h6_margin_left: this.h6MarginLeft,
                        h6_margin_bottom: this.h6MarginBottom,
                        h6_margin_right: this.h6MarginRight,
                        h6_line_height: this.h6LineHeight,
                        h6_letter_spacing: this.h6LetterSpacing,
                    }
                }
            )
        },

        applyCSS: function () {
            var css = this.$refs.shop.contentDocument.querySelector( "#custom-inline-css" );
            if ( css ) {
                css.innerHTML = this.customCSS;
            }
        },

        changeLogo: function () {
            this.$refs.shop.contentWindow.VueApp.$store.commit(
                "setting/SET_THEME_SETTINGS",
                {
                    settings: {
                        logo_image: this.logoImage,
                        logo_image_width: this.logoImageWidth,
                        logo_image_height: this.logoImageHeight,
                    },
                }
            );
        },

        // Open media gallery modal
        openMediaModal: function () {
            this.totalMedia = this.totalMedia.reduce( ( acc, cur ) => {
                if ( cur.copy_link == this.logoImage ) {
                    return [
                        ...acc,
                        {
                            ...cur,
                            selected: true,
                        },
                    ];
                }

                return [
                    ...acc,
                    {
                        ...cur,
                        selected: false,
                    },
                ];
            }, [] );

            this.$modal.show( "media-modal" );
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
            this.logoImage = "storage/" + media[ 0 ].copy_link;
            this.logoImageWidth = media[ 0 ].width;
            this.logoImageHeight = media[ 0 ].height;
            this.changeLogo();
        },

        // Reset Logo image
        resetLogo: function () {
            this.logoImage = this.settings.logo_image;
            this.logoImageWidth = this.settings.logo_image_width;
            this.logoImageHeight = this.settings.logo_image_height;
            this.changeLogo();
        },

        toggleColorPicker: function ( index ) {
            this.showColorPicker = this.showColorPicker === index ? -1 : index;
        },

        contentClick: function ( e ) {
            if (
                !e.target.closest( ".vc-sketch" ) &&
                !e.target.closest( ".color-picker-toggle" )
            ) {
                this.showColorPicker = -1;
            }
        },

        leaveSettingPage: function () {
            if ( window.confirm( "Do you really want to leave?" ) ) {
                window.location = baseUrl + "/admin";
            }
        },
    },
};
</script>