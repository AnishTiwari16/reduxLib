import React from 'react';
import { DATA_OF_PAGE } from '../../config/HomeConfig/HomeConfig';

const HomeComponents = (props) => {
    return (
        <>
            {DATA_OF_PAGE.map((props, index) => (
                <div key={index}>
                    <h2>{props.dataHeading}</h2>
                    <p>{props.dataDesc}</p>
                </div>
            ))}
            <div>
                <button onClick={() => props.decNumber()}>
                    {' '}
                    <span> - </span>{' '}
                </button>
                <input type="text" value={props.currentNumber} />
                <button onClick={() => props.incNumber()}>
                    <span> + </span>
                </button>
                <br />
                <button onClick={() => props.resetNumber()}>
                    <span> reset </span>
                </button>
            </div>
        </>
    );
};

export default HomeComponents;
