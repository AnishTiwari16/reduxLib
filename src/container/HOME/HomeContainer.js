import React from "react";
import HomeComponents from "../../component/HomeComponents/HomeComponent";
import { useSelector, useDispatch } from "react-redux";
import {incNumber} from '../../redux/actions/HomeActions.js/action.increment';
import {decNumber} from '../../redux/actions/HomeActions.js/action.decrement';
import {resetNumber} from '../../redux/actions/HomeActions.js/action.reset';

const HomeContainer = (props) => {
  const currState = useSelector((state) => state.numberChange);
  const dispatch = useDispatch();
  return (
    <>
      <HomeComponents {...props}
      state={currState} 
      dispatch = {dispatch}
      decNumber = {decNumber}
      incNumber = {incNumber}
      resetNumber = {resetNumber}
      />
    </>
  );
};

export default HomeContainer;
