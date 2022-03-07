import React from "react";

const ContactPage = () => {
    return(
        <div>
            <p>Contact Page</p>
            <table>
                <tr>
                    <td><input type="text" placeholder="Enter your Full Name" /></td>
                </tr>
                <tr>
                    <td><input type="email" placeholder="Enter your Email Address" /></td>
                </tr>
                <tr>
                    <td><input type="text" placeholder="Enter Subject" /></td>
                </tr>
                <tr>
                    <td> <textarea placeholder="Enter Your Message">
                        </textarea></td>
                </tr>
                <tr>
                    <td><button type="button">Submit</button></td>
                </tr>
            </table>
        </div>
    );
}

export default ContactPage;