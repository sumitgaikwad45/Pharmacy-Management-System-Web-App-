import { Link } from 'react-router-dom';
import '../components/notFound.css';

const NotFound = () => {
    return (
        <div id='not-found-bg'>

            <div>
                <div className='not-found-header'>Error 404 Page Not Found</div>

                <div className='xyz'> 
                <Link className='not-found-link' to='/'>
                   Home
                </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;