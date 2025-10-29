import "./nosotros.css"
import Scroll from "../components/scroll";

export default function Nosotros() {
    return (
        <>
            <section className="nosotros-section hidden display-flex flex-column align-center justify-center padding-block-18">
                <div className="justify-center display-flex align-center gap-2">
                    <div className="display-flex flex-column gap-1 align-end">
                        <div className="square bg-4 padding-block-4 display-flex flex-column padding-inline-start-2 justify-center">
                            <h4 className="font-size-5 font-light">Acerca de <br /><span className="uppercase font-bold">nexus</span></h4>
                        </div>
                        <img className="picture-6 padding-block-end-2" src="/public/picture-6.webp" alt="" />
                    </div>
                    <div className="nosotros-text width-8 font-size-2">
                        <Scroll>
                            <p>Nexus Combustibles nace con el propósito de brindar soluciones integrales en la comercialización y gestión del consumo  energético, con foco en combustibles, lubricantes y eficiencia operativa.
                                Nuestra misión es acompañar a empresas y organizaciones en el control, la trazabilidad y la optimización de sus recursos, combinando experiencia en gestión, tecnología de monitoreo y un enfoque basado en datos reales.
                                <br /> <br />Desde el abastecimiento mayorista hasta la auditoría de consumos, trabajamos para que cada litro cuente: reduciendo pérdidas, detectando desvíos y generando información precisa para la toma de decisiones.
                            </p>
                        </Scroll>
                        <img className="picture-4 padding-block-4" src="/public/picture-4.webp" alt="" />
                    </div>
                </div>
                <div className="separator width-1 padding-block-6 bg-1 text-center">
                    <Scroll>
                        <h2 className="font-size-4 font-color-3 slide-left uppercase"> <span className="font-light font-color-4">Confían</span> en nosotros</h2>
                    </Scroll>
                </div>
                <div className="company-list padding-block-start-18">
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="carousel-track" aria-hidden={index > 0}>
                            <img className="company-logos" src="/public/constructora patagonia_LOGO.png" alt="" />
                            <img className="company-logos" src="/public/ruben-cambiasso-hijos.png" alt="" />
                            <img className="company-logos" src="/public/transporte-alfrecar.png" alt="" />
                            <img className="company-logos" src="/public/rocha-transporte.png" alt="" />
                            <img className="company-logos" src="/public/cox.png" alt="" />
                            <img className="company-logos" src="/public/herso-ferromel.png" alt="" />
                            <img className="company-logos" src="/public/lacteos-barraza.png" alt="" />
                            <img className="company-logos" src="/public/sedyco.png" alt="" />
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}