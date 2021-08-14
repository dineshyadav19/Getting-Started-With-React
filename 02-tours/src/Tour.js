import React,{useState} from 'react'

const Tour = ({id, name, price, image, info, removeTour}) => {
  const [readMore, setReadmore] = useState(false)
  return (
    <article className='single-tour'>
      <img src={image} alt={name}/>
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>$ {price}</h4>
        </div>
        <p>{readMore ? info : `${info.substring(0,150)}...`}
          <button onClick = {() => setReadmore(!readMore)}>{readMore ? 'show less' : 'show more'}</button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>Not Interested</button>
      </footer>
    </article>
  )
}

export default Tour;