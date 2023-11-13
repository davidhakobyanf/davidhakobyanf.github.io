import colorSharp from "../assets/img/color-sharp.png"
import TrackVisibility from "react-on-screen";

export const Languages = () => {
    return (
        <section className="languages" id="languages">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <TrackVisibility >
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                    <div className="skill-bx wow zoomIn">
                                        <h2>Languages</h2>
                                        <div>                                                <div className="dot"></div>
                                            Armenian: Native</div>
                                        <div> <div className="dot"></div>Russian: Good</div>
                                        <div> <div className="dot"></div>English: Basic</div>
                                    </div>
                                </div>}
                        </TrackVisibility>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}
