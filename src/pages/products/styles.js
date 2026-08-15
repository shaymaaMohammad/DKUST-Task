import styled from 'styled-components';

const PageStyles = styled.div`
  .topHeaderBg {
    background-color: var(--color-navy-hero);
    padding: 30px 0; 
    text-align: center;
    color: #ffffff;
    width: 100%;
    max-height: 300px;
    
    h1 {
      font-size: 30px;
      font-weight: 700;
      margin-bottom: 6px;
    }
    
    p {
      font-size: 14px;
      color: var(--color-white);
      max-width: 600px;
      margin: 0 auto;
    }
  }
  
  .headerContainer {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .mainContentWrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px 20px 60px 20px;
  }

  .toolbarRow {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;
    margin-bottom: 15px;
  }

  
  .productCountText {
    color: #888;
    font-size: 13px;
    margin-bottom: 40px;
    font-weight: 500;
  }

  .filterBar {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    button {
      border: 1px solid #eaeaea;
      padding: 6px 18px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      background-color: #ffffff;
      color: #4a5568;

      &.active {
        background-color: #28a745;
        color: #ffffff;
        border-color: #28a745;
      }

      &:hover:not(.active) {
        background-color: #f8f9fa;
      }
    }
  }

  .rightControls {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .sortSelect {
    padding: 6px 14px;
    border-radius: 6px;
    border: 1px solid #eaeaea;
    font-size: 13px;
    color: #4a5568;
    background-color: #fff;
    cursor: pointer;
    outline: none;

    &:focus {
      border-color: #28a745;    
    }
  } 

  .viewToggleGroup {
    display: flex;
    border: 1px solid #eaeaea; 
    border-radius: 8px; 
    overflow: hidden; 
    background-color: #ffffff;

    button {
      width: 40px; 
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none; 
      background-color: transparent; 
      cursor: pointer;
      font-size: 16px;
      color: #a0aec0;
      transition: all 0.2s ease;

      &.active {
        background-color: #28a745;
        color: #ffffff;
      }

      &:hover:not(.active) {
        background-color: #f8f9fa;
        color: #4a5568;
      }

      &:first-child {
        border-right: 1px solid #eaeaea;
      }
    }
  }
`;

export default PageStyles;
