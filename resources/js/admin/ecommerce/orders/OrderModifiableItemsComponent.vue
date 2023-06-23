<template>
    <div class="card card-modern">
        <div class="card-header">
            <h2 class="card-title">Products</h2>
            <div class="card-actions">
                <button
                    type="button"
                    class="btn btn-primary"
                    @click="setCartRate"
                    data-toggle="tooltip"
                    title
                    data-original-title="Set the tax rate for cart discount coupon"
                >Set Cart Tax Rate</button>
                <button
                    type="button"
                    class="btn btn-primary"
                    @click="showAddProductModal"
                >Add products</button>
                <button
                    type="button"
                    class="btn btn-primary"
                    @click="addCoupon"
                    :disabled="!items.length"
                >Add Coupon</button>
                <button
                    type="button"
                    class="btn btn-primary"
                    :disabled="shipping"
                    @click="addShipping"
                >Add Shipping</button>
                <button
                    type="button"
                    class="btn btn-primary"
                    @click="getCouponAppliedItems()"
                    :disabled="coupons.length === 0"
                >Recalculate</button>
                <button
                    type="button"
                    class="btn btn-primary"
                    @click="saveItems"
                    :disabled="items.length === 0"
                >Save</button>
            </div>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <datatable
                    :columns="columns"
                    :data="tableItems"
                    class="table table-ecommerce-simple table-ecommerce-simple-border-bottom table-striped table-no-collapse mb-2"
                >
                    <template slot-scope="{ row, index }">
                        <tr>
                            <td
                                class="pl-4 align-middle"
                                width="60"
                            >{{ row.id }}</td>
                            <td width="50%">{{ row.name }}</td>
                            <td
                                class="text-right"
                                v-html="formatPrice(row.price)"
                            ></td>
                            <td
                                width="10%"
                                class="text-right"
                            >
                                <span v-if="!row.editable">{{ row.qty }}</span>
                                <input
                                    type="number"
                                    class="form-control form-control-modern"
                                    v-else
                                    v-model.number="items[index].qty"
                                />
                            </td>
                            <td
                                class="text-right"
                                width="10%"
                            >
                                <span v-html="formatPrice(row.total)"></span>
                                <div
                                    class="discount-price text-color-grey"
                                    v-if="row.discount"
                                    v-html="
										formatPrice(row.discount) + ' discount'
									"
                                ></div>
                            </td>
                            <td
                                class="text-right"
                                width="10%"
                                v-if="enableTax"
                            >
                                <span v-html="formatPrice(row.tax)"></span>
                                <input
                                    type="text"
                                    v-if="row.editable"
                                    v-model.number="items[index].tax_rate"
                                    placeholder="Tax Rate(%)"
                                    class="form-control form-control-modern"
                                />
                            </td>
                            <td
                                class="actions text-right"
                                width="100"
                            >
                                <a
                                    href="javascript:;"
                                    @click="
										items[index].editable = !items[index]
											.editable
									"
                                >
                                    <i
                                        class="fas"
                                        :class="{
											'fa-pencil-alt': !row.editable,
											'fa-times': row.editable,
										}"
                                    ></i>
                                </a>
                                <a
                                    href="javascript:;"
                                    @click="removeProduct(index)"
                                >
                                    <i class="fas fa-trash-alt"></i>
                                </a>
                            </td>
                        </tr>
                    </template>
                    <template v-slot:no-result>There are no items</template>
                </datatable>

                <table
                    v-if="shipping"
                    class="table table-ecommerce-simple table-ecommerce-simple-border-bottom table-striped table-no-collapse mb-2"
                >
                    <tbody>
                        <tr>
                            <td
                                width="60"
                                class="pl-4"
                            >
                                <i class="fa fa-truck"></i>
                            </td>
                            <td width="50%">
                                <span v-if="!editShipping">{{ shipping.name }}</span>
                                <input
                                    v-else
                                    type="text"
                                    class="form-control form-control-modern"
                                    v-model="shipping.name"
                                />
                            </td>
                            <td colspan="2"></td>
                            <td
                                width="10%"
                                class="text-right"
                            >
                                <span
                                    v-if="!editShipping"
                                    v-html="formatPrice(shipping.cost)"
                                ></span>
                                <input
                                    v-else
                                    type="text"
                                    class="form-control form-control-modern"
                                    v-model.number="shipping.cost"
                                />
                            </td>
                            <td
                                width="10%"
                                class="text-right"
                                v-if="enableTax"
                            >
                                <span
                                    v-if="!editShipping"
                                    v-html="formatPrice(shipping.tax)"
                                ></span>
                                <input
                                    v-else
                                    type="text"
                                    class="form-control form-control-modern"
                                    v-model.number="shipping.tax"
                                />
                            </td>
                            <td
                                class="actions text-right"
                                width="100"
                            >
                                <a
                                    href="javascript:;"
                                    @click="editShipping = !editShipping"
                                >
                                    <i
                                        class="fas"
                                        :class="{
											'fa-pencil-alt': !editShipping,
											'fa-times': editShipping,
										}"
                                    ></i>
                                </a>
                                <a
                                    href="javascript:;"
                                    @click="removeShipping"
                                >
                                    <i class="fas fa-trash-alt"></i>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div
                class="coupons px-2"
                v-if="coupons.length > 0"
            >
                <h3 class="font-weight-bold text-color-dark text-2 mt-2 mb-1">Used Coupons</h3>
                <div class="row">
                    <div
                        class="col-auto"
                        v-for="(coupon, index) in coupons"
                        :key="'coupon' + index"
                    >
                        <a
                            href="javascript:;"
                            class="btn btn-light border"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            :title="coupon.amount + ' discounted'"
                        >
                            {{ coupon.code }}
                            <i
                                class="fa fa-times ml-3"
                                @click.prevent="removeCoupon(index)"
                            ></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="row justify-content-end flex-column flex-lg-row my-3">
                <div class="col-auto mr-5">
                    <h3 class="font-weight-bold text-color-dark text-4 mb-3">Items Subtotal</h3>
                    <span class="d-flex align-items-center">
                        {{ totalQty }} items
                        <i class="fas fa-chevron-right text-color-primary px-3"></i>
                        <b
                            class="text-color-dark text-xxs"
                            v-html="formatPrice(subtotal)"
                        ></b>
                    </span>
                </div>
                <div
                    class="col-auto mr-5"
                    v-if="coupons.length"
                >
                    <h3 class="font-weight-bold text-color-dark text-4 mb-3">Coupon(s)</h3>
                    <span class="d-flex align-items-center">
                        {{ coupons.length }} coupons
                        <i class="fas fa-chevron-right text-color-primary px-3"></i>
                        <b
                            class="text-color-dark text-xxs"
                            v-html="formatPrice(couponAmount)"
                        ></b>
                    </span>
                </div>
                <div
                    class="col-auto mr-5"
                    v-if="shipping"
                >
                    <h3 class="font-weight-bold text-color-dark text-4 mb-3">Shipping</h3>
                    <span class="d-flex align-items-center">
                        {{ shipping.name ? shipping.name : "undefinded" }}
                        <i class="fas fa-chevron-right text-color-primary px-3"></i>
                        <b
                            class="text-color-dark text-xxs"
                            v-html="formatPrice(shipping.cost)"
                        ></b>
                    </span>
                </div>
                <div
                    class="col-auto mr-5"
                    v-if="enableTax"
                >
                    <h3 class="font-weight-bold text-color-dark text-4 mb-3">Tax</h3>
                    <span class="d-flex align-items-center">
                        Tax Amount
                        <i class="fas fa-chevron-right text-color-primary px-3"></i>
                        <b
                            class="text-color-dark text-xxs"
                            v-html="formatPrice(totalTax)"
                        ></b>
                    </span>
                </div>
                <div class="col-auto">
                    <h3 class="font-weight-bold text-color-dark text-4 mb-3">Order Total</h3>
                    <span class="d-flex align-items-center justify-content-lg-end">
                        <strong
                            class="text-color-dark text-5"
                            v-html="formatPrice(totalPrice)"
                        ></strong>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AddProductModalComponent from "./AddProductModalComponent";

