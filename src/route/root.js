import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomeContainer from '../container/HOME/HomeContainer';
import { Routes, Route } from 'react-router-dom';
function Root() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<HomeContainer />} />
                    <Route path="*" element={<HomeContainer />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Root;
