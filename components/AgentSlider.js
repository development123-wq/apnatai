'use client';
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../public/css/AgentSlider.css';

export default function AgentSlider() {
  const sliderRef = useRef(null);
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextarrow: <div style={{ display: 'none' }} />,
    prevarrow: <div style={{ display: 'none' }} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await axios.get('https://techzenondev.com/apnatai/api/agents/home');
        console.log(response.data);

        if (response.data.status && response.data.data?.data) {
          setAgents(response.data.data.data);
        } else {
          console.error('Unexpected API format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching agents:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  return (
    <div className="agent-wrapper agent-wrapper-two">
      <div className="left-side">
        <h2 className="main-title">Meet</h2>
        <h2 className="highlight-title">Our Agents</h2>
        <p className="sub-text">
          Connect with our expert agents, dedicated to guiding you with clarity, trust, and deep market knowledge. Experience seamless support from professionals who prioritize your goals.
        </p>

        {/* Custom arrows below text */}
        <div className="arrows-desktop">
          <div className="custom-arrow" onClick={() => sliderRef.current?.slickPrev()}>
            ❮
          </div>
          <div className="custom-arrow" onClick={() => sliderRef.current?.slickNext()}>
            ❯
          </div>
        </div>
      </div>

      <div className="right-side">
        <Slider ref={sliderRef} {...settings}>
          {agents.map((agent, idx) => (
            <div className="agent-card" key={idx}>
              <div className="agent-header">
                <Image
                  src={`https://techzenondev.com/apnatai/public/${agent.image}`}
                  width={80}
                  height={80}
                  alt={agent.name}
                  className="agent-img"
                  style={{objectFit:'cover'}}
                />
                <div>
                  <h3 className="agent-name">{agent.title}</h3>
                  <p className="agent-listings">{agent.short_description}</p>
                </div>
              </div>

              {/* FIXED: remove HTML tags from description */}
              <p className="agent-description">
                {agent.description ? agent.description.replace(/<[^>]+>/g, '') : ''}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
