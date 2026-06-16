import { twMerge } from "tailwind-merge";
import logo from "/src/assets/images/lazykeys_LogoAnim.webp";
import usfLogo from "/src/assets/images/experience_icons/usf_logo.webp";
import lionheartLogo from "/src/assets/images/experience_icons/lionheartstudiosllc_logo.webp";
import gflLogo from "/src/assets/images/experience_icons/gamesforlove_logo.webp";
import uphillBattleThumbnail from "/src/assets/images/project_thumbnails/uphill_battle_thumb.webp";

export function Image({ variant = null, src, className, ...props }) {
    return (
        <img 
            {...props}
            src={getImageSource(src)} 
            className={twMerge(
                getVariantStyles(variant),
                 className
            )}
        />
    )
}

function getVariantStyles(variant) {
    switch (variant) {
        case "icon":
            return "mask-radial-at-center mask-radial-from-70% mask-radial-to-70% mask-circle min-w-14 w-14 bg-white"
        case "thumbnail":
            return "w-auto border-5 border-lk-2 rounded-br-lg rounded-tr-lg rounded-tl-lg";
        default:
            return "";
    }
}

function getImageSource(src) {
    switch (src) {
        case "lazykeys":
            return logo;
        case "usf":
            return usfLogo;
        case "lionheart":
            return lionheartLogo;
        case "gfl":
            return gflLogo;
        case "uphillBattle":
            return uphillBattleThumbnail;
    }
}