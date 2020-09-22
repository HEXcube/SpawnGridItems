/**
 * @file Functions to handle spawning and removal of grid items
 * @author Rohan "HEXcube" Villoth
 */

function spawnGridItem() {
  // https://stackoverflow.com/questions/28175841/jquery-how-clone-bootstrap-row#28175954
  $(".sample-components .grid-column").clone().hide().insertBefore(".spawn-button-column").fadeIn("slow")
}

function removeGridItem(thisObj) {
  /*
    https://stackoverflow.com/questions/5333426/how-to-find-a-parent-with-a-known-class-in-jquery/5333443#5333443
  */
  $(thisObj).closest('.grid-column').remove()
}
