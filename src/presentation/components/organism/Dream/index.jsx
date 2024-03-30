import React from 'react'

// components
import Button from 'presentation/components/atom/Button'
import DreamCard from 'presentation/components/molecule/DreamCardItem'

const Dream = () => {
 const dataDream = [
  {
    img: "https://cdn-site.gojek.com/uploads/170_mil_340e5c5603.png",
    subtitle: "190 million+",
    description: "app download since 2015"
  },
  {
    img: "https://cdn-site.gojek.com/uploads/2_million_04b50bc75a.png",
    subtitle: "2 million+",
    description: "Driver partners"
  },
  {
    img: "https://cdn-site.gojek.com/uploads/50_million_c34b6365a4.png",
    subtitle: "900,000+",
    description: "GoFood merchants"
  },
  {
    img: "https://cdn-site.gojek.com/uploads/12x_growth_cc1a49b8c3.png",
    subtitle: "2.448x",
    description: "jump in download from 2015 to 2024"
  },
 ]
  return (
    <div className='dream'>
      <div className="container">
        <div className="dream__head">
          <h2 className="dream__title">We scale like a dream</h2>
          <Button type="button">Scale with us</Button>
        </div>
        <div className="dream__body">
          <div className="dream__card">
            <div className="dream__card__list">
              {dataDream.map((val, idx) => (
                <DreamCard key={`dream__card__item-${idx}`} img={val.img} subtitle={val.subtitle} description={val.description}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dream
