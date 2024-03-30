import Button from 'presentation/components/atom/Button'
import React from 'react'

const Loyalty = (props) => {
  const {img, title, description, btn} = props;

  return (
    <div className='loyalty'>
      <div className="container">
        <div className="loyalty__wrapper">
          <div className="loyalty__img">
            <img src={img} alt="Loyalty" className="loyalty__img__el" />
          </div>
          <div className="loyalty__txt">
            <h2 className="loyalty__title">{title}</h2>
            <p className="loyalty__desc">{description}</p>
            <Button link='true'>{btn}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loyalty
