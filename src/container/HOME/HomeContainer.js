import React from "react";
import HomeComponents from "../../component/HomeComponents/HomeComponent";
import { useSelector, useDispatch } from "react-redux";

const HomeContainer = (props) => {
  const currState = useSelector((state) => state.numberChange);
  const dispatch = useDispatch();
  return (
    <>
      <HomeComponents {...props}
      state={currState} 
      dispatch = {dispatch}
      />
    </>
  );
};

export default HomeContainer;
