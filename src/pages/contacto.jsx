import "./contacto.css";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';


export default function Contacto() {
  const form = useRef();
  const [sent, setSent] = useState(false); 


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4qa45x8', 'template_r5bpgi5', form.current, {
        publicKey: 'pGyr94eB9WYgipJHU',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSent(true);
          form.current.reset();
          setTimeout(() => setSent(false), 4000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Ocurrió un error al enviar el mensaje. Intente nuevamente.");
        },
      );
  };

  return (
    <div className="contact-container container align-center justify-center display-flex gap-6 padding-block-18">
      <div className="form-container">
        <h2 className="form-title slide-down font-size-4 font-light font-color-4 padding-block-4">Contacto</h2>
        {sent && (
          <div className="success-message">
            ✅ Su mensaje ha sido enviado correctamente.
          </div>
        )}
        <form className="form display-flex flex-column align-center gap-3" ref={form} onSubmit={sendEmail}>
          <div className="input-container display-flex gap-2">
            <input className="input-text" placeholder="Nombre completo" type="text" name="user_name" re />
            <input className="input-email" placeholder="E-mail" type="email" name="user_email" required />
          </div>
          <div className="input-container-2 display-flex flex-column align-center gap-3">
            <input className="input-message" placeholder="Mensaje" type="text" required />
            <button className="btn-1 z-index-2" type="submit">Enviar</button>
          </div>
        </form>
      </div>
      <img className="picture-2" src="picture-3.webp" alt="" />
    </div>
  );
}