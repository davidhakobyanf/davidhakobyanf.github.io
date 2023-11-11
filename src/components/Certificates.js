import colorSharp from "../assets/img/color-sharp.png"
import TrackVisibility from "react-on-screen";

export const Certificates = () => {
    return (
        <section className="certificates" id="certificates">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <TrackVisibility >
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                    <div className="skill-bx wow zoomIn">
                                        <h2>Certificates</h2>
                                        <div>Attended a course organised by BEEONCODE  LLC  ON Completed React.js course</div>
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
