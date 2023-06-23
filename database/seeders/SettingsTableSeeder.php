<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Setting;

class SettingsTableSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {
		Setting::create(
			array(
				'meta' => 'media_small_thumbnail_width',
			)
		);

		Setting::create(
			array(
				'meta' => 'media_small_thumbnail_height',
			)
		);

		Setting::create(
			array(
				'meta' => 'media_medium_thumbnail_width',
			)
		);

		Setting::create(
			array(
				'meta' => 'media_medium_thumbnail_height',
			)
		);

		Setting::create(
			array(
				'meta' => 'media_large_thumbnail_width',
			)
		);

		Setting::create(
			array(
				'meta' => 'media_large_thumbnail_height',
			)
		);

		Setting::create(
			array(
				'meta' => 'store_address_line_1',
			)
		);

		Setting::create(
			array(
				'meta' => 'store_address_line_2',
			)
		);

		Setting::create(
			array(
				'meta' => 'store_city',
			)
		);

		Setting::create(
			array(
				'meta' => 'store_country',
			)
		);

		Setting::create(
			array(
				'meta' => 'store_postcode',
			)
		);

		Setting::create(
			array(
				'meta'  => 'selling_location',
				'value' => 'all',
			)
		);

		Setting::create(
			array(
				'meta' => 'sell_to_specific_countries',
			)
		);

		Setting::create(
			array(
				'meta'  => 'shipping_location',
				'value' => 'sellable',
			)
		);

		Setting::create(
			array(
				'meta' => 'ship_to_specific_countries',
			)
		);

		Setting::create(
			array(
				'meta' => 'default_customer_location',
			)
		);

		Setting::create(
			array(
				'meta'  => 'enable_tax',
				'value' => 1,
			)
		);

		Setting::create(
			array(
				'meta'  => 'enable_coupon',
				'value' => 1,
			)
		);

		Setting::create(
			array(
				'meta'  => 'currency',
				'value' => 'USD',
			)
		);

		Setting::create(
			array(
				'meta'  => 'currency_position',
				'value' => 'left',
			)
		);

		Setting::create(
			array(
				'meta'  => 'thousand_separator',
				'value' => ',',
			)
		);

		Setting::create(
			array(
				'meta'  => 'decimal_separator',
				'value' => '.',
			)
		);

		Setting::create(
			array(
				'meta'  => 'number_of_decimal',
				'value' => '2',
			)
		);

		Setting::create(
			array(
				'meta'  => 'post_type',
				'value' => 'PostOneComponent',
			)
		);

		Setting::create(
			array(
				'meta'  => 'product_weight_unit',
				'value' => 'kg',
			)
		);

		Setting::create(
			array(
				'meta'  => 'product_dimentions_unit',
				'value' => 'cm',
			)
		);

		Setting::create(
			array(
				'meta'  => 'product_enable_reviews',
				'value' => '1',
			)
		);

		Setting::create(
			array(
				'meta'  => 'product_enable_star_rating',
				'value' => '1',
			)
		);

		Setting::create(
			array(
				'meta'  => 'product_star_rating_required',
				'value' => '1',
			)
		);

		Setting::create(
			array(
				'meta'  => 'product_enable_stock_management',
				'value' => 1,
			)
		);

		Setting::create(
			array(
				'meta'  => 'product_hold_stock',
				'value' => '60',
			)
		);

		Setting::create(
			array(
				'meta' => 'product_enable_low_stock_notifications',
			)
		);

		Setting::create(
			array(
				'meta' => 'product_enable_out_of_stock_notifications',
			)
		);

		Setting::create(
			array(
				'meta'  => 'product_low_stock_threshold',
				'value' => 2,
			)
		);

		Setting::create(
			array(
				'meta'  => 'product_out_of_stock_threshold',
				'value' => 0,
			)
		);

		Setting::create(
			array(
				'meta'  => 'product_out_of_stock_visibility',
				'value' => 0,
			)
		);

		Setting::create(
			array(
				'meta'  => 'product_stock_display_format',
				'value' => '1',
			)
		);

