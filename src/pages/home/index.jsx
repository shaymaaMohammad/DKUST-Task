import React from 'react';
import HomeStyles from './styles'; 
import CustomButton from '../../components/common/custome-button'; 

const HomePage = () => {
  return (
    <HomeStyles >
      <section className="hero d-flex align-items-center">
        <div className="container text-center text-white">
          <h1 className="fw-semibold">Frequently Asked Questions</h1>
          <p className="mx-auto opacity-75 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <div className="d-inline-block">
            <CustomButton text="Ask a Question" variant="solid" size="md" />
          </div>
        </div>
      </section>

      {/* FAQ / ACCORDION SECTION */}
      <section className="faq-section py-5">
        <div className="container text-center">
          <h2 className="fw-semibold mb-3">Generally Asked Question</h2>
          <p className="mx-auto text-muted mb-5">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <div className="accordion accordion-flush mx-auto text-start" id="faqAccordion" style={{maxWidth :'800px'}}>
            <div className="accordion-item mb-3 shadow-sm border-0 rounded">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                  Accordion Item #1
                </button>
              </h2>
              <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper.
                </div>
              </div>
            </div>

            <div className="accordion-item mb-3 shadow-sm border-0 rounded">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                  Accordion Item #2
                </button>
              </h2>
              <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper.
                </div>
              </div>
            </div>

            <div className="accordion-item mb-3 shadow-sm border-0 rounded">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                  Accordion Item #3
                </button>
              </h2>
              <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </HomeStyles>
  );
};

export default HomePage;
