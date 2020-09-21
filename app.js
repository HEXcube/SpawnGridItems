/**
 * @file Functions to handle spawning and removal of grid items
 * @author Rohan "HEXcube" Villoth
 */

function spawnGridItem() {
  $(".sample-components .col").clone().hide().insertBefore(".spawn-button-column").fadeIn("slow")
}
