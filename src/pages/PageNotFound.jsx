import React from 'react'
import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <div>
            404 PageNotFound
            <Link to="/"><br />
                <a href="" className='text-blue-500'> go back home</a>

            </Link>
        </div>
    )
}

export default PageNotFound