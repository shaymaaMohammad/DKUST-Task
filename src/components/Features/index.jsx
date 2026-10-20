import React from "react";
import { useTranslation } from "react-i18next";
import FeaturesWrapper from "./styles";

const Features = () => {
  const { t } = useTranslation();

  const featuresList = [
    {
      id: 1,
      icon: "🛡️",
      titleKey: "features.title_1",
      descKey: "features.desc_1",
    },
    {
      id: 2,
      icon: "⚡",
      titleKey: "features.title_2",
      descKey: "features.desc_2",
    },
    {
      id: 3,
      icon: "⭐",
      titleKey: "features.title_3",
      descKey: "features.desc_3",
    },
  ];

  return (
    <FeaturesWrapper>
      <div className="features-container">
        {featuresList.map((item) => (
          <div className="feature-card" key={item.id}>
            <div className="icon-box">{item.icon}</div>
            <h3>{t(item.titleKey)}</h3>
            <p>{t(item.descKey)}</p>
          </div>
        ))}
      </div>
    </FeaturesWrapper>
  );
};

export default Features;
