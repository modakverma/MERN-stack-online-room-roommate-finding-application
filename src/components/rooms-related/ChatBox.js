import React, { useEffect, useState } from 'react'
import axios from 'axios';
import RateReviewIcon from '@mui/icons-material/RateReview';

const ChatBox = ({roomId}) => {
    const [rating,setRating] = useState(5);
    const [comment,setComment] = useState('');
    const [emoji,setEmoji] = useState('😒')

    const handleReview = async(e) => {
        e.preventDefault();
        const today = new Date();
        const formattedDate = `${today.getDate().toString()}-${(today.getMonth()+1).toString()}-${today.getFullYear().toString()}`;
        console.log('Date:',formattedDate);
        console.log('DateType:',typeof formattedDate);

        try {
          const response = await axios.put('http://localhost:4000/api/rooms/review', {
            roomId:roomId,
            rating:rating,
            comment:comment,
            createdAt:formattedDate
          },
        );
          if (response.status === 200) {
            alert('Reviewed successfully');
          } else {
            alert('Review failed');
          }
        } catch (error) {
          console.error('Network error:', error);
        }
      };

      const emojiMap = {
        1: '😡',
        2: '😤',
        3: '😖',
        4: '😔',
        5: '😒',
        6: '😊',
        7: '😃',
        8: '😁',
        9: '😍',
        10: '😘',
      };
      
      useEffect(() => {
        setEmoji(emojiMap[rating] || '😒'); 
      }, [rating]);
      
    
  return (
    <div className='review-container'>
      <h3>Review & Rate</h3>
      <form action="" onSubmit={handleReview}>
        <fieldset className="rating">
            <label htmlFor="">Rating:</label>

            <h1>{emoji}{rating}</h1>

            <input type="range" min='1' max='10' step='1' value={rating} onChange={(e)=>setRating(e.target.value)} />
        </fieldset>
        <div className="commentbox">
            <label htmlFor="">Comment:</label>
            <textarea value={comment} onChange={(e)=>setComment(e.target.value)}/>
        </div>
       <button type='submit'>
        <RateReviewIcon/>
        SUBMIT REVIEW
        </button>
      </form>
    </div>
  )
}

export default ChatBox
