/**
 * @file Functions to handle spawning and removal of grid items
 * @author Rohan "HEXcube" Villoth
 */

function spawnGridItem() {
  // https://stackoverflow.com/questions/28175841/jquery-how-clone-bootstrap-row#28175954
  $(".sample-components .grid-column").clone().hide().insertBefore(".spawn-button-column").fadeIn("slow")
}

function removeGridItem(gridItem) {
  /*
    https://stackoverflow.com/questions/5333426/how-to-find-a-parent-with-a-known-class-in-jquery/5333443#5333443
    How to remove html elements with jQuery fadeOut effect - https://codepen.io/ChemBioScripting/pen/xeslL
  */
  $(gridItem).closest('.grid-column').fadeOut("slow", function () {
    $(this).remove()
  })
}

function setItemHeightVariable() {
  /*
    https://stackoverflow.com/questions/2345784/jquery-get-height-of-hidden-element-in-jquery/2345813#2345813
    https://stackoverflow.com/questions/4777077/removing-elements-by-class-name#4777105
    https://getbootstrap.com/docs/4.5/utilities/visibility/
    https://getbootstrap.com/docs/4.5/utilities/position/
  */
  $(".sample-components").removeClass('d-none').addClass('invisible fixed-top')
  // https://stackoverflow.com/questions/9592575/get-height-of-div-with-no-height-set-in-css/9592620#9592620
  var gridItemHeight = $(".sample-components .grid-column .grid-item").innerHeight()
  $(".sample-components").removeClass('invisible fixed-top').addClass('d-none')
  console.log(gridItemHeight)
  // https://stackoverflow.com/questions/41370741/how-do-i-edit-a-css-variable-using-js/41371037#41371037
  document.documentElement.style.setProperty("--item-height", gridItemHeight+"px")
}

// https://stackoverflow.com/questions/2758651/how-to-change-height-div-on-window-resize/2758657#2758657
$(() => {
  $(window).resize(() => {
    setItemHeightVariable()
  }).resize()
})
