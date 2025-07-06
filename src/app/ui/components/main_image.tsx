'use client'
import { useTheme } from "next-themes";

export default function MainImage() {
    const {systemTheme, theme} = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
    <div className="flex-initial h-6/10 pl-12 pr-12 pt-20 object-bottom relative top-1/10">
        {
            currentTheme === "dark" ? (
                <img src="/media/grid-dark.png" className="w-full h-full rounded-default object-cover border-4 border-dark-body bg-dark-accent/25" />
            ) : (
                <img src="/media/grid-light.png" className="w-full h-full rounded-default object-cover border-4 border-light-primary bg-light-accent/25" />
            )
        }
    </div>)
}