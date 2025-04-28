function Footer() {
    return(
        <div className="container">
            <footer className="py-3 my0 bg-primary">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-light">Home</a></li>
                    <li className="nav-item"><a href="/team" className="nav-link px-2 text-light">Team</a></li>
                    <li className="nav-item"><a href="/contact" className="nav-link px-2 text-light">Contact</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Scroll up</a></li>
                </ul>
                <p className="text-center text-light">&copy; Created by Muhammad Rayyan Ghifari</p>
            </footer>
        </div>
    )
}

export default Footer;
