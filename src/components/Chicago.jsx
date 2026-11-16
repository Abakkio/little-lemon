import hero from '../assets/hero.jpg'
import photo1 from '../assets/photo1.jpg'



const Chicago = () => {
    return (
        <>
            <section className="about">
                <div className="container">
                    <div className="about-img-wrapper">
                        <img src={photo1} alt="img chicago" className='about-img' />
                    </div>

                    <div className="about-text">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>Historia de Little Lemon Chicago:
                            Somos un Restaurante mediterraneo fundado en 1880
                            buscamos compartir nuestro amor por los detalles y
                            la cocina tradicional. Te esperamos en nuestro Local!
                        </p>
                    </div>    
                </div>
            </section>

            <section className='story'>

                <h2>Our story</h2>
                <div className='container'>
                    <div className='story-text'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloribus tempore obcaecati ad debitis dolores esse corrupti ipsa minus dolorum magnam velit unde laborum commodi neque culpa voluptatibus, quia facilis!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloribus tempore obcaecati ad debitis dolores esse corrupti ipsa minus dolorum magnam velit unde laborum commodi neque culpa voluptatibus, quia facilis!</p>
                    </div>

                    <div className='story-img-wrapper'>
                        <img src={photo1} alt="img story" className='story-img' />
                    </div>
                </div>

                <div className='container'>
                    <div className='story-img-wrapper'>
                        <img src={photo1} alt="img story" className='story-img' />
                    </div>

                    <div className='story-text'>
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloribus tempore obcaecati ad debitis dolores esse corrupti ipsa minus dolorum magnam velit unde laborum commodi neque culpa voluptatibus, quia facilis!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloribus tempore obcaecati ad debitis dolores esse corrupti ipsa minus dolorum magnam velit unde laborum commodi neque culpa voluptatibus, quia facilis!</p>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Chicago;