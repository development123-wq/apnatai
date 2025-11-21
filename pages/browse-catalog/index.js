'use client';
import "../../app/globals.css";


import Image from 'next/image';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import InnerBanner from '../../components/InnerBanner';
import BrowseCatalog from '../../components/BrowseCatalog/BrowseCatalog';


const BrowseCataloge = () => {
  return (
    <>
    <Header/>
    <InnerBanner/>
    <BrowseCatalog/>






    <Footer/>
    </>
  );
};

export default BrowseCataloge;
