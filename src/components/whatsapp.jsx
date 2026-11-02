import "./whatsapp.css";
import { IoLogoWhatsapp } from "react-icons/io";


export default function WhatsappButton
() {
  const phoneNumber = "5491123456789"; // <-- tu número en formato internacional (sin +)
  const message = "¡Hola! Quisiera hacer una consulta 🙂";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Contactar por WhatsApp"
    >
      <IoLogoWhatsapp className="whatsapp-icon" />

    </a>
  );
}

