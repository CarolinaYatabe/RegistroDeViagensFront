import { Link } from 'react-router-dom';
import './style.css'

type ItensCrudProps = {
    selectedItem: 'Trips' | 'User';

};

export default function ItensCrud({ selectedItem }: ItensCrudProps) {
    const renderCrudItens = () => {
        switch (selectedItem) {
            case 'Trips':
                return (
                    <>
                        <nav className="navbar">
                            <ul className="nav-links">
                                <li><Link to="/trips">All Trips</Link></li>
                                <li><Link to="/add-trip">Add Trip</Link></li>
                            </ul>
                        </nav>
                    </>
                );

            case 'User':
                return (
                    <>
                        <nav className="navbar">
                            <ul className="nav-links">
                                <li><a href="#view-users">Users</a></li>
                                <li><a href="#add-user">Add User</a></li>
                            </ul>
                        </nav>
                    </>
                );
        };
    }

    return (
        <nav className="navbar">
            <ul className="nav-links">{renderCrudItens()}</ul>
        </nav>
    );
}