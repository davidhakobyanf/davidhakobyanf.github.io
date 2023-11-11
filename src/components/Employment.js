import colorSharp from "../assets/img/color-sharp.png"
import TrackVisibility from "react-on-screen";

export const Employment = () => {
    return (
        <section className="employment" id="employment">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

                                    <div className="skill-bx wow zoomIn">
                                        <div className="row">
                                            <div style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "center"
                                            }} className="col-2">
                                                <div className="dot dot1"></div>
                                                <div className="line"></div>
                                                <div className="dot dot2"></div>
                                            </div>
                                            <div className="col-10">
                                                <h2>Employment</h2>
                                                <h4>FrontEnd Junior Developer</h4>
                                                <p>I am presently engaged as a junior React specialist, crafting my
                                                    skills in the web development at tricolorpir.com.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                        </TrackVisibility>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image"/>
        </section>
    )
}
