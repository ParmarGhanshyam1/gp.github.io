import React from "react";
import './FooterNav.css';
import logoImg from '../../images/logo.png'

const FooterNav = () => {
    return(
        <>
        <div className="FooterNav">
            <table className="tbl">
                <tr className="tbl">
                    <th>Logo</th>
                    <th className="tbl2">MENU</th>
                    <th className="tbl3">ACCOUNT</th>
                    <th className="tbl4">NEWSLETTER</th>
                </tr>
                <tr>
                    <td></td>
                </tr>
                <tr>
                    <td rowSpan="2"><strong>ADDRESS:</strong>28 White tower, Street Name New York City, USA</td>
                    <td className="tbl3">Home</td>
                    <td className="tbl3">Account</td>
                    <td rowSpan="2" className="tbl4">Subscribe by our newsletter and get Update protidine</td>
                </tr>
                <tr>
                    <td className="tbl3">About</td>
                    <td className="tbl3">CheckOut</td>
                </tr>
                <tr>
                    <td rowSpan="2"><strong>TELEPHONE:</strong>+91 9876543210</td>
                    <td className="tbl3">Services</td>
                    <td className="tbl3">Login</td>
                    <td rowSpan="2" className="tbl4"><input type="text" className="inputText" placeholder="Enter your Mail"/><button type="button" className="btn">Subscribe</button></td>
                </tr>
                <tr>
                    <td className="tbl3">Testimomial</td>
                    <td className="tbl3">Register</td>
                </tr>
                <tr>
                    <td rowSpan="2"><strong>EMAIL:</strong>yourmain@gmail.com</td>
                    <td className="tbl3">Blog</td>
                    <td className="tbl3">Shopping</td>
                </tr>
                <tr>
                    <td className="tbl3">Contact</td>
                    <td className="tbl3">Widget</td>
                </tr>
            </table>
        </div>
        <div className="FootEnd">
            <p>2021 All Rights Reserved By Free Html Templates</p>
        </div>
        </>
    );
    
}

export default FooterNav;