<?php

namespace App\Http\Controllers\Admin;

use App\Models\Media;
use App\Models\Setting;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ThemeSettingController extends Controller {

	public function index() {
		$media = Media::all();
		return view(
			'admin.theme.index',
			array(
				'settings' => config( 'setting' ),
				'media'    => $media,
			)
		);
	}

	public function menuShow() {
		return view( 'admin.theme.menu', compact( 'content' ) );
	}

	public function storeMenu( Request $request ) {
		$menu_text = Setting::where( 'meta', 'menu_text' )->first();
		if ( $menu_text ) {
			$menu_text->value = $request->input( 'menu_text' );
			$menu_text->save();
		} else {
			Setting::create(
				array(
					'meta'  => 'menu_text',
					'value' => $request->input( 'menu_text' ),
				)
			);
		}

		$menu_json = Setting::where( 'meta', 'menu_json' )->first();
		if ( $menu_json ) {
			$menu_json->value = $request->input( 'menu_json' );
			$menu_json->save();
		} else {
			Setting::create(
				array(
					'meta'  => 'menu_json',
					'value' => $request->input( 'menu_json' ),
				)
			);
		}
	}

	public function homePageShow() {
		return view( 'admin.theme.home' );
	}

	public function storeHomePage() {
		return 'ok';
	}
}
