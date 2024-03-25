import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
           <nav>
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/email-confirmation">Email</Link>
                </li>
                <li>
                    <Link to="/detail">Detail</Link>
                </li>
                <li>
                    <Link to="/create-password">New Password</Link>
                </li>
                <li>
                    <Link to="/landing">Landing Page</Link>
                </li>
                </ul>
            </nav>
            <Outlet />
            <footer>
                <p>Footer</p>
            </footer>
        </div>
    )
}

export default Layout