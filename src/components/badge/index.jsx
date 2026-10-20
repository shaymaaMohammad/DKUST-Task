import React from "react";
import styled from "styled-components";
// *****************stylesssssssssssss*****************************
const BadgeStyled = styled.span`
  padding: 4px 10px;
  border-radius: 20px;
  font-size: var(--font-size);
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
  display: inline-block;
  transition: all 0.3s ease;

  &.product-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    color: var(--color-white);
    background-color: var(--color-green);

    &.best-seller,
    &.new,
    &.popular,
    &.sale,
    &.top-rated {
      background-color: var(--color-green);
    }
  }

  &.hero-badge {
    background-color: rgba(76, 175, 80, 0.15);
    color: var(--color-green-hover);
    padding: 0.5rem 1.2rem;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;

const Badge = ({ text, className, variant = "product" }) => {
  const fullClassName = `badge ${variant}-badge ${className || ""}`.trim();

  return <BadgeStyled className={fullClassName}>{text}</BadgeStyled>;
};

export default Badge;
