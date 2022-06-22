import { Link } from 'react-router-dom';
import '../components/notFound.css';

const unauthorize = () => {
    return (
        <div id='unauthorized-bg'>

            <div>
                <div className='not-found-header'>Request Unauthorized</div>

                {/* <div className='xyz'> 
                <Link className='not-found-link' to='/'>
                   Home
                </Link>
                </div> */}
                
            </div>
        </div>
    );
}

export default unauthorize;