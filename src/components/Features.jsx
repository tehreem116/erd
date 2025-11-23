import React from 'react';

export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="box-wrapper">
          <div className="box box-1">
            <i className="fas fa-route fa-2x text-red"></i>
            <h2 className="md-heading">Adventure</h2>
            <p>Explore the wildest places on Earth.</p>
          </div>
          <div className="box box-2">
            <i className="fas fa-strikethrough fa-2x"></i>
            <h2 className="md-heading">Low Price</h2>
            <p>Affordable adventures for everyone.</p>
          </div>
          <div className="box box-3">
            <i className="fas fa-user-check fa-2x text-red"></i>
            <h2 className="md-heading">Experienced Guides</h2>
            <p>Meet the experts who know the land.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
