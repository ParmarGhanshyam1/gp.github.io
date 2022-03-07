import React from "react";
import './ProductGrid.css';
import p1 from '../../images/p1.png';
import p2 from '../../images/p2.png';
import p3 from '../../images/p3.png';
import p4 from '../../images/p4.png';
import p5 from '../../images/p5.png';
import p6 from '../../images/p6.png';
import p7 from '../../images/p7.png';
import p8 from '../../images/p8.png';
import p9 from '../../images/p9.png';
import p10 from '../../images/p10.png';
import p11 from '../../images/p11.png';
import p12 from '../../images/p12.png';
const Products = () => {
    return(
        <div>
            <p className="title">Our Products</p>
            <hr className="line"/>
            <div className="divs">
                <table cellSpacing="25px">
                    <tr>
                        <td className="Product"><img src={p1} className="imgs"/><br/>Men's Shirt $75</td>
                        <td className="Product"><img src={p2} className="imgs"/><br/>Men's Shirt $80</td>
                        <td className="Product"><img src={p3} className="imgs"/><br/>Women's Dress $68</td>
                    </tr>
                    <tr>
                        <td className="Product"><img src={p4} className="imgs"/><br/>Women's Dress $75</td>
                        <td className="Product"><img src={p5} className="imgs"/><br/>Women's Dress $80</td>
                        <td className="Product"><img src={p6} className="imgs"/><br/>Women's Dress $68</td>
                    </tr>
                    <tr>
                        <td className="Product"><img src={p7} className="imgs"/><br/>Women's Dress $75</td>
                        <td className="Product"><img src={p8} className="imgs"/><br/>Men's Shirt $80</td>
                        <td className="Product"><img src={p9} className="imgs"/><br/>Men's Shirt $68</td>
                    </tr>
                    <tr>
                        <td className="Product"><img src={p10} className="imgs"/><br/>Men's Shirt $75</td>
                        <td className="Product"><img src={p11} className="imgs"/><br/>Men's Shirt $80</td>
                        <td className="Product"><img src={p12} className="imgs"/><br/>Women's Dress $68</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Products;