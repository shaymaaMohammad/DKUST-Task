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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
               ut aliquip ex ea commodo consequat.
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
                  What services do you offer?
                </button>
              </h2>
              <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body text-muted">
                  We offer a wide range of technology services including web development, machine learning solutions,
                   robotics engineering, industrial consulting, and data analytics. 
                  Our team of experts is dedicated to delivering high-quality solutions tailored to your business needs.
                </div>
              </div>
            </div>

            <div className="accordion-item mb-3 shadow-sm border-0 rounded">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                  How can I contact your team?
                </button>
              </h2>
              <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body text-muted">
                  You can reach our team through the contact form on our website,
                   by emailing info@dkust.com, or by calling +1 234 567 8900. 
                  Our support team is available Monday through Friday, 9 AM to 6 PM EST.
                </div>
              </div>
            </div>

            <div className="accordion-item mb-3 shadow-sm border-0 rounded">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                  Do you provide technical support?
                </button>
              </h2>
              <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body text-muted">
                  Yes, we provide comprehensive technical support for all our services.
                   We offer different support tiers including standard email support, priority phone support,
                   and dedicated account management for enterprise clients.
                </div>
              </div>
            </div>

          </div>
          <div className='container text-center '>
          <p>Ready to test your knowledge?</p>
          <div className="d-inline-block">
           <CustomButton text="TAKE THE QUIZ" variant="solid" size="sm"
           />
           </div>
          </div>
        </div>
      </section>
    </HomeStyles>
  );
};

export default HomePage;
