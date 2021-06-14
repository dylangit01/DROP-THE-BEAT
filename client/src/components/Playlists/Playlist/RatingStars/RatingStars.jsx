import React, { useContext } from 'react';
import { DTBContext } from '../../../../contextAPI/DTBContext';
import StarIcon from '@material-ui/icons/Star';

const RatingStars = ({ rating }) => {
	console.log(rating);
	const stars = [];
	for (let i = 0; i < 5; i++){
				if (i < rating) {
          stars.push(
            <i className='fas fa-star' style={{ color: '#FFE227' }}>
              &nbsp;
            </i>
          );
        } else {
          stars.push(<i className='far fa-star'></i>);
        }
	}

  // const playlistRating = play
  return (
    <div>
      {stars}
    </div>
  );
};

export default RatingStars;
