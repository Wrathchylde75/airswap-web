import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import {
  ModalParagraph,
  ModalSubTitle,
  ModalTitle,
} from "../../../../styled-components/Modal/Modal";
import GuideButton, { GuideButtonProps } from "../GuideButton/GuideButton";
import { GuideButtons } from "./JoinModal.styles";

const guideButtons: GuideButtonProps[] = [
  {
    iconName: "vote",
    text: "voter",
    href: "https://about.airswap.io/guides/voters",
  },
  {
    iconName: "code",
    text: "developer",
    href: "https://github.com/airswap",
  },
  {
    iconName: "campaign",
    text: "ambassador",
    href: "https://about.airswap.io/guides/ambassadors",
  },
  {
    iconName: "edit",
    text: "author",
    href: "https://about.airswap.io/guides/authors",
  },
];

const JoinModal: FC = () => {
  const { t } = useTranslation(["information"]);

  return (
    <>
      <ModalTitle type="h2">{t("information:join.title")}</ModalTitle>
      <ModalParagraph>{t("information:join.intro")}</ModalParagraph>

      <ModalParagraph>{t("information:join.paragraph")}</ModalParagraph>

      <ModalSubTitle type="h2">
        {t("information:join.getStarted")}
      </ModalSubTitle>

      <ModalParagraph>{t("information:join.paragraph2")}</ModalParagraph>

      <GuideButtons>
        {guideButtons.map((guideButton) => {
          return (
            <GuideButton
              key={guideButton.text}
              iconName={guideButton.iconName}
              text={guideButton.text}
              href={guideButton.href}
            />
          );
        })}
      </GuideButtons>
    </>
  );
};

export default JoinModal;