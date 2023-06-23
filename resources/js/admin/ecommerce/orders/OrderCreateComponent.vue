<template>
    <form
        class="order-details"
        method="post"
        @submit.prevent="saveOrder"
    >
        <div class="row">
            <div class="col-xl-4 mb-4 mb-xl-0">
                <div class="card card-modern h-100">
                    <div class="card-header">
                        <h2 class="card-title">General</h2>
                    </div>
                    <div class="card-body">
                        <div class="form-row">
                            <div class="form-group col mb-3">
                                <label>Status</label>
                                <select
                                    class="form-control form-control-modern"
                                    v-model="status"
                                >
                                    <option value="on-hold">On Hold</option>
                                    <option value="pending">Pending Payment</option>
                                    <option value="processing">Processing</option>
                                    <option value="completed">Completed</option>
                                    <option value="cancelled">Cancelled</option>
                                    <option value="refunded">Refunded</option>
                                    <option value="failed">Failed</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col mb-3">
                                <label>Date Created</label>
                                <div class="date-time-field">
                                    <div class="date">
                                        <date-picker
                                            v-model="date"
                                            :disabled-date="
												(date) => {
													return date > Date.now();
												}
											"
                                        ></date-picker>
                                    </div>
                                    <div class="time">
                                        <span class="px-2">@</span>
                                        <input
                                            type="number"
                                            class="form-control form-control-modern text-center"
                                            min="0"
                                            max="23"
                                            v-model="hours"
                                        />
                                        <span class="px-2">:</span>
                                        <input
                                            type="number"
                                            class="form-control form-control-modern text-center"
                                            min="0"
                                            max="59"
                                            v-model="minutes"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col mb-3">
                                <label>Customer</label>
                                <Select2
                                    id="customer-select"
                                    v-model="customer"
                                    :settings="{
										theme: 'bootstrap',
										minimumInputLength: 1,
										containerCssClass:
											'form-control-modern',
									}"
                                    :required="true"
                                    :options="customerList"
                                ></Select2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-8">
                <div class="card card-modern h-100">
                    <div class="card-header">
                        <h2 class="card-title">Addresses</h2>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-xl-4 mb-4 mb-xl-0">
                                <h3 class="text-color-dark font-weight-bold text-4 line-height-1 mt-0 mb-3">
                                    BILLING
                                    <a
                                        href="javascript:;"
                                        v-if="customer"
                                        class="btn btn-link d-block text-left p-0"
                                        @click="loadBillingAddress"
                                    >Load billing address</a>
                                </h3>
                                <div class="form-row">
                                    <div class="col-md-6 mb-3">
                                        <div class="form-group">
                                            <label>First name</label>
                                            <input
                                                type="text"
                                                class="form-control form-control-modern"
                                                v-model="billing.firstName"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <div class="form-group">
                                            <label>Last name</label>
                                            <input
                                                type="text"
                                                class="form-control form-control-modern"
                                                v-model="billing.lastName"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="col-12 mb-3">
                                        <div class="form-group">
                                            <label>Company</label>
                                            <input
                                                type="text"
                                                class="form-control form-control-modern"
                                                v-model="billing.company"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <div class="form-group">
                                            <label>Address line 1</label>
                                            <input
                                                type="text"
                                                class="form-control form-control-modern"
                                                v-model="billing.streetAddress1"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <div class="form-group">
                                            <label>Address line 2</label>
                                            <input
                                                type="text"
                                                class="form-control form-control-modern"
                                                v-model="billing.streetAddress2"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <div class="form-group">
                                            <label>City</label>
                                            <input
                                                type="text"
                                                class="form-control form-control-modern"
                                                v-model="billing.city"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <div class="form-group">
                                            <label>Postcode / Zip</label>
                                            <input
                                                type="text"
                                                class="form-control form-control-modern"
                                                v-model="billing.zip"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="col-12 mb-3">
                                        <div class="form-group">
                                            <label>Country</label>
                                            <Select2
                                                id="billing-country-select"
                                                v-model="billing.country"
                                                :settings="{
													theme: 'bootstrap',
													containerCssClass:
														'form-control-modern',
												}"
                                                :required="true"
                                                :options="countries"
                                            ></Select2>
                                        </div>
                                    </div>
                                    <div class="col-12 mb-3">
                                        <div class="form-group">
                                            <label>State / Province</label>
                                            <Select2
                                                v-if="billingStates.length"
                                                key="billing-state-select2"
                                                id="billing-state-select"
                                                v-model.lazy="billing.state"
                                                :settings="{
													theme: 'bootstrap',
												}"
                                                :required="true"
                                                :options="billingStates"
                                            ></Select2>
                                            <input
                                                v-else
                                                key="billing-state-input"
                                                class="form-control form-control-modern"
                                                type="text"
                                                required
                                                v-model.lazy="billing.state"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <div class="form-group">
                                            <label>Email address</label>
                                            <input
                                                type="email"
                                                class="form-control form-control-modern"
                                                v-model="billing.email"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <div class="form-group">
                                            <label>Phone</label>
                                            <input
                                                type="tel"
                                                class="form-control form-control-modern"
                                                v-model="billing.phone"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label>Payment method</label>
                                            <select
                                                class="form-control form-control-modern"
                                                v-model="paymentMethod"
                                                required
                                            >
                                                <option
                                                    v-for="payTm in paymentMethods"
                                                    :key="payTm.slug"
                                                    :value="payTm.slug"
                                                >{{ payTm.name }}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <h3 class="font-weight-bold text-color-dark text-4 line-height-1 mt-0 mb-3">
                                    SHIPPING
                                    <div class="d-block">
                                        <a
                                            href="javascript:;"
                                            v-if="customer"
                                            class="btn btn-link text-left p-0"
                                            @click="loadShippingAddress"
                                        >Load shipping address</a>
                                        <a
                                            href="javascript:;"
                                            v-if="customer"
                                            class="btn btn-link text-left p-0"
                                            @click="copyBillingAddress"
                                        >Copy billing address</a>
                                    </div>
                                </h3>
                                <div class="form-row">
                                    <div class="col-md-6 mb-3">
                                        <div class="form-group">
                                            <label>First name</label>
                                            <input
                                                type="text"
                                                class="form-control form-control-modern"
                                                v-model="shipping.firstName"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <div class="form-group">
                                            <label>Last name</label>
                                            <input
                                                type="text"
                                                class="form-control form-control-modern"
                                                v-model="shipping.lastName"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="col-12 mb-3">
                                        <div class="form-group">
                                            <label>Company</label>
                                            <input
                                                type="text"
                                                class="form-control form-control-modern"
                                                v-model="shipping.company"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <div class="form-group">
                                            <label>Address line 1</label>
                                            <input
                                                type="text"
                                                class="form-control form-control-modern"
                                                v-model="
													shipping.streetAddress1
												"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <div class="form-group">
                                            <label>Address line 2</label>
                                            <input
                                                type="text"
                                                class="form-control form-control-modern"
                                                v-model="
													shipping.streetAddress2
												"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <div class="form-group">
                                            <label>City</label>
                                            <input
                                                type="text"
                                                class="form-control form-control-modern"
                                                v-model="shipping.city"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <div class="form-group">
                                            <label>Postcode / Zip</label>
                                            <input
                                                type="text"
                                                class="form-control form-control-modern"
                                                v-model="shipping.zip"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="col-12 mb-3">
                                        <div class="form-group">
                                            <label>Country</label>
                                            <Select2
                                                id="shipping-country-select"
                                                v-model="shipping.country"
                                                :settings="{
													theme: 'bootstrap',
													containerCssClass:
														'form-control-modern',
												}"
                                                :required="true"
                                                :options="countries"
                                            ></Select2>
                                        </div>
                                    </div>
                                    <div class="col-12 mb-3">
                                        <div class="form-group">
                                            <label>State / Province</label>
                                            <Select2
                                                v-if="shippingStates.length"
                                                key="shipping-state-select2"
                                                id="shipping-state-select"
                                                v-model.lazy="shipping.state"
                                                :settings="{
													theme: 'bootstrap',
												}"
                                                :required="true"
                                                :options="shippingStates"
                                            ></Select2>
                                            <input
                                                v-else
                                                key="shipping-state-input"
                                                class="form-control form-control-modern"
                                                type="text"
                                                v-model.lazy="shipping.state"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <h3 class="text-color-dark font-weight-bold text-4 line-height-1 mt-0 mb-3">Order Information</h3>
                                <textarea
                                    rows="10"
                                    class="form-control form-control-modern"
                                    v-model="orderInfo"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col">
                <order-modifiable-items-component
                    :products="products"
                    :emails="emails"
                    @save-items="saveItems"
                ></order-modifiable-items-component>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col">
                <order-notes-component
                    :previous-notes="notes"
                    @add-note="addNote"
                    @delete-note="deleteNote"
                />
            </div>
        </div>
        <div class="row action-buttons mt-4">
            <div class="col-6 col-md-auto">
                <button
                    type="submit"
                    class="submit-button btn btn-primary btn-px-4 py-3 d-flex align-items-center font-weight-semibold line-height-1"
                >
                    <i class="bx bx-save text-4 mr-2"></i> Save Order
                </button>
            </div>
            <div class="col-6 col-md-auto px-md-0">
                <a
                    :href="baseUrl + '/admin/ecommerce/orders'"
                    class="cancel-button btn btn-light btn-px-4 py-3 border font-weight-semibold text-color-dark line-height-1 d-flex h-100 align-items-center"
                >Cancel</a>
            </div>
        </div>
    </form>
