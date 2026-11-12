import star from '../assets/star.jpg'

const TestimonialCard = ({img, name, user, rating, comment}) => {
    return(
        <article className='testimonial-card'>
            <div className="testimonial-header">
                <img src={img} alt={name} className='testimonial-img' />
                <div className="testimonial-info">
                    <h3>{name}</h3>
                    <p>{user}</p>
                </div>
            </div>
            <span className='testimonial-rating'>{Array.from({length: rating}).map((_, i) =>
                    <img src={star} key={i} alt='' />)
                    }</span>
            <p>{comment}</p>
        </article>
    )
};

export default TestimonialCard;