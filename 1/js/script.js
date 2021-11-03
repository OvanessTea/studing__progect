window.onload = function menuF() {
	var menu = document.getElementById('myTopnav');
	menu.onclick = function myFunction() {
 		if (menu.className === 'topnav') {
  			menu.className += ' responsive';
 		} else {
  			menu.className = 'topnav';
 		}
	}
}

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 55.7525744, lng: 37.6216865 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}