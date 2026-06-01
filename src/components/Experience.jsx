import { Button } from "./Button";
import { Svg } from "./Svg";
import experiences from "../assets/data/experiences.json"

export function Experience() {
    return (
        <div className="flex flex-col gap-3">
            <Tabs/>
            <section className="border-5 border-lk-3 rounded-xl w-full h-fit">
                {experiences.work.map(experience => (
                    <ExperienceItem 
                        key={experience.id}
                        iconPath={experience.iconPath}
                        header={experience.employer}
                        subheader={experience.position}
                        startDate={experience.startDate}
                        endDate={experience.endDate}
                        notes={experience.notes}
                    />
                ))}
            </section>
        </div>
    )
}

function Tabs() {
    return (
        <div className="flex w-full justify-around items-center border-7 border-lk-3 p-0.5 rounded-xl bg-lk-3">
            <Button variant="tabular">Work</Button>
            <Button variant="tabular">Education</Button>
            <Button variant="tabular">Projects</Button>
        </div>
    )
}

function ExperienceItem({ iconPath, header, subheader, startDate, endDate, notes }) {
    return (
        <div className="flex">
            <div className="flex flex-col m-3">
                <img className="mask-radial-at-center mask-radial-from-70% mask-radial-to-70% mask-circle min-w-14 w-14 bg-white" src={iconPath}/>
                <div className="flex h-full">
                    <div className="border-r-2 border-lk-2 w-1/2 mb-2"></div>
                    <div className="border-l-2 border-lk-2 w-1/2 mb-2"></div>
                </div>
            </div>
            <div className="flex flex-col m-3 w-full">
                <h1 className="text-xl text-lk-6 font-DigitalDiscoRegular">{header}</h1>
                <div className="flex justify-between">
                    <h2 className="text-lg text-lk-6 font-DigitalDiscoThin">{subheader}</h2>
                    <div className="flex w-fit justify-between items-center gap-1">
                        <h3 className="text-md text-lk-6 font-DigitalDiscoThin">{startDate}</h3>
                        <h3 className="text-md text-lk-6 font-DigitalDiscoThin">-</h3>
                        <h3 className="text-md text-lk-6 font-DigitalDiscoThin">{endDate}</h3>
                    </div>
                </div>
                <ul className="list-disc">
                    {notes.map(note => (
                        <li className="text-base ml-3 text-lk-6 font-DigitalDiscoThin">{note}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}