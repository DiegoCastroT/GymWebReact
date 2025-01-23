import React from 'react';
import '../css/VideoBackground.css';

const VideoBackground = () => (
    <div>
        <video autoPlay muted loop id="background-video">
            <source src="login.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
    </div>
);

export default VideoBackground;
