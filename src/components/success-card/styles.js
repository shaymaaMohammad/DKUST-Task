import styled from "styled-components";

const Styles = styled.div`
  min-height: calc(100vh - 55px);
  background:var(--color-navy-hero);
  display: flex;
  justify-content: center;
  align-items: center;

  .successCard {
    width: 360px;
    min-height: 335px;
    background: white;
    border-radius: 0 0 14px 14px;
    border-top: 5px solid #00d26a;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 25px;
    text-align: center;
  }

  h1 {
    font-size: 20px;
    margin: 0 0 5px;
    color:var(--color-text-dark);
  }

  .subtitle {
    font-size:var(--font-size);
    color:var(--color-text-gray);
    margin-bottom: 45px;
  }

  .successIcon {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background:var(--color-gray-bg);
    color: var(color-green);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    margin-bottom: 15px;
  }

  h2 {
    font-size: 14px;
    color:var(--color-text-dark);
    margin: 0 0 6px;
  }

  .message {
    font-size:var(--font-size);
    color:var(--color-text-gray);
    margin: 0 0 20px;
  }

  button {
    border: none;
    background:var(--color-green);
    color: white;
    font-size: var(--font-size);
    font-weight: 600;
    padding: 9px 25px;
    border-radius: 7px;
    cursor: pointer;
  }

  .backLink {
    background: transparent;
    color:var(--color-text-gray);
    text-decoration: underline;
    margin-top: 68px;
    padding: 0;
  }

  @media (max-width: 480px) {
    .successCard {
      width: calc(100% - 30px);
      padding: 28px 20px;
    }
  }
`;

export default Styles;