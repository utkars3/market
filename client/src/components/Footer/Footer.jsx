import "./Footer.scss";
import React from "react"
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa"
import Payment from "../../assets/payments.png"
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est culpa dignissimos aut perferendis eius ipsum ipsa, repellendus praesentium exercitationem itaque numquam et odit nulla? At nulla totam autem vel enim!</div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow/>
                    <div className="text">D Block, Damodar Hostel, JNU ,New Delhi , 110067</div>
                </div>
                <div className="c-item">
                    <FaMobileAlt/>
                    <div className="text">Phone: 7355570137</div>
                </div>
                <div className="c-item">
                    <FaEnvelope/>
                    <div className="text">Email: bhotiamarket@gmail.com</div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <span className="text">Headphones</span>
                <span className="text">Smart Watches</span>
                <span className="text">Bluetooth Speaker</span>
                <span className="text">Wireless Earbuds</span>
                <span className="text">Home Theatre</span>
                <span className="text">Projectors</span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    BHOTIAMARKET 2024 CREATED BY UTKARSH. PREMIUM E-COMMERCE
                    SOLUTIONS.
                </div>
                <img src={Payment} />
            </div>
        </div>
    </footer>
};

export default Footer;
