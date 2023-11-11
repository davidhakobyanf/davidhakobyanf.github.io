import colorSharp from "../assets/img/color-sharp.png"
import TrackVisibility from "react-on-screen";
import style from "../App.css"

export const Education = () => {
    return (
        <section className="education" id="education">
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
                                                <h2>Education</h2>
                                                <p>Higher Education
                                                    National Polytechnic University of Armenia, Yerevan.
                                                    Currently I am studying at National Polytechnic University of
                                                    Armenia, IT
                                                    Information Systems.
                                                </p>
                                            </div>

                                        </div>


                                    </div>
                                </div>

                            }
                        </TrackVisibility>
                    </div>

                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image"/>
        </section>
    )
}
