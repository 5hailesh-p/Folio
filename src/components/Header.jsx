function Header(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg  sticky-top" bg="nav">
                <div className="container">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto gap-md-5">
                            <li className="nav-item">
                                <a className="nav-link active btn btn-nav" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn btn-nav" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn btn-nav" href="#">Pricing</a>
                            </li>
                            <li className="nav-item position-relative">
                                <a className=" btn  btn-dwn" href="#" download >Download</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header