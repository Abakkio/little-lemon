import logo_footer from '../assets/logo_footer.png'


const Footer = () => {
    return(
        <footer>

            <div className='container'>
                <img src={logo_footer}
                    alt="logo footer little lemon"
                    className='footer-logo' />

                <section>
                    <h4>Navigation</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/order-online">Order Online</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </section>

                <section>
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="https://maps.google.com">Address</a></li>
                        <li><a href="tel:+10000000000">Phone number</a></li>
                        <li><a href="mailto:info@littlelemon.com">Email</a></li>
                    </ul>
                </section>

                <section>
                    <h4>Social Media Links</h4>

                    <ul>
                        <li><a href="https://facebook.com">Facebook</a></li>
                        <li><a href="https://twitter.com">Twitter</a></li>
                        <li><a href="https://instagram.com">Instagram</a></li>
                    </ul>
                </section>
                </div>
        </footer>
    )
};

export default Footer;