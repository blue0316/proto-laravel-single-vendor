<template>
    <form class="order-details" method="post">
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
                                    v-model="orderStatus"
                                    :disabled="
										roleId == 4 && !canChangeOrderStatus
									"
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
                                        <input
                                            type="text"
                                            class="form-control form-control-modern"
                                            :value="
												date.getFullYear() +
												'-' +
												(date.getMonth() + 1) +
												'-' +
												date.getDate()
											"
                                            readonly
                                        />
                                    </div>
                                    <div class="time">
                                        <span class="px-2">@</span>
                                        <input
                                            type="text"
                                            class="form-control form-control-modern text-center"
                                            :value="date.getHours()"
                                            readonly
                                        />
                                        <span class="px-2">:</span>
                                        <input
                                            type="text"
                                            class="form-control form-control-modern text-center"
                                            :value="date.getMinutes()"
                                            readonly
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col mb-3">
                                <label>Customer</label>
                                <input
                                    type="text"
                                    class="form-control form-control-modern"
                                    :value="order.customer_email"
                                    readonly
                                />
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
                            <div class="col-xl-auto mr-xl-5 pr-xl-5 mb-4 mb-xl-0">
                                <h3
                                    class="text-color-dark font-weight-bold text-4 line-height-1 mt-0 mb-3"
                                >BILLING</h3>
                                <ul class="list list-unstyled list-item-bottom-space-0">
                                    <li>
                                        {{ order.billing_first_name }}
                                        {{ order.billing_last_name }}
                                    </li>
                                    <li>{{ order.billing_company }}</li>
                                    <li>
                                        {{ order.billing_street_1 }}
                                        {{ order.billing_street_2 }}
                                    </li>
                                    <li>{{ order.billing_city }}</li>
                                    <li>{{ order.billing_state }}</li>
                                    <li>{{ order.billing_postcode }}</li>
                                    <li>{{ order.billing_country }}</li>
                                </ul>
                                <strong class="d-block text-color-dark">Email address:</strong>
                                <a :href="'mailto:' + order.billing_email">
                                    {{
                                    order.billing_email
                                    }}
                                </a>
                                <strong class="d-block text-color-dark mt-3">Phone:</strong>
                                <a
                                    :href="'tel:+' + order.billing_phone"
                                    class="text-color-dark"
                                >{{ order.billing_phone }}</a>
                            </div>
                            <div class="col-xl-auto pl-xl-5">
                                <h3
                                    class="font-weight-bold text-color-dark text-4 line-height-1 mt-0 mb-3"
                                >SHIPPING</h3>
                                <ul class="list list-unstyled list-item-bottom-space-0">
                                    <li>
                                        {{ order.shipping_first_name }}
                                        {{ order.shipping_last_name }}
                                    </li>
                                    <li>{{ order.shipping_company }}</li>
                                    <li>
                                        {{ order.shipping_street_1 }}
                                        {{ order.shipping_street_2 }}
                                    </li>
                                    <li>{{ order.shipping_city }}</li>
                                    <li>{{ order.shipping_state }}</li>
                                    <li>{{ order.shipping_postcode }}</li>
                                    <li>{{ order.shipping_country }}</li>
                                </ul>
                            </div>
                            <div class="col-xl-auto pl-xl-5">
                                <h3
                                    class="text-color-dark font-weight-bold text-4 line-height-1 mt-0 mb-3"
                                >Order Information</h3>
                                <p>
                                    {{
                                    order.order_info == '""'
                                    ? "No order information found"
                                    : order.order_info
                                    }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col">
                <order-items-table-component
                    :shipping-method="order.shipping_method"
                    :order="order"
                    :already-refunded="refunded"
                    :new-refund="newRefund"
                    @status-change="statusChanged"
                    v-if="order.order_type !== 'suborder'"
                    key="order"
                />
                <order-sub-items-table-component
                    :shipping-method="order.shipping_method"
                    :order="order"
                    :already-refunded="refunded"
                    :new-refund="newRefund"
                    @status-change="statusChanged"
                    v-else
                    key="suborder"
                />
                <div class="card card-modern" v-if="subOrders.length > 0">
                    <div class="card-header">
                        <h2 class="card-title">Sub Orders</h2>
                        <p>
                            <strong>Note:</strong> This order has products from
                            multiple vendors. Each order will be handled by
                            individual vendor independently.
                        </p>
                    </div>
                    <div class="card-body">
                        <table
                            class="table table-ecommerce-simple table-posts table-striped table-responsive-lg mb-0"
                        >
                            <thead>
                                <tr>
                                    <th>Order</th>
                                    <th>Status</th>
                                    <th>Total</th>
                                    <th>Vendor</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="subOrder in subOrders" :key="subOrder.id">
                                    <td>{{ subOrder.id }}</td>
                                    <td>
                                        <span>{{ subOrder.status }}</span>
                                        <a
                                            href="javascript:;"
                                            class="slide-content d-block d-lg-none"
                                        ></a>
                                    </td>
                                    <td data-column="Total">
                                        <span
                                            class="order-old-price"
                                            v-html="formatPrice(subOrder.order_total_price)"
                                            v-if="subOrder.order_refunded_price < 0"
                                        ></span>
                                        <span
                                            v-html="
												formatPrice(
													subOrder.order_total_price * 1.0 + subOrder.order_refunded_price * 1.0
												)
											"
                                            class="order-new-price"
                                        ></span>
                                        for
                                        {{ subOrder.order_total_qty }} items(s)
                                    </td>
                                    <td data-column="Vendor">
                                        <span v-if="subOrder.author.role_id == 7">
                                            {{ subOrder.author.first_name }}
                                            &nbsp;
                                            {{ subOrder.author.last_name }}
                                        </span>
                                        <a
                                            :href="
												baseUrl +
												'/admin/ecommerce/vendor-setting/' +
												subOrder.author.id
											"
                                            v-else-if="
												subOrder.author.first_name ||
												subOrder.author.last_name
											"
                                            key="has-name"
                                        >
                                            {{ subOrder.author.first_name }}
                                            &nbsp;
                                            {{ subOrder.author.last_name }}
                                        </a>
                                        <a
                                            :href="
												baseUrl +
												'/admin/ecommerce/vendor-setting/' +
												subOrder.author.id
											"
                                            v-else
                                            key="no-name"
                                        >undefined</a>
                                    </td>
                                    <td data-column="Action">
                                        <a
                                            :href="
												baseUrl +
												'/admin/ecommerce/orders/' +
												subOrder.id +
												'/edit'
											"
                                            class="btn btn-primary"
                                        >View</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
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
                    @click.prevent="changeStatus"
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
            <div class="col-6 col-md-auto ml-md-auto mt-3 mt-md-0" v-if="roleId != 4">
                <a
                    href="#"
                    @click.prevent="deleteOrder"
                    class="delete-button btn btn-danger btn-px-4 py-3 d-flex align-items-center font-weight-semibold line-height-1"
                >
                    <i class="bx bx-trash text-4 mr-2"></i> Delete Order
                </a>
            </div>
        </div>
    </form>
</template>
<script>
import DeleteConfirmModalComponent from "../../shared/DeleteConfirmModalComponent";
import OrderNotesComponent from "./OrderNotesComponent";
import OrderItemsTableComponent from "./OrderItemsTableComponent";
import OrderSubItemsTableComponent from "./OrderSubItemsTableComponent";

import { CURRENCY_SYMBOLS } from "../../../data/constant";

export default {
    components: {
        OrderItemsTableComponent,
        OrderSubItemsTableComponent,
        OrderNotesComponent,
        DeleteConfirmModalComponent,
    },
    props: {
        order: Object,
        refunded: Array,
        subOrders: {
            type: Array,
            default: function () {
                return [];
            },
        },
        roleId: Number,
    },
    data: function () {
        return {
            baseUrl: window.baseUrl,

            date: null,
            orderStatus: this.order.status,
            notes: [],
            canChangeOrderStatus: 0,
            newRefund: null,
        };
    },
    created: function () {
        this.date = new Date(this.order.created_at);
        this.orderStatus = this.order.status;
        this.notes = [...this.order.notes];
        this.canChangeOrderStatus = parseInt(
            window.settings.vendor_allow_order_status
        );
    },
    methods: {
        changeStatus: async function () {
            this.$vToastify.setSettings({
                withBackdrop: true,
                position: "center-center",
            });
            this.$vToastify.loader("Please wait...");
            if (
                this.order.order_type == "suborder" &&
                (this.order.status == "refunded" ||
                    this.orderStatus == "refunded")
            ) {
                this.$vToastify.stopLoader();
                this.$vToastify.setSettings({
                    withBackdrop: false,
                    position: "top-right",
                    singular: true,
                    errorDuration: 2000,
                });
                this.$vToastify.error("Order status could not be changed.");
                return;
            }

            await window.axios
                .put(`/admin/ecommerce/orders/${this.order.id}`, {
                    status: this.orderStatus,
                })
                .then((response) => {
                    window.location.reload();
                })
                .catch((error) => {
                    this.$vToastify.stopLoader();
                    this.$vToastify.setSettings({
                        withBackdrop: false,
                        position: "top-right",
                        singular: true,
                    });
                    this.$vToastify.error(error);
                });
        },

        addNote: async function (content, notifyToCustomer) {
            this.$vToastify.setSettings({
                withBackdrop: true,
                position: "center-center",
            });
            this.$vToastify.loader("Please wait...");
            await window.axios
                .post("/admin/ecommerce/orders/notes", {
                    order_id: this.order.id,
                    content: content,
                    notify_customer: notifyToCustomer,
                })
                .then((response) => {
                    this.notes.push(response.data);
                    this.$vToastify.stopLoader();
                })
                .catch((error) => {
                    this.$vToastify.stopLoader();
                    this.$vToastify.setSettings({
                        withBackdrop: false,
                        position: "top-right",
                        singular: true,
                    });
                    this.$vToastify.error(error.response.data.message);
                });
        },

        deleteNote: async function (index) {
            if (!window.confirm("Are you sure you wish to delete this note?"))
                return;
            this.$vToastify.setSettings({
                withBackdrop: true,
                position: "center-center",
            });
            this.$vToastify.loader("Please wait...");
            await window.axios
                .delete(`/admin/ecommerce/orders/notes/${this.notes[index].id}`)
                .then(() => {
                    this.notes.splice(index, 1);
                    this.$vToastify.stopLoader();
                })
                .catch((error) => {
                    this.$vToastify.stopLoader();
                    this.$vToastify.setSettings({
                        withBackdrop: false,
                        position: "top-right",
                        singular: true,
                    });
                    this.$vToastify.error(error);
                });
        },

        deleteOrder: function () {
            this.$modal.show(
                DeleteConfirmModalComponent,
                {},
                {
                    height: "auto",
                    adaptive: true,
                },
                {
                    "before-close": (event) => {
                        if (event.params) {
                            this.requestDeleteOrder();
                        }
                    },
                }
            );
        },

        requestDeleteOrder: async function () {
            await window.axios.delete(
                `/admin/ecommerce/orders/${this.order.id}`
            );
            window.location = window.baseUrl + "/admin/ecommerce/orders";
        },

        formatPrice: function (value) {
            value = value * 1.0;
            let sign = "";
            if (value < 0) {
                sign = "-";
                value = -value;
            }
            let numOfDecimal = parseInt(window.settings.number_of_decimal);
            let decimal = value.toFixed(numOfDecimal).slice(-numOfDecimal);
            let integerString = parseInt(value).toString();
            let length = integerString.length;
            let resultString = "";
            for (let i = 0; i < length; i++) {
                resultString += integerString[i];
                if ((length - i) % 3 === 1 && i !== length - 1) {
                    resultString += window.settings.thousand_separator;
                }
            }
            resultString += window.settings.decimal_separator + decimal;
            if (window.settings.currency_position === "left") {
                resultString =
                    CURRENCY_SYMBOLS[window.settings.currency] + resultString;
            } else {
                resultString += CURRENCY_SYMBOLS[window.settings.currency];
            }
            return sign + resultString;
        },
        statusChanged: function (newStatus) {
            this.orderStatus = newStatus;
        },
    },
};
</script>