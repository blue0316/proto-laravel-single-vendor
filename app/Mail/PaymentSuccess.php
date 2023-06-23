<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Models\Order;
use App\Models\User;

class PaymentSuccess extends Mailable {

	use Queueable, SerializesModels;

	protected $order;
	protected $user;
	protected $sender;

	/**
	 * Create a new message instance.
	 *
	 * @return void
	 */
	public function __construct( Order $order, $sender ) {
		$this->order  = Order::with( array( 'items', 'items.product:id', 'coupons' ) )
		->findOrFail( $order->id );
		$this->user   = User::where( 'role_id', 7 )->first();
		$this->sender = $sender;
	}

	/**
	 * Build the message.
	 *
	 * @return $this
	 */
	public function build() {
		return $this->subject( 'Mail from ' . $this->sender )
			->from( $this->sender, '' )
			->view(
				'mail.invoice',
				array(
					'order' => $this->order,
					'user'  => $this->user,
				)
			);
	}
}
