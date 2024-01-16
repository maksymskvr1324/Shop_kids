import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer";

export default function Card(){
    return(
        <>
            <Navbar/>
            {/* <my-element>
                <p>This is child content</p>
            </my-element> */}
            <div className="card">
                <div className="card_img"><img src="" alt="" /></div>
                <div className="card_by">
                    <p>eGift Card</p>
                    <div className="price_out" id="price_out">US100$</div>
                    <p>You can't go wrong with a gift card. Choose an amount and
                        write a personalized message to make this gift your own.</p>
                    <div className="amount_price">
                        <p>Amount</p>
                        <div className="amount">
                            <div>US25$</div>
                            <div>US50$</div>
                            <div>US100$</div>
                            <div>US150$</div>
                            <div>US200$</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}