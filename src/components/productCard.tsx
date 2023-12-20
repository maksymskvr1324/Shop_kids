import React from "react";



// export function Card(img : any, name : any, price : any) : JSX.Element{
//     return (
//         <div className="section">
//             <div className="main">
//                 <div className="card-container">
//                     <div className="card-img-wrap">
//                         <img src={img} alt="" className="card-img" />
//                     </div>
//                     <div className="card-content">
//                         <div className="cadr-name"><a href="#"><span>{name}</span></a></div>
//                         <div className="card-price"><a href="#"><span>{price}</span></a></div>
//                         <div className="card-button">Add to cart</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
        // <div className="section">
        //     <div className="main">
        //         <div className="card-container">
        //             <div className="card-img-wrap">
        //                 <img src={require('./img/card_1.webp')} alt="" className="card-img" />
        //             </div>
        //             <div className="card-content">
        //                 <div className="cadr-name"><a href="#"><span>i`m a product</span></a></div>
        //                 <div className="card-price"><a href="#"><span>$19.00</span></a></div>
        //                 <div className="card-button">Add to cart</div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
//     )
// }

export const Card = (props : any) => {
    const { img, name, price } = props;
  
    // Тут ви можете використовувати img, name, price як частини ваших компонентів.
  
    return (
        <div className="section">
            <div className="main">
                <div className="card-container">
                    <div className="card-img-wrap">
                        <img src={img} alt={name} className="card-img" />
                    </div>
                    <div className="card-content">
                        <div className="cadr-name"><a href="#"><span>{name}</span></a></div>
                        <div className="card-price"><a href="#"><span>{price}</span></a></div>
                        <div className="card-button">Add to cart</div>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  // Потім використовуйте цей компонент у вашому коді:
//   export const ExampleComponent = () => {
//     return <Card img={require('./img/card_1.webp')} name="Product Name" price="$19.99" />;
//   };