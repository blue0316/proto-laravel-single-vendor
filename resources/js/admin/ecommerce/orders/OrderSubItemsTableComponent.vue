<template>
    <div class="card card-modern">
        <div class="card-header">
            <h2 class="card-title">Products</h2>
            <div class="card-actions" v-if="order.parent == 0">
                <button
                    v-show="!toggleRefund"
                    type="button"
                    class="btn btn-primary"
                    @click="toggleRefund = true"
                >Refund</button>
                <button
                    v-show="toggleRefund"
                    type="button"
                    class="btn btn-primary"
                    @click="requestRefund"
                    v-html="'Refund ' + formatPrice(refundPrice) + ' manually'"
                ></button>
                <button
                    v-show="toggleRefund"
                    type="button"
                    class="btn btn-light border"
                    @click="cancelRefund"
                >Cancel</button>
            </div>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <datatable
                    :columns="columns"
                    :data="tableData"
                    class="table table-ecommerce-simple table-ecommerce-simple-border-bottom table-striped table-no-collapse mb-2"
                >
                    <template slot-scope="{ row }">
                        <tr>
                            <td class="pl-4 align-middle" width="60">{{ row.id }}</td>
                            <td width="50%">{{ row.name }}</td>
                            <td class="text-right" v-html="formatPrice(row.cost)"></td>
                            <td width="10%" class="text-right">
                                {{ row.qty }}
                                <div
                                    class="text-color-danger text-1"
                                    v-if="
										refundedQtyPerItem(row.product_id) < 0
									"
                                >
                                    <i class="fa fa-reply mr-2"></i>
                                    {{ refundedQtyPerItem(row.product_id) }}
                                </div>
                                <input
                                    class="form-control form-control-modern ml-auto"
                                    v-show="toggleRefund"
                                    type="number"
                                    @change="
										refundQtyChange(row.product_id, $event)
									"
                                    :value="
										refundItems[idToIndex(row.product_id)]
											.qty
									"
                                    min="0"
                                    :max="
										row.qty +
										refundedQtyPerItem(row.product_id)
									"
                                />
                            </td>
                            <td class="text-right" width="10%">
                                <span v-html="formatPrice(row.net_revenue)"></span>
                                <div
                                    class="discount-price text-color-grey"
                                    v-if="row.coupon_amount > 0"
                                    v-html="
										formatPrice(row.coupon_amount) +
										' discount'
									"
                                ></div>
                                <div
                                    class="text-color-danger text-1"
                                    v-if="
										refundedPricePerItem(row.product_id) < 0
									"
                                >
                                    <i class="fa fa-reply mr-2"></i>
                                    <span
                                        v-html="
											formatPrice(
												refundedPricePerItem(
													row.product_id
												)
											)
										"
                                    ></span>
                                </div>
                                <input
                                    class="form-control form-control-modern ml-auto"
                                    v-show="toggleRefund"
                                    type="text"
                                    v-model.number="
										refundItems[idToIndex(row.product_id)]
											.net_revenue
									"
                                />
                            </td>
                            <td class="text-right" width="10%" v-if="enableTax">
                                <span v-html="formatPrice(row.tax_amount)"></span>
                                <div
                                    class="text-color-danger text-1"
                                    v-if="
										refundedTaxPerItem(row.product_id) < 0
									"
                                >
                                    <i class="fa fa-reply mr-2"></i>
                                    <span
                                        v-html="
											formatPrice(
												refundedTaxPerItem(
													row.product_id
												)
											)
										"
                                    ></span>
                                </div>
                                <input
                                    class="form-control form-control-modern ml-auto"
                                    v-show="toggleRefund"
                                    type="text"
                                    v-model.number="
										refundItems[idToIndex(row.product_id)]
											.tax_amount
									"
                                />
                            </td>
                            <td class="actions" width="100"></td>
                        </tr>
                    </template>
                </datatable>

                <datatable
                    :columns="[]"
                    :data="refunded"
                    class="table table-ecommerce-simple table-ecommerce-simple-border-bottom table-striped table-no-collapse mb-0"
                    v-if="refunded.length"
                >
                    <template slot-scope="{ row, index }">
                        <tr>
                            <td width="60" class="pl-4">
                                <i class="fa fa-retweet"></i>
                            </td>
                            <td width="50%">
                                Refund {{ row.created_at }} by
                                <strong>
                                    {{
                                    row.author.first_name +
                                    " " +
                                    row.author.last_name
                                    }}
                                </strong>
                            </td>
                            <td colspan="2"></td>
                            <td
                                class="text-right"
                                width="10%"
                                v-html="formatPrice(row.order_total_price)"
                            ></td>
                            <td width="10%" v-if="enableTax"></td>
                            <td class="actions" width="100"></td>
                        </tr>
                    </template>
                </datatable>
            </div>

            <div class="coupons px-2" v-if="order.coupons.length > 0">
                <h3 class="font-weight-bold text-color-dark text-2 mt-2 mb-1">Used Coupons</h3>
                <div class="row">
                    <div
                        class="col-auto mr-5"
                        v-for="(coupon, index) in order.coupons"
                        :key="index"
                    >
                        <a
                            href="#"
                            class="btn btn-light border"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            :title="coupon.coupon_amount + ' discounted'"
                        >{{ coupon.coupon_code }}</a>
                    </div>
                </div>
            </div>

            <div class="row justify-content-end flex-column flex-lg-row my-3">
                <div class="col-auto mr-5">
                    <h3 class="font-weight-bold text-color-dark text-4 mb-3">Items Subtotal</h3>
                    <span class="d-flex align-items-center">
                        {{ totalQty }} items
                        <i class="fas fa-chevron-right text-color-primary px-3"></i>
                        <b class="text-color-dark text-xxs" v-html="formatPrice(subtotal)"></b>
                    </span>
                </div>
                <div
                    class="col-auto mr-5"
                    v-if="
						order.coupons.length || order.order_type == 'suborder'
					"
                >
                    <h3 class="font-weight-bold text-color-dark text-4 mb-3">Coupon(s)</h3>
                    <span class="d-flex align-items-center">
                        coupons
                        <i class="fas fa-chevron-right text-color-primary px-3"></i>
                        <b class="text-color-dark text-xxs" v-html="formatPrice(couponAmount)"></b>
                    </span>
                </div>
                <div class="col-auto mr-5" v-if="shippingMethod">
                    <h3 class="font-weight-bold text-color-dark text-4 mb-3">Shipping</h3>
                    <span class="d-flex align-items-center">
                        {{ shippingMethod }}
                        <i class="fas fa-chevron-right text-color-primary px-3"></i>
                        <b
                            class="text-color-dark text-xxs"
                            v-html="formatPrice(order.shipping_cost)"
                        ></b>
                    </span>
                </div>
                <div class="col-auto mr-5" v-if="enableTax">
                    <h3 class="font-weight-bold text-color-dark text-4 mb-3">Tax</h3>
                    <span class="d-flex align-items-center">
                        Tax Amount
                        <i class="fas fa-chevron-right text-color-primary px-3"></i>
                        <b class="text-color-dark text-xxs" v-html="formatPrice(totalTax)"></b>
                    </span>
                </div>
                <div class="col-auto mr-5" v-if="refunded.length">
                    <h3 class="font-weight-bold text-color-dark text-4 mb-3">Refunded</h3>
                    <span class="d-flex align-items-center">
                        {{ refunded.length }} times
                        <i
                            class="fas fa-chevron-right text-color-primary px-3"
                        ></i>
                        <b class="text-color-dark text-xxs" v-html="formatPrice(refundedPrice)"></b>
                    </span>
                </div>
                <div class="col-auto">
                    <h3 class="font-weight-bold text-color-dark text-4 mb-3">Order Total</h3>
                    <span class="d-flex align-items-center justify-content-lg-end">
                        <strong class="text-color-dark text-5" v-html="formatPrice(totalPrice)"></strong>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { CURRENCY_SYMBOLS } from "../../../data/constant";

