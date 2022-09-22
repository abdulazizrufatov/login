import { Modal } from "./components/modal/Modal";
import "./App.css";
import { useRef, useState } from "react";
import { Input } from "./components/input/Input";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import LoginImg from "../src/assets/images/login-img.png";

function App() {
  const { t } = useTranslation();

  const [modal, setModal] = useState(false);
  const [login, setLogin] = useState("");
  const HandleOpenModal = () => {
    if (login) {
      setModal(true);
    }
  };

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);

  const HandleSubmit = (e) => {
    e.preventDefault();
    setLogin({
      name: firstNameRef.current.value,
      last: lastNameRef.current.value,
      number: phoneRef.current.value,
      password: passwordRef.current.value,
    });
  };

  const HandleChange = (evt) => {
    i18next.changeLanguage(evt.target.value);
  };

  return (
    <div className="App row">
      <div className=" col-6">
        <Modal title="Modal" modalState={modal} setModal={setModal}>
          <div>
            <h4>
              <span className=" text-primary">{t("form.firstName")}:</span>
              {login.name}
            </h4>
            <h4>
              <span className=" text-primary">{t("form.lastName")}:</span>
              {login.last}
            </h4>
            <h4>
              <span className=" text-primary">{t("form.phoneNumber")}:</span>
              {login.number}
            </h4>
            <h4>
              <span className=" text-primary">{t("form.password")}:</span>
              {login.password}
            </h4>
          </div>
        </Modal>
        <form onSubmit={HandleSubmit} className=" m-5 d-grid gap-5">
          <select onChange={HandleChange} className=" w-25 ms-5 form-select">
            <option value="en">En</option>
            <option value="uz">Uz</option>
          </select>
          <Input
            required
            ref={firstNameRef}
            placeholder={t("form.firstName")}
          />
          <Input required ref={lastNameRef} placeholder={t("form.lastName")} />
          <Input
            required
            ref={phoneRef}
            placeholder={t("form.phoneNumber")}
            type="number"
          />
          <Input
            required
            ref={passwordRef}
            placeholder={t("form.password")}
            type="password"
          />
          <div>
            <button onClick={HandleOpenModal} className=" btn btn-danger ms-5 ">
              {t("button.submit")}
            </button>
          </div>
        </form>
      </div>
      <img
        className=" col-6 border-start bg-danger"
        src={LoginImg}
        alt="login"
        width="100"
        height="600"
      />
    </div>
  );
}

export default App;
