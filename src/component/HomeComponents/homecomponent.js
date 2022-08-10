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
                <button onClick={() => props.IncrementAction()}>
                    {' '}
                    <span> - </span>{' '}
                </button>
                <input type="text" value={props.state} />
                <button onClick={() => props.DecrementAction()}>
                    <span> + </span>
                </button>
                <br />
                <button onClick={() => props.ResetAction()}>
                    <span> reset </span>
                </button>
            </div>
        </>
    );
};

export default HomeComponents;
