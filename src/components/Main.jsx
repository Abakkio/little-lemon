import HomePage from "./HomePage";
import {Routes, Route} from 'react-router-dom';
import Chicago from './Chicago';
import BookingPage from "./BookingPage";
import { useReducer } from "react";



function initializeTimes() {
    
    return(['17:00',
            '18:00',
            '19:00',
            '20:00',
            '21:00',
            '22:00']);
};

function updateTimes(state, action) {
    return state;
};

const Main = () => {

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

    return(
        <main>
            <Routes>
                <Route path='/' element={<HomePage/>}/>

                <Route path='/about' element={<Chicago/>}/>

                <Route path='/reservations' element={<BookingPage availableTimes = {availableTimes} dispatch = {dispatch} />} />
            </Routes>
        </main>
    )
};

export default Main;