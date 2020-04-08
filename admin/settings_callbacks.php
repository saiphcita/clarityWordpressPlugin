<?php
/*******************************************************************************
* File with setting callbacks
*******************************************************************************/

/**
* Generates a settings form
* @param void
* @return HTML
**/
function clarity_admin_settings_page(){
  if (!current_user_can('administrator')) {
    return;
  }else {
    ?>
      <div class="clarity_submenu_page">
        <h1>Clarity Settings</h1>
        <form action="options.php" method="post">
          <?php
            settings_fields('clarity_settings_fields');
            do_settings_sections('clarity_settings');
            ?>
            <?php
            submit_button();
          ?>
        </form>
      </div>
    <?php
  }
}

/**
* Displays settings section
* @param void
* @return HTML
**/
function clarity_section_project_id_callback(){
?>
  <div class="clarity_submenu_page_container">
    <p>Before you can start learning how people are using your site, we need to take a few more steps.</p>
    <h3>Instructions</h3>
      <ol>
        <li>Click on the following link to start a <a href="https://clarity.microsoft.com/projects?snpf=1">Clarity project.</a></li>
        <li>Copy and paste the Proyect ID.</li>
        <?php
        ?>
      </ol>
  </div>
<?php
}

/**
* Generates a settings input for introducing the project ID
* @param void
* @return HTML
**/
function clarity_settings_field_project_id_callback($args){
  $p_id_option = get_option('clarity_project_id', clarity_project_id_defualt_value());
  ?>
    <input type="text" name="clarity_project_id" value="<?= $p_id_option;  ?>">
  <?php
}

/**
* Generates a settings form
* @param void
* @return HTML
**/
function clarity_project_id_defualt_value(){
  $default_value = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx';

  return $default_value;
}
