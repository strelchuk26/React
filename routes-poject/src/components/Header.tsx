import { Link } from 'react-router-dom';
import "./Header.css";

function Header() {
    return (
        <>
            <header>
                <ul>
                    <li>
                        <Link to="/biography">Biography</Link>
                    </li>
                    <li>
                        <Link to="/painting">Famous Painting</Link>
                    </li>
                    <li>
                        <Link to="/paintings">Collection</Link>
                    </li>
                </ul>
            </header>
        </>
    );
}

export default Header;