<template>
    <div>
        <form class="ecommerce-form" action="#" method="post" @submit.prevent="saveVendor">
            <div class="row">
                <div class="col">
                    <section class="card card-modern card-big-info">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-2-5 col-xl-1-5">
                                    <i class="card-big-info-icon bx bx-store"></i>
                                    <h2 class="card-big-info-title">Store Banner</h2>
                                    <p class="card-big-info-desc">Add here vendor store banner.</p>
                                </div>
                                <div class="col-xl-3-5 col-lg-3-5">
                                    <a
                                        href="#"
                                        class="vendor-banner modal-sizes d-block"
                                        data-index="banner-image"
                                        @click.prevent="openMediaModal('banner')"
                                        :style="{ 'background-image': banner ? ('url(' + $root.getUrl(banner.copy_link, true) + ')') : null }"
                                    >
                                        <span class="dropzone-upload-message text-center">
                                            <i class="bx bxs-cloud-upload"></i>
                                            Choose
                                            <b
                                                class="text-color-primary"
                                            >your banner</b> images here.
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="card card-modern card-big-info">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-2-5 col-xl-1-5">
                                    <i class="card-big-info-icon bx bx-cog"></i>
                                    <h2 class="card-big-info-title">Site Settings</h2>
                                    <p
                                        class="card-big-info-desc"
                                    >Add here vendor site settings and their related information.</p>
                                </div>
                                <div class="col-xl-3-5 col-lg-3-5">
                                    <div class="form-group row align-items-center">
                                        <label
                                            class="col-lg-5 col-xl-3 control-label text-lg-right mb-0"
                                        >Paypal Email</label>
                                        <div class="col-lg-7 col-xl-9">
                                            <input
                                                type="email"
                                                name="paypal_email"
                                                class="form-control form-control-modern"
                                                v-model="paypalEmail"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row align-items-center">
                                        <label
                                            class="col-lg-5 col-xl-3 control-label text-lg-right mb-0"
                                        >Profile Image</label>
                                        <div class="col-lg-7 col-xl-6">
                                            <a
                                                href="#"
                                                class="modal-sizes d-block"
                                                data-index="profile-image"
                                                @click.prevent="openMediaModal('profile')"
                                            >
                                                <img
                                                    width="150"
                                                    class="border pro-image"
                                                    height="150"
                                                    :src="$root.getUrl(
                                                        profile.copy_link,
                                                        150,
                                                        600
                                                    )"
                                                    alt="category"
                                                    v-if="profile"
                                                />
                                                <img
                                                    width="66"
                                                    class="border pro-image"
                                                    height="66"
                                                    :src="$root.getUrl('server/images/porto-placeholder-66x66.png')"
                                                    alt="category"
                                                    v-else
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="form-group row align-items-center">
                                        <label
                                            class="col-lg-5 col-xl-3 control-label text-lg-right mb-0"
                                        >First Name</label>
                                        <div class="col-lg-7 col-xl-9">
                                            <input
                                                type="text"
                                                name="first_name"
                                                class="form-control form-control-modern"
                                                v-model="firstName"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row align-items-center">
                                        <label
                                            class="col-lg-5 col-xl-3 control-label text-lg-right mb-0"
                                        >Last Name</label>
                                        <div class="col-lg-7 col-xl-9">
                                            <input
                                                type="text"
                                                name="last_name"
                                                class="form-control form-control-modern"
                                                v-model="lastName"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row align-items-center">
                                        <label
                                            class="col-lg-5 col-xl-3 control-label text-lg-right mb-0"
                                        >Store Name</label>
                                        <div class="col-lg-7 col-xl-9">
                                            <input
                                                type="text"
                                                id="store-name"
                                                name="store_name"
                                                class="form-control form-control-modern"
                                                v-model="storeName"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row align-items-center">
                                        <label
                                            class="col-lg-5 col-xl-3 control-label text-lg-right mb-0"
                                        >Phone</label>
                                        <div class="col-lg-7 col-xl-9">
                                            <input
                                                type="text"
                                                name="phone"
                                                id="phone"
                                                class="form-control form-control-modern"
                                                v-model="phone"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row align-items-center">
                                        <label
                                            class="col-lg-5 col-xl-3 control-label text-lg-right mb-0"
                                        >Country</label>
                                        <div class="col-lg-7 col-xl-9">
                                            <Select2
                                                id="country"
                                                v-model="country"
                                                :settings="{
													theme: 'bootstrap',
												}"
                                                :options="countries"
                                                requried
                                            ></Select2>
                                        </div>
                                    </div>
                                    <div class="form-group row align-items-center">
                                        <label
                                            class="col-lg-5 col-xl-3 control-label text-lg-right mb-0"
                                        >State</label>
                                        <div class="col-lg-7 col-xl-9">
                                            <input
                                                type="text"
                                                name="phone"
                                                id="phone"
                                                class="form-control form-control-modern"
                                                v-model="state"
                                                v-if="selectStates.length == 0"
                                                required
                                            />
                                            <Select2
                                                id="state"
                                                v-model="state"
                                                :settings="{
													theme: 'bootstrap',
												}"
                                                :options="selectStates"
                                                v-else
                                                required
                                            ></Select2>
                                        </div>
                                    </div>
                                    <div class="form-group row align-items-center">
                                        <label
                                            class="col-lg-5 col-xl-3 control-label text-lg-right mb-0"
                                        >City</label>
                                        <div class="col-lg-7 col-xl-9">
                                            <input
                                                type="text"
                                                class="form-control form-control-modern"
                                                v-model="city"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row align-items-center">
                                        <label
                                            class="col-lg-5 col-xl-3 control-label text-lg-right mb-0"
                                        >Street</label>
                                        <div class="col-lg-7 col-xl-9">
                                            <input
                                                type="text"
                                                class="form-control form-control-modern"
                                                v-model="street"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row align-items-center">
                                        <label
                                            class="col-lg-5 col-xl-3 control-label text-lg-right mb-0"
                                        >Postcode</label>
                                        <div class="col-lg-7 col-xl-9">
                                            <input
                                                type="text"
                                                class="form-control form-control-modern"
                                                v-model="postcode"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row align-items-center">
                                        <label
                                            class="col-lg-5 col-xl-3 control-label text-lg-right mb-0"
                                        >Terms and Conditions</label>
                                        <div class="col-lg-7 col-xl-9">
                                            <vue-editor
                                                v-model="toc"
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
																	list:
																		'ordered',
																},
																{
																	list:
																		'bullet',
																},
															],
														]"
                                            ></vue-editor>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div class="row action-buttons mt-4">
                <div class="col-12 col-md-auto">
                    <button
                        type="submit"
                        class="submit-button btn btn-primary btn-px-4 py-3 d-flex align-items-center font-weight-semibold line-height-1"
                        data-loading-text="Loading..."
                    >
                        <i class="bx bx-save text-4 mr-2"></i> Save Changes
                    </button>
                </div>
            </div>
        </form>
        <modal name="media-modal" height="80%" width="80%">
            <add-media-component
                :total-media="totalMedia"
                :multi-select="false"
                @file-add-success="fileUploadSuccess"
                @file-click="modalFileClick"
                @modal-set="modalSetGallery"
            ></add-media-component>
        </modal>
    </div>
