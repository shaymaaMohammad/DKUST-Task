import React from 'react';
import styled from 'styled-components';
/*****************  ProdcutRating Styles ***********************/

const DynamicStar = styled.span`
  font-size: 14px;
  display: inline-block;
  position: relative;
  font-family: Arial, sans-serif;
  cursor: default;
  line-height: 1;

  background: linear-gradient(
    to right,
    #ffb703 ${props => props.fillPercent}%,
    #ccc ${props => props.fillPercent}%
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &::before {
    content: '★';
  }
`;

const RatingStyles = {
  RatingWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 2px;

    margin-bottom: 0;

    span.review-text {
      color: #64748b;
      margin-left: 6px;
      font-size: 11px;
      white-space: nowrap;
    }
  `
};
/********************* End of Styles ************************************* */

/*************************************************************************** */
const ProductRating = ({ rating, reviewsCount }) => {
  const totalStars = 5;
  let stars = [];

  for (let i = 1; i <= totalStars; i++) {
    let fillPercent = 0;

    // Case A: The star is fully filled (e.g., rounds 1, 2, 3, and 4; rating 4.8)
    if (i <= Math.floor(rating)) {
      fillPercent = 100;
    } 
    // Case B: Fractional Star (5 turns, rating 4.8) -> Calculate the fraction and convert it to a percentage.
    else if (i === Math.ceil(rating)) {
      const decimalPart = rating % 1; 
      fillPercent = decimalPart * 100; 
    } 
    // Case C: The star is completely empty.
    else {
      fillPercent = 0;
    }

    // We place the dynamic star and pass the calculated ratio to it.
    stars.push(
      <DynamicStar key={i} fillPercent={fillPercent} />
    );
  }

  return (
    <RatingStyles.RatingWrapper>
      {stars}
      <span className="review-text">{rating} ({reviewsCount} reviews)</span>
    </RatingStyles.RatingWrapper>
  );
};

export default ProductRating;
