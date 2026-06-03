import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function RadioButton({ id, group, value, active, radioButtons, setRadioButtons, ...props }) {

    function handleChecked(checked) {
        if (!checked) return;
        
        radioButtons.forEach(radioButton => {
            if (radioButton.id === id) radioButton.active = true;
            else radioButton.active = false;
        });
        
        setRadioButtons(radioButtons);
    }

    return (
        <div className="flex justify-center items-center w-1/3">
            <input
                className="hidden"
                type="radio"
                id={id}
                name={group}
                value={value}
                defaultChecked={active}
                onChange={e => handleChecked(e.target.checked)}
            />
            <label
                {...props} 
                htmlFor={id}
                className={twMerge(
                "bg-lk-3 text-2xl text-lk-6 w-full font-DigitalDiscoThin rounded-lg text-center",
                toggleCheckedStyling(active)
                )}
            />
        </div>
    )
}

function toggleCheckedStyling(checked) {
    if (checked) return "bg-lk-1 font-DigitalDiscoRegular"
    else return "hover:bg-lk-4 transition-colors text-2xl font-DigitalDiscoThin";
}