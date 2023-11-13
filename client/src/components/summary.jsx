import React from "react";
import './summary.css'

const Summary = () => {

    const warnings = ['420 Unread posts', '96 Unanswered questions', '40 Unanswered followups'];
    const class_sum = ['191 total posts','575 total contributions','153 instructors\' responses','23 students\' responses','9 min avg. response time'];
    return(
        <div>
            <div  className={`container`}>
                <div className={`content`}>
                    <p className={`title`}>
                        CS 320: Intro to Software Engineering
                    </p>
                </div>
                <div className={`content`}>
                    <p className={`instructors`}>
                        Instructor: Matthew Rattigan (you) <br/>
                        TA: John Doe<br/>
                        UCA: Jane Doe
                    </p>
                </div>         
            </div>
            <div className={`container`}>
                <div className={`content`}>
                    {warnings.map((item, id) => (
                        <a className={`warning`} href={`/`} >
                            ⚠ {item}<br/>
                        </a>
                    ))}
                </div>
                <div className={`content`}>
                    <p className={`class-summary`}>
                    191 total posts<br/>
                    575 total contributions<br/>
                    153 instructors' responses<br/>
                    23 students' responses<br/>
                    9 min avg. response time
                    </p>
                </div>

            </div>
        </div>
    );


}

export default Summary;