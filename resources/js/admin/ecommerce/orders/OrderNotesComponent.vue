<template>
	<div class="card card-modern">
		<div class="card-header">
			<h2 class="card-title">Order Notes</h2>
			<div class="card-actions">
				<a href="javascript:;" class="card-action card-action-toggle mr-2" data-card-toggle></a>
			</div>
		</div>
		<div class="card-body">
			<div class="ecommerce-timeline mb-3">
				<div class="ecommerce-timeline-items-wrapper" v-if="previousNotes.length != 0">
					<div class="ecommerce-timeline-item" v-for="(note, index) in previousNotes" :key="index">
						<small>
							added on {{ note.created_at }} by
							{{
							note.author.first_name +
							" " +
							note.author.last_name
							}}
							-
							<a
								href="#"
								class="text-color-danger"
								@click.prevent="$emit('delete-note', index)"
							>Delete note</a>
						</small>
						<p>{{ note.content }}</p>
					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col pb-1 mb-3">
					<label>Add Note</label>
					<textarea class="form-control form-control-modern" rows="6" v-model="noteContent"></textarea>
				</div>
			</div>
			<div class="form-row">
				<div class="form-group d-flex">
					<select class="form-control form-control-modern" v-model.number="notifyToCustomer">
						<option :value="0">Private Note</option>
						<option :value="1">Note to Customer</option>
					</select>
					<a
						href="#"
						class="btn btn-light border font-weight-semibold text-color-dark line-height-1 d-flex align-items-center text-nowrap ml-1"
						@click.prevent="
							$emit('add-note', noteContent, notifyToCustomer)
						"
					>Add Note</a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		previousNotes: Array,
	},
	data() {
		return {
			noteContent: "",
			notifyToCustomer: 0,
		};
	},
};
</script>