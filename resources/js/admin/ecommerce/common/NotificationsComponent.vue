<template>
	<ul class="notifications">
		<li>
			<a
				href="#"
				class="dropdown-toggle notification-icon"
				data-toggle="dropdown"
				title="On-hold orders"
				@click="getHoldingOrders"
			>
				<i class="bx bx-task"></i>
			</a>

			<div class="dropdown-menu notification-menu">
				<div class="notification-title">
					<span class="float-right badge badge-default">{{ holdingOrdrersCount }}</span>
					On Hold Orders
				</div>

				<div class="content">
					<ul>
						<template v-if="holdingOrders.length">
							<li v-for="(order, index) in holdingOrders" :key="index">
								<a
									:href="
										baseUrl +
										'/admin/ecommerce/orders/' +
										order.id +
										'/edit'
									"
									class="clearfix"
								>
									<div class="image">
										<i class="bx bx-lock-alt bg-warning"></i>
									</div>
									<span class="title">Order #{{ order.id }}</span>
									<span class="message">
										{{ order.diff }} by
										{{ order.customer_name }}
									</span>
								</a>
							</li>
						</template>
						<template v-else>
							<li class="text-1">No orders to fulfill</li>
						</template>
					</ul>

					<hr />

					<div class="text-right">
						<a :href="baseUrl + '/admin/ecommerce/orders'" class="view-more">View All</a>
					</div>
				</div>
			</div>
		</li>
		<li>
			<a
				href="#"
				class="dropdown-toggle notification-icon"
				data-toggle="dropdown"
				title="Store status"
				@click="getLowOutStockProducts"
			>
				<i class="bx bx-store-alt"></i>
			</a>

			<div class="dropdown-menu notification-menu">
				<div class="notification-title">
					<span class="float-right badge badge-default">{{ lowOutStockProductsCount }}</span>
					Products
				</div>

				<div class="content">
					<ul>
						<template v-if="lowOutStockProducts.length">
							<li v-for="(product, index) in lowOutStockProducts" :key="index">
								<a
									:href="
										baseUrl +
										'/admin/products/' +
										product.id +
										'/edit'
									"
									class="clearfix"
								>
									<div class="image">
										<i v-if="product.stock_quantity > 0" class="d-inline-block bg-warning text-1">Low</i>
										<i v-else class="d-inline-block bg-danger text-1">Out</i>
									</div>
									<span class="title">
										{{
										product.name
										}}
									</span>
									<span class="message">{{ product.stock_quantity }} in stock</span>
								</a>
							</li>
						</template>
						<template v-else>
							<li class="text-1">Stock status is good</li>
						</template>
					</ul>

					<hr />

					<div class="text-right">
						<a :href="baseUrl + '/admin/products'" class="view-more">View All</a>
					</div>
				</div>
			</div>
		</li>
		<li v-if="roleId != '4'">
			<a
				href="#"
				class="dropdown-toggle notification-icon"
				data-toggle="dropdown"
				title="New Customers"
				@click="getNewCustomers"
			>
				<i class="bx bx-user-circle"></i>
			</a>

			<div class="dropdown-menu notification-menu">
				<div class="notification-title">
					<span class="float-right badge badge-default">{{ newCustomersCount }}</span>
					New customers
				</div>

				<div class="content">
					<ul>
						<template v-if="newCustomers.length">
							<li v-for="(customer, index) in newCustomers" :key="index">
								<a
									:href="
										baseUrl +
										'/admin/users/' +
										customer.id +
										'/edit'
									"
									class="clearfix d-flex align-items-center"
								>
									<div class="image position-static mr-2">
										<i class="bx bx-info-circle bg-success"></i>
									</div>
									<span class="title">
										{{
										customer.first_name +
										" " +
										customer.last_name
										}}
									</span>
								</a>
							</li>
						</template>
						<template v-else>
							<li class="text-1">No new customers</li>
						</template>
					</ul>

					<hr />

					<div class="text-right">
						<a :href="baseUrl + '/admin/users'" class="view-more">View All</a>
					</div>
				</div>
			</div>
		</li>
	</ul>
</template>
<script>
export default {
	props: {
		roleId: String,
	},
	data() {
		return {
			holdingOrders: [],
			holdingOrdrersCount: 0,
			lowOutStockProducts: [],
			lowOutStockProductsCount: 0,
			newCustomers: [],
			newCustomersCount: 0,
			baseUrl: window.baseUrl,
			orderOpend: false,
			stockOpend: false,
			customerOpend: false,
		};
	},
	methods: {
		getHoldingOrders: async function () {
			this.orderOpend = !this.orderOpend;
			if (!this.orderOpend) return;
			try {
				const { data } = await window.axios.get(
					"/admin/ecommerce/orders/holding-orders"
				);
				this.holdingOrdrersCount = data.count;
				this.holdingOrders = JSON.parse(data.orders);
			} catch (e) {
				this.$vToastify.setSettings({
					withBackdrop: false,
					position: "top-right",
					singular: true,
				});
				this.$vToastify.error(e);
			}
		},
		getLowOutStockProducts: async function () {
			this.stockOpend = !this.stockOpend;
			if (!this.stockOpend) return;
			try {
				const { data } = await window.axios.get(
					"/admin/products/low-out-stock"
				);
				this.lowOutStockProductsCount = data.count;
				this.lowOutStockProducts = JSON.parse(data.products);
			} catch (e) {
				this.$vToastify.setSettings({
					withBackdrop: false,
					position: "top-right",
					singular: true,
				});
				this.$vToastify.error(e);
			}
		},
		getNewCustomers: async function () {
			this.customerOpend = !this.customerOpend;
			if (!this.customerOpend) return;
			try {
				const { data } = await window.axios.get(
					"/admin/users/new-customers"
				);
				this.newCustomersCount = data.count;
				this.newCustomers = data.customers;
			} catch (e) {
				this.$vToastify.setSettings({
					withBackdrop: false,
					position: "top-right",
					singular: true,
				});
				this.$vToastify.error(e);
			}
		},
	},
};
</script>