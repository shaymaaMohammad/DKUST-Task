import styled from "styled-components";

const PageStyles = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding-top: 75px;

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

      background-color: var(--color-white);
      color: var(--color-text-gray);

      font-size: var(--font-size);
      font-weight: 600;

      cursor: pointer;

      transition:
        background-color 0.2s ease,
        border-color 0.2s ease,
        color 0.2s ease,
        transform 0.2s ease;

      &.active {
        background-color: var(--color-green-active);
        border-color: var(--color-green-active);
        color: var(--color-white);
      }

      &:hover:not(.active) {
        background-color: var(--color-gray-bg);
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

    background-color: var(--color-white);

    color: var(--color-text-gray);

    font-size: var(--font-size);
    font-weight: 500;

    cursor: pointer;
    outline: none;

    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease;

    &:focus {
      border-color: var(--color-green-active);
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

    background-color: var(--color-white);

    button {
      width: 34px;

      display: flex;
      align-items: center;
      justify-content: center;

      border: none;

      background-color: transparent;

      color: var(--color-text-gray);

      font-size: var(--font-size);

      cursor: pointer;

      transition:
        background-color 0.2s ease,
        color 0.2s ease;

      &.active {
        background-color: var(--color-green-active);
        color: var(--color-white);
      }

      &:hover:not(.active) {
        background-color: var(--color-gray-bg);
        color: var(--color-text-gray);
      }

      &:first-child {
        border-right: 1px solid #dfe5eb;
      }
    }
  }

  .productCountText {
    color: var(--color-text-gray);
    font-size: var(--font-size);
    margin: 0 0 24px;
    font-weight: 500;
  }
  .row {
    --bs-gutter-x: 20px;
    --bs-gutter-y: 20px;
  }
  .no-product h3 {
    color: var(--color-text-gray);
    font-weight: 500;
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
