<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Kyslik\ColumnSortable\Sortable;

class TaxRate extends Model {

	use HasFactory;
	use Sortable;
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = array(
		'name',
		'country',
		'state',
		'city',
		'postcode',
		'rate',
		'is_shipping',
		'tax_type_id',
	);

	public $sortable = array(
		'country',
		'state',
		'postcode',
		'rate',
	);

	public function taxType() {
		return $this->belongsTo( 'App\Models\TaxType' );
	}
}
