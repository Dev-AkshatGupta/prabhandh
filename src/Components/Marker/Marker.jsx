import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import mapPin from './../../Assets/map/marker.png'
import './Marker.css'


export const Marker = ({ pumpDetails }) => {
    const [pumpDetailStyle, setPumpDetailStyle] = useState({ display: 'none' })
const updatePump =(e)=>{
      setPump([pumpDetails])
    }

    return (<>
        <div
            className='map-pin'
            onMouseEnter={e => {
                setPumpDetailStyle({ display: 'block' });
            }}
            onMouseLeave={e => {
                setPumpDetailStyle({ display: 'none' })
            }}
            onClick={e=>updatePump(e)}

        >
            <img src={mapPin} />
        </div>

        <div
            className="shadow-lg rounded-2xl w-64 p-2 bg-white relative overflow-hidden"
            style={pumpDetailStyle}
        >
            {/* <img alt="moto" src="/images/object/1.png" className="absolute -right-20 -bottom-8 h-40 w-40 mb-4" /> */}
            <div className="w-4/6">
                <p className="text-gray-800 text-lg font-medium mb-2">
                    {pumpDetails.name}
                </p>
                <p className="text-gray-400 text-xs">
                    {pumpDetails.address}
                </p>
                <p className="text-indigo-500 text-xl font-medium">
                    {pumpDetails.vacant_machines}
                </p>
            </div>
        </div>
    </>
    )
}
