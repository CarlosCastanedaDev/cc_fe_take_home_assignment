/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  if (window.innerWidth > 600) {
    document.getElementById('mySidenav').style.width = '300px';
    document.getElementById('main').style.marginLeft = '300px';
  } else {
    document.getElementById('mySidenav').style.width = '150px';
    document.getElementById('main').style.marginLeft = '125px';
  }
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
}
