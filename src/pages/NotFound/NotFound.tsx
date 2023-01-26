import { withTranslation } from "react-i18next";
import { NotFoundInterface } from "../interfaces";

const NotFound: React.FC<NotFoundInterface> = ({ t }) => {
  return (
    <div className="not-found">
      <h1>{t("pages.404.title")}</h1>
      <p>{t("pages.404.message")}</p>
    </div>
  );
};

export default withTranslation()(NotFound);
