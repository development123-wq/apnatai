'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import '../public/css/Banner.css';

const Banner = () => {
  const router = useRouter();

  // Banner Slider
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Dropdown Data
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [locations, setLocations] = useState([]);

  // Real Estate Form States (ID values)
  const [type, setType] = useState(""); 
  const [locationId, setLocationId] = useState("");
  const [landSize, setLandSize] = useState("1200");
  const [budget, setBudget] = useState("156000-2900000");

  // ------------------------------------------------------------------
  // 🔥 FETCH PROPERTY TYPES
  // ------------------------------------------------------------------
  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const res = await axios.get(
          "https://techzenondev.com/apnatai/api/property-types?page=1"
        );

        const types = res?.data?.data?.data;

        if (Array.isArray(types)) {
          setPropertyTypes(types);

          // Default property type
          if (types.length > 0) setType(types[0].id.toString());
        }

      } catch (err) {
        console.error("Error fetching property types:", err);
      }
    };

    fetchTypes();
  }, []);

  // ------------------------------------------------------------------
  // 🔥 FETCH LOCATIONS
  // ------------------------------------------------------------------
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const res = await axios.get(
          "https://techzenondev.com/apnatai/api/locations?page=1"
        );

        const locs = res?.data?.data?.data;

        if (Array.isArray(locs)) {
          setLocations(locs);

          // Default location
          if (locs.length > 0) setLocationId(locs[0].id.toString());
        }

      } catch (err) {
        console.error("Error fetching locations:", err);
      }
    };

    fetchLocations();
  }, []);

  // ------------------------------------------------------------------
  // 🔥 FETCH BANNERS
  // ------------------------------------------------------------------
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get(
          'https://techzenondev.com/apnatai/api/active-banners'
        );
        if (response.data.success && response.data.data.length > 0) {
          setBanners(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };
    fetchBanners();
  }, []);

  // Auto slide
  useEffect(() => {
    if (banners.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % banners.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [banners]);

  // Split title
  const splitTitle = (title) => {
    if (!title)
      return {
        small: 'Welcome to ap-natai',
        large: 'Natai Concierge At Your Service',
      };
    const parts = title.split(' ');
    if (parts.length > 3) {
      return {
        small: parts.slice(0, 4).join(' '),
        large: parts.slice(4).join(' '),
      };
    }
    return { small: title, large: '' };
  };

  const currentBanner = banners[currentIndex] || {};
  const { small, large } = splitTitle(currentBanner.title);

  // ------------------------------------------------------------------
  // 🔥 HANDLE REAL ESTATE SEARCH
  // ------------------------------------------------------------------
  const handleRealEstateSearch = (e) => {
    e.preventDefault();

    router.push(
      `/search-for-real-estate?type=${encodeURIComponent(
        type
      )}&location=${encodeURIComponent(
        locationId
      )}&landsize=${encodeURIComponent(
        landSize
      )}&budget=${encodeURIComponent(budget)}`
    );
  };

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${currentBanner.image || '/default-banner.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out',
      }}
    >
      <div className="overlay"></div>

      <div className="banner-content">
        
        {/* LEFT FORM (Rentals) */}
        <div className="form-box">
          <div className="form-title form-title-one">
            <p>For Rentals</p>
          </div>

          <form>
            <label>Property Type</label>
            <select>
              <option>Villa</option>
            </select>

            <label>Booking Dates</label>
            <input type="date" defaultValue="2025-09-15" />

            <label>Number Of Guests</label>
            <select>
              <option>5</option>
            </select>

            <label>Budget</label>
            <select>
              <option>฿17,500 - ฿90,500</option>
            </select>

            <button type="submit">Search</button>
          </form>
        </div>

        {/* CENTER TEXT */}
        <div className="center-text banner-center-text fade-in">
          <h2>{small}</h2>
          <h1>{large}</h1>

          {currentBanner?.button_link || currentBanner?.button_text ? (
            <a
              href={currentBanner.button_link || currentBanner.button_text}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="learn-more">
                {currentBanner?.button_text ? 'Learn More' : 'Explore'}
              </button>
            </a>
          ) : (
            <button className="learn-more">Learn More</button>
          )}
        </div>

        {/* RIGHT FORM (Real Estate) */}
        <div className="form-box">
          <div className="form-title form-title-two">
            <p>For Real Estate</p>
          </div>

          <form onSubmit={handleRealEstateSearch}>
            
            {/* 🔥 DYNAMIC PROPERTY TYPES */}
            <label>Property Type</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              {propertyTypes.length > 0 ? (
                propertyTypes.map((pt) => (
                  <option key={pt.id} value={pt.id}>
                    {pt.name}
                  </option>
                ))
              ) : (
                <option>Loading...</option>
              )}
            </select>

            {/* 🔥 DYNAMIC LOCATIONS */}
            <label>Location</label>
            <select value={locationId} onChange={(e) => setLocationId(e.target.value)}>
              {locations.length > 0 ? (
                locations.map((loc) => (
                  <option key={loc.id} value={loc.id}>
                    {loc.name}
                  </option>
                ))
              ) : (
                <option>Loading...</option>
              )}
            </select>

            <label>Land Size</label>
            <select value={landSize} onChange={(e) => setLandSize(e.target.value)}>
              <option value="1200">1200 M² Area</option>
              <option value="800">800 M² Area</option>
              <option value="500">500 M² Area</option>
            </select>

            <label>Budget</label>
            <select value={budget} onChange={(e) => setBudget(e.target.value)}>
              <option value="156000-2900000">฿1,56,000 - ฿2,900,000</option>
              <option value="300000-5000000">฿3,00,000 - ฿50,00,000</option>
            </select>

            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;