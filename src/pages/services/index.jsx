import React from "react";
import CustomButton from "../../components/common/custome-button";
import Hero from "../../components/hero";
import AppTemplate from "../../components/app-template";
import { useTranslation } from "react-i18next";
import ServicesStyles from "./styles";

const ServicesPage = () => {
  const { t } = useTranslation();
  return (
    <AppTemplate pageTitle="services">
      <ServicesStyles>
        <Hero
          title={t("services_hero_title")}
          description={t("services_hero_desc")}
          variant="services"
        >
          <div className="d-inline-block">
            <CustomButton
              text={t("services_btn_ask")}
              variant="solid"
              size="md"
            />
          </div>
        </Hero>

        {/* FAQ / ACCORDION SECTION */}
        <section className="faq-section py-5">
          <div className="container text-center">
            <h2 className="fw-semibold mb-3">{t("services_faq_title")}</h2>
            <p className="mx-auto text-muted mb-5">{t("services_faq_desc")}</p>

            <div
              className="accordion accordion-flush mx-auto text-start"
              id="faqAccordion"
              style={{ maxWidth: "800px" }}
            >
              <div className="accordion-item mb-3 shadow-sm border-0 rounded">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed fw-semibold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq1"
                  >
                    {t("faq_q1")}
                  </button>
                </h2>
                <div
                  id="faq1"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body text-muted">{t("faq_a1")}</div>
                </div>
              </div>

              <div className="accordion-item mb-3 shadow-sm border-0 rounded">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed fw-semibold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq2"
                  >
                    {t("faq_q2")}
                  </button>
                </h2>
                <div
                  id="faq2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body text-muted">{t("faq_a2")}</div>
                </div>
              </div>

              <div className="accordion-item mb-3 shadow-sm border-0 rounded">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed fw-semibold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq3"
                  >
                    {t("faq_q3")}
                  </button>
                </h2>
                <div
                  id="faq3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body text-muted">{t("faq_a3")}</div>
                </div>
              </div>
            </div>
            <div className="container text-center ">
              <p>{t("services_quiz_prompt")}</p>
              <div className="d-inline-block">
                <CustomButton
                  text={t("services_btn_quiz")}
                  variant="solid"
                  size="sm"
                />
              </div>
            </div>
          </div>
        </section>
      </ServicesStyles>
    </AppTemplate>
  );
};

export default ServicesPage;
