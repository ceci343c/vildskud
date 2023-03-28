function openNav() {
  var sideNav = document.getElementById("Minsidenav");
  var img = document.getElementById("burger_menu_icon");
  if (sideNav.style.display === "block") {
    sideNav.style.display = "none";
    img.src = "./fotos/menu_close.png";
  } else {
    sideNav.style.display = "block";
    img.src = "./fotos/menu_open.png";
  }
}

function closeNav() {
  var sideNav = document.getElementById("Minsidenav");
  var img = document.getElementById("menu_open");
  sideNav.style.display = "none";
  img.src = "./fotos/menu_close.png";
}
