<?php
/**
 * Plugin Name:       Clarity
 * Plugin URI:        https://clarity.microsoft.com/
 * Description:       With data and session replay from Clarity, you'll see how people are using your site — where they get stuck and what they love.
 * Version:           0.1
 * Author:            Microsoft
 * Author URI:        https://www.microsoft.com/en-us/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html

 * Clarity Plugin is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * any later version.
 *
 * Clarity Plugin is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 */

/**
* Require files only if is admin area
* @param void
* @return HTML
**/
if(is_admin()){
  require_once plugin_dir_path(__FILE__).'/admin/settings_page.php';
  require_once plugin_dir_path(__FILE__).'/admin/settings_callbacks.php';
}

function clarity_plugin_settings_link( $links ) {
	$url = get_admin_url() . 'options-general.php?page=clarity_settings';
	$settings_link = '<a href="' . $url . '">' . __('Settings', 'textdomain') . '</a>';
	array_unshift( $links, $settings_link );
	return $links;
}

function clarity_after_setup_theme() {
	 add_filter('plugin_action_links_' . plugin_basename(__FILE__), 'clarity_plugin_settings_link');
}
add_action ('after_setup_theme', 'clarity_after_setup_theme');


/**
* Runs when Clarity Plugin is activated
* @param void
* @return void
**/
register_activation_hook(__FILE__, 'clarity_on_activation');
function clarity_on_activation(){
}

/**
* Adds jquery to the admin side
* @param void
* @return void
**/

// add_action('admin_enqueue_scripts', 'clarity_admin_scripts');
// function clarity_admin_scripts(){
//   wp_enqueue_script('clarity_lib',  plugins_url('clarity/clarity_lib/clarity.dev.js'), array());
// }



/**
* Runs when Clarity Plugin is deactivated
* @param void
* @return void
**/
register_deactivation_hook( __FILE__, 'clarity_on_deactivation');
function clarity_on_deactivation(){
  remove_menu_page( 'clarity_settings' );
  return;
}

register_uninstall_hook( 'uninstall.php', 'clarity_on_uninstallation');
function clarity_on_uninstallation(){
  return;
}

/**
* Adds the script to run clarity
* @param void
* @return void
**/
add_action('wp_head', 'clarity_add_script_to_header');
function clarity_add_script_to_header(){

	// if(!is_user_logged_in())
	// {
    $p_id_option = get_option('clarity_project_id');
    // wp_die($p_id_option);
		?>
			<script src="<?= 'https://log.clarity.ms/js/'. $p_id_option ?>"></script>
			<script type="text/javascript">
				const e = { //https://log.clarity.ms/js/1
					url: "https://log.clarity.ms/collect",                  // "https://log.clarity.ms/js/<?= $p_id_option; ?>", 'clarity/clarity_lib/clarity.dev.js'
					uploadUrl:"https://log.clarity.ms/uploadv3",
					projectId:"<?= $p_id_option; ?>",
					uploadHeaders:{
						"Content-Type":"application/json"
					},
					instrument: !0,
				}
				clarity.start(e);
			</script>
		<?php
	// }
}