'use client';
import "../../app/globals.css";


import Image from 'next/image';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import InnerBanner from '../../components/InnerBanner';
import Agents from '../../components/agents/agents';


const ForRental = () => {
  return (
    <>
    <Header/>
    <InnerBanner/>
   <Agents/>






    <Footer/>
    </>
  );
};

export default ForRental;
