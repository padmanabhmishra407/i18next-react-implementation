import { useTranslation } from "react-i18next";

const Form = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-2xl text-zinc-900 font-semibold mt-2 mb-6">
        {t("userForm.title")}
      </p>
      <fieldset className="flex flex-col items-center w-full">
        <div className="flex flex-col gap-3">
          <div className="flex">
            <label htmlFor="fname" className="pr-2 w-1/2">
              {t("userForm.fname")}:
            </label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder={t("userForm.required")}
              className="placeholder:italic text-center focus:outline-none border-2 rounded-md"
            />
          </div>
          <div className="flex">
            <label htmlFor="mname" className="pr-2 w-1/2">
              {t("userForm.mname")}
            </label>
            <input
              type="text"
              id="mname"
              name="mname"
              placeholder={t("userForm.optional")}
              className="placeholder:italic text-center focus:outline-none border-2 rounded-md"
            />
          </div>
          <div className="flex">
            <label htmlFor="lname" className="pr-2 w-1/2">
              {t("userForm.lname")}
            </label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder={t("userForm.required")}
              className="placeholder:italic text-center focus:outline-none border-2 rounded-md"
            />
          </div>
          <div className="flex">
            <label htmlFor="tel" className="pr-2 w-1/2">
              {t("userForm.tel")}
            </label>
            <input
              type="tel"
              name="tel"
              id="tel"
              placeholder="xxx xxx xxxx"
              className="placeholder:italic text-center focus:outline-none border-2 rounded-md"
            />
          </div>
          <div className="flex">
            <label htmlFor="email" className="pr-2 w-1/2">
              {t("userForm.email")}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder={t("userForm.sampleEmail")}
              className="placeholder:italic text-center focus:outline-none border-2 rounded-md"
            />
          </div>
          <div className="flex">
            <label htmlFor="password" className="pr-2 w-1/2">
              {t("userForm.password")}
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*********"
              className="placeholder:italic text-center focus:outline-none border-2 rounded-md"
            />
          </div>
        </div>
        <div className="m-5">
          <input
            type="submit"
            value={t("userForm.submit")}
            className="bg-zinc-900 text-slate-200 font-semibold rounded-md px-5 py-1 cursor-pointer hover:bg-zinc-800"
          />
        </div>
      </fieldset>
    </div>
  );
};

export default Form;
