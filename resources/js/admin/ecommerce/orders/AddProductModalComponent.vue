<template>
    <section class="card">
        <header class="card-header">
            <h2 class="card-title">Add Products</h2>
        </header>
        <div class="card-body">
            <div class="modal-wrapper">
                <div class="modal-text">
                    <div class="form-group mb-3">
                        <div class="input-group">
                            <Select2
                                class="flex-grow-1"
                                id="add_product"
                                :options="products"
                                :settings="{
									theme: 'bootstrap',
									minimumInputLength: 3,
									containerCssClass: 'form-control-modern',
								}"
                                @select="selectProduct"
                            >
                            </Select2>
                            <div class="input-group-append">
                                <button
                                    class="btn btn-primary"
                                    @click="addProduct"
                                    :disabled="!newProduct"
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                    <table
                        class="table table-striped table-ecommerce-simple"
                        style="min-width: unset;"
                    >
                        <thead>
                            <th>Product</th>
                            <th
                                class="text-right"
                                width="100"
                            >Quantity</th>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(product, index) in newProducts"
                                :key="'product' + index"
                            >
                                <td class="align-middle">{{ product.name }}</td>
                                <td>
                                    <input
                                        type="number"
                                        class="form-control form-control-modern"
                                        v-model.number="product.qty"
                                        min="0"
                                    />
                                </td>
                            </tr>
                            <tr v-if="newProducts.length === 0">
                                <td
                                    colspan="2"
                                    class="text-center"
                                >
                                    No Product Added
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <div class="row">
                <div class="col-md-12 text-right">
                    <button
                        class="btn btn-primary modal-confirm"
                        @click="$emit('close', newProducts)"
                        :disabled="!newProducts.length"
                    >
                        Add
                    </button>
                    <button
                        class="btn btn-default modal-dismiss"
                        @click="$emit('close')"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </footer>
    </section>
</template>
<script>
import Select2 from "v-select2-component";

export default {
    components: {
        Select2
    },
    props: {
        products: Array
    },
    data: function () {
        return {
            newProduct: null,

            newProducts: []
        };
    },
    methods: {
        addProduct: function () {
            if ( !this.newProducts.find( product => product.id === this.newProduct.id ) ) {
                this.newProducts.push( {
                    id: this.newProduct.id,
                    name: this.newProduct.text,
                    price: this.newProduct.price,
                    qty: 1
                } );
            }
        },

        selectProduct: function ( { id, price, text } ) {
            this.newProduct = { id, price, text };
        }
    }
}
</script>