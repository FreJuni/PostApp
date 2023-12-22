import React from 'react'
import { Link } from 'react-router-dom';
import { CalendarIcon } from '@heroicons/react/24/solid';

const PostItem = ({item}) => {
    const {date,image,title,id} = item;

  return (
    <article className='postItem-con'>
        <Link to={`${id}`}>
             <img src={image} alt={title} />
        </Link>
        <div className='info-con'>
            <h2>{title}</h2>
            <p><CalendarIcon className='clockIcon' />  {date}</p>
        </div>
    </article>
  )
}

export default PostItem