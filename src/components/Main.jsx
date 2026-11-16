import HomePage from "./HomePage";
import {Routes, Route} from 'react-router-dom';
import Chicago from './Chicago';
import BookingPage from "./BookingPage";

const Main = () => {
    return(
        <main>
            <Routes>
                <Route path='/' element={<HomePage/>}/>

                <Route path='/about' element={<Chicago/>}/>

                <Route path='/reservations' element={<BookingPage/>} />
            </Routes>
        </main>
    )
};

export default Main;