import { CURRENCY_SYMBOLS } from "../../../data/constant";

export default {
    components: {
        AddProductModalComponent,
    },
    props: {
        products: Array,
        emails: Array,
    },
    data () {
        return {
            items: [],
            coupons: [],
            shipping: null,
            enableTax: window.settings.enable_tax === "1",
            editShipping: false,
            cartRate: 0,
        };
    },
    computed: {
        columns: function () {
            let columns = [
                { label: "ID", field: "id", headerAlign: "left" },
                { label: "Name", field: "name", headerAlign: "left" },
                { label: "Cost", field: "price", headerAlign: "right" },
                { label: "Qty", field: "qty", headerAlign: "right" },
                { label: "Total", field: "total", headerAlign: "right" },
            ];
            if ( this.enableTax ) {
                columns.push( {
                    label: "Tax",
                    field: "tax",
                    headerAlign: "right",
                } );
            }
            columns.push( { label: "" } );
            return columns;
        },

        tableItems: function () {
            return this.items.map( ( item ) => {
                return {
                    id: item.id,
                    name: item.name,
                    qty: item.qty,
                    price: item.price,
                    total: item.qty * item.price - item.coupon_amount,
                    discount: item.coupon_amount,
                    tax:
                        ( ( item.qty * item.price - item.coupon_amount ) *
                            item.tax_rate ) /
                        100,
                    editable: item.editable,
                };
            } );
        },

        subtotal: function () {
            return this.items.reduce( ( acc, cur ) => {
                return acc + cur.price * cur.qty;
            }, 0 );
        },

        couponCodes: function () {
            return this.coupons.reduce( ( acc, cur ) => {
                return [ ...acc, cur.code ];
            }, [] );
        },

        couponAmount: function () {
            return this.coupons.reduce( ( acc, cur ) => {
                return acc - cur.amount * 1.0;
            }, 0 );
        },

        totalTax: function () {
            return (
                this.tableItems.reduce( ( acc, cur ) => {
                    return acc + cur.tax;
                }, 0 ) + ( this.shipping ? this.shipping.tax : 0 )
            );
        },

        totalQty: function () {
            return this.items.reduce( ( acc, cur ) => {
                return acc + cur.qty;
            }, 0 );
        },

        totalPrice: function () {
            return (
                this.subtotal +
                this.couponAmount +
                ( this.shipping ? this.shipping.cost : 0 ) +
                this.totalTax
            );
        },

        productsForOption: function () {
            return this.products.map( ( product ) => {
                return {
                    id: product.id,
                    text: product.name,
                    price: product.min_max_price[ 0 ],
                };
            } );
        },

        itemsIdQtyTax: function () {
            return this.items.reduce( ( acc, cur ) => {
                return [
                    ...acc,
                    {
                        id: Number( cur.id ),
                        qty: cur.qty,
                        tax_rate: cur.tax_rate,
                    },
                ];
            }, [] );
        },

        taxRatesForModal: function () {
            return this.taxRates.map( ( rate ) => {
                return {
                    id: rate.id,
                    name: rate.name,
                    class: rate.tax_type.name,
                    code: [ rate.country, rate.state ].join( "-" ),
                    rate: rate.rate,
                };
            } );
        },
    },
    methods: {
        formatPrice: function ( value ) {
            value = value * 1.0;
            let sign = "";
            if ( value < 0 ) {
                sign = "-";
                value = -value;
            }
            let numOfDecimal = parseInt( window.settings.number_of_decimal );
            let decimal = value.toFixed( numOfDecimal ).slice( -numOfDecimal );
            let integerString = parseInt( value ).toString();
            let length = integerString.length;
            let resultString = "";
            for ( let i = 0; i < length; i++ ) {
                resultString += integerString[ i ];
                if ( ( length - i ) % 3 === 1 && i !== length - 1 ) {
                    resultString += window.settings.thousand_separator;
                }
            }
            resultString += window.settings.decimal_separator + decimal;
            if ( window.settings.currency_position === "left" ) {
                resultString =
                    CURRENCY_SYMBOLS[ window.settings.currency ] + resultString;
            } else {
                resultString += CURRENCY_SYMBOLS[ window.settings.currency ];
            }
            return sign + resultString;
        },
        showAddProductModal: function () {
            this.$modal.show(
                AddProductModalComponent,
                { products: this.productsForOption },
                {
                    height: "auto",
                    adaptive: true,
                },
                {
                    "before-close": ( event ) => {
                        if ( event.params ) {
                            this.addProducts( event.params );
                        }
                    },
                }
            );
        },
        addProducts: function ( newProducts ) {
            newProducts.forEach( ( product ) => {
                if ( this.items.find( ( item ) => item.id === product.id ) ) {
                    this.items = this.items.reduce( ( acc, cur ) => {
                        if ( cur.id === product.id ) {
                            cur.qty += product.qty;
                        }
                        return [ ...acc, cur ];
                    }, [] );
                } else {
                    this.items.push( {
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        qty: product.qty,
                        coupon_amount: 0,
                        tax_rate: 0,
                        editable: false,
                    } );
                }
            } );
        },
        removeProduct: function ( index ) {
            this.items.splice( index, 1 );
        },
        addCoupon: function () {
            let newCoupon = window.prompt( "Please enter coupon code." );
            if ( newCoupon ) {
                if ( this.coupons.find( ( coupon ) => coupon.code === newCoupon ) ) {
                    return window.alert(
                        "This coupon has already been applied."
                    );
                }
                this.getCouponAppliedItems( newCoupon );
            }
        },
        removeCoupon: function ( index ) {
            this.coupons.splice( index, 1 );

            this.getCouponAppliedItems();
        },
        addShipping: function () {
            this.shipping = {
                name: "",
                cost: 0,
                tax: 0,
            };
        },
        removeShipping: function () {
            this.shipping = null;
        },
        setCartRate: function () {
            this.cartRate = Number(
                window.prompt( "Set the cart's Tax Rate", this.cartRate )
            );
        },
        getCouponAppliedItems: async function ( newCoupon = null ) {
            this.$vToastify.setSettings( {
                withBackdrop: true,
                position: "center-center",
            } );
            this.$vToastify.loader( "Please wait..." );
            await window.axios
                .post( "/admin/ecommerce/orders/apply-coupons", {
                    items: this.itemsIdQtyTax,
                    coupons: this.couponCodes,
                    new_coupon: newCoupon,
                    emails: this.emails,
                    cart_rate: this.cartRate,
                } )
                .then( ( response ) => {
                    this.$vToastify.stopLoader();

                    this.items = this.items.map( ( item, index ) => {
                        return {
                            ...item,
                            qty: response.data.items[ index ].qty,
                            coupon_amount:
                                response.data.items[ index ].coupon_amount,
                        };
                    } );
                    this.coupons = response.data.coupons;
                    let errors = JSON.parse( response.data.errors );
                    if ( errors.length ) {
                        window.alert( errors.join( "\n" ) );
                    }
                    this.$nextTick( () => {
                        $( "[data-toggle=tooltip],[rel=tooltip]" ).tooltip( {
                            container: "body",
                        } );
                    } );
                } )
                .catch( ( error ) => {
                    this.$vToastify.stopLoader();

                    window.alert( error.response.data.message );
                } );
        },
        saveItems: async function () {
            await this.getCouponAppliedItems();
            this.$emit( "save-items", {
                items: this.itemsIdQtyTax,
                coupons: this.couponCodes,
                cartRate: this.cartRate,
                shipping: this.shipping,
            } );
        },
    },
};
</script>