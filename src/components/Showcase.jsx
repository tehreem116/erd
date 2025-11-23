import React from 'react';

function Row({ img, title, text, reverse = false }) {
  return (
    <div className={`row ${reverse ? 'row2' : 'row1'}`}>
      <div className="img-box">
        <img src={img} alt={title} />
      </div>
      <div className="text-box">
        <h2 className="lg-heading text-black">{title}</h2>
        <p className="text-gray">{text}</p>
        <a href="#about" className="btn btn-secondary">More</a>
      </div>
    </div>
  );
}

export default function Showcase() {
  const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit incidunt nulla a corporis eveniet pariatur maiores.";

  return (
    <section id="showcase" className="showcase">
      <div className="container">
        <Row img="/img/image1.jpg" title="City View" text={text} />
        <Row img="/img/image2.jpg" title="Beach View" text={text} reverse />
        <Row img="/img/image3.jpg" title="Mountain View" text={text} />
      </div>
    </section>
  );
}
