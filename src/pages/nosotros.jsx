import "./nosotros.css"
import Scroll from "../components/scroll";

export default function Nosotros() {

    const logos = [
        "patagonia-construcciones.png",
        "ruben-cambiasso-hijos.png",
        "transporte-alfrecar.png",
        "rocha-transporte.png",
        "cox.png",
        "herso-ferromel.png",
        "lacteos-barraza.png",
        "sedyco.png",
        "friosur.png",
    ];

    return (
        <>
            <section className="nosotros-section hidden display-flex flex-column align-center justify-center padding-block-start-18">
                <div className="justify-center display-flex align-center gap-2">
                    <div className="display-flex flex-column gap-1 align-end">
                        <div className="square bg-4 padding-block-4 display-flex flex-column padding-inline-start-2 justify-center">
                            <h4 className="font-size-5 font-light">Acerca de <br /><span className="uppercase font-bold">nexus</span></h4>
                        </div>
                        <img className="picture-6 padding-block-end-2" src="picture-6.webp" alt="" />
                    </div>
                    <div className="nosotros-text width-8 font-size-2">
                        <Scroll>
                            <p>Nexus Combustibles nace con el propósito de brindar soluciones integrales en la comercialización y gestión del consumo  energético, con foco en combustibles, lubricantes y eficiencia operativa.
                                Nuestra misión es acompañar a empresas y organizaciones en el control, la trazabilidad y la optimización de sus recursos, combinando experiencia en gestión, tecnología de monitoreo y un enfoque basado en datos reales.
                                <br /> <br />Desde el abastecimiento mayorista hasta la auditoría de consumos, trabajamos para que cada litro cuente: reduciendo pérdidas, detectando desvíos y generando información precisa para la toma de decisiones.
                            </p>
                        </Scroll>
                        <img className="picture-4 padding-block-4" src="picture-4.webp" alt="" />
                    </div>
                </div>
                <div className="separator width-1 padding-block-6 bg-1 text-center">
                    <Scroll>
                        <h2 className="font-size-4 font-color-3 slide-left uppercase"> <span className="font-light font-color-4">Confían</span> en nosotros</h2>
                    </Scroll>
                </div>
                <div className="company-list padding-block-8">
                    <div className="carousel-track">
                        {logos.map((src, i) => (
                            <img key={i} className="company-logos" src={src} alt={`logo-${i}`} />
                        ))}
                        {logos.map((src, i) => (
                            <img key={`dup-${i}`} className="company-logos" src={src} alt={`logo-dup-${i}`} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}