import Card from "./Card";
import bruschetta from '../assets/bruschetta.png'
import lemon from '../assets/lemon-dessert.jpg'
import greek from '../assets/greek-salad.jpg'

const Specials = () => {
    return (
        <section className="specials">
            <div className="container">
                <div className="specials-header">
                    <h2>This week specials!</h2>
                    <button className="button-primary">Online Menu</button>
                </div>
                <div className="specials-cards">
                    <Card
                        image={bruschetta}
                        title='Bruschetta'
                        price='$5.99'
                        description='Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'/>

                    <Card
                        image={lemon}
                        title='Lemon Dessert'
                        price='$5.00'
                        description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."/>

                    <Card
                        image={greek}
                        title='Greek Salad'
                        price='$12.99'
                        description='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'/>
                </div>
            </div>
        </section>
    )
};

export default Specials;