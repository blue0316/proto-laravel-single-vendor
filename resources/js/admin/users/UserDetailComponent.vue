<template>
    <form
        class="ecommerce-form"
        action="#"
        method="post"
        @submit.prevent="saveUser"
    >
        <div class="row">
            <div class="col">
                <section class="card card-modern card-big-info">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-2-5 col-xl-1-5">
                                <i class="card-big-info-icon bx bx-user-circle"></i>
                                <h2 class="card-big-info-title">Account Info</h2>
                                <p class="card-big-info-desc">Add here the user account info.</p>
                            </div>
                            <div class="col-lg-3-5 col-xl-4-5">
                                <div class="form-group row align-items-center">
                                    <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">First Name</label>
                                    <div class="col-lg-7 col-xl-6">
                                        <input
                                            type="text"
                                            class="form-control form-control-modern"
                                            v-model="firstName"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="form-group row align-items-center">
                                    <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Last Name</label>
                                    <div class="col-lg-7 col-xl-6">
                                        <input
                                            type="text"
                                            class="form-control form-control-modern"
                                            v-model="lastName"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="form-group row align-items-center">
                                    <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Email</label>
                                    <div class="col-lg-7 col-xl-6">
                                        <input
                                            type="email"
                                            class="form-control form-control-modern"
                                            v-model="email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="form-group row align-items-center">
                                    <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Password Reset</label>
                                    <div class="col-lg-7 col-xl-6">
                                        <div class="checkbox-custom checkbox-default">
                                            <input
                                                type="checkbox"
                                                data-toggle="collapse"
                                                href="#passwordReset"
                                                id="checkboxExample1"
                                            />
                                            <label for="checkboxExample1">Do you want to reset password?</label>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="form-group collapse"
                                    id="passwordReset"
                                >
                                    <div
                                        class="form-group row align-items-center"
                                        key="password"
                                    >
                                        <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Password</label>
                                        <div class="col-lg-7 col-xl-6">
                                            <input
                                                type="password"
                                                class="form-control form-control-modern"
                                                v-model="password"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="form-group row align-items-center"
                                        key="password-confirm"
                                    >
                                        <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Password Confirm</label>
                                        <div class="col-lg-7 col-xl-6">
                                            <input
                                                type="password"
                                                class="form-control form-control-modern"
                                                v-model="passwordConfirm"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row align-items-center">
                                    <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Manage Role</label>
                                    <div class="col-lg-7 col-xl-6">
                                        <select
                                            class="form-control form-control-modern"
                                            v-model="role"
                                            v-if="isAdmin == 1"
                                        >
                                            <option value="2">Customer</option>
                                            <option
                                                value="4"
                                                v-if="multivendor == 1"
                                            >Vendor</option>
                                            <option value="7">Administrator</option>
                                        </select>
                                        <select
                                            class="form-control form-control-modern"
                                            v-model="role"
                                            v-else
                                            disabled
                                        >
                                            <option value="4">Vendor</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-5 col-xl-3 control-label text-lg-right mt-2 mb-0">Description</label>
                                    <div class="col-lg-7 col-xl-6">
                                        <textarea
                                            rows="5"
                                            class="form-control form-control-modern"
                                            v-model="description"
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <section class="card card-modern card-big-info">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-2-5 col-xl-1-5">
                                <i class="card-big-info-icon bx bx-dollar-circle"></i>
                                <h2 class="card-big-info-title">Billing Info</h2>
                                <p class="card-big-info-desc">
                                    Add here the customer billing info with all
                                    details and necessary information.
                                </p>
                            </div>
                            <div class="col-lg-3-5 col-xl-4-5">
                                <div class="form-group row align-items-center">
                                    <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">First Name</label>
                                    <div class="col-lg-7 col-xl-6">
                                        <input
                                            type="text"
                                            class="form-control form-control-modern"
                                            v-model="billing.firstName"
                                        />
                                    </div>
                                </div>
                                <div class="form-group row align-items-center">
                                    <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Last Name</label>
                                    <div class="col-lg-7 col-xl-6">
                                        <input
                                            type="text"
                                            class="form-control form-control-modern"
                                            v-model="billing.lastName"
                                        />
                                    </div>
                                </div>
                                <div class="form-group row align-items-center">
                                    <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Company</label>
                                    <div class="col-lg-7 col-xl-6">
                                        <input
                                            type="text"
                                            class="form-control form-control-modern"
                                            v-model="billing.company"
                                        />
                                    </div>
                                </div>
                                <div class="form-group row align-items-center">
                                    <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Address Line 1</label>
                                    <div class="col-lg-7 col-xl-6">
                                        <input
                                            type="text"
                                            class="form-control form-control-modern"
                                            v-model="billing.streetAddress1"
                                        />
                                    </div>
                                </div>
                                <div class="form-group row align-items-center">
                                    <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Address Line 2</label>
                                    <div class="col-lg-7 col-xl-6">
                                        <input
                                            type="text"
                                            class="form-control form-control-modern"
                                            v-model="billing.streetAddress2"
                                        />
                                    </div>
                                </div>
                                <div class="form-group row align-items-center">
                                    <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">City</label>
                                    <div class="col-lg-7 col-xl-6">
                                        <input
                                            type="text"
                                            class="form-control form-control-modern"
                                            v-model="billing.city"
                                        />
                                    </div>
                                </div>
                                <div class="form-group row align-items-center">
                                    <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Postcode / ZIP</label>
                                    <div class="col-lg-7 col-xl-6">
                                        <input
                                            type="text"
                                            class="form-control form-control-modern"
                                            v-model="billing.zip"
                                        />
                                    </div>
                                </div>
                                <div class="form-group row align-items-center">
                                    <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Country</label>
                                    <div class="col-lg-7 col-xl-6">
                                        <Select2
                                            id="billing-country-select"
                                            v-model="billing.country"
                                            :settings="{
												theme: 'bootstrap',
												containerCssClass:
													'form-control-modern',
											}"
                                            :options="countries"
                                        ></Select2>
                                    </div>
                                </div>
                                <div class="form-group row align-items-center">
                                    <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">State / Province</label>
                                    <div class="col-lg-7 col-xl-6">
                                        <Select2
                                            v-if="billingStates.length"
                                            key="billing-state-select2"
                                            id="billing-state-select"
                                            v-model.lazy="billing.state"
                                            :settings="{
												theme: 'bootstrap',
											}"
                                            :options="billingStates"
                                        ></Select2>
                                        <input
                                            v-else
                                            key="billing-state-input"
                                            class="form-control form-control-modern"
                                            type="text"
                                            v-model.lazy="billing.state"
                                        />
                                    </div>
                                </div>
                                <div class="form-group row align-items-center">
                                    <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Phone</label>
                                    <div class="col-lg-7 col-xl-6">
                                        <input
                                            type="tel"
                                            class="form-control form-control-modern"
                                            v-model="billing.phone"
                                        />
                                    </div>
                                </div>
                                <div class="form-group row align-items-center">
                                    <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Email address</label>
                                    <div class="col-lg-7 col-xl-6">
                                        <input
                                            type="email"
                                            class="form-control form-control-modern"
                                            v-model="billing.email"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <section class="card card-modern card-big-info">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-2-5 col-xl-1-5">
                                <i class="card-big-info-icon bx bx-mail-send"></i>
                                <h2 class="card-big-info-title">Shipping Info</h2>
                                <p class="card-big-info-desc">
                                    Add here the customer shipping info with all
                                    details and necessary information.
                                </p>
                            </div>
                            <div class="col-lg-3-5 col-xl-4-5">
                                <div class="form-group row align-items-center">
                                    <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Different from billing</label>
                                    <div class="col-lg-7 col-xl-6">
                                        <div class="checkbox-custom my-2">
                                            <input
                                                id="diff-shipping"
                                                type="checkbox"
                                                v-model="diffShipping"
                                            />
                                            <label for="diff-shipping">
                                                Check this box to use different
                                                information for shipping.
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <vue-slide-toggle
                                    :open="diffShipping"
                                    class="shipping-fields-wrapper"
                                    :duration="500"
                                >
                                    <div class="form-group row align-items-center">
                                        <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">First Name</label>
                                        <div class="col-lg-7 col-xl-6">
                                            <input
                                                type="text"
                                                class="form-control form-control-modern"
                                                v-model="shipping.firstName"
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row align-items-center">
                                        <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Last Name</label>
                                        <div class="col-lg-7 col-xl-6">
                                            <input
                                                type="text"
                                                class="form-control form-control-modern"
                                                v-model="shipping.lastName"
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row align-items-center">
                                        <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Company</label>
                                        <div class="col-lg-7 col-xl-6">
                                            <input
                                                type="text"
                                                class="form-control form-control-modern"
                                                v-model="shipping.company"
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row align-items-center">
                                        <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Address Line 1</label>
                                        <div class="col-lg-7 col-xl-6">
                                            <input
                                                type="text"
                                                class="form-control form-control-modern"
                                                v-model="
													shipping.streetAddress1
												"
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row align-items-center">
                                        <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Address Line 2</label>
                                        <div class="col-lg-7 col-xl-6">
                                            <input
                                                type="text"
                                                class="form-control form-control-modern"
                                                v-model="
													shipping.streetAddress2
												"
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row align-items-center">
                                        <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">City</label>
                                        <div class="col-lg-7 col-xl-6">
                                            <input
                                                type="text"
                                                class="form-control form-control-modern"
                                                v-model="shipping.city"
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row align-items-center">
                                        <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Postcode / ZIP</label>
                                        <div class="col-lg-7 col-xl-6">
                                            <input
                                                type="text"
                                                class="form-control form-control-modern"
                                                v-model="shipping.zip"
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row align-items-center">
                                        <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">Country</label>
                                        <div class="col-lg-7 col-xl-6">
                                            <Select2
                                                id="shipping-country-select"
                                                v-model="shipping.country"
                                                :settings="{
													theme: 'bootstrap',
												}"
                                                :options="countries"
                                            ></Select2>
                                        </div>
                                    </div>
                                    <div class="form-group row align-items-center">
                                        <label class="col-lg-5 col-xl-3 control-label text-lg-right mb-0">State / Country</label>
                                        <div class="col-lg-7 col-xl-6">
                                            <Select2
                                                v-if="shippingStates.length"
                                                key="shipping-state-select2"
                                                id="shipping-state-select"
                                                v-model.lazy="shipping.state"
                                                :settings="{
													theme: 'bootstrap',
												}"
                                                :options="shippingStates"
                                            ></Select2>
                                            <input
                                                v-else
                                                key="shipping-state-input"
                                                type="text"
                                                class="form-control form-control-modern"
                                                v-model.lazy="shipping.state"
                                            />
                                        </div>
                                    </div>
                                </vue-slide-toggle>
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
                    data-loading-text="Loading..."
                >
                    <i class="bx bx-save text-4 mr-2"></i> Save User
                </button>
            </div>
            <div class="col-12 col-md-auto px-md-0 mt-3 mt-md-0">
                <a
                    :href="baseUrl + '/admin/users'"
                    class="cancel-button btn btn-light btn-px-4 py-3 border font-weight-semibold text-color-dark line-height-1 d-flex h-100 align-items-center"
                >Back</a>
            </div>
        </div>
    </form>
