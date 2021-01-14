<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * Assets enqueued:
 * 1. blocks.style.build.css - Frontend + Backend.
 * 2. blocks.build.js - Backend.
 * 3. blocks.editor.build.css - Backend.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function civicrm_search_kit_block_cgb_block_assets() { // phpcs:ignore
	// Register block styles for both frontend + backend.
	wp_register_style(
		'civicrm_search_kit_block-cgb-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		is_admin() ? array( 'wp-editor' ) : null, // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);

	// Register block editor script for backend.
	wp_register_script(
		'civicrm_search_kit_block-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
		null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Register block editor styles for backend.
	wp_register_style(
		'civicrm_search_kit_block-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);

	// WP Localized globals. Use dynamic PHP stuff in JavaScript via `cgbGlobal` object.
	wp_localize_script(
		'civicrm_search_kit_block-cgb-block-js',
		'cgbGlobal', // Array containing dynamic data for a JS Global.
		[
			'pluginDirPath' => plugin_dir_path( __DIR__ ),
			'pluginDirUrl'  => plugin_dir_url( __DIR__ ),
			// Add more data here that you want to access from `cgbGlobal` object.
		]
	);

	civicrm_initialize();
  $options = [];
	$savedSearches = \Civi\Api4\SavedSearch::get()
	->addWhere('api_params', 'IS NOT NULL')
	->setCheckPermissions(FALSE)
	->execute();
	foreach ($savedSearches as $savedSearch) {
		$obj = new stdClass();
		$obj->label = $savedSearch['label'];
		$obj->value = $savedSearch['id'];
	  $options[] = $obj;
	};
  wp_localize_script( 'civicrm_search_kit_block-cgb-block-js', 'savedSearchesPHP', $options );

	/**
	 * Register Gutenberg block on server-side.
	 *
	 * Register the block on server-side to ensure that the block
	 * scripts and styles for both frontend and backend are
	 * enqueued when the editor loads.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
	 * @since 1.16.0
	 */
	register_block_type(
		'cgb/block-civicrm-search-kit-block', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'civicrm_search_kit_block-cgb-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'civicrm_search_kit_block-cgb-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'civicrm_search_kit_block-cgb-block-editor-css',
			'render_callback' => 'civicrm_search_kit_block_cgb_block_render',
			'attributes' => [
		    'savedSearchId' => [
					'type' => 'number',
		    ],
	    ]
		)
	);
}

function civicrm_search_kit_block_cgb_block_render($attr, $content) {
	civicrm_initialize();
	//get our saved search
	$savedSearches = \Civi\Api4\SavedSearch::get()
	  ->addWhere('id', '=', $attr['savedSearchId'])
		->setCheckPermissions(FALSE)
	  ->execute();
	foreach ($savedSearches as $savedSearch) {
		$apiEntity = $savedSearch['api_entity'];
	  $apiParams = $savedSearch['api_params'];
	}
	if ($apiEntity && $apiParams) {
		$apiParams['checkPermissions'] = FALSE;
	  //make the api call and build a string of some sort. Starting with a table.
	  $data = civicrm_api4($apiEntity, 'get', $apiParams);
	  $string = '<table>';
	  //use first record to build  table headers
		//this is a draft that didn't really work because the API labels are a little wonky with joins
    /*foreach ($data[0] as $head => $val) {
			$head = str_replace('_', ' ', $head);
			$head = ucwords($head);
			$string .= '<th>';
			$string .= $head;
			$string .= '</th>';
		}*/
	  foreach ($data as $row) {
	 	  $string .= '<tr>';
			foreach ($row as $key => $value) {
				$string .= '<td>';
				$string .= $value;
				$string .= '</td>';
			}
			$string .= '</tr>';
	  }
		$string .= '</table>';
  }
	else {
		$string = 'Invalid Parameters';
	}
	return $string;
}

// Hook: Block assets.
add_action( 'init', 'civicrm_search_kit_block_cgb_block_assets' );
