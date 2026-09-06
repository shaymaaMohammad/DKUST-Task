import styled from 'styled-components';

const ProductStyles = styled.div`
  width: 100%;
  height: 100%;

  .cardWrapper {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  background: #ffffff;

  border: 1px solid #e5e7eb;
  border-radius: 10px;

  box-shadow: 0 3px 8px rgba(15, 23, 42, 0.04);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 18px rgba(15, 23, 42, 0.08);
  }
}

  /* =========================
     PRODUCT IMAGE
  ========================= */

 .imageContainer {
  width: 100%;
  height: 135px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  background-color: ${({ bgCol }) =>
    bgCol || '#1d3557'};
}

 .mainCardGridIcon {
  color: #ffffff;
  font-size: 2.4rem;
  line-height: 1;
}
  

  /* =========================
     BADGE
  ========================= */

 .badge {
  position: absolute;

  top: 10px;
  left: 10px;

  padding: 4px 10px;

  border-radius: 20px;

  color: #ffffff;

  font-size: 9px;
  font-weight: 700;
  line-height: 1;

  white-space: nowrap;

  background-color: #20a464;
}
  .badge.best-seller,
  .badge.new,
  .badge.popular,
  .badge.sale,
  .badge.top-rated {
    background-color: #20a464;
  }

  /* =========================
     CONTENT
  ========================= */

  .cardContent {
    flex: 1;

    display: flex;
    flex-direction: column;

    padding: 17px 18px 16px;
  }

  .categoryText {
    margin: 0 0 6px;

    color: #94a3b8;

    font-size: 11px;
    font-weight: 500;

    line-height: 1.4;

    text-transform: uppercase;
  }

  .productTitle {
    min-height: 38px;

    margin: 0 0 9px;

    color: #1e293b;

    font-size: 17px;
    font-weight: 700;

    line-height: 1.35;
  }

 .productDescription {
  display: -webkit-box;

  height: 38px;

  margin: 0 0 10px;

  overflow: hidden;

  color: #64748b;

  font-size: 11px;
  line-height: 19px;

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

  /* =========================
     PRODUCT RATING
  ========================= */

  .cardContent > div:not(.cardFooter) {
    margin-bottom: 14px;
  }

  /* =========================
     FOOTER
  ========================= */

 .cardFooter {
  margin-top: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 14px;
}

 .priceText {
  flex-shrink: 0;

  color: #20a464;

  font-size: 17px;
  font-weight: 700;

  white-space: nowrap;

  span {
    margin-left: 2px;

    color: #94a3b8;

    font-size: 10px;
    font-weight: 500;
  }
}

  /* =========================
     BUTTONS
  ========================= */

 .buttonGroup {
  display: flex;
  align-items: center;

  justify-content: flex-end;

  gap: 7px;

  flex-shrink: 0;
}
 .buttonGroup > div {
  width: auto;
}

  .buttonGroup .custom-btn {
  width: auto;

  height: 30px;

  padding: 0 14px;

  border-radius: 4px;

  font-size: 10px;

  white-space: nowrap;
}

/* =========================
   MINIMAL CARD
========================= */

.minimalCard {
  min-height: 255px;

  .imageContainer {
    height: 120px;
  }

  .mainCardGridIcon {
    font-size: 2.2rem;
  }

  .cardContent {
    padding: 15px 16px 16px;
  }

  .categoryText {
    margin-bottom: 5px;

    font-size: 10px;
  }

  .productTitle {
    min-height: auto;

    margin-bottom: 14px;

    font-size: 16px;

    line-height: 1.35;
  }

  .cardFooter {
    margin-top: auto;
  }

  .priceText {
    font-size: 17px;
  }
}

  /* =========================
     TABLET
  ========================= */

  @media (max-width: 1024px) {
    .imageContainer {
      height: 155px;
    }

    .productTitle {
      font-size: 16px;
    }

    .productDescription {
      font-size: 11px;
    }
  }

  /* =========================
     MOBILE
  ========================= */

  @media (max-width: 768px) {
    .imageContainer {
      height: 170px;
    }

    .cardContent {
      padding: 18px;
    }

    .categoryText {
      font-size: 11px;
    }

    .productTitle {
      min-height: auto;
      font-size: 18px;
    }

    .productDescription {
      min-height: auto;
      font-size: 12px;
    }

    .priceText {
      font-size: 20px;
    }

    .buttonGroup .custom-btn {
      height: 38px;
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    .cardFooter {
      flex-direction: column;
      align-items: stretch;
    }

    .priceText {
      text-align: left;
    }

    .buttonGroup {
      width: 100%;
    }
  }
`;

export default ProductStyles;