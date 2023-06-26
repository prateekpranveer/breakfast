import React from 'react'

function PlaceNameFromCoordinates() {
    const latitude = 37.7749; // Replace with your latitude
    const longitude = -122.4194;
    React.useEffect(() => {
      const getPlaceName = async () => {
        const apiKey = 'AIzaSyAeS7-ItucDx_cJoAXZl26yNOMQTHtxZKM'; // Replace with your Google Maps API key
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
  
        try {
          const response = await fetch(url);
          const data = await response.json();
          console.log(data)
          
          if (data.status === 'OK' && data.results.length > 0) {
            const placeName = data.results[0].formatted_address;
            console.log('Place Name:', placeName);
          } else {
            console.log('Unable to retrieve place name.');
          }
        } catch (error) {
          console.log('Error:', error);
        }
      };
  
      getPlaceName();
    }, [latitude, longitude]);
  
    return <div>Fetching place name...</div>;
  }
 
  export default PlaceNameFromCoordinates