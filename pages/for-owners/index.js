'use client';
import "../../app/globals.css";


import Image from 'next/image';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import InnerBanner from '../../components/InnerBanner';
import ForRentals from '../../components/ForRentals/ForRentals';


const ForRental = () => {
  return (
    <>
    <Header/>
    <InnerBanner/>
    <ForRentals/>






    <Footer/>
    </>
  );
};

export default ForRental;
