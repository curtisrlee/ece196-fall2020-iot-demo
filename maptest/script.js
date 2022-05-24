function init() {
  const initialPosition = { lat: 32.87974007930248, lng: -117.23691876965819 };

  const map = new google.maps.Map(document.getElementById('map'), {
    center: initialPosition,
    zoom: 17
  });

  const marker = new google.maps.Marker({ map, position: initialPosition });

  // // Get user's location
  // if ('geolocation' in navigator) {
  //   navigator.geolocation.getCurrentPosition(
  //     position => console.log(`Lat: ${position.coords.latitude} Lng: ${position.coords.longitude}`),
  //     err => alert(`Error (${err.code}): ${err.message}`)
  //   );
  // } else {
  //   alert('Geolocation is not supported by your browser.');
  // }
}