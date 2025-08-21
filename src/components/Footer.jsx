import {SITE_NAME} from "../Constants/Site"


function Footer() {
    return (
        <>
            <footer className="  text-light pt-5 pb-4" bg="bg3">
                <div className="container text-center text-md-start">
                    <div className="row text-center text-md-start">


                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 fw-bold text-info">{SITE_NAME}</h5>
                            <p>
                                Creative web developer specializing in front-end development. Passionate about clean code, responsive design, and beautiful UI.
                            </p>
                        </div>


                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 fw-bold text-info">Quick Links</h5>
                            <p><a href="#about" className="text-light text-decoration-none">About</a></p>
                            <p><a href="#projects" className="text-light text-decoration-none">Projects</a></p>
                            <p><a href="#skills" className="text-light text-decoration-none">Skills</a></p>
                            <p><a href="#contact" className="text-light text-decoration-none">Contact</a></p>
                        </div>


                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 fw-bold text-info">Contact</h5>
                            <p><i className="bi bi-envelope-fill me-2"></i> your@email.com</p>
                            <p><i className="bi bi-telephone-fill me-2"></i> +123 456 7890</p>
                            <p><i className="bi bi-geo-alt-fill me-2"></i> Your City, Country</p>
                        </div>


                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 fw-bold text-info">Follow Me</h5>
                            <a href="#" className="btn btn-outline-light btn-floating m-1" role="button"><i className="bi bi-github"></i></a>
                            <a href="#" className="btn btn-outline-light btn-floating m-1" role="button"><i className="bi bi-linkedin"></i></a>
                            <a href="#" className="btn btn-outline-light btn-floating m-1" role="button"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="btn btn-outline-light btn-floating m-1" role="button"><i className="bi bi-instagram"></i></a>
                        </div>
                    </div>

                    <hr className="my-4 text-light"/>


                        <div className="row">
                            <div className="col-md-12 text-center">
                                <p className="mb-0">© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
                            </div>
                        </div>
                </div>
            </footer>

        </>
    )
}


export default Footer 