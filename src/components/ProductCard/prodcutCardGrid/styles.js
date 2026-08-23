import styled from 'styled-components';

const ProductStyles = styled.div`
  .cardWrapper { 
    background: #ffffff;
    border: 1px solid #eaeaea;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    padding-bottom: 20px;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    }
  }
  .mainCardGridIcon {
  font-size: 3rem;
  color: #ffffff;
}


  .imageContainer {
    
    background-color: ${props => props.bgCol || '#1d3557'};
    height: 180px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 48px;
  }

  .badge {
    position: absolute;
    top: 15px;
    left: 15px;
    background-color: #28a745;
    color: white;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: bold;
  }

  .cardContent {
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-grow: 1; 
  }

  .categoryText {
    font-size: 12px;
    color: #888888;
    text-transform: uppercase;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .productTitle {
    font-size: 18px;
    font-weight: 700;
    color: #1a253c;
    margin: 0 0 10px 0;
  }

  .productDescription {
    font-size: 13px;
    color: #666666;
    line-height: 1.5;
    margin-bottom: 15px;
    min-height: 60px; 
    flex-grow: 1;
  }

  .cardFooter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto; 
  }

  .priceText {
    font-size: 18px;
    font-weight: 700;
    color: #2ec4b6;
    
    span {
      font-size: 12px;
      color: #888888;
      font-weight: normal;
    }
  }

  .buttonGroup {
    display: flex;
    gap: 6px;
  }
`;

export default ProductStyles;
