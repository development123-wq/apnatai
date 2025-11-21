'use client';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import '../public/css/PropertySlider.css'; // Adjust the path if needed

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function PropertySlider() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const properties = [
    {
      img: '/images/property/pro1.png',
      title: 'Villa Sand - 5+1 Bedroom ',
      subtitle: 'Lorem Ipsum Is Simply Dummy Text Printing.....',
      bedrooms: 4,
      bathrooms: 5,
      area: '1200 m²',
      price: '฿40,000',
    },
    {
      img: '/images/property/pro2.png',
      title: 'The Natai Villas: Villa D',
      subtitle: 'Lorem Ipsum Is Simply Dummy Text Printing.....',
      bedrooms: 4,
      bathrooms: 5,
      area: '1200 m²',
      price: '฿15,000',
    },
    {
      img: '/images/property/pro3.png',
      title: 'The Natai Villas: Villa C',
      subtitle: 'Lorem Ipsum Is Simply Dummy Text Printing.....',
      bedrooms: 4,
      bathrooms: 5,
      area: '1200 m²',
      price: '฿25,000',
    },
    {
      img: '/images/property/pro1.png',
      title: 'Luxury Pool Villa - Kamala',
      subtitle: 'Lorem Ipsum Is Simply Dummy Text Printing.....',
      bedrooms: 4,
      bathrooms: 5,
      area: '1200 m²',
      price: '฿30,000',
    },
  ];

  return (
    <section className="property-section">
      <div className="property-bg">
        <Image src="/images/beach-bg1.jpg" alt="Background" fill priority />
      </div>

      <div className="property-content">
        <div className="heading-row">
          <div>
            <h2 className="slider-heading"> 
              Properties For <span>Rent</span>
            </h2>
            <p className="slider-heading">
              Lorem Ipsum Is Simply Dummy Text Of The Printing Has Been
              <br />
              The Lorem Ipsum Has Been The Standard Book.
            </p>
          </div>

          <div className="arrows-container arrow-container-nextprev">
            <div
              className="arrow prev"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <span>←</span>
            </div>
            <div
              className="arrow next"
              onClick={() => sliderRef.current.slickNext()}
            >
              <span>→</span>
            </div>
          </div>
        </div>

        <div className="slider-wrapper">
          <Slider ref={sliderRef} {...settings} className="property-slider">
            {properties.map((item, i) => (
              <div className="property-card" key={i}>
                <div className="image-wrapper">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={600}
                    height={400}
                  />
                </div>
                <div className="property-info">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>

                  <div className="property-features">
                    <div>🛏 {item.bedrooms} Bedrooms</div>
                    <div>🛁 {item.bathrooms} Bathrooms</div>
                    <div>📐 {item.area} Area</div>
                  </div>

                 
                </div>
                 <div className="property-footer">
                    <div className="price">{item.price}</div>
                    <a className="read-more" href="#">Read More »</a>
                  </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
