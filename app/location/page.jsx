"use client";

import React, { useEffect, useState } from "react";

const Location = () => {
  const [location, setLocation] = useState({
    accuracy: 0,
    latitude: 0,
    longitude: 0,
    altitude: 0,
    heading: 0,
    speed: 0,
  });

  const successCallback = (positon) => {
    const { accuracy, latitude, longitude, altitude, heading, speed } =
      positon.coords;
    console.log( "print values", accuracy, latitude, longitude, altitude, heading, speed);
    setLocation((prev) => {
      return {
        ...prev,
        accuracy: accuracy,
        latitude: latitude,
        longitude: longitude,
        altitude: altitude,
        heading: heading,
        speed: speed,
      };
    });
  };

  const errorCallback = (error) => {
    console.log(error);
  };

  useEffect(() => {
    navigator.geolocation.watchPosition(successCallback, errorCallback);
  }, []);

  return (
    <div style={{padding: "5rem"}}>
      <div>hello</div>
      <div id="details">
        <p>Accuracy: {location.accuracy} </p>
        <p>latitude: {location.latitude} </p>
        <p>longitude: {location.longitude} </p>
        <p>altitude: {location.altitude} </p>
        <p>heading: {location.heading} </p>
        <p>speed: {location.speed} </p>
      </div>
      <div id="map">
        <iframe
          width="700"
          height="300"
          src={`https://maps.google.com/maps?q=${location.latitude},${location.longitude}&z=15&output=embed`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
