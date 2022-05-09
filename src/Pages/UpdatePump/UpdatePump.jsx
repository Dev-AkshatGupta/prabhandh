import GoogleMapReact from "google-map-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateThePumpData } from "../../Redux/Reducers-Redux/authSlice";
const UpdatePump = () => {
  const [pumpDetails, setPumpDetails] = useState({});
  const [coordinates, setCoordinates] = useState({
    lat: 0,
    lng: 0,
  });

  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.auth.currentUser);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
    setPumpDetails({
      ...pumpDetails,
      uid,
      longitude: coordinates.lng,
      latitude: coordinates.lat,
    });
  }, [uid]);

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Update Pump
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Update or add new pumps
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) =>
                    setPumpDetails({ ...pumpDetails, name: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Address
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) =>
                    setPumpDetails({ ...pumpDetails, address: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="vacant" className="leading-7 text-sm text-gray-600">
                  Vacant
                </label>
                <input
                  type="number"
                  name="vacant"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) =>
                    setPumpDetails({
                      ...pumpDetails,
                      vacant_machines: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  for="occupied"
                  className="leading-7 text-sm text-gray-600"
                >
                  Occupied
                </label>
                <input
                  type="number"
                  name="occupied"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) =>
                    setPumpDetails({
                      ...pumpDetails,
                      occupied_machines: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
                onClick={() => {
                  dispatch(updateThePumpData(pumpDetails));
                  setPumpDetails({});
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdatePump;
