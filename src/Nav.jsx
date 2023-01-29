import React, {useState} from 'react'
import './Nav.css';
export const Nav = () => {
    const[toggle, setToggle] = useState(false);
    const handleClick = () => setToggle(!toggle);
  return (
    <nav>
        <ol className={!toggle ? 'none' : 'color'}>
            <li className='logo'><img src='/images/logo.svg' alt=''/></li>
            <li className={!toggle ? 'hidden' : 'visiable'}>
                <button onClick={handleClick} className='navbtn'>
                {!toggle ? <img src='/images/icon-menu.svg' alt=''/> : <img src='/images/icon-menu-close.svg' alt=''/>}
                </button>
            </li>
            <li className={!toggle ? 'hiddenli' : 'visiableli'}>home</li>
            <li className={!toggle ? 'hiddenli' : 'visiableli'}>new</li>
            <li className={!toggle ? 'hiddenli' : 'visiableli'}>popular</li>
            <li className={!toggle ? 'hiddenli' : 'visiableli'}>trending</li>
            <li className={!toggle ? 'hiddenli' : 'visiableli'}>categories</li>
        </ol>
    </nav>
  )
}