		Setting::create(
			array(
				'meta' => 'product_downloads_require_login',
			)
		);

		Setting::create(
			array(
				'meta' => 'product_downloads_grant_access',
			)
		);

		Setting::create(
			array(
				'meta' => 'product_downloads_append_string',
			)
		);

		// tax setting
		Setting::create(
			array(
				'meta'  => 'prices_include_tax',
				'value' => 'no',
			)
		);

		Setting::create(
			array(
				'meta'  => 'calculate_tax_based_on',
				'value' => 'shipping',
			)
		);

		Setting::create(
			array(
				'meta'  => 'shipping_tax_class',
				'value' => 'standard_rate_rates',
			)
		);

		Setting::create(
			array(
				'meta' => 'tax_round_at_subtotal',
			)
		);

		Setting::create(
			array(
				'meta'  => 'tax_display_in_shop',
				'value' => 'include',
			)
		);

		Setting::create(
			array(
				'meta'  => 'tax_display_in_cart_checkout',
				'value' => 'exclude',
			)
		);

		Setting::create(
			array(
				'meta'  => 'tax_display_suffix',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'tax_total_display',
				'value' => 'itemized',
			)
		);

		Setting::create(
			array(
				'meta'  => 'enable_shipping_calc_on_cartpage',
				'value' => '0',
			)
		);

		Setting::create(
			array(
				'meta'  => 'hide_shipping_until_address',
				'value' => '0',
			)
		);

		Setting::create(
			array(
				'meta'  => 'default_shipping_address',
				'value' => 'customer_billing',
			)
		);

		/////////////////////////////////////////////
		Setting::create(
			array(
				'meta'  => 'commission_type',
				'value' => 'flat',
			)
		);

		Setting::create(
			array(
				'meta'  => 'commission_amount',
				'value' => 10,
			)
		);

		Setting::create(
			array(
				'meta'  => 'withdraw_paypal',
				'value' => 1,
			)
		);

		Setting::create(
			array(
				'meta'  => 'minimum_withdraw',
				'value' => 10,
			)
		);

		Setting::create(
			array(
				'meta'  => 'vendor_allow_media',
				'value' => 1,
			)
		);

		Setting::create(
			array(
				'meta'  => 'exclude_cod_payment',
				'value' => 1,
			)
		);

		Setting::create(
			array(
				'meta'  => 'vendor_allow_product',
				'value' => 1,
			)
		);

		Setting::create(
			array(
				'meta'  => 'vendor_allow_post',
				'value' => 1,
			)
		);

		Setting::create(
			array(
				'meta'  => 'vendor_allow_order_status',
				'value' => 0,
			)
		);

		Setting::create(
			array(
				'meta'  => 'vendor_header_type',
				'value' => 'StoreHeaderOneComponent',
			)
		);

		Setting::create(
			array(
				'meta'  => 'header_type',
				'value' => 'HeaderOneComponent',
			)
		);

		Setting::create(
			array(
				'meta'  => 'site_title',
				'value' => 'Porto',
			)
		);

		Setting::create(
			array(
				'meta'  => 'tagline',
				'value' => 'Laravel Porto eCommerce Theme',
			)
		);

		Setting::create(
			array(
				'meta'  => 'logo_image',
				'value' => 'client/images/logo.png',
			)
		);

		Setting::create(
			array(
				'meta'  => 'logo_image_width',
				'value' => '105',
			)
		);

		Setting::create(
			array(
				'meta'  => 'logo_image_height',
				'value' => '44',
			)
		);

		Setting::create(
			array(
				'meta'  => 'mobile_menu_toggler_style',
				'value' => 'null',
			)
		);

		Setting::create(
			array(
				'meta'  => 'cart_menu_type',
				'value' => 'CartMenuOneComponent',
			)
		);

		Setting::create(
			array(
				'meta'  => 'search_form_style',
				'value' => 'rounded',
			)
		);

		Setting::create(
			array(
				'meta'  => 'search_form_category',
				'value' => 1,
			)
		);

