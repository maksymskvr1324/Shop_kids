import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer"; 

export default function Conctact(){
    // let map: google.maps.Map;
    // const center: google.maps.LatLngLiteral = { lat: 49.84235186414242, lng: 24.067245020297015 };

    // function initMap(): void {
    //     map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    //         center,
    //         zoom: 18,
    //         mapId: "DEMO_MAP_ID",
    //         mapTypeId: "satellite",
    //     });
    //     map.setTilt(45);
    // }
    // Initialize and add the map
    let map;
    async function initMap(): Promise<void> {
    // The location of Uluru
    const position = { lat: 49.84235186414242, lng: 24.067245020297015 };

    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

    // The map, centered at Uluru
    map = new Map(
        document.getElementById('map') as HTMLElement,
        {
        zoom: 18,
        center: position,
        mapId: 'DEMO_MAP_ID',
        mapTypeId: "satellite",
        }
    );
    
    map.setTilt(45);

    // The marker, positioned at Uluru
    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: 'Uluru'
    });
    }
    window.addEventListener('load', initMap)
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
                        <div>
                            <label htmlFor="fname">First Name:</label>
                            <input type="text" id="fname" name="fname" />
                        </div>

                        <div>
                            <label htmlFor="lname">Last Name:</label>
                            <input type="text" id="lname" name="lname" />
                        </div>
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
                <div id="map" className="contact_map"></div>
            <Footer/>
        </>
    )
}