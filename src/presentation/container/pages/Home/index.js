import React from 'react'

import Default from "presentation/components/template/Default";
import HeroBanner from 'presentation/components/organism/HeroBanner';
import Dream from 'presentation/components/organism/Dream';
import SectionJoin from 'presentation/components/organism/SectionJoin';
import Loyalty from 'presentation/components/organism/Loyalty';

const Home = () => {
  return (
    <Default>        
      <HeroBanner title="3 negara. 20+ layanan. 1 platform on-demand terkemuka." video="https://www.youtube.com/embed/VJH5FJ5kaJA?enablejsapi=1&version=3&controls=0&rel=0&autoplay=1&loop=1&mute=1&playlist=VJH5FJ5kaJA&playsinline=1"/>
      <Dream/>
      <SectionJoin/>
      <Loyalty 
      img="https://cdn-site.gojek.com/uploads/home_spot_image_goclub_0555c2c8fe.svg"
      title="Gojek Loyalty Program"
      description="Make lots of transactions, get lots of prizes"
      btn="Check Benefits"
      />
    </Default>
  )
}

export default Home
