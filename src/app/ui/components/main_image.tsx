'use client'
import { useTheme } from "next-themes";

export default function MainImage() {
    const { theme } = useTheme();

    return (
    <div className="flex-initial h-7/10 p-12 pt-12 object-bottom relative top-1/10">
        {
            theme === "dark" ? (
                <img src="/media/grid-dark.png" className="w-full h-full rounded-default object-cover border-4 border-dark-body bg-dark-accent/25" />
            ) : (
                <img src="/media/grid-light.png" className="w-full h-full rounded-default object-cover border-4 border-light-primary bg-light-accent/25" />
            )
        }
    </div>)
}