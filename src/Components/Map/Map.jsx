import React, { useEffect, useState } from 'react'
import GoogleMapReact from "google-map-react"
import { useSelector } from 'react-redux'
import { Marker } from '../Marker/Marker'

export const Map = ({pump,setPump}) => {
    const [coordinates, setCoordinates] = useState({ lat: 25.5941, lng: 85.1376 })
    const { cngPump } = useSelector(state => state.pumps)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude })
        })
    }, [])

    return (
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyB796fndw1WdQUItbShmuWyy-m7DGC5NzQ' }}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={15}
            margin={[50, 50, 50, 50]}
        >
            {cngPump.map((pump, i) =>
                <Marker
                    key={i}
                    lat={pump.latitude}
                    lng={pump.longitude}
                    text={pump.name}
                    pumpDetails={pump}
                    setPump={setPump}
                />)}
        </GoogleMapReact>
    )
}
