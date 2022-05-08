import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { getPumpUserData } from "./Redux/Reducers-Redux/authSlice";
import { updateThePumpData } from "./Redux/Reducers-Redux/authSlice";
const ExperimentPage = () => {
  const uid = useParams();
  const dispatch = useDispatch();
  const [user, setUser] = useState({});

  useEffect(() => {
    dispatch(getPumpUserData({ uid: uid }));
  }, []);
  const pumpUserData = useSelector((state) => state.auth.pumpUser);
  return (
    <div>
      <button
        onClick={() =>
          dispatch(
            updateThePumpData({
              uid: "z55IZ5hlE7jt8pU06tag",
              data: {
                address: "bharatpur",
              },
            })
          )
        }
      >
        click me to change some data
      </button>
    </div>
  );
};

export default ExperimentPage;
