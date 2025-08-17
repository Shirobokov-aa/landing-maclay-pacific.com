import React, { useEffect } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ymaps: any;
  }
}

const Map = () => {
  useEffect(() => {
    const loadYandexMaps = () => {
      if (typeof window !== "undefined" && !window.ymaps) {
        const script = document.createElement("script");
        script.src = `https://api-maps.yandex.ru/2.1/?apikey=${process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY}&lang=ru_RU`;
        script.type = "text/javascript";
        script.onload = () => {
          if (window.ymaps) {
            window.ymaps.ready(initMap);
          }
        };
        document.body.appendChild(script);
      } else if (window.ymaps) {
        window.ymaps.ready(initMap);
      }
    };

    const initMap = () => {
      const mapElement = document.getElementById("map");
      if (mapElement && !mapElement.hasChildNodes()) {
        const map = new window.ymaps.Map("map", {
          center: [1.374743, 103.88824],
          zoom: 10,
        });

        const placemark = new window.ymaps.Placemark(
          [1.374743, 103.88824],
          {
            balloonContent: "Hougang Avenue",
          },
          {
            preset: "islands#icon",
            iconColor: "#0095b6",
          }
        );
        map.geoObjects.add(placemark);
      }
    };

    loadYandexMaps();

    return () => {
      const mapElement = document.getElementById("map");
      if (mapElement) {
        mapElement.innerHTML = "";
      }
    };
  }, []);

  return <div id="map" style={{ width: "100%", height: "400px" }} />;
};

export default Map;
