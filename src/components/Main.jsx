import HomePage from "./HomePage";
import {Routes, Route, useNavigate} from 'react-router-dom';
import Chicago from './Chicago';
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import { useReducer } from "react";
import {fetchAPI, submitAPI} from '../api';



export function initializeTimes() {

    return(fetchAPI(new Date()));
};

export function updateTimes(state, action) {
    return fetchAPI(new Date(action.date));
};



const Main = () => {

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

    const navigate = useNavigate();

    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigate('/confirmed');
    }
}

    return(
        <main>
            <Routes>
                <Route path='/' element={<HomePage/>}/>

                <Route path='/about' element={<Chicago/>}/>

                <Route path='/reservations' element={<BookingPage  submitForm = {submitForm} availableTimes = {availableTimes} dispatch = {dispatch} />} />

                <Route path='/confirmed' element={<ConfirmedBooking/>} />
            </Routes>
        </main>
    )
};

export default Main;