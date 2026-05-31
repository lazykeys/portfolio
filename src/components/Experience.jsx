import { Button } from "./Button"

export function Experience() {
    return (
        <section className="border-5 border-lk-3 rounded-xl w-full h-128">
            <ExperienceTab/>
        </section>
    )
}

function ExperienceTab() {
    return (
        <div className="flex justify-between items-center border-b-5 border-b-lk-3">
            <Button>Work</Button>
            <Button>Education</Button>
            <Button>Projects</Button>
        </div>
    )
}