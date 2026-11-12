import hero from '../assets/hero.jpg'

const Hero = () => {
    return(
        <section className='hero'>
            <div className="container">
                <div className='hero-text'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button className='button-primary'>Reserve a table</button>
                </div>

                <div className='hero-img-wrapper'>
                    <img src={hero} alt="Waldo holding a tray of salmon appetizers" className='hero-img'/>
                </div>
            </div>
        </section>
    )
};

export default Hero;