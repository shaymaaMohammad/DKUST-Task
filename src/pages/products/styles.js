import styled from 'styled-components';

const PageStyles = styled.div`
  width: 100%;
  overflow-x: hidden;

  .topHeaderBg {
    width: 100%;
    background-color: var(--color-navy-hero);
    color: #ffffff;
    text-align: center;
  }

  .headerContainer {
    width: 100%;
    max-width: 1200px;
    min-height: 150px;
    margin: 0 auto;
    padding: 0 24px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      margin: 0 0 8px;
      font-size: clamp(28px, 3vw, 34px);
      font-weight: 700;
      line-height: 1.2;
    }

    p {
      max-width: 620px;
      margin: 0;
      font-size: 13px;
      line-height: 1.7;
      color: rgba(255, 255, 255, 0.9);
    }
  }

 .mainContentWrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px 24px 20px;
}

  .toolbarRow {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 16px;
    padding-bottom: 16px;
    margin-bottom: 14px;

    border-bottom: 1px solid #e9edf2;
  }

  .filterBar {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    gap: 8px;

    button {
      min-height: 32px;
      padding: 0 15px;

      border: 1px solid #dfe5eb;
      border-radius: 20px;

      background-color: #ffffff;
      color: #6b7280;

      font-size: 11px;
      font-weight: 600;

      cursor: pointer;

      transition:
        background-color 0.2s ease,
        border-color 0.2s ease,
        color 0.2s ease,
        transform 0.2s ease;

      &.active {
        background-color: #20a464;
        border-color: #20a464;
        color: #ffffff;
      }

      &:hover:not(.active) {
        background-color: #f8fafc;
        border-color: #cbd5e1;
      }

      &:active {
        transform: scale(0.97);
      }
    }
  }

  .rightControls {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    gap: 10px;

    flex-shrink: 0;
  }

  .sortSelect {
    height: 34px;
    min-width: 132px;

    padding: 0 32px 0 12px;

    border: 1px solid #dfe5eb;
    border-radius: 5px;

    background-color: #ffffff;

    color: #6b7280;

    font-size: 11px;
    font-weight: 500;

    cursor: pointer;
    outline: none;

    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease;

    &:focus {
      border-color: #20a464;
      box-shadow: 0 0 0 3px rgba(32, 164, 100, 0.08);
    }
  }

  .viewToggleGroup {
    display: flex;
    align-items: stretch;

    height: 34px;

    overflow: hidden;

    border: 1px solid #dfe5eb;
    border-radius: 5px;

    background-color: #ffffff;

    button {
      width: 34px;

      display: flex;
      align-items: center;
      justify-content: center;

      border: none;

      background-color: transparent;

      color: #94a3b8;

      font-size: 14px;

      cursor: pointer;

      transition:
        background-color 0.2s ease,
        color 0.2s ease;

      &.active {
        background-color: #20a464;
        color: #ffffff;
      }

      &:hover:not(.active) {
        background-color: #f8fafc;
        color: #475569;
      }

      &:first-child {
        border-right: 1px solid #dfe5eb;
      }
    }
  }

.productCountText {
  color: #888;
  font-size: 13px;
  margin: 0 0 24px;
  font-weight: 500;
}
  .row {
    --bs-gutter-x: 20px;
    --bs-gutter-y: 20px;
  }

 /* =========================
    TABLET
========================= */

@media (max-width: 1024px) {
  .mainContentWrapper {
    padding-right: 20px;
    padding-left: 20px;
  }

  .toolbarRow {
    align-items: flex-start;
  }

  .filterBar {
    max-width: 100%;
  }
}


/* =========================
  
========================= */

@media (max-width: 768px) {

  .headerContainer {
    min-height: 135px;
    padding: 0 20px;

    h1 {
      font-size: 28px;
    }

    p {
      font-size: 12px;
      max-width: 580px;
    }
  }

  .mainContentWrapper {
    padding: 16px 16px 50px;
  }

  .toolbarRow {
    flex-direction: column;
    align-items: stretch;

    gap: 14px;
  }

  .filterBar {
    width: 100%;
  }

  .rightControls {
    width: 100%;
    justify-content: space-between;
  }

  .sortSelect {
    flex: 1;
  }
}


/* =========================
   MOBILE
========================= */

@media (max-width: 576px) {

  .headerContainer {
    min-height: 125px;
    padding: 0 16px;

    h1 {
      font-size: 25px;
    }

    p {
      font-size: 11px;
      line-height: 1.6;
    }
  }

  .mainContentWrapper {
    padding: 14px 12px 45px;
  }

  .filterBar {
    gap: 7px;

    button {
      padding: 0 12px;
      min-height: 30px;
      font-size: 10px;
    }
  }

  .rightControls {
    gap: 8px;
  }

  .sortSelect {
    flex: 1;
    min-width: 0;
    width: 100%;
    height: 34px;

    padding: 0 12px;

    border: 1px solid #d8dee6;
    border-radius: 5px;

    font-size: 11px;

    color: #64748b;

    background-color: #ffffff;

    cursor: pointer;

    outline: none;

    transition: border-color 0.2s ease;

    &:focus {
      border-color: #20a464;
    }
  }

  .viewToggleGroup {
    flex-shrink: 0;

    height: 34px;

    button {
      width: 34px;
      height: 32px;

      font-size: 13px;
    }
  }

  .productCountText {
    margin-bottom: 22px;
    font-size: 12px;
  }

  .row {
    --bs-gutter-x: 0;
    --bs-gutter-y: 16px;
  }
}


/* =========================
    MOBILE
========================= */

@media (max-width: 375px) {

  .headerContainer {
    h1 {
      font-size: 23px;
    }

    p {
      font-size: 10px;
    }
  }

  .filterBar {
    button {
      padding: 0 10px;
      font-size: 9px;
    }
  }

  .rightControls {
    flex-direction: column;
    align-items: stretch;
  }

  .sortSelect {
    width: 100%;
    flex: none;
  }

  .viewToggleGroup {
    align-self: flex-end;
  }
}
`;

export default PageStyles;