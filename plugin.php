<?php
/**
 * Plugin Name: civicrm-search-kit-block
 * Plugin URI: https://aghstrategies.com
 * Description: Gutenberg block for front end CiviCRM search kit displays
 * Author: Eli Lisseck
 * Author URI: https://elisseck.com
 * Version: 1.0.0
 * License: GPL3+
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 *
 *
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
