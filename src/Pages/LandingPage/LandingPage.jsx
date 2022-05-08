import React, { useState } from "react";
import { Map, Marker } from "Components";
import "./LandingPage.css";
import { useSelector } from 'react-redux'

const LandingPage = () => {
   const { cngPump } = useSelector(state => state.pumps)
 
  const [selectedPump, setSelectedPump] = useState([{
    address: "Moti Jheel Bharatpur Kumher Road RAJ, Kota, Rajasthan 321001",
    id: "48bMkVmZwyokVIh52QqN",
    latitude: "27.231889395653546",
    longitude: "77.47069489506531",
    name: "HP Petrol Pump",
    occupied_machines: "4",
    vacant_machines: "0"
  }])

const pumpCardDataHandler = (e)=>{
 const currentId = e.target.value;
 const currentData = cngPump.filter(pump => pump.id === currentId)
 setSelectedPump(currentData)
}

    return (
    <>
     <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10  flex items-end justify-start relative">
            <Map pump={selectedPump} setPump={setSelectedPump}/>


            {/* ------------ it is for future  --------- */}
            {/* <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">

                  ADDRESS
                </h2>
                <p className="mt-1">
                  Photo booth tattooed prism, portland taiyaki hoodie neutra
                  typewriter
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL

                </h2>
                <a className="text-green-500 leading-relaxed">
                  example@email.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div> */}
            {/* ------------ it is for future-end  --------- */}
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              CNG Pumps
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Finding CNG Pumps made easier. Here are the Lists.....
            </p>
            <div className="relative mb-4 text-center">
              <select className="py-3" onChange={(e) => pumpCardDataHandler(e)}>
                {
                  cngPump.map(pump => {
                    return (
                      <option value={pump.id} key={pump.id} >{pump.name}</option>
                    )
                  })
                }
              </select>
            </div>
            <div className="relative mb-4">
              <img src="https://images.unsplash.com/photo-1585740452884-2a29a1d21514?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="pump-img" />
            </div>
            <div className="relative mb-4  h-100  bg-slate-200 px-4 py-4">
              {
                selectedPump.map(({ name, address, occupied_machines, vacant_machines }, i) => {
                  return (
                    <div key={i}>

                      <p className="text-xl">{name}</p>
                      <p className="pt-2  text-lg">{address}</p>
                      <p className="text-lg pt-2">Vacant Machines - <span className="text-green-600 text-2xl">{vacant_machines}</span></p>
                      <p className=" pt-2 text-lg">Occupied Machines- <span className="text-red-600 text-2xl">{occupied_machines}</span></p>
                    </div>
                  )
                })
              }
              
            </div>


            <p className="text-xs text-gray-500 mt-3">
              Prabhandh, an easy way to search CNG fill stations nearby you 😇
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
