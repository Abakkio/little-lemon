import BookingForm from './BookingForm';
import restaurant from '../assets/restaurant.jpg'

const BookingPage = ({availableTimes, dispatch}) => {
    return (
        <>
            <section className="reserve">
                <div className="container">
                    <div className="reserve-text">
                        <h2>Reserve a table</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Sint eligendi suscipit sed in beatae nulla? 
                            Vero molestias, ad libero beatae cumque iste nemo
                            dignissimos ab nostrum voluptas sequi velit quasi.
                        Odit voluptate labore hic nulla consequuntur repellendus
                        necessitatibus ducimus, voluptatem maiores mollitia 
                        provident quaerat ratione odio error temporibus tempore 
                        veniam dolore consectetur voluptas illum tenetur dolorum itaque.
                        Rerum, beatae magni!</p>
                    </div>

                    <div className="reserve-img-wrapper">
                        <img src={restaurant} alt="" className='reserve-img' />
                    </div>
                </div>
            </section>

            <BookingForm availableTimes = {availableTimes} dispatch = {dispatch} />
        </>
    )
};

export default BookingPage;