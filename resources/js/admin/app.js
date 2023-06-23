
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require( './bootstrap' );

window.Vue = require( 'vue' );

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import { VuejsDatatableFactory } from 'vuejs-datatable';
import VueToastify from 'vue-toastify';
import VModal from 'vue-js-modal';
import VueLazyLoad from 'vue-lazyload'

VuejsDatatableFactory.useDefaultType( false ).registerTableType( 'datatable', tableType => tableType.mergeSettings( {
    table: {
        sorting: {
            sortAsc: '<i class="fa fa-sort-down ml-1"></i>',
            sortDesc: '<i class="fa fa-sort-up ml-1"></i>',
            sortNone: '<i class="fa fa-sort ml-1"></i>'
        }
    }
} ) );

Vue.use( VuejsDatatableFactory );
Vue.use( VueToastify );
Vue.use( VModal );
Vue.use( VueLazyLoad );

Vue.component( 'order-create-component', require( './ecommerce/orders/OrderCreateComponent.vue' ).default );
Vue.component( 'order-detail-component', require( './ecommerce/orders/OrderDetailComponent.vue' ).default );
Vue.component( 'report-order-component', require( './ecommerce/reports/ReportOrderComponent.vue' ).default );
Vue.component( 'report-customer-component', require( './ecommerce/reports/ReportCustomerComponent.vue' ).default );
Vue.component( 'report-annual-component', require( './ecommerce/reports/ReportAnnualComponent.vue' ).default );
Vue.component( 'notifications-component', require( './ecommerce/common/NotificationsComponent.vue' ).default );
Vue.component( 'vendor-detail-component', require( './ecommerce/VendorDetailComponent.vue' ).default );
Vue.component( 'new-product-component', require( './products/NewProductComponent.vue' ).default );
Vue.component( 'user-detail-component', require( './users/UserDetailComponent.vue' ).default );
Vue.component( 'theme-settings-component', require( './theme-setting/ThemeSettingsComponent.vue' ).default );

const app = new Vue( {
    el: '#app',
    methods: {
        getUrl: function ( url, flag = false, size = 0 ) {
            if ( flag ) {
                if ( size == 0 )
                    return window.baseUrl + '/storage/' + url;
                else {
                    var splits = url.split( '.' );
                    return window.baseUrl + '/storage/' + splits[ 0 ] + '-' + size + 'x' + size + '.' + splits[ 1 ];
                }
            }

            return window.baseUrl + '/' + url;
        }
    },
} );
