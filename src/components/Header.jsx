import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="lg-heading text-light main-heading">Travel the World</h1>

       <p className="text-light">
  Explore new destinations and experience the beauty of life.
</p>

<div className="header-images">
  <img src="/img/image7.jpg" alt="Travel 1" />
  <img src="/img/image8.jpg" alt="Travel 2" />
</div>

        <a href="#showcase" className="btn btn-primary text-red md-heading">
          Explore Places
        </a>
      </div>
    </header>
  );
}
