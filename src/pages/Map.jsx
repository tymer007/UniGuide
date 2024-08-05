import React from 'react'
import "leaflet/dist/leaflet.css"

import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'
import { marker } from 'leaflet'
import { Icon } from 'leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster';

function Map() {

  const markers = [
    {
      geocode: [9.949022348955122, 8.888744938808072],
      popUp: 'University of Jos, Main Camp',
    },
    {
      geocode: [9.951938790461178, 8.891030373215997],
      popUp: 'Skye Bank - Unijos Cash Centre',
    },
    {
      geocode: [9.962602526326993, 8.88232510574705],
      popUp: 'University of Jos Senate Building',
    },
  ]

  const customIcon = new Icon({
    iconUrl: ('./public/logos/location.png'),
    iconSize: [32, 32],
    // iconAnchor: [16, 32],
    // popupAnchor: [0, -28]
  })

  return (
    <div className='box-border m-0 p-0 h-screen'>
      <MapContainer center={[9.96237050476886, 8.877620586182893]} zoom={15} className='h-screen'>
        <TileLayer
          attribution='leaflet maps'
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <MarkerClusterGroup
          chunkedLoading
        >
          {markers.map(marker => (
            <Marker position={marker.geocode} icon={customIcon}>
              <Popup>
                <div className='text-xl'>
                  {marker.popUp}
                  <br />
                </div>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>

    </div>
  )
}

export default Map