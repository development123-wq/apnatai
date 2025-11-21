'use client';
import "../../app/globals.css";


import Image from 'next/image';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import InnerBanner from '../../components/InnerBanner';
import ForRealEstate from '../../components/ForRealEstate/ForRealEstate';


const ForRealEstates = () => {
  return (
    <>
    <Header/>
    <InnerBanner/>
    <ForRealEstate/>






    <Footer/>
    </>
  );
};

export default ForRealEstates;
