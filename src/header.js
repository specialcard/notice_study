import React from "react";
import './App.css';
function Header(){
    return(
        <>
        <div className='header clearfix'>
            <ul className='menu clearfix'>
                <li className='menus active'>메뉴1</li>
                <li className='menus'>메뉴2</li>
                <li className='menus'>메뉴3</li>
                <li className='menus'>메뉴4</li>
            </ul>
        </div>
        </>
    )
}

export default Header;