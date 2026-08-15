import styled from 'styled-components';

const HomeStyles = styled.div`
/* =========================================================
   4. HERO SECTION
   
========================================================= */
.hero {
  /* TODO */
  background-color: var(--color-navy-hero);
  background-image: 
    linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
  background-size: 40px 40px;
  min-height: 400px;
  padding: 80px 0;
}

.hero h1 {
  /* TODO */
   font-size: 2.25rem;
  
}

.hero p {
  /* TODO */
  text-align: center;
  max-width: 650px;
  font-size: 0.9rem;
  line-height: 1.6;
}


.btn {
  /* TODO */
  background-color: var(--color-green);
  color: var(--color-white);
  border: none;
  border-radius: 4px;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  transition: opacity 0.2s ease;
}
.btn:hover {
  opacity: 0.9;
  color: var(--color-white);
}


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
  font-size: 0.9rem;
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
  font-size: 0.95rem;
  padding: 1.2rem;
  box-shadow: none !important;
}

`;
export default HomeStyles ; 