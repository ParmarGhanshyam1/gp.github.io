import React from "react";
import './ShopWithusGrid.css';

const ShopWithUs = () => {
    return(
        <>
            <h1>Why Shop With Us</h1>
            <hr className="line"/>
            <table>
                <tr>
                    <td>
                        <div className="FastDelivery">
                            <p>Fast Delivery<br />
                            variations of passages of Lorem Ipsum available</p>
                        </div>
                    </td>
                    <td>
                        <div className="FreeShiping">
                            <p>Free Shiping</p>
                            <p>variations of passages of Lorem Ipsum available</p>
                        </div>
                    </td>
                    <td>
                        <div className="BestQuality">
                            <p>Best Quality</p>
                            <p>variations of passages of Lorem Ipsum available</p>
                            
                        </div>
                    </td>
                </tr>
            </table>
        </>
    );
}

export default ShopWithUs;