import './header.css'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className='header-Main' >
            <div className='header-child' >

            </div>

            <div className='header-child' >
                <Link className='link' to='/' >Home</Link>
                <Link className='link' to='about'>About</Link>
                <Link className='link' to='contact'>contact</Link>

                <div className='header-dropdown' >
                    <div className='link' >logics</div>
                    <div className='drp-down-links'>
                        <Link className='link' to='grid'>Grid</Link><br />
                        <Link className='link' to='ref'>UseReference</Link><br />
                        <Link className='link' to='string'>String</Link><br />
                        <Link className='link' to='ref'>UseRef</Link><br />
                    </div>
                </div>
            </div>

            <div className='header-child' >
                <div
                    style={{ float: 'right' }}
                    className='link header-dropdown '
                >
                    <strong>...</strong>
                {/* <div className='drp-down-links' >
                    <button className='link' >Profile</button>
                    <button className='link' >Logout</button>
                </div> */}
                
                </div>
            </div>
        </div>
    )
}

export default Header;