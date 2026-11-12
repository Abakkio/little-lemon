import TestimonialCard from "./TestimonialCard";
import avatar1 from '../assets/avatar1.jpg'
import avatar2 from '../assets/avatar2.jpg'
import avatar3 from '../assets/avatar3.jpg'
import avatar4 from '../assets/avatar4.jpg'

const Testimonials = () => {

    const reviews = [
        {
        id: 1,
        name: 'Bobby',
        user: '@Brochacho',
        rating: 4,
        img: avatar1,
        comment: 'Great food, a bit slow service.'
        },

        {
        id: 2,
        name: 'Ana',
        user: '@Ana32',
        rating: 3,
        img: avatar2,
        comment: 'Good, but nothing special.'
        },

        {
        id: 3,
        name: 'Lucrecia',
        user: '@Luckretya',
        rating: 4,
        img: avatar3,
        comment: 'Loved the Greek salad!'
        },

        {
        id: 4,
        name: 'Ippo',
        user: '@Makanaochi',
        rating: 5,
        img: avatar4,
        comment: 'Best lemon dessert in Chicago!'
        }
    ]

    return (
        <section className="testimonials">
            <div className="container">
            <h2>Testimonials</h2>
                <div className="testimonials-cards">
                    {reviews.map((review) => (
                        <TestimonialCard
                        key={review.id}
                        {...review}
                        />)
                    )}
                </div>
            </div>
        </section>
    )
};

export default Testimonials;