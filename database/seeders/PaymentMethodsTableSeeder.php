<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\PaymentMethod;
use App\Models\PaymentMethodDetail;

class PaymentMethodsTableSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {
		PaymentMethod::create(
			array(
				'name'    => 'Stripe',
				'slug'    => 'stripe',
				'enabled' => true,
			)
		);

		PaymentMethod::create(
			array(
				'name'        => 'Paypal',
				'slug'        => 'paypal',
				'description' => 'Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.',
				'enabled'     => true,
			)
		);

		PaymentMethod::create(
			array(
				'name'        => 'Cash on Delivery',
				'slug'        => 'cash_on_delivery',
				'description' => 'Have your customers pay with cash (or by other means) upon delivery.',
				'enabled'     => true,
			)
		);
	}
}
