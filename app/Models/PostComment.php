<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Kyslik\ColumnSortable\Sortable;

class PostComment extends Model {

	use HasFactory;
	use Sortable;
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = array(
		'post_id',
		'author_name',
		'author_email',
		'website',
		'content',
		'parent',
	);

	protected $casts = array(
		'approved' => 'boolean',
	);

	protected $appends = array(
		'parent_author_name',
		'depth',
	);

	public $sortable = array(
		'author_name',
		'created_at',
	);

	public $sortableAs = array(
		'post_title',
	);

	public function getParentAuthorNameAttribute() {
		$parent = PostComment::find( $this->parent );
		return $parent ? $parent->author_name : null;
	}

	public function getDepthAttribute() {
		$comment = $this;
		$depth   = 0;
		while ( $comment->parent > 0 ) {
			$depth++;
			$comment = PostComment::findOrFail( $comment->parent );
		}
		return $depth;
	}

	public function post() {
		return $this->belongsTo( 'App\Models\Post' );
	}

	public function delete() {
		PostComment::where( 'parent', $this->id )->update( array( 'parent' => $this->parent ) );
		return parent::delete();
	}
}
