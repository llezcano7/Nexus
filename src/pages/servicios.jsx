import "./servicios.css"
import { FaCheck } from "react-icons/fa";
import Scroll from "../components/scroll";

export default function Servicios() {

    return (
        <section className="servicios-container container display-flex flex-column align-center padding-block-start-18 bg-3">
            <Scroll>
                <h2 className="servicios-title font-size-4 font-color-1 uppercase padding-block-end-5"> <span className="font-light font-color-4">Nuestros</span> servicios</h2>
            </Scroll>
            <div className="servicios-content-1 padding-2 width-1 display-flex align-center gap-3 bg-1">
                <p className="padding-inline-start-2 width-1 font-size-2 font-light font-color-3">Somos distribuidores mayoristas de combustibles líquidos y lubricantes para flotas, industrias, obras y establecimientos agropecuarios.
                    <br />
                    <br />
                    Trabajamos con proveedores líderes del mercado nacional, asegurando calidad certificada, cumplimiento normativo y entrega eficiente en todo el país.</p>
                <img className="picture-9" src="/public/picture-9.webp" alt="" srcset="" />
            </div>
            <div className="servicios-content-2 padding-2 width-1  display-flex align-center gap-3 bg-4">
                <img className="picture-9" src="/public/picture-9.webp" alt="" srcset="" />
                <div className="ul-content width-1 display-flex flex-column align-center gap-1">
                    <h4 className="service-content-2 title font-size-4 font-light font-color-1">Ofrecemos</h4>
                    <ul>
                        <li className="font-size-2 font-light"><FaCheck className="font-size-1 font-color-1" /> Venta mayorista y minorista de gasoil y naftas</li>
                        <br />
                        <li className="font-size-2 font-light"><FaCheck className="font-size-1 font-color-1" /> Lubricantes industriales y automotrices de primera línea</li>
                        <br />
                        <li className="font-size-2 font-light"><FaCheck className="font-size-1 font-color-1" /> Asesoramiento técnico en selección y aplicación de productos</li>
                        <br />
                        <li className="font-size-2 font-light"><FaCheck className="font-size-1 font-color-1" /> Entrega programada y logística a medida</li>
                        <br />
                        <li className="font-size-2 font-light"><FaCheck className="font-size-1 font-color-1" /> Monitoreo y trazabilidad de entregas</li>
                    </ul>
                </div>
            </div>
            <Scroll>
                <div className="servicios-separator padding-block-5 width-1 text-center">
                    <h2 className="font-size-4 text-center font-color-1 font-light"> Gestion y control de consumo</h2>
                </div>
            </Scroll>
            <div className="servicios-content-3 bg-3 display-flex align-center justify-center gap-3">
                <p className="font-size-2 font-light">
                    A través de nuestro servicio de Gestión de Combustibles, en Nexus ayudamos a las empresas a entender, controlar y optimizar el uso del combustible dentro de sus operaciones, implementando sistemas de trazabilidad total del combustible, desde la compra hasta el consumo, detectando desvíos, pérdidas o ineficiencias operativas y generando reportes automáticos y auditorías personalizadas.
                    <br />
                    Entregamos resultados, no solo informes:
                    nuestro trabajo se traduce en eficiencia, ahorro y control.
                </p>
                <div className="picture-7-container">
                    <img className="picture-7" src="/public/picture-7.webp" alt="" srcset="" />
                </div>
            </div>
        </section>
    )
}