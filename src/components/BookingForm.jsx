import { useState } from "react";

const BookingForm = ({availableTimes, dispatch}) => {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('17:00');
    const [guests, setGuests] = useState('1');
    const [occasion, setOccasion] = useState('birthday');

    /*-tus datos-*/
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');

    const handleDateChange = (e) => {
        setDate(e.target.value);
        dispatch({
            type: 'update_times',
            date: e.target.value
        });
    };

    return(
        <section className='reserve-form'>
                <div className='container'>
                    <form>
                        <fieldset>
                            <legend>Tu reserva</legend>

                            <div className='field'>
                                <label htmlFor='date'>Fecha</label>
                                <input  type='date'
                                        value={date}
                                        onChange={handleDateChange}
                                        id='date'
                                        name='date' />
                            </div>

                            <div className='field'>
                                <label htmlFor='time'>Horario</label>
                                <select value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                        id='time'
                                        name='time'>
                                    {availableTimes.map((hora) => (
                                        <option key={hora} value={hora}>{hora}</option>
                                    ))}
                                </select>
                            </div>

                            <div className='field'>
                                <label htmlFor='guests'>Personas</label>
                                <input  type="number"
                                        min={1} max={10}
                                        value={guests}
                                        onChange={(e) => setGuests(e.target.value)}
                                        id='guests'
                                        name='guests' />
                            </div>

                            <div className='field'>
                                <label htmlFor='occasion'>Ocasion</label>
                                <select value={occasion}
                                        onChange={(e) => setOccasion(e.target.value)}
                                        name='occasion'
                                        id='occasion'>
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
                                <input  type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        id='name'
                                        name='name' />
                            </div>

                            <div className='field'>
                                <label htmlFor="lastname">Apellido</label>
                                <input  type="text"
                                        value={lastname}
                                        onChange={(e) => setLastname(e.target.value)}
                                        id='lastname'
                                        name='lastname' />
                            </div>

                            <div className='field'>
                                <label htmlFor="email">Email</label>
                                <input  type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        id="email"
                                        name='email' />
                            </div>

                            <div className='field'>
                                <label htmlFor="tel">Telefono</label>
                                <input  type="tel"
                                        value={tel}
                                        onChange={(e) => setTel(e.target.value)}
                                        id='tel'
                                        name='tel' />
                            </div>
                        </fieldset>

                        <button type='submit' className='button-primary'>Reservar</button>
                    </form>
               </div>
            </section>
    )
};

export default BookingForm