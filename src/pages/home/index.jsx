import React from "react";
import { HomeWrapper } from "./styles";
import CustomButton from "../../components/common/custome-button";
import Hero from "../../components/hero";
import AppTemplate from "../../components/app-template";
import { useTranslation } from "react-i18next";
import TrendingProducts from "../../components/trendingProducts";
import Features from "../../components/Features";
import GetStarted from "../../components/GetStarted";
import i18next from "i18next";
import HeroStatCard from "../../components/heroStatCard";

const HomePage = () => {
  const { t } = useTranslation();
  const currentLang = i18next.language || "ar";

  const statsData = [
    {
      id: 1,
      value: 12000,
      suffix: "+",
      isFormatted: true,
      labelKey: "hero.stat_clients",
    },
    {
      id: 2,
      value: 340,
      suffix: "+",
      isFormatted: false,
      labelKey: "hero.stat_projects",
    },
    {
      id: 3,
      value: 98,
      suffix: "%",
      isFormatted: false,
      labelKey: "hero.stat_satisfaction",
    },
    {
      id: 4,
      value: "24/7",
      suffix: "",
      isFormatted: false,
      labelKey: "hero.stat_support",
    },
  ];
  return (
    <AppTemplate pageTitle="home">
      <HomeWrapper>
        <Hero
          variant="home"
          badgeText={t("hero.badge")}
          description={t("hero.description")}
          title={
            currentLang === "en" ? (
              <>
                Powering the Future with{" "}
                <span className="green-text">Smart Technology</span>
              </>
            ) : (
              <>
                تمكين المستقبل باستخدام{" "}
                <span className="green-text">التكنولوجيا الذكية</span>
              </>
            )
          }
          statsGrid={
            <div className="hero-stats-grid">
              {statsData.map((stat) => (
                <HeroStatCard
                  key={stat.id}
                  value={stat.value}
                  suffix={stat.suffix}
                  isFormatted={stat.isFormatted}
                  label={t(stat.labelKey)}
                />
              ))}
            </div>
          }
        >
          <CustomButton
            text={t("hero.btn_explore")}
            variant="solid"
            icon="bi bi-cart"
          />
          <CustomButton text={t("hero.btn_quiz")} variant="outline" />
        </Hero>
        <TrendingProducts />
        <Features />
        <GetStarted />
      </HomeWrapper>
    </AppTemplate>
  );
};

export default HomePage;
