<template>
	<section class="card">
		<header class="card-header">
			<h2 class="card-title">Are you sure?</h2>
		</header>
		<div class="card-body">
			<div class="modal-wrapper">
				<div class="modal-text">
					<p class="mb-0">
						Are you sure that you want to delete?
					</p>
				</div>
			</div>
		</div>
		<footer class="card-footer">
			<div class="row">
				<div class="col-md-12 text-right">
					<button
						class="btn btn-primary modal-confirm"
						@click="$emit('close', true)"
					>
						Confirm
					</button>
					<button
						class="btn btn-default modal-dismiss"
						@click="$emit('close', false)"
					>
						Cancel
					</button>
				</div>
			</div>
		</footer>
	</section>
</template>