import HomePage from "./HomePage";
import {Routes, Route} from 'react-router-dom';
import Chicago from './Chicago';
import BookingPage from "./BookingPage";
import { useReducer } from "react";
import {fetchAPI} from '../api';



export function initializeTimes() {

    return(fetchAPI(new Date()));
};

export function updateTimes(state, action) {
    return fetchAPI(new Date(action.date));
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