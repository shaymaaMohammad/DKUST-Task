import styled from 'styled-components';

const Styles = styled.div`
  font-family: var(--font-primary);
  background-color: #f8fafc; 
  min-height: 100vh;
  width: 100%;

  .breadcrumbContainer {
    background-color: #ffffff;
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px solid #f1f5f9;
  }

  .breadcrumb {
    color: #94a3b8;
    font-size: 14px;
    margin: 0;
    a { 
      color: #94a3b8; 
      text-decoration: none;
       &:hover {
         color: #00c853; 
        }
       }
    span.current-product {
       font-weight: 600;
        color: #475569; 
      }
  }

  .backLinkSection {
    width: 100%;
    padding: 25px 0 10px 0;
  }

  .backLinkRow a {
    text-decoration: none; 
    color: #64748b; 
    font-size: 14px; 
    font-weight: 500;
    display: inline-flex; 
    align-items: center; 
    gap: 8px;
     &:hover { 
      color: #0f172a;
     }
  }

  .productDetailCard {
    background: #ffffff; 
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,0.03);
    border: 1px solid #e2e8f0;
    margin-top: 15px;
    margin-bottom: 60px;
  }

  .productVisual {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 450px;
    padding: 40px 20px;
    gap: 20px;
  }


  .mainVisualIcon {
    font-size: 6rem; 
    color: #ffffff;
    display: block;
  }

  .visualBadge {
    background: #00c853;
    color: #ffffff;
    padding: 6px 20px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: bold;
    display: inline-block;
  }

  .productInfo {
     padding: 40px;
      display: flex; 
      flex-direction: column; 
      justify-content: center; 
    }
  .categoryTag {
     background: #f3f4f6; 
     color: #6b7280; 
     padding: 4px 12px; 
     border-radius: 6px; 
     font-size: 13px; 
     align-self: flex-start; 
     font-weight: 500; }
  h2 {
     font-size: 32px; 
     font-weight: 800; 
     color: #0f172a; 
     margin: 15px 0 10px 0;
     }
  .ratingRow { margin-bottom: 20px; 
    display: flex; 
    align-items: center; 
    gap: 8px; 
    span { 
      color: #64748b; 
      font-size: 14px; } }
  .description { color: #475569; 
    line-height: 1.6; 
    font-size: 15px; 
    margin-bottom: 20px; }

  .featureList {
    list-style: none;
     padding: 0; 
     margin: 0 0 25px 0; 
     display: flex; 
     flex-direction: column; 
     gap: 10px;
    li { display: flex; 
      align-items: center; 
      gap: 10px; 
      color: #334155; 
      font-size: 15px; 
      i { 
        color: #00c853; 
        font-size: 16px; 
      } 
    }
  }

  .priceRow {
    display: flex; 
    align-items: baseline; 
    gap: 4px; 
    margin-bottom: 25px;
    .amount { 
      font-size: 36px; 
      font-weight: 800;
       color: #00c853; 
      }
    .period { 
      color: #94a3b8; 
      font-size: 15px; 
    }
  }

  .quantityRow { display: flex; 
    align-items: center; 
    gap: 15px; 
    margin-bottom: 30px; 
    .qty-label { 
      font-weight: 600; 
      color: #1e293b; 
      font-size: 15px; 
    }
   }
  
  .qtySelector {
    display: flex; 
    align-items: center;
     border: 1px solid #cbd5e1; 
     border-radius: 6px; 
     overflow: hidden;
    button { 
      padding: 6px 14px;
       border: none; 
       background: #f8fafc; 
       font-size: 16px; 
       cursor: pointer; 
       color: #64748b;
        &:hover:not(:disabled) {
           background: #e2e8f0; 
          } &:disabled {
             color: #cbd5e1; 
            }
           }
    input {
       width: 35px;
        text-align: center; 
        border: none; 
        font-weight: bold; 
        color: #0f172a; 
        outline: none; 
      }
  }

  .relatedSection {
    margin-top: 50px;
     border-top: 1px solid #e2e8f0; 
     padding-top: 40px;
    h3 { 
      font-size: 22px; 
      color: #0f172a; 
      margin-bottom: 25px; 
      font-weight: 700; 
    }
  }
  
  .errorContainer {
    padding: 100px 20px;
  }
  .errorIcon {
    font-size: 4rem; 
    color: #64748b;
  }
  .errorTitle {
    color: #0f172a; 
    font-weight: 700; 
    margin-top: 20px;
  }
  .errorText {
    color: #64748b; 
    margin: 10px 0 30px 0;
  }
`;

export default Styles;
