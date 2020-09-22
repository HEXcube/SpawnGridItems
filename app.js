/**
 * @file Functions to handle spawning and removal of grid items
 * @author Rohan "HEXcube" Villoth
 */

function spawnGridItem() {
  // https://stackoverflow.com/questions/28175841/jquery-how-clone-bootstrap-row#28175954
  $(".sample-components .col").clone().hide().insertBefore(".spawn-button-column").fadeIn("slow")
}
