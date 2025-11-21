'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import '../public/css/Partners.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const partners = [
  { id: 1, image: '/images/partners/image 3.png' },
  { id: 2, image: '/images/partners/image 4.png' },
  { id: 3, image: '/images/partners/image 5.png' },
  { id: 4, image: '/images/partners/image 6.png' },
  { id: 5, image: '/images/partners/image 7.png' },
  { id: 6, image: '/images/partners/image 7.png' },
];

export default function PartnersSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="partners-section">
      <div className="fancy-mainheading">
     <h2>Our <span>Partners</span></h2>
     <p></p>
     </div>
      <Slider {...settings} className="partners-slider">
        {partners.map((partner) => (
          <div className="partner-logo" key={partner.id}>
            <Image
              src={partner.image}
              alt={`Partner ${partner.id}`}
              width={120}
              height={60}
              objectFit="contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