		Setting::create(
			array(
				'meta'  => 'account_icon_style',
				'value' => 'null',
			)
		);

		Setting::create(
			array(
				'meta'  => 'cart_icon_style',
				'value' => 'null',
			)
		);

		/////// Typography Setting
		Setting::create(
			array(
				'meta'  => 'h1_font_family',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h1_font_weight',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h1_color',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h1_padding_top',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h1_padding_right',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h1_padding_bottom',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h1_padding_left',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h1_margin_top',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h1_margin_right',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h1_margin_bottom',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h1_margin_left',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h1_line_height',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h1_letter_spacing',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h2_font_family',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h2_font_weight',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h2_color',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h2_padding_top',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h2_padding_right',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h2_padding_bottom',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h2_padding_left',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h2_margin_top',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h2_margin_right',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h2_margin_bottom',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h2_margin_left',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h2_line_height',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h2_letter_spacing',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h3_font_family',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h3_font_weight',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h3_color',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h3_padding_top',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h3_padding_right',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h3_padding_bottom',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h3_padding_left',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h3_margin_top',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h3_margin_right',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h3_margin_bottom',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h3_margin_left',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h3_line_height',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h3_letter_spacing',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h4_font_family',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h4_font_weight',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h4_color',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h4_padding_top',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h4_padding_right',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h4_padding_bottom',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h4_padding_left',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h4_margin_top',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h4_margin_right',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h4_margin_bottom',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h4_margin_left',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h4_line_height',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h4_letter_spacing',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h5_font_family',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h5_font_weight',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h5_color',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h5_padding_top',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h5_padding_right',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h5_padding_bottom',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h5_padding_left',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h5_margin_top',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h5_margin_right',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h5_margin_bottom',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h5_margin_left',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h5_line_height',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h5_letter_spacing',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h6_font_family',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h6_font_weight',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h6_color',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h6_padding_top',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h6_padding_right',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h6_padding_bottom',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h6_padding_left',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h6_margin_top',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h6_margin_right',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h6_margin_bottom',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h6_margin_left',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h6_line_height',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta'  => 'h6_letter_spacing',
				'value' => '',
			)
		);

		/////// Color Setting
		Setting::create(
			array(
				'meta'  => 'primary_color',
				'value' => '#08c',
			)
		);

		Setting::create(
			array(
				'meta'  => 'primary_color_dark',
				'value' => '#222529',
			)
		);

		Setting::create(
			array(
				'meta'  => 'secondary_color',
				'value' => '#ff7272',
			)
		);

		Setting::create(
			array(
				'meta'  => 'secondary_color_dark',
				'value' => '#2f3946',
			)
		);

		Setting::create(
			array(
				'meta'  => 'body_color',
				'value' => '#777',
			)
		);

		Setting::create(
			array(
				'meta'  => 'headings_color',
				'value' => '#222529',
			)
		);

		Setting::create(
			array(
				'meta'  => 'cart_button_color',
				'value' => '#6f6e6b',
			)
		);

		Setting::create(
			array(
				'meta'  => 'sale_bubble_color',
				'value' => '#da5555',
			)
		);

		Setting::create(
			array(
				'meta'  => 'hot_bubble_color',
				'value' => '#2ba968',
			)
		);

		Setting::create(
			array(
				'meta'  => 'new_bubble_show',
				'value' => 0,
			)
		);

		Setting::create(
			array(
				'meta'  => 'new_bubble_color',
				'value' => '#62b959',
			)
		);

		Setting::create(
			array(
				'meta'  => 'product_type',
				'value' => 'ProductOneComponent',
			)
		);

		Setting::create(
			array(
				'meta'  => 'filter_min_price',
				'value' => 0,
			)
		);

		Setting::create(
			array(
				'meta'  => 'filter_max_price',
				'value' => 1000,
			)
		);

		Setting::create(
			array(
				'meta'  => 'show_product_category',
				'value' => '1',
			)
		);

		Setting::create(
			array(
				'meta'  => 'show_product_ratings',
				'value' => '1',
			)
		);

