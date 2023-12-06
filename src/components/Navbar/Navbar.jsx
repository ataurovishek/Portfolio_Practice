
import './Navbar.scss'
const Navbar = () => {
    return (
        <section className='Navbar'>
            <div className="wrapper">
                <span>Ataur ovi</span>

                <div className="social">
                    <a href=""><img src="/public/facebook.png" alt /></a>
                    <a href=""><img src="/public/instagram.png" alt /></a>
                    <a href=""><img src="/public/youtube.png" alt /></a>
                    <a href=""><img src="/public/dribbble.png" alt /></a>
                </div>
            </div>
        </section>
    );
};

export default Navbar;