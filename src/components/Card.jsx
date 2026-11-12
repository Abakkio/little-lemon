
const Card = ({image, title, price, description}) => {
    return (
        <article className="card">
            <img src={image} alt={title} className="card-img" />
            <div className="card-body">
                <div className="card-header">
                    <h3>{title}</h3>
                    <span>{price}</span>
                </div>

                <p>{description}</p>
                <a href="#">Order a delivery</a>
            </div>
        </article>
    )
};

export default Card;