		Setting::create(
			array(
				'meta'  => 'show_product_countdown',
				'value' => '1',
			)
		);

		Setting::create(
			array(
				'meta'  => 'show_post_media',
				'value' => '1',
			)
		);

		Setting::create(
			array(
				'meta'  => 'show_meta_author',
				'value' => '1',
			)
		);

		Setting::create(
			array(
				'meta'  => 'show_meta_date',
				'value' => '1',
			)
		);

		Setting::create(
			array(
				'meta'  => 'show_comments_count',
				'value' => '1',
			)
		);

		Setting::create(
			array(
				'meta'  => 'show_post_category',
				'value' => '1',
			)
		);

		Setting::create(
			array(
				'meta'  => 'show_post_tags',
				'value' => '1',
			)
		);

		Setting::create(
			array(
				'meta'  => 'show_author_information',
				'value' => '1',
			)
		);

		Setting::create(
			array(
				'meta'  => 'show_post_nav',
				'value' => '1',
			)
		);

		Setting::create(
			array(
				'meta'  => 'show_related_posts',
				'value' => '1',
			)
		);

		Setting::create(
			array(
				'meta'  => 'show_comments',
				'value' => '1',
			)
		);

		Setting::create(
			array(
				'meta'  => 'cart_popup_type',
				'value' => 'CartModalTwoComponent',
			)
		);

		Setting::create(
			array(
				'meta'  => 'footer_type',
				'value' => 'FooterOneComponent',
			)
		);

		Setting::create(
			array(
				'meta'  => 'custom_css',
				'value' => '',
			)
		);

		Setting::create(
			array(
				'meta' => 'activated',
			)
		);

		Setting::create(
			array(
				'meta' => 'activation_key',
			)
		);

		Setting::create(
			array(
				'meta'  => 'multivendor',
				'value' => 0,
			)
		);

		Setting::create(
			array(
				'meta'  => 'vendor_add_product',
				'value' => 1,
			)
		);

		Setting::create(
			array(
				'meta'  => 'order_status_change',
				'value' => 0,
			)
		);

		Setting::create(
			array(
				'meta'  => 'withdraw_minimum_limit',
				'value' => 10,
			)
		);