function RefundItem(
    order_id,
    product_id,
    name,
    qty,
    net_revenue,
    tax_amount,
    parent_id
) {
    this.order_id = order_id;
    this.product_id = product_id;
    this.name = name;
    this.qty = qty;
    this.net_revenue = net_revenue;
    this.tax_amount = tax_amount;
    this.parent_id = parent_id;
}

export default {
    props: {
        shippingMethod: String,
        order: Object,
        alreadyRefunded: Array,
        newRefund: Object,
    },
    data() {
        return {
            enableTax: window.settings.enable_tax === "1",
            refunded: [],
            refundItems: [],
            refundShippingCost: 0,
            refundShippingTax: 0,
            toggleRefund: false,
        };
    },
    computed: {
        columns: function () {
            let columns = [
                { label: "ID", field: "id", headerAlign: "left" },
                { label: "Name", field: "name", headerAlign: "left" },
                { label: "Cost", field: "cost", headerAlign: "right" },
                { label: "Qty", field: "qty", headerAlign: "right" },
                { label: "Total", field: "net_revenue", headerAlign: "right" },
            ];
            if (this.enableTax) {
                columns.push({
                    label: "Tax",
                    field: "tax_amount",
                    headerAlign: "right",
                });
            }
            columns.push({ label: "" });
            return columns;
        },

        tableData: function () {
            return this.order.items.reduce((acc, cur) => {
                return [
                    ...acc,
                    {
                        id: cur.id,
                        name: cur.name,
                        cost:
                            ((cur.net_revenue * 1.0 + cur.coupon_amount * 1.0) /
                                cur.qty) *
                            1.0,
                        qty: cur.qty,
                        product_id: cur.product_id,
                        net_revenue: cur.net_revenue,
                        coupon_amount: cur.coupon_amount,
                        tax_amount: cur.tax_amount,
                    },
                ];
            }, []);
        },

        subtotal: function () {
            return this.order.items.reduce((acc, cur) => {
                return (acc += cur.net_revenue * 1.0 + cur.coupon_amount * 1.0);
            }, 0);
        },

        couponAmount: function () {
            return (
                this.order.order_total_price * 1.0 -
                this.subtotal -
                this.order.order_tax * 1.0
            ).toFixed(2);
        },

        couponTax: function () {
            return this.order.coupons.reduce((acc, cur) => {
                acc -= cur.coupon_tax_amount * 1.0;
                return acc;
            }, 0);
        },

        totalTax: function () {
            return this.order.order_tax * 1.0;
        },

        totalQty: function () {
            return this.order.items.reduce((acc, cur) => {
                return acc + cur.qty * 1.0;
            }, 0);
        },

        totalPrice: function () {
            return (
                this.subtotal +
                this.couponAmount * 1.0 +
                this.order.shipping_cost * 1.0 +
                this.totalTax +
                this.refundedPrice
            );
        },

        refundPrice: function () {
            return (
                this.refundItems.reduce((acc, cur) => {
                    return (acc +=
                        cur.net_revenue * 1.0 + cur.tax_amount * 1.0);
                }, 0) +
                this.refundShippingCost +
                this.refundShippingTax
            );
        },

        refundedPrice: function () {
            return this.refunded.reduce((acc, cur) => {
                return (acc += cur.order_total_price * 1.0);
            }, 0);
        },

        refundedShippingCost: function () {
            return this.refunded.reduce((acc, cur) => {
                return (acc += cur.shipping_cost * 1.0);
            }, 0);
        },

        refundedShippingTax: function () {
            return this.refunded.reduce((acc, cur) => {
                return (acc += cur.shipping_tax * 1.0);
            }, 0);
        },
    },
    watch: {
        newRefund: function () {
            this.refunded.push(this.newRefund);
        },
    },
    created: function () {
        this.refunded = this.alreadyRefunded.reduce((acc, cur) => {
            if (cur.items.length == 0) return acc;
            else {
                return [
                    ...acc,
                    {
                        ...cur,
                        order_total_price: cur.items.reduce((acc1, cur1) => {
                            return acc1 + cur1.gross_revenue * 1.0;
                        }, 0),
                    },
                ];
            }
        }, []);
        this.refundItemsInit();
    },
    methods: {
        itemCost: function (item) {
            return (
                (item.net_revenue * 1.0 + item.coupon_amount * 1.0) / item.qty
            );
        },

        refundItemsInit: function () {
            this.refundItems = this.order.items.reduce((acc, cur) => {
                acc.push(
                    new RefundItem(
                        this.order.id,
                        cur.product_id,
                        cur.name,
                        0,
                        0,
                        0,
                        cur.parent_id
                    )
                );
                return acc;
            }, []);
            this.refundShippingCost = 0;
            this.refundShippingTax = 0;
        },

        refundQtyChange: function (id, event) {
            let qty = parseInt(event.target.value);
            let orderItem = this.order.items.find(
                (item) => item.product_id === id
            );
            let proportion = qty / orderItem.qty;
            this.refundItems = this.refundItems.map((item) => {
                if (item.product_id === id) {
                    item.qty = qty;
                    item.net_revenue = orderItem.net_revenue * proportion;
                    item.tax_amount = orderItem.tax_amount * proportion;
                }
                return item;
            });
        },

        cancelRefund: function () {
            this.toggleRefund = false;
            this.refundItemsInit();
        },

        requestRefund: async function () {
            let filteredRefundItems = this.refundItems.reduce((acc, item) => {
                if (
                    item.qty > 0 ||
                    item.net_revenue > 0 ||
                    item.tax_amount > 0
                ) {
                    return [
                        ...acc,
                        {
                            ...item,
                            qty: -item.qty,
                            net_revenue: -item.net_revenue,
                            tax_amount: -item.tax_amount,
                            gross_revenue: -(
                                item.net_revenue + item.tax_amount
                            ),
                        },
                    ];
                }
                return acc;
            }, []);
            if (
                window.confirm("Are you sure you wish to process this refund?")
            ) {
                this.$vToastify.setSettings({
                    withBackdrop: true,
                    position: "center-center",
                });
                this.$vToastify.loader("Please wait...");
                await window.axios
                    .post(`/admin/ecommerce/orders/refund`, {
                        order_id: this.order.id,
                        items: filteredRefundItems,
                        shipping_cost: -this.refundShippingCost,
                        shipping_tax: -this.refundShippingTax,
                    })
                    .then((response) => {
                        this.refunded.push(response.data.refund);
                        response.data.status &&
                            this.$emit("status-change", "refunded");
                        this.toggleRefund = false;
                        this.$vToastify.stopLoader();
                        this.refundItemsInit();
                    })
                    .catch((error) => {
                        this.$vToastify.stopLoader();
                        this.$vToastify.setSettings({
                            withBackdrop: false,
                            position: "top-right",
                            singular: true,
                        });
                        this.$vToastify.error(error.response.data.message);
                        this.toggleRefund = false;
                    });
            }
        },

        removeRefund: async function (index) {
            this.$vToastify.setSettings({
                withBackdrop: true,
                position: "center-center",
            });
            this.$vToastify.loader("Please wait...");

            await window.axios
                .delete(
                    `/admin/ecommerce/orders/refund/${this.refunded[index].id}`
                )
                .then(() => {
                    this.refunded.splice(index, 1);
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

        refundedQtyPerItem: function (id) {
            return this.refunded.reduce((acc, cur) => {
                let tempItem = cur.items.find((item) => item.product_id === id);
                if (tempItem) {
                    acc += parseInt(tempItem.qty);
                }
                return acc;
            }, 0);
        },

        refundedPricePerItem: function (id) {
            return this.refunded.reduce((acc, cur) => {
                let tempItem = cur.items.find((item) => item.product_id === id);
                if (tempItem) {
                    acc += tempItem.net_revenue * 1.0;
                }
                return acc;
            }, 0);
        },

        refundedTaxPerItem: function (id) {
            return this.refunded.reduce((acc, cur) => {
                let tempItem = cur.items.find((item) => item.product_id === id);
                if (tempItem) {
                    acc += tempItem.tax_amount * 1.0;
                }
                return acc;
            }, 0);
        },

        refundedExistsForItem: function (id) {
            let flag = false;
            this.refunded.forEach((refund) => {
                if (refund.items.find((item) => item.product_id === id))
                    flag = flag | true;
            });
            return flag;
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

        idToIndex: function (id) {
            return this.refundItems.findIndex((item) => item.product_id === id);
        },
    },
};
</script>