import "./contacto.css";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Contacto() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4qa45x8', 'template_r5bpgi5', form.current, {
        publicKey: 'pGyr94eB9WYgipJHU',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact-container container align-center display-flex gap-6 padding-block-18">
      <div className="form-container">
        <h2 className="form-title slide-down font-size-4 font-light font-color-4 padding-block-4">Contacto</h2>

        <form className="form display-flex flex-column align-center gap-3" ref={form} onSubmit={sendEmail}>
          <div className="display-flex gap-2">
            <input className="input-text" type="text" name="user_name" />
            <input className="input-email" type="email" name="user_email" />
          </div>
          <div className="display-flex flex-column align-center gap-3">
            <input className="input-message" type="text"/>
            <button className="btn-1 z-index-2" type="submit">Enviar</button>
          </div>
        </form>  </div>
      <img className="picture-2 padding-block-start-5" src="picture-3.webp" alt="" />
    </div>
  );
}