		Setting::create(
			array(
				'meta'  => 'menu_text',
				'value' => '<li data-id="1" data-name="Home" data-url="/" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Home</div> <span data-owner-id="1" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="1" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="2" data-name="Categories" data-url="/shop/default" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Categories</div> <span data-owner-id="2" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="2" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span> <ol class="dd-list"><li data-id="3" data-name="Variation 1" data-url="#" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Variation 1</div> <span data-owner-id="3" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="3" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span> <ol class="dd-list"><li data-id="4" data-name="Fullwidth banner" data-url="/shop/default" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Fullwidth banner</div> <span data-owner-id="4" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="4" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="5" data-name="Boxed slider banner" data-url="/shop/boxed-slider" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Boxed slider banner</div> <span data-owner-id="5" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="5" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="6" data-name="Boxed image banner" data-url="/shop/boxed-image" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Boxed image banner</div> <span data-owner-id="6" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="6" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="7" data-name="Left sidebar" data-url="/product/default/nice-stereo-headphone" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Left sidebar</div> <span data-owner-id="7" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="7" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="8" data-name="Right sidebar" data-url="/shop/right-sidebar" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Right sidebar</div> <span data-owner-id="8" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="8" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="9" data-name="Off canvas filter" data-url="/shop/off-canvas" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Off canvas filter</div> <span data-owner-id="9" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="9" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="10" data-name="Horizontal Filter1" data-url="/shop/horizontal-filter1" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Horizontal Filter1</div> <span data-owner-id="10" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="10" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="11" data-name="Horizontal Filter2" data-url="/shop/horizontal-filter2" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Horizontal Filter2</div> <span data-owner-id="11" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="11" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li></ol></li> <li data-id="12" data-name="Variation 2" data-url="#" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Variation 2</div> <span data-owner-id="12" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="12" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span> <ol class="dd-list"><li data-id="13" data-name="List types Banner" data-url="/shop/list" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">List types Banner</div> <span data-owner-id="13" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="13" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="14" data-name="Ajax infinite scroll" data-url="/shop/infinite-scroll" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Ajax infinite scroll</div> <span data-owner-id="14" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="14" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="15" data-name="3 columns Products" data-url="/shop/3cols" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Boxed image banner</div> <span data-owner-id="15" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="15" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="16" data-name="4 columns Products" data-url="/shop/4cols" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">4 columns Products</div> <span data-owner-id="16" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="16" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="17" data-name="5 columns Products" data-url="/shop/5cols" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">5 columns Products</div> <span data-owner-id="17" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="17" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="18" data-name="6 columns Products" data-url="/shop/6cols" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">6 columns Products</div> <span data-owner-id="18" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="18" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="19" data-name="7 columns Products" data-url="/shop/7cols" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">7 columns Products</div> <span data-owner-id="19" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="19" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="20" data-name="8 columns Products" data-url="/shop/8cols" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">8 columns Products</div> <span data-owner-id="20" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="20" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li></ol></li></ol></li> <li data-id="21" data-name="Products" data-url="/product/default/basketball-sports-blue-shoes" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Products</div> <span data-owner-id="21" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="21" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span> <ol class="dd-list"><li data-id="22" data-name="Product Pages" data-url="#" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Product Pages</div> <span data-owner-id="22" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="22" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span> <ol class="dd-list"><li data-id="23" data-name="Simple Product" data-url="/product/default/basketball-sports-blue-shoes" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Simple Product</div> <span data-owner-id="23" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="23" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="24" data-name="Variable Product" data-url="/product/default/brown-women-casual-handbag" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Variable Product</div> <span data-owner-id="24" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="24" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="25" data-name="Sale Product" data-url="/product/default/circled-ultimate-3d-speaker" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Sale Product</div> <span data-owner-id="25" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="25" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="26" data-name="Featured &amp; On Sale" data-url="/product/default/nice-stereo-headphone" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Featured &amp; On Sale</div> <span data-owner-id="26" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="26" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="27" data-name="With Custom Tab" data-url="/product/custom-tab/brown-women-casual-handbag" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">With Custom Tab</div> <span data-owner-id="27" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="27" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="28" data-name="With Left Sidebar" data-url="/product/left-sidebar/brown-women-casual-handbag" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">With Left Sidebar</div> <span data-owner-id="28" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="28" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="29" data-name="With Right Sidebar" data-url="/product/right-sidebar/brown-women-casual-handbag" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">With Right Sidebar</div> <span data-owner-id="29" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="29" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="30" data-name="Add Cart Sticky" data-url="/product/cart-sticky/brown-women-casual-handbag" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Add Cart Sticky</div> <span data-owner-id="30" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="30" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li></ol></li> <li data-id="31" data-name="Product Layouts" data-url="#" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Product Layouts</div> <span data-owner-id="31" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="31" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span> <ol class="dd-list"><li data-id="32" data-name="Extended Layout" data-url="/product/extended/brown-women-casual-handbag" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Extended Layout</div> <span data-owner-id="32" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="32" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="33" data-name="Grid Image" data-url="/product/grid/brown-women-casual-handbag" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Grid Image</div> <span data-owner-id="33" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="33" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="34" data-name="Full Width Layout" data-url="/product/fullwidth/brown-women-casual-handbag" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">FUll Width Layout</div> <span data-owner-id="34" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="34" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="35" data-name="Sticky Info" data-url="/product/sticky-right/brown-women-casual-handbag" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Sticky Info</div> <span data-owner-id="35" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="35" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="36" data-name="Left &amp; Right Sticky" data-url="/product/sticky-both/brown-women-casual-handbag" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Left &amp; Right Sticky</div> <span data-owner-id="36" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="36" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="37" data-name="Left Sidebar" data-url="/product/left-sidebar/brown-women-casual-handbag" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Left Sidebar</div> <span data-owner-id="37" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="37" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="38" data-name="Center Vertical" data-url="/product/center-vertical/brown-women-casual-handbag" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Center Vertical</div> <span data-owner-id="38" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="38" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="39" data-name="Build Your Own" data-url="#" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Build Your Own</div> <span data-owner-id="39" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="39" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li></ol></li></ol></li> <li data-id="40" data-name="Pages" data-url="#" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Pages</div> <span data-owner-id="40" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="40" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span> <ol class="dd-list"><li data-id="41" data-name="Wishlist" data-url="/pages/wishlist" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Wishlist</div> <span data-owner-id="41" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="41" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="42" data-name="Shopping Cart" data-url="/pages/cart" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Shopping Cart</div> <span data-owner-id="42" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="42" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="43" data-name="Checkout" data-url="/pages/checkout" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Checkout</div> <span data-owner-id="43" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="43" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="44" data-name="Dashboard" data-url="/pages/account" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Dashboard</div> <span data-owner-id="44" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="44" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="45" data-name="About Us" data-url="/pages/about-us" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">About Us</div> <span data-owner-id="45" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="45" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="46" data-name="Blog" data-url="/pages/blog" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Blog</div> <span data-owner-id="46" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="46" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="47" data-name="Contact Us" data-url="/pages/contact-us" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Contact Us</div> <span data-owner-id="47" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="47" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="48" data-name="Login" data-url="/pages/login" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Login</div> <span data-owner-id="48" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="48" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="49" data-name="Forgot Password" data-url="/pages/forgot-pwd" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Forgot Password</div> <span data-owner-id="49" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="49" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li></ol></li> <li data-id="50" data-name="Blog" data-url="/pages/blog" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Blog</div> <span data-owner-id="50" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="50" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="51" data-name="About Us" data-url="/pages/about-us" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">About Us</div> <span data-owner-id="51" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="51" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li> <li data-id="52" data-name="Contact Us" data-url="/pages/contact-us" data-new="0" data-deleted="0" class="dd-item"><div class="dd-handle">Contact Us</div> <span data-owner-id="52" class="button-delete btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-trash"></i></span> <span data-owner-id="52" class="button-edit btn btn-default btn-xs pull-right"><i aria-hidden="true" class="fa fa-edit"></i></span></li>',
			)
		);

