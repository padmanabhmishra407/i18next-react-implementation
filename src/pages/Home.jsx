import { useTranslation } from "react-i18next";

const Home = ({ Lang }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center px-10 md:px-20">
      <p className="text-2xl text-center">{t("main.home")}</p>
      <p className="text-xl font-medium text-left my-2 bg-green-400 w-fit px-5 text-slate-600 rounded-full">
        {t("main.about")}
      </p>
      <p>{t("body.para1")}</p>
      <br />
      <p>{t("body.para2")}</p>
      <br />
      <h2>{t("list.title")}</h2>
      <ul>
        <li>{t("list.item1")}</li>
        <li>{t("list.item2")}</li>
        <li>{t("list.item3")}</li>
        <li>{t("list.item4")}</li>
      </ul>
    </div>
  );
};

export default Home;
