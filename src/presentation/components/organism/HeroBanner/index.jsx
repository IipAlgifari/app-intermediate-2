import React from 'react'

const HeroBanner = (props) => {
  const {title, video} = props;
  
  return (
    <div className='banner'>
      <div className="banner__video-foreground">
       <iframe title="youtube background vidio" src={video} frameborder="0"></iframe>
      </div>
      <div className="container">
        <div className="banner__wrapper">
          <div className="banner__txt">
            <h1 className="banner__title">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