</template>
<script>
import Select2 from "v-select2-component";
import { VueEditor } from "vue2-editor";
import { COUNTRIES, STATES } from "../../data/constant";
import AddMediaComponent from "../products/AddMediaComponent";

export default {
    components: {
        Select2,
        AddMediaComponent,
    },
    props: {
        user: {
            type: Object,
            default: function () {
                return {
                    vendor: {
                        banner: {
                            id: null,
                            copy_link: null,
                        },
                        profile: {
                            id: null,
                            copy_link: null,
                        },
                    },
                };
            },
        },
        media: Array,
    },
    data() {
        return {
            // Constants
            countries: COUNTRIES,
            states: STATES,
            totalMedia: this.media,
            mediaType: null,
            banner: this.user.vendor.banner,
            profile: this.user.vendor.profile,
            firstName: this.user.first_name,
            lastName: this.user.last_name,
            storeName: this.user.vendor.store_name,
            phone: this.user.vendor.phone,
            toc: this.user.vendor.toc,
            paypalEmail: this.user.vendor.paypal_email,
            street: this.user.vendor.street,
            city: this.user.vendor.city,
            postcode: this.user.vendor.postcode,
            country: this.user.vendor.country,
            state: this.user.vendor.state,
        };
    },
    computed: {
        selectStates: function () {
            return this.country && STATES[this.country]
                ? STATES[this.country]
                : [];
        },
    },
    methods: {
        openMediaModal: function (type) {
            if (type == "banner") {
                this.mediaType = "banner";
            } else {
                this.mediaType = "profile";
            }

            this.$modal.show("media-modal");
        },

        // Add Image when image upload
        fileUploadSuccess: function (medium, selected) {
            this.totalMedia = [...this.totalMedia, medium];
        },

        // modal file click
        modalFileClick: function (medium, multiSelect) {
            this.totalMedia = this.totalMedia.reduce((acc, cur) => {
                if (medium.id == cur.id) {
                    return [
                        ...acc,
                        {
                            ...cur,
                            selected: !cur.selected,
                        },
                    ];
                } else {
                    if (multiSelect) {
                        return [...acc, cur];
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
            }, []);
        },

        modalSetGallery: function (media) {
            if (media.length > 0) {
                if (this.mediaType == "banner") {
                    this.banner = media[0];
                } else {
                    this.profile = media[0];
                }
            } else {
                if (this.mediaType == "banner") {
                    this.banner = null;
                } else {
                    this.profile = null;
                }
            }
        },

        saveVendor: async function () {
            await window.axios
                .put(`/admin/ecommerce/vendor-setting/${this.user.id}`, {
                    banner_image: this.banner ? this.banner.id : null,
                    profile_image: this.profile ? this.profile.id : null,
                    first_name: this.firstName,
                    last_name: this.lastName,
                    store_name: this.storeName,
                    phone: this.phone,
                    toc: this.toc,
                    paypal_email: this.paypalEmail,
                    street: this.street,
                    city: this.city,
                    postcode: this.postcode,
                    country: this.country,
                    state: this.state,
                })
                .then((response) => {
                    this.$vToastify.setSettings({
                        withBackdrop: false,
                        position: "top-right",
                    });
                    this.$vToastify.success("Successfully Saved");
                })
                .catch((error) => {
                    this.$vToastify.setSettings({
                        withBackdrop: false,
                        position: "top-right",
                        errorDuration: 2000,
                    });
                    this.$vToastify.error(error.response.data.message);
                });
        },
    },
};
</script>