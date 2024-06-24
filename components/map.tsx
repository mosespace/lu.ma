"use client";

import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export default function Map() {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      console.log("map init");
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");

      // init a marker
      const { Marker } = (await loader.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

      const defaultPosition = {
        lat: 1.373333,
        lng: 32.290275,
      };

      const mapOptions: google.maps.MapOptions = {
        center: defaultPosition,
        zoom: 17,
        mapId: "MY_NEXTJS_MAPID",
      };

      // set up the marker
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      // Get the user's current position
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userPosition = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            // Update the map center to the user's position
            map.setCenter(userPosition);

            // Add a marker at the user's position
            new Marker({
              map: map,
              position: userPosition,
              title: "This is your current location",
            });
          },
          (error) => {
            console.error("Error getting user's location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    initMap();
  }, []);

  return <div className='rounded-lg h-screen' ref={mapRef} />;
}

// "use client";

// import React, { useEffect } from "react";
// import { Loader } from "@googlemaps/js-api-loader";
// export default function Map() {
//   const mapRef = React.useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     const initMap = async () => {
//       console.log("map init");
//       const loader = new Loader({
//         apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
//         version: "weekly",
//       });

//       const { Map } = await loader.importLibrary("maps");

//       const position = {
//         lat: 43.643693,
//         lng: -79.3871189,
//       };

//       // map options
//       const mapOptions: google.maps.MapOptions = {
//         center: position,
//         zoom: 17,
//         mapId: "MY_NEXTJS_MAPID",
//       };

//       // set up the map
//       const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
//     };

//     initMap();
//   }, []);
//   return <div className='rounded-lg h-screen' ref={mapRef} />;
// }
