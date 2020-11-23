import React from 'react';
import './../Home.scss';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <nav>
                <ul class="nav-container">
                    <li class="nav-item"><Link to="/" class="link">Home</Link></li>
                    <li class="nav-item"><Link to="/noticeboard" class="link">NoticeBoard</Link></li>
                    <li class="nav-item"><Link to="/login" class="link">Login</Link></li>
                    <li class="nav-item"><Link to="/signup" class="link">SignUp</Link></li>
                </ul>
            </nav>
            <p>여기는 Home입니다!</p>
        </div>
    );
};

export default Home;