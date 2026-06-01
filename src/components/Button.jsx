import { twMerge } from "tailwind-merge";

export function Button({ variant = "primary", className, ...props })
{
    return (
        <button 
            {...props} 
            className={twMerge(
                "text-base text-lk-6 bg-lk-3 hover:bg-lk-4 font-DigitalDiscoRegular rounded transition-colors",
                getVariantStyles(variant),
                className)
            }           
        />
    )
}

function getVariantStyles(variant)
{
    switch (variant) {
        case "primary":
            return "text-xl text-lk-6 w-full font-DigitalDiscoRegular h-16"
            break;
        case "tabular":
            return "text-2xl text-lk-6 w-1/3 font-DigitalDiscoThin rounded-lg"
            break;
        case "svg":
            return "fill-lk-3 hover:fill-lk-4 transition-colors"
            break;
    }
}