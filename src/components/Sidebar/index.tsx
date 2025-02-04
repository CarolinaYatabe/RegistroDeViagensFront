import Trip from './assets/trip.png';
import Logo from './assets/logo.png';
import User from './assets/user.png';
import './style.css';

type SidebarProps = {
    setSelectedItem: (item: 'Trips' | 'User') => void;
};

export default function Sidebar({setSelectedItem}: SidebarProps) {
    return (
        <aside>
            <img src={Logo} alt='Logo registro de viagens' className='img__logo'/>
            <nav>
                <ul className='lista-sidebar'>
                    <li>
                        <a href='#' className='item__link' onClick={() => setSelectedItem('Trips')}>
                            <img src={Trip} alt=''/>
                            <span>Trip</span>
                        </a>
                    </li>
                    <li>
                        <a href='#' className='item__link' onClick={() => setSelectedItem('User')}>
                            <img src={User} alt=''/>
                            <span>User</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}