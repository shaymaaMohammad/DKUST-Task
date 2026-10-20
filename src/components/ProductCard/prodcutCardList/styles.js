import styled from "styled-components";

const ListStyles = styled.div`
  .cardWrapper {
    background: var(--color-white);
    border: 1px solid #eaeaea;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;

    &:hover {
      transform: translateX(5px);
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
    }
  }
  .mainCardListIcon {
    font-size: 2.5rem;
    color: var(--color-white);
  }

  .imageContainer {
    background-color: ${(props) => props.bgCol || "#1d3557"};
    width: 200px;
    height: 160px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-white);
    font-size: 48px;
    flex-shrink: 0;
  }

  /* .badge {
    position: absolute;
    top: 12px;
    left: 12px;
    background-color: var(--color-green); 
    color: var(--color-white);
    padding: 3px 10px;
    border-radius: 20px;
    font-size: var(--font-size);
    font-weight: bold;
  } */

  .cardContent {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
  }

  .categoryText {
    font-size: var(--font-size);
    color: var(--color-text-gray);
    text-transform: uppercase;
    margin-bottom: 4px;
  }

  .productTitle {
    font-size: 16px;
    font-weight: 700;
    color: var(--color-text-gray);
    margin: 0 0 6px 0;
  }

  .productDescription {
    font-size: 12px;
    color: var(--color-text-gray);
    line-height: 1.4;
    margin-bottom: 10px;
    max-width: 600px;
  }

  .rightSideAction {
    padding: 20px 30px;
    border-left: 1px solid #f0f0f0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 15px;
    min-width: 180px;
    flex-shrink: 0;
  }

  .priceText {
    font-size: 16px;
    font-weight: 700;
    color: var(--color-green);

    span {
      font-size: var(--font-size);
      color: var(--color-text-gray);
      font-weight: normal;
    }
  }

  .buttonGroup {
    display: flex;
    gap: 8px;
  }
`;

export default ListStyles;
