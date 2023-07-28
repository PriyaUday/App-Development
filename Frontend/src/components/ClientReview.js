import React from 'react';
import Navbar from './Navbar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/system';
const TransparentCard = styled(Card)`
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
`;

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    review: 'Great service! The booking process was smooth and the staff was very professional.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jane Smith',
    review: 'I had a wonderful experience using this portal to book my vehicle service. Highly recommended!',
    rating: 4,
  },
  {
    id: 3,
    name: 'David Johnson',
    review: 'The service was prompt and efficient. I am satisfied with the overall experience.',
    rating: 4.5,
  },
];

const ClientReviews = () => {
  return (
    <div>
    <Navbar/>
    <div>
      <br/><br/><br/><br/><br/><br/>
      <Navbar />
      <div>
        <h2 style={{ color: 'white', textAlign: 'center' }}>CLIENT REVIEWS</h2>
        <br/><br/>
        {reviews.map((review) => (
          <React.Fragment key={review.id}>
            <TransparentCard variant="outlined">
              <CardContent>
                <Typography variant="h5" component="div">
                  {review.name}
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                  {review.review}
                </Typography>
                <Rating value={review.rating} readOnly precision={0.5} />
              </CardContent>
            </TransparentCard>
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ClientReviews;
