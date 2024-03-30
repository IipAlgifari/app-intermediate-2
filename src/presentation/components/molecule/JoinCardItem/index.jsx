import Button from "presentation/components/atom/Button";

const JoinCardItem = (props) => {
  const {img, subtitle, description, btn} = props;
  
  return (
    <div className='join__card__item'>
      <div className="join__card__img">
        <img src={img} alt={subtitle} className='join__card__img__el' />
      </div>
      <h4 className='join__card__title'>{subtitle}</h4>
      <p className='join__card__desc'>{description}</p>
      <Button link='true' >{btn}</Button>
    </div>
  )
}

export default JoinCardItem;
