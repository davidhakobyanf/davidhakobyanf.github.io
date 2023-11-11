import colorSharp from "../assets/img/color-sharp.png"
import TrackVisibility from "react-on-screen";
import style from "../App.css"

export const Courses = () => {
    return (
        <section className="courses" id="courses">
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
                                                <h2>Courses</h2>
                                                <div>Attended a course organised by BEEONCODE LLC ON Completed React.js
                                                    course
                                                </div>
                                                <div>HTML5, CSS3, SASS</div>
                                                <div>JavaScript</div>
                                                <div> React JS</div>
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
