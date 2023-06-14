import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

const Header = ({ Language }) => {
  const { t, i18n } = useTranslation();
  // console.log(localStorage.getItem("i18nextLng"));

  const lngs = {
    en: { nativeName: "English" },
    es: { nativeName: "Espanish" },
    swa: { nativeName: "Swahili" },
  };
  return (
    <nav className="flex justify-between bg-slate-600 p-3 text-white">
      <div className="flex gap-1 text-xl">
        <Link className="border-r pr-5" to="/">
          {t("header.home")}
        </Link>
        <Link className="pl-5" to={"/form"}>
          {t("header.form")}
        </Link>
      </div>
      <div>
        <label htmlFor="language" className="pr-3">
          {t("header.language")}
        </label>
        <select
          id="language"
          className="rounded-md bg-slate-400 focus:outline-none"
          defaultValue={localStorage.getItem("i18nextLng")}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
          {Object.keys(lngs).map((lng) => (
            // console.log(lng)

            <option
              key={lng}
              value={lng}
              // selected={localStorage.getItem("i18nextLng") === lng}
            >
              {lngs[lng].nativeName}
            </option>
          ))}
          {/* <option value="en">English</option>
          <option value="es">Spanish/Español</option>
          <option value="swa">Swahili/Kiswahili</option> */}
        </select>
      </div>
    </nav>
  );
};

export default Header;
