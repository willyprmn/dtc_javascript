import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {
    return (
        <Fragment>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-sm-5 col-xs-12">
                            <div className="widget">
                                <img src={require('../images/Logo Baba Studio.png')} alt="" />
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-12">
                            <div className="widget">
                                <div className="widget__tittle">
                                    <h3>Tentang</h3>
                                </div>
                                <div className="widget__description">
                                    <ul>
                                        <li className="list-footer"><Link to="/" className="text-footer">Kupon</Link></li>
                                        <li className="list-footer"><Link to="https://academy.babastudio.com/course-package-frontend" className="text-footer">Kursus</Link></li>
                                        <li className="list-footer"><Link to="https://academy.babastudio.com/login" className="text-footer">Login</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-12">
                            <div className="widget__tittle">
                                <h3>Customer Service</h3>
                            </div>
                            <div className="widget__description">
                                <ul>
                                    <li className="list-footer"><Link to="/" className="text-footer">FAQ</Link></li>
                                    <li className="list-footer"><Link to="https://academy.babastudio.com/contact-us" className="text-footer">Kontak Kami</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12">
                            <div className="widget__tittle">
                                <h3>Subscribe</h3>
                            </div>
                            <div className="widget__description">
                                <p>Ikuti berita kami</p>
                                <form action="https://academy.babastudio.com/subscribe" className="form-inline">
                                    <div className="form-group">
                                        <input type="email" name="email" className="form-control" id="exampleInputEmail" placeholder="Enter your email" />
                                        <button type="submit" className="btn btn-default btn-plane-send"><i className="icon ion-md-paper-plane"></i></button>
                                    </div>
                                </form>
                                <p>Terkoneksi dengan kami</p>
                                <ul className="media">
                                    <li className="list-footer">
                                        <Link to="/" className="facebook"><i className="fa fa-facebook"></i></Link>
                                        <Link to="/" className="twitter"><i className="fa fa-twitter"></i></Link>
                                        <Link to="/" className="instagram"><i className="fa fa-instagram"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="container">
                        <div className="copyright__text text-center">
                            <p>Copyright @2018 <Link to="https://academy.babastudio.com" className="text-footer2">techfor.id</Link>, All right reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}

export default Footer;