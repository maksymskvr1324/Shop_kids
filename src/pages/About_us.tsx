import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer";

export default function About_us(){
    return(
        <>
            <Navbar/>
            <div className="about_us">
                <div className="about_us-image">
                    <img src="https://static.wixstatic.com/media/45d10e_b42e7d17f04f4ef4814ef47d845905bf~mv2_d_3081_2187_s_2.jpg/v1/fill/w_1903,h_645,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/45d10e_b42e7d17f04f4ef4814ef47d845905bf~mv2_d_3081_2187_s_2.jpg" alt="" />
                </div>
                <div className="our-story">
                    <h1>Our Story</h1>
                    <div className="our-story-text">
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        <p>​This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}