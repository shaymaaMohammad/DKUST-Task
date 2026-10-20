import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  padding: 2rem 1.5rem;
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(76, 175, 80, 0.3);
    transform: translateY(-3px);
  }

  h3 {
    color: var(--color-green-hover);
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: baseline;

    .num-val {
      font-variant-numeric: tabular-nums;
    }

    .num-suffix {
      font-size: 1.6rem;
      font-weight: 600;
      margin-left: 2px;
      color: var(--color-green);
    }
  }

  p {
    color: rgba(255, 255, 255, 0.5) !important;
    font-size: 0.85rem !important;
    margin: 0 !important;
  }
`;

const HeroStatCard = ({ value, suffix, isFormatted, label }) => {
  const formatStatValue = (val) => {
    if (typeof val !== "number") return val;

    if (isFormatted && val >= 1000) {
      return (val / 1000).toFixed(0) + "K";
    }
    return val;
  };

  return (
    <CardWrapper className="stat-card">
      <h3>
        <span className="num-val">{formatStatValue(value)}</span>
        {suffix && <span className="num-suffix">{suffix}</span>}
      </h3>
      <p>{label}</p>
    </CardWrapper>
  );
};

export default HeroStatCard;
