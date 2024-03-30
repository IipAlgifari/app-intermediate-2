import React from 'react'

const DreamCard = (props) => {
  const {img, subtitle, description} = props;
  return (
    <div className="dream__card__item">
      <div className="dream__img">
        <img src={img} alt={subtitle} className="dream__img__el" />
      </div>
      <div className="dream__txt">
        <h2 className="dream__subtitle">{subtitle}</h2>
        <p className="dream__desc">{description}</p>
      </div>
    </div>
  )
}

export default DreamCard
