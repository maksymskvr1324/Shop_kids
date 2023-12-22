import React from 'react'
import { Navbar } from '../components/Navbar'


export default function Registr(){
    return(

        <>
        <Navbar/>
        <form className="decor">
                <div className="form-left-decoration"></div>
                <div className="form-right-decoration"></div>
                <div className="circle"></div>
            <div className="form-inner">
                <h3>Написать нам</h3>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Сообщение..."></textarea>
                <input type="submit" value="Отправить" />
      </div>
    </form>
        </>
        
    )
}