</template>
<script>
import Select2 from "v-select2-component";

import OrderNotesComponent from "./OrderNotesComponent";
import OrderModifiableItemsComponent from "./OrderModifiableItemsComponent";

import { COUNTRIES, STATES } from "../../../data/constant";

export default {
    components: {
        Select2,

        OrderNotesComponent,
        OrderModifiableItemsComponent,
    },
    props: {
        author: Object,
        customers: Array,
        products: Array,
        paymentMethods: Array,
    },
    data: function () {
        return {
            // Constants
            baseUrl: window.baseUrl,
            countries: COUNTRIES,
            states: STATES,

            // Datas for child components
            items: [],
            shippingMethod: null,
            coupons: [],
            cartRate: 0,
            notes: [],

            // Order Base Info
            status: "on-hold",
            date: new Date(),
            hours: 0,
            minutes: 0,
            customer: null,
            billing: {
                firstName: "",
                lastName: "",
                company: "",
                country: "",
                streetAddress1: "",
                streetAddress2: "",
                city: "",
                state: "",
                zip: "",
                phone: "",
                email: "",
            },
            shipping: {
                firstName: "",
                lastName: "",
                company: "",
                country: "",
                streetAddress1: "",
                streetAddress2: "",
                city: "",
                state: "",
                zip: "",
            },
            orderInfo: "",
            paymentMethod: null,
        };
    },
    computed: {
        customerList: function () {
            return this.customers.reduce( ( acc, cur ) => {
                return [
                    ...acc,
                    {
                        id: cur.id,
                        text: `${ cur.first_name } ${ cur.last_name }`,
                    },
                ];
            }, [] );
        },
        customerInfo: function () {
            return this.customers.find(
                ( customer ) => customer.id === Number( this.customer )
            );
        },
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
        emails: function () {
            let emails = [];
            if ( this.customer && this.customer.email ) {
                emails.push( this.customer.email );
            }
            if ( this.billing.email ) {
                emails.push( this.billing.email );
            }
            return emails;
        },
    },
    methods: {
        loadBillingAddress: function () {
            if (
                window.confirm(
                    "Load the customer's billing information? This will remove any currently entered billing information."
                )
            ) {
                this.billing = {
                    firstName: this.customerInfo.billing_first_name,
                    lastName: this.customerInfo.billing_last_name,
                    company: this.customerInfo.billing_company,
                    streetAddress1: this.customerInfo.billing_address_1,
                    streetAddress2: this.customerInfo.billing_address_2,
                    city: this.customerInfo.billing_city,
                    state: this.customerInfo.billing_state,
                    zip: this.customerInfo.billing_postcode,
                    country: this.customerInfo.billing_country,
                    email: this.customerInfo.billing_email,
                    phone: this.customerInfo.billing_phone,
                };
            }
        },
        loadShippingAddress: function () {
            if (
                window.confirm(
                    "Load the customer's shipping information? This will remove any currently entered shipping information."
                )
            ) {
                this.shipping = {
                    firstName: this.customerInfo.shipping_first_name,
                    lastName: this.customerInfo.shipping_last_name,
                    company: this.customerInfo.shipping_company,
                    streetAddress1: this.customerInfo.shipping_address_1,
                    streetAddress2: this.customerInfo.shipping_address_2,
                    city: this.customerInfo.shipping_city,
                    state: this.customerInfo.shipping_state,
                    zip: this.customerInfo.shipping_postcode,
                    country: this.customerInfo.shipping_country,
                };
            }
        },
        copyBillingAddress: function () {
            if (
                window.confirm(
                    "Copy billing information to shipping information? This will remove any currently entered shipping information."
                )
            ) {
                this.shipping = this.billing;
            }
        },
        saveItems: function ( { items, coupons, cartRate, shipping } ) {
            this.items = items;
            this.coupons = coupons;
            this.cartRate = cartRate;
            this.shippingMethod = shipping;
        },
        addNote: function ( content, notifyToCustomer ) {
            this.notes.push( {
                author: this.author,
                content: content,
                notify_customer: notifyToCustomer,
            } );
        },
        deleteNote: function ( index ) {
            this.notes.splice( index, 1 );
        },
        saveOrder: async function () {
            if ( this.items.length === 0 ) {
                return window.alert( "Please save items first." );
            }
            await window.axios
                .post( "/admin/ecommerce/orders", {
                    customer_name: `${ this.customerInfo.first_name } ${ this.customerInfo.last_name }`,
                    customer_email: this.customerInfo.email,
                    billing_first_name: this.billing.firstName,
                    billing_last_name: this.billing.lastName,
                    billing_company: this.billing.company,
                    billing_street_1: this.billing.streetAddress1,
                    billing_street_2: this.billing.streetAddress2,
                    billing_city: this.billing.city,
                    billing_state: this.billing.state,
                    billing_postcode: this.billing.zip,
                    billing_country: this.billing.country,
                    billing_phone: this.billing.phone,
                    billing_email: this.billing.email,
                    shipping_first_name: this.shipping.firstName,
                    shipping_last_name: this.shipping.lastName,
                    shipping_company: this.shipping.company,
                    shipping_street_1: this.shipping.streetAddress1,
                    shipping_street_2: this.shipping.streetAddress2,
                    shipping_city: this.shipping.city,
                    shipping_state: this.shipping.state,
                    shipping_postcode: this.shipping.zip,
                    shipping_country: this.shipping.country,
                    shipping_method: this.shippingMethod
                        ? this.shippingMethod.name
                        : "",
                    payment_method: this.paymentMethod,
                    shipping_cost: this.shippingMethod
                        ? this.shippingMethod.cost
                        : 0,
                    shipping_tax: this.shippingMethod
                        ? this.shippingMethod.tax
                        : 0,
                    order_info: this.orderInfo,
                    status: this.status,
                    items: this.items,
                    coupons: this.coupons,
                    cart_rate: this.cartRate,
                    emails: this.emails,
                    notes: this.notes,
                } )
                .then( ( response ) => {
                    window.location.href = `${ this.baseUrl }/admin/ecommerce/orders/${ response.data }/edit`;
                } )
                .catch( ( error ) => {
                    window.alert( JSON.parse( error.response.data.message ) );
                } );
        },
    },
};
</script>