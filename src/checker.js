// const geoFindMe = () => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(success, error, geoOptions);
//   } else {
//     console.log("Geolocation services are not supported by your web browser.");
//   }
// };

// const success = (position) => {
//   const latitude = position.coords.latitude;
//   const longitude = position.coords.longitude;
//   const altitude = position.coords.altitude;
//   const accuracy = position.coords.accuracy;
//   console.log(`lat: ${latitude} long: ${longitude}`);
// };

// const error = (error) => {
//   console.log(
//     `Unable to retrieve your location due to ${error.code}: ${error.message}`
//   );
// };

// const geoOptions = {
//   enableHighAccuracy: true,
//   maximumAge: 30000,
//   timeout: 27000,
// };
// geoFindMe();
