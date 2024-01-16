import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer";

export default function Conctact(){
    return(
        <>
            <Navbar/>
                <div className="contact_us">
                    <p className="cont_toitle">Contact Us</p>
                    <div className="contact-info">
                        <div className="address">
                            <p>VISIT US</p>
                            <p>
                            500 Terry Francine St. <br />
                            San Francisco, CA 94158 <br />
                            123-456-7890
                            </p>
                        </div>

                        <div className="opening-hours">
                            <p>OPENING HOURS</p>
                            <p>
                            Mon - Fri: 7am - 10pm <br />
                            Saturday: 8am - 10pm <br />
                            Sunday: 8am - 11pm
                            </p>
                        </div>

                        <div className="customer-service">
                            <p>CUSTOMER SERVICE</p>
                            <p>
                            1-800-000-000 <br />
                            123-456-7890 <br />
                            info@mysite.com
                            </p>
                        </div>
                    </div>
                </div>
            
                <div className="contact_form">
                    <div className="contact_title">
                        <p>FOR ANY QUESTIONS, PLEASE SEND US A MESSAGE</p>
                    </div>
                    <div className="inp_name">
                        <label htmlFor="fname">First Name:</label>
                        <input type="text" id="fname" name="fname" />

                        <label htmlFor="lname">Last Name:</label>
                        <input type="text" id="lname" name="lname" />
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email:</label>
                        <input/>
                    </div>
                    <div className="subject">
                        <label htmlFor="subject">Subject:</label>
                        <input/>
                    </div>
                    <div className="message">
                        <label htmlFor="message">Message:</label>
                        <textarea ></textarea>
                    </div>
                    <button className="button_sub" type="submit">Submit</button>
                </div>
                <div className="contact_map"></div>
            <Footer/>
        </>
    )
}