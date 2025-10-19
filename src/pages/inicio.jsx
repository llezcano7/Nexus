import "./inicio.css";
import Scroll from "../components/scroll";
import { MdOilBarrel } from "react-icons/md";
import { FaHandHoldingWater } from "react-icons/fa";



export default function Inicio() {
  return (
    <>
      <div className="inicio-container container relative display-flex flex-column flex-center">
        <video autoPlay loop muted className="video width-1" src="public/video.mp4">
    </video>
        <div className="inicio-content absolute width-7">
          <h1 className="font-size-4 slide-down uppercase"> <span className="font-light">Transportamos</span> Energía</h1>
          <p className="padding-block-start-2">En Nexus somos especialistas en la venta y distribución de combustibles destacándonos por brindar un servicio seguro, eficiente y personalizado</p>
          <div className="padding-block-start-5">
            <button className="btn-1 slide-down"> <p>contactanos</p></button>
          </div>
        </div>
      </div >
      <div className="separator padding-block-6 bg-3 text-center">
        <Scroll>
          <h2 className="font-size-4 font-color-1 uppercase"> <span className="font-light font-color-4">Somos</span> energía en movimiento</h2>
        </Scroll>
      </div>
      <section className="section-container display-flex">
        <div className="section-content-1 width-6 container text-center padding-block-4">
          <h3 className="uppercase font-color-1 padding-block-2">Abastecimiento y transporte</h3>
          <MdOilBarrel className="icon font-color-1 font-size-4" />
          <ul className="font-color-1 padding-block-2">
            <li className="li">- Abastecemos a flotas de vehículos, obradores viales campo y empresas</li>
            <li className="li">- Transporte y traslado de combustible</li>
            <li className="li">- Extracción/traspaso de combutibles</li>
            <li className="li">- Venta de lubricantes a granel</li>
            <li className="li">- Limpieza de tanques</li>
            <li className="li">- Alquiler de tanques de almacenamiento</li>
          </ul>
        </div>
        <div className="section-content-2 width-6 container text-center padding-block-4">
          <h3 className="uppercase padding-block-2 font-color-3">Gestión</h3>
          <FaHandHoldingWater className="icon font-color-4 font-size-4" />
          <ul className="font-color-3 padding-block-2">
            <li className="li">- Garantizamos trasabilidad completa del consumo de combustible</li>
            <li className="li">- Detectamos desvíos, pérdidas o ineficiencias operativas</li>
            <li className="li">- Generamos reportes automáticos y auditorías personalizadas</li>
            <li className="li">- Facilitamos la toma de decisiones basadas en datos reales</li>
          </ul>
        </div>
      </section>
      <Scroll>
      <section className="section-container-2 container display-flex align-center bg-3">
        <div className="inicio-text-container display-flex space-between">
        <div className="inicio-text-2 width-6">
          <h4 className="font-size-3 font-color-4 padding-block-end-2">Visión estratégica</h4>
          <p className="font-size-2 font-color-1 font-light">Nuestra visión trasciende el rol tradicional del proveedor de combustible. Nos posicionamos como aliados energéticos de nuestros clientes, ofreciendo soluciones integrales que combinan abastecimiento con herramientas de gestión inteligente
            Nuestra meta es ayudarte a tomar decisiones informadas, reduciendo costos operativos y optimizando el uso de recursos. En Nexus, creemos que la energía es más que un producto: <span className="font-bold">es el motor que impulsa tu éxito.</span></p>
        </div>
        <div className="inicio-pictures display-flex justify-center align-center gap-1 width-6 relative">
          <img className="picture-2 width-4 height-auto" src="picture-2.webp" alt="" />
          <img className="picture-1 width-4 height-auto absolute" src="picture-1.webp" alt="" />
        </div>
        </div>
      </section>
      </Scroll>
    </>
  );
}