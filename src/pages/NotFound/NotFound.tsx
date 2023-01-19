import { withTranslation } from "react-i18next";
import { NotFoundInterface } from "../interfaces";

const NotFound: React.FC<NotFoundInterface> = ({ t }) => {
  return <h2>{t("notFound")}</h2>;
};

export default withTranslation()(NotFound);
