import styled from "styled-components";

const GetStartedContainer = styled.section`
  background-color: var(--color-navy-dark);
  padding: 6rem 10%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    padding: 5rem 5%;
  }

  h2 {
    color: var(--color-white);
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: -0.5px;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    color: var(--color-text-gray);
    max-width: 620px;
    font-size: 1.1rem;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  .btn-group {
    display: flex;
    gap: 1.2rem;
    margin-top: 1.5rem;
    justify-content: center;

    button {
      padding: 0.9rem 2.2rem !important;
      font-size: 1rem !important;
      font-weight: 600 !important;
      border-radius: 8px !important;
      cursor: pointer;
      display: inline-block;
      min-width: 160px;
    }

    .primary-btn {
      background-color: var(--color-green) !important;
      color: var(--color-white) !important;
      border: none !important;

      &:hover {
        background-color: var(--color-green-hover) !important;
      }
    }

    .secondary-btn {
      background-color: transparent !important;
      color: var(--color-white) !important;
      border: 1px solid var(--color-text-gray) !important;

      &:hover {
        background-color: rgba(255, 255, 255, 0.08) !important;
        border-color: var(--color-white) !important;
      }
    }
  }
`;
export default GetStartedContainer;
