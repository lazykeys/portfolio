import { Button } from "./Button";
import { Svg } from "./Svg";
import { Image } from "./Image";
import logo from "/src/assets/images/experience_icons/lionheartstudiosllc_logo.webp";
import { RadioButton } from "./RadioButton";
import experiences from "../assets/data/experiences.json"
import { useState } from "react";


export function Experience() {

    const [radioButtons, setRadioButtons] = useState([
        { id: 1, value: "Work", active: true, data: experiences.work },
        { id: 2, value: "Education", active: false, data: experiences.education },
        { id: 3, value: "Projects", active: false, data: experiences.projects }
    ]);

    const activeRadioButton = radioButtons.filter(radioButtons => radioButtons.active)[0];

    function updateState(radioButtons) {
        setRadioButtons(radioButtons => [...radioButtons]);
    }
    
    return (
        <div className="flex flex-col h-fit max-h-full gap-3 lg:row-span-2 lg:col-span-1 overflow-hidden">
            <fieldset 
                className="flex w-full justify-around items-center border-7 border-lk-3 p-0.5 rounded-xl bg-lk-3 gap-2">
                {radioButtons.map(radioButton => (
                    <RadioButton 
                    key={radioButton.id} 
                    id={radioButton.id} 
                    group="tabs"
                    value={radioButton.value}
                    active={radioButton.active}
                    radioButtons={radioButtons}
                    setRadioButtons={updateState}
                    >
                        {radioButton.value}
                    </RadioButton>
                ))}
            </fieldset>
            
            <section className="border-5 border-lk-3 rounded-xl w-full h-full flex flex-col overflow-y-auto scrollbar-none">
                {activeRadioButton.data.map(data => (
                    <PortfolioItem key={data.id} value={activeRadioButton.value} data={data}/>
                ))}
            </section>
        </div>
    )
}

function PortfolioItem({value, data}) {
    switch (value)
    {
        case "Work":
        case "Education":
            return <ExperienceItem data={data}/>
        case "Projects":
            return <ProjectItem data={data}/>
    }
}

function ExperienceItem({ data }) {
    return (
        <div className="flex h-fit">
            <IconBorder image={data.image}/>
            <div className="flex flex-col m-3 w-full">
                <ExperienceHeader 
                    header={data.header} 
                    subheader={data.subheader} 
                    startDate={data.startDate} 
                    endDate={data.endDate}
                />
                <ul className="list-disc">
                    {data.notes.map((note, index) => (
                        <li key={index} className="text-base ml-3 text-lk-6 font-DigitalDiscoThin">{note}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

function ProjectItem({ data }) {
    return (
        <div className="flex flex-col w-fit mx-3 mt-3">
            <a href={data.link}>
                <ThumbnailBorder image={data.image}/>
            </a>
            <div className="flex m-3 mt-0 h-full border-l-5 border-lk-2 pl-4 pt-4">
                <div className="flex-col w-full justify-center items-center">
                    <ProjectHeader
                        header={data.header} 
                        subheader={data.subheader}
                        year={data.year}
                        link={data.link}
                    />
                    <ul className="list-disc">
                        {data.notes.map((note, index) => (
                            <li key={index} className="text-base ml-3 text-lk-6 font-DigitalDiscoThin">{note}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

function ThumbnailBorder({ image }) {
    return (
    <div className="flex flex-col m-3 mb-0">
        <Image variant="thumbnail" src={image}/>
    </div>
)
}

function IconBorder ({ image }) {
    return (
        <div className="flex flex-col m-3">
            <Image variant="icon" src={image}/>
            <div className="flex h-full">
                <div className="border-r-2 border-lk-2 w-1/2 mb-2"></div>
                <div className="border-l-2 border-lk-2 w-1/2 mb-2"></div>
            </div>
        </div>
    )
}

function ExperienceHeader ({ header, subheader, startDate, endDate}) {
    return (
        <div>
            <h1 className="text-xl text-lk-6 font-DigitalDiscoRegular">{header}</h1>
            <div className="flex flex-col justify-between">
                <h2 className="text-lg text-lk-6 font-DigitalDiscoThin">{subheader}</h2>
                <div className="flex w-fit justify-between gap-1">
                    <h3 className="text-md text-lk-6 font-DigitalDiscoThin text-nowrap">{startDate}</h3>
                    <h3 className="text-md text-lk-6 font-DigitalDiscoThin">-</h3>
                    <h3 className="text-md text-lk-6 font-DigitalDiscoThin text-nowrap">{endDate}</h3>
                </div>
            </div>
        </div>
    );
}

function ProjectHeader ({ header, subheader, year, link }) {
    return (
        <div>
            <h1>
                <a className="text-xl text-lk-6 font-DigitalDiscoRegular hover:underline" href={link}>{header}</a>
            </h1>
            <div className="flex flex-col justify-between">
                <h2 className="text-lg text-lk-6 font-DigitalDiscoThin">{subheader}</h2>
                <h3 className="text-md text-lk-6 font-DigitalDiscoThin">{year}</h3>
            </div>
        </div>
    );
}