import React from "react";
import { Map, Marker } from "pigeon-maps";
function ContentMap({data}) {
  const hue = 0;
  const zoom = 8
  const color = `hsl(${hue % 360}deg 39% 70%)`;

  return (
    <div class="mt-2">
      <h2 class="is-size-4 has-text-weight-normal	has-text-dark mb-2 has-text-centered">Map</h2>
      <Map height={450} defaultCenter={[52.090736, 5.12142]} defaultZoom={zoom}>
        {data.map((city) => {
          return (
            <Marker
              key={city.id}
              width={40}
              anchor={[city.latitude, city.longitude]}
              color={color}
              payload={1}
            />
          );
        })}
      </Map>
      
    </div>
  );
}

export default ContentMap;
