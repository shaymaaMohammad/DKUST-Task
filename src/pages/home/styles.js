import styled from 'styled-components';

const HomeStyles = styled.div`
/* =========================================================
   5. FAQ / ACCORDION SECTION
========================================================= */
.faq-section {
  /* TODO */
  background-color: var(--color-gray-bg);
  padding: 80px 0;
}

.faq-section h2 {
  /* TODO */
  color: var(--color-text-dark);
  font-size: 2rem;
}

.faq-section > .container > p {
  /* TODO */
  max-width: 650px;
  font-size: var(--font-size);
  line-height: 1.6;
}

.accordion {
  /* TODO */
   border: 1px solid #edf2f7 !important;
  overflow: hidden;
}
.accordion-button {
  background-color: var(--color-white);
  color: var(--color-text-dark);
  font-size: var(--font-size);
  padding: 1.2rem;
  box-shadow: none !important;
}
@media (max-width: 768px) {
  

  .faq-section {
    padding: 60px 0;
  }

  .faq-section h2 {
    font-size: 1.7rem;
  }

  .faq-section > .container > p {
    max-width: 600px;
    font-size: 0.75rem;
    padding: 0 15px;
  }

  .accordion {
    margin-left: 15px !important;
    margin-right: 15px !important;
  }
}

@media (max-width: 480px) {
  
  .faq-section {
    padding: 45px 0;
  }

  .faq-section h2 {
    font-size: 1.4rem;
    padding: 0 10px;
  }

  .faq-section > .container > p {
    font-size: 0.7rem;
    padding: 0 10px;
    margin-bottom: 2rem !important;
  }

  .accordion {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .accordion-button {
    font-size: 0.8rem;
    padding: 1rem;
  }

  .accordion-body {
    font-size: 0.7rem;
    padding: 1rem;
  }
}

`;
export default HomeStyles ; 