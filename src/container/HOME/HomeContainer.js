import React from 'react';
import { connect } from 'react-redux';
import HomeComponents from '../../component/HomeComponents/HomeComponent';
import {
    incNumber,
    decNumber,
    resetNumber,
} from '../../redux/actions/HomeActions/action.home';
const HomeContainer = (props) => {
    return (
        <>
            <HomeComponents {...props} />
        </>
    );
};

const mapDispatchToProps = (dispatch) => ({
    incNumber: (payload) => dispatch(incNumber(payload)),
    decNumber: (payload) => dispatch(decNumber(payload)),
    resetNumber: (payload) => dispatch(resetNumber(payload)),
});

const mapStateToProps = (state) => ({
    currentNumber: state.numberChange,
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
