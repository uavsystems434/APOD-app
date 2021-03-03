import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return(
        <Link to='/nasaphoto'>
        <div><div class="container">
      <a href="/nasaphoto" className="btn">Click for Daily Astronomy Image</a>
    </div>
        </div>
             </Link>
    )
}