import { RadioButton } from "./RadioButton";
import portfolioData from "../assets/data/portfolio.json"
import { useState } from "react";
import { ExperienceItem } from "./Experience";
import { ProjectItem } from "./Project";


export function Portfolio() {

    const [radioButtons, setRadioButtons] = useState([
        { id: 1, value: "Work", active: true, data: portfolioData.work },
        { id: 2, value: "Education", active: false, data: portfolioData.education },
        { id: 3, value: "Projects", active: false, data: portfolioData.projects }
    ]);

    const activeRadioButton = radioButtons.filter(radioButtons => radioButtons.active)[0];

    function updateState() {
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