import React from "react"
import Header from '../components/Header'
import Layout from '../components/layout';
import Hero from '../components/Hero'
import Trips from "../components/Trips";
import Testimonials from '../components/Testimonials';


export default function Home() {
  return (
    <Layout>
          <Header  />
          <Hero />
          <Trips heading = "Our Favorite Destinations" />
          <Testimonials />
      </Layout>
  
  )
  
}
