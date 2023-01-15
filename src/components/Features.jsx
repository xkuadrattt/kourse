import React from "react";

const Features = function(){
    return(
        <section className="feature flex flex-wrap relative justify-between [&>div]:basis-[35rem] [&>div]:relative mt-[4rem]">
            <div className="feature-one [&>div]:relative md:mb-[2.5rem]">
                <div className="box left-[3.5rem]">
                <h3 className="text-[1.15rem] font-semibold mb-[1rem]">Self-paced Learning</h3>
                <p className="leading-loose">
                This feature allows learners to progress through the course at their own pace, rather than being tied to a fixed schedule. This can be especially useful for learners who have busy schedules or who prefer to learn at their own speed.
                </p>
                </div>
            </div>
            <div className="feature-two [&>div]:relative mr-[4rem]">
            <div className="box left-[3.5rem]">
                <h3 className="text-[1.15rem] font-semibold mb-[1rem]">Instructor support</h3>
                <p className="leading-loose">
                Providing learners with access to the instructor can be a valuable feature, as it allows them to ask questions and get feedback in real-time. This could be in the form of office hours, live Q&A sessions, or one-on-one consultations.
                </p>
                </div>
            </div>
        </section>
    )
}

export default Features