import React from 'react'
import './Home.css';

const Home = () => {
    return (
        <main className="main-container">
          <div className="background-image">
            <img
              src={`${process.env.PUBLIC_URL}/satellite-image.png`}
              alt="Satellite imagery background"
              className="image-fill"
            />
          </div>
          <div className="content text-center">
            <h1 className="main-title">GeoWeb</h1>
            <p className="subtitle">Advanced Satellite Image Labeling Platform</p>
          </div>
          <div className="button-group">
            <button className="get-started-btn">Get Started</button>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </main>
      );
}

export default Home