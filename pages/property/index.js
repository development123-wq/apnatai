'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "../../app/globals.css";
import Aboutus from '../../components/about/AboutSection';
import Vision from '../../components/about/Vision';
import Mission from '../../components/about/Mission';
import ApNatai from '../../components/about/ApNatai';
import WhyUs from '../../components/about/WhyUs';


import Image from 'next/image';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import InnerBanner from '../../components/InnerBanner';
import AboutCommitment from '../../components/about/AboutCommitment';


const About = () => {
  return (
    <>
    <Header/>
    <InnerBanner/>
    
    <Footer/>



    </>
  );
};

export default About;
