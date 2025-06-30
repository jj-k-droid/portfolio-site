'use client'
import { PropsWithChildren } from "react";

export default function TabBar({ children }: PropsWithChildren) {
    return (
        <div className="flex relative min-w-fit rounded-default outline-4 outline-light-secondary bg-light-browser dark:outline-dark-secondary dark:bg-dark-content">
            {children}
            <CloseButton/>
        </div>)
};

function CloseButton() {
    return <button className="absolute right-2 lg:top-1/4 rounded-full bg-light-accent lg:md:visible lg:w-5.5 lg:h-5.5 md:w-4 md:h-4 md:top-1/2 sm:invisible dark:bg-dark-secondary hover:bg-light-secondary/80
            dark:hover:bg-dark-accent/80 active:bg-light-secondary dark:active:bg-dark-accent" />
}