		Setting::create(
			array(
				'meta'  => 'menu_json',
				'value' => '[{"deleted":0,"new":0,"url":"/","name":"Home","id":1},{"deleted":0,"new":0,"url":"/shop/default","name":"Categories","id":2,"children":[{"deleted":0,"new":0,"url":"#","name":"Variation 1","id":3,"children":[{"deleted":0,"new":0,"url":"/shop/default","name":"Fullwidth banner","id":4},{"deleted":0,"new":0,"url":"/shop/boxed-slider","name":"Boxed slider banner","id":5},{"deleted":0,"new":0,"url":"/shop/boxed-image","name":"Boxed image banner","id":6},{"deleted":0,"new":0,"url":"/product/default/nice-stereo-headphone","name":"Left sidebar","id":7},{"deleted":0,"new":0,"url":"/shop/right-sidebar","name":"Right sidebar","id":8},{"deleted":0,"new":0,"url":"/shop/off-canvas","name":"Off canvas filter","id":9},{"deleted":0,"new":0,"url":"/shop/horizontal-filter1","name":"Horizontal Filter1","id":10},{"deleted":0,"new":0,"url":"/shop/horizontal-filter2","name":"Horizontal Filter2","id":11}]},{"deleted":0,"new":0,"url":"#","name":"Variation 2","id":12,"children":[{"deleted":0,"new":0,"url":"/shop/list","name":"List types Banner","id":13},{"deleted":0,"new":0,"url":"/shop/infinite-scroll","name":"Ajax infinite scroll","id":14},{"deleted":0,"new":0,"url":"/shop/3cols","name":"3 columns Products","id":15},{"deleted":0,"new":0,"url":"/shop/4cols","name":"4 columns Products","id":16},{"deleted":0,"new":0,"url":"/shop/5cols","name":"5 columns Products","id":17},{"deleted":0,"new":0,"url":"/shop/6cols","name":"6 columns Products","id":18},{"deleted":0,"new":0,"url":"/shop/7cols","name":"7 columns Products","id":19},{"deleted":0,"new":0,"url":"/shop/8cols","name":"8 columns Products","id":20}]}]},{"deleted":0,"new":0,"url":"/product/default/basketball-sports-blue-shoes","name":"Products","id":21,"children":[{"deleted":0,"new":0,"url":"#","name":"Product Pages","id":22,"children":[{"deleted":0,"new":0,"url":"/product/default/basketball-sports-blue-shoes","name":"Simple Product","id":23},{"deleted":0,"new":0,"url":"/product/default/brown-women-casual-handbag","name":"Variable Product","id":24},{"deleted":0,"new":0,"url":"/product/default/circled-ultimate-3d-speaker","name":"Sale Product","id":25},{"deleted":0,"new":0,"url":"/product/default/nice-stereo-headphone","name":"Featured & On Sale","id":26},{"deleted":0,"new":0,"url":"/product/custom-tab/brown-women-casual-handbag","name":"With Custom Tab","id":27},{"deleted":0,"new":0,"url":"/product/left-sidebar/brown-women-casual-handbag","name":"With Left Sidebar","id":28},{"deleted":0,"new":0,"url":"/product/right-sidebar/brown-women-casual-handbag","name":"With Right Sidebar","id":29},{"deleted":0,"new":0,"url":"/product/cart-sticky/brown-women-casual-handbag","name":"Add Cart Sticky","id":30}]},{"deleted":0,"new":0,"url":"#","name":"Product Layouts","id":31,"children":[{"deleted":0,"new":0,"url":"/product/extended/brown-women-casual-handbag","name":"Extended Layout","id":32},{"deleted":0,"new":0,"url":"/product/grid/brown-women-casual-handbag","name":"Grid Image","id":33},{"deleted":0,"new":0,"url":"/product/fullwidth/brown-women-casual-handbag","name":"Full Width Layout","id":34},{"deleted":0,"new":0,"url":"/product/sticky-right/brown-women-casual-handbag","name":"Sticky Info","id":35},{"deleted":0,"new":0,"url":"/product/sticky-both/brown-women-casual-handbag","name":"Left & Right Sticky","id":36},{"deleted":0,"new":0,"url":"/product/left-sidebar/brown-women-casual-handbag","name":"Left Sidebar","id":37},{"deleted":0,"new":0,"url":"/product/center-vertical/brown-women-casual-handbag","name":"Center Vertical","id":38},{"deleted":0,"new":0,"url":"#","name":"Build Your Own","id":39}]}]},{"deleted":0,"new":0,"url":"#","name":"Pages","id":40,"children":[{"deleted":0,"new":0,"url":"/pages/wishlist","name":"Wishlist","id":41},{"deleted":0,"new":0,"url":"/pages/cart","name":"Shopping Cart","id":42},{"deleted":0,"new":0,"url":"/pages/checkout","name":"Checkout","id":43},{"deleted":0,"new":0,"url":"/pages/account","name":"Dashboard","id":44},{"deleted":0,"new":0,"url":"/pages/about-us","name":"About Us","id":45},{"deleted":0,"new":0,"url":"/pages/blog","name":"Blog","id":46},{"deleted":0,"new":0,"url":"/pages/contact-us","name":"Contact Us","id":47},{"deleted":0,"new":0,"url":"/pages/login","name":"Login","id":48},{"deleted":0,"new":0,"url":"/pages/forgot-pwd","name":"Forgot Password","id":49}]},{"deleted":0,"new":0,"url":"/pages/blog","name":"Blog","id":50},{"deleted":0,"new":0,"url":"/pages/about-us","name":"About Us","id":51},{"deleted":0,"new":0,"url":"/pages/contact-us","name":"Contact Us","id":52}]',
			)
		);
	}
}
