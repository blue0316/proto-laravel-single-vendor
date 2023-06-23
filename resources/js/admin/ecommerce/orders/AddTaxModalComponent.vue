<template>
	<section class="card">
		<header class="card-header">
			<h2 class="card-title">Add Tax</h2>
		</header>
		<div class="card-body">
			<div class="modal-wrapper">
				<div class="modal-text">
					<table
						class="table table-striped table-ecommerce-simple"
						style="min-width: unset;"
					>
						<thead>
							<th width="60"></th>
							<th>Rate name</th>
							<th>Tax class</th>
							<th>Rate Code</th>
							<th class="text-right" width="100">Rate %</th>
						</thead>
						<tbody>
							<tr
								v-for="(rate, index) in taxRates"
								:key="'rate' + index"
							>
								<td>
									<input
										type="radio"
										v-model="taxRate"
										:value="rate"
									/>
								</td>
								<td>{{ rate.name }}</td>
								<td>{{ rate.class }}</td>
								<td>{{ rate.code }}</td>
								<td class="text-right">{{ rate.rate }}%</td>
							</tr>
							<tr v-if="taxRates.length === 0">
								<td colspan="2" class="text-center">
									No Tax Rates Available
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
						@click="$emit('close', taxRate)"
						:disabled="!taxRate"
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
export default {
    props: {
        taxRates: Array
    },
    data: function () {
        return {
            taxRate: null
        }
    }
}
</script>