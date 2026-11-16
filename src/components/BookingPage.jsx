import restaurant from '../assets/restaurant.jpg'

const BookingPage = () => {
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

            <section className='reserve-form'>
                <div className='container'>
                    <form>
                        <fieldset>
                            <legend>Tu reserva</legend>

                            <div className='field'>
                                <label htmlFor='date'>Fecha</label>
                                <input type='date' id='date' name='date' />
                            </div>

                            <div className='field'>
                                <label htmlFor='time'>Horario</label>
                                <select id='time' name='time'>
                                    <option value="17:00">17:00</option>
                                    <option value="18:00">18:00</option>
                                    <option value="19:00">19:00</option>
                                    <option value="20:00">20:00</option>
                                    <option value="21:00">21:00</option>
                                    <option value="22:00">22:00</option>
                                </select>
                            </div>

                            <div className='field'>
                                <label htmlFor='guests'>Personas</label>
                                <input type="number" min={1} max={10} id='guests' name='guests' />
                            </div>

                            <div className='field'>
                                <label htmlFor='occasion'>Ocasion</label>
                                <select name='occasion' id='occasion'>
                                    <option value="birthday">Birthday</option>
                                    <option value="anniversary">Anniversary</option>
                                    <option value="business">Business</option>
                                    <option value="engagement">Engagement</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend>Tus datos</legend>

                            <div className='field'>
                                <label htmlFor="name">Nombre</label>
                                <input type="text" id='name' />
                            </div>

                            <div className='field'>
                                <label htmlFor="lastname">Apellido</label>
                                <input type="text" id='lastname' name='lastname' />
                            </div>

                            <div className='field'>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" />
                            </div>

                            <div className='field'>
                                <label htmlFor="tel">Telefono</label>
                                <input type="tel" id='tel' name='tel' />
                            </div>
                        </fieldset>

                        <button type='submit' className='button-primary'>Reservar</button>
                    </form>
               </div>
            </section>
        </>
    )
};

export default BookingPage;