</template>
<script>
import Select2 from "v-select2-component";
import { VueSlideToggle } from "vue-slide-toggle";
import { COUNTRIES, STATES } from "../../data/constant";

export default {
    components: {
        Select2,
        VueSlideToggle,
    },
    props: {
        user: Object,
        roles: Array,
        multivendor: Number,
        isAdmin: Number,
    },
    data: function () {
        return {
            // Constants
            baseUrl: window.baseUrl,
            countries: COUNTRIES,
            states: STATES,

            diffShipping: true,

            // Account Info
            firstName: this.user.first_name,
            lastName: this.user.last_name,
            email: this.user.email,
            password: "",
            passwordConfirm: "",
            role: this.user.role_id,
            description: this.user.description,

            // Billing Info
            billing: {
                firstName: this.user.billing_first_name,
                lastName: this.user.billing_last_name,
                company: this.user.billing_company,
                country: this.user.billing_country,
                streetAddress1: this.user.billing_address_1,
                streetAddress2: this.user.billing_address_2,
                city: this.user.billing_city,
                state: this.user.billing_state,
                zip: this.user.billing_postcode,
                phone: this.user.billing_phone,
                email: this.user.billlling_email,
            },

            // Shipping Info
            shipping: {
                firstName: this.user.shipping_first_name,
                lastName: this.user.shipping_last_name,
                company: this.user.shipping_company,
                country: this.user.shipping_country,
                streetAddress1: this.user.shipping_address_1,
                streetAddress2: this.user.shipping_address_2,
                city: this.user.shipping_city,
                state: this.user.shipping_state,
                zip: this.user.shipping_postcode,
            },
        };
    },
    computed: {
        billingStates: function () {
            return this.billing.country && STATES[ this.billing.country ]
                ? STATES[ this.billing.country ]
                : [];
        },
        shippingStates: function () {
            return this.shipping.country && STATES[ this.shipping.country ]
                ? STATES[ this.shipping.country ]
                : [];
        },
        shippingInfo: function () {
            if ( this.diffShipping ) return this.shipping;
            else
                return {
                    firstName: this.billing.firstName,
                    lastName: this.billing.lastName,
                    company: this.billing.company,
                    country: this.billing.country,
                    streetAddress1: this.billing.streetAddress1,
                    streetAddress2: this.billing.streetAddress2,
                    city: this.billing.city,
                    state: this.billing.state,
                    zip: this.billing.zip,
                };
        },
    },
    methods: {
        afterLeave: function ( el ) {
            el.style.display = "none";
        },
        saveUser: async function () {
            await window.axios
                .put( `/admin/users/${ this.user.id }`, {
                    first_name: this.firstName,
                    last_name: this.lastName,
                    email:
                        this.email === this.user.email ? undefined : this.email,
                    password: this.password,
                    password_confirmation: this.passwordConfirm,
                    role_id: this.role,
                    description: this.description,
                    billing_first_name: this.billing.firstName,
                    billing_last_name: this.billing.lastName,
                    billing_company: this.billing.company,
                    billing_address_1: this.billing.streetAddress1,
                    billing_address_2: this.billing.streetAddress2,
                    billing_city: this.billing.city,
                    billing_postcode: this.billing.zip,
                    billing_country: this.billing.country,
                    billing_state: this.billing.state,
                    billing_phone: this.billing.phone,
                    billing_email: this.billing.email,
                    shipping_first_name: this.shippingInfo.firstName,
                    shipping_last_name: this.shippingInfo.lastName,
                    shipping_company: this.shippingInfo.company,
                    shipping_address_1: this.shippingInfo.streetAddress1,
                    shipping_address_2: this.shippingInfo.streetAddress2,
                    shipping_city: this.shippingInfo.city,
                    shipping_postcode: this.shippingInfo.zip,
                    shipping_country: this.shippingInfo.country,
                    shipping_state: this.shippingInfo.state,
                } )
                .then( ( response ) => {
                    this.$vToastify.setSettings( {
                        withBackdrop: false,
                        position: "top-right",
                    } );
                    this.$vToastify.success( "Successfully Saved" );
                } )
                .catch( ( error ) => {
                    this.$vToastify.setSettings( {
                        withBackdrop: false,
                        position: "top-right",
                        errorDuration: 2000,
                    } );
                    this.$vToastify.error( error.response.data.message );
                } );
        },
    },
};
</script>