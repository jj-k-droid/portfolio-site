import Tab from "./ui/components/tab";
import TabBar from "./ui/components/tab-bar";
import ThemeToggle from "./ui/components/light-dark-toggle";
import { HiRefresh } from "react-icons/hi";
import Link from "next/link";
import MainImage from "./ui/components/main_image";

export default function Page() {
    return (
        <div className="flex rounded-default flex-initial w-8/10 h-dvh place-self-center items-center">
            <div className="flex flex-col h-10/12 w-full rounded-default bg-light-content outline-4 outline-light-secondary dark:bg-dark-content dark:outline-dark-secondary min-w-fit">
                <div className="h-fit rounded-default bg-light-secondary outline-4 outline-light-secondary dark:bg-dark-secondary dark:outline-dark-secondary ">
                    <TabBar>
                        <Link
                            href="/">
                            <Tab name="active">home</Tab>
                        </Link>
                        <Link
                            href="/about">
                            <Tab name="inactive">about_me</Tab>
                        </Link>
                        <Link
                            href="/projects">
                            <Tab name="inactive">projects</Tab>
                        </Link>
                        {/* <Link
                            href="/vivero">
                            <Tab name="inactive">vivero</Tab>
                        </Link>*/}
                        <Link
                            href="/links">
                            <Tab name="inactive">links</Tab>
                        </Link>
                    </TabBar>
                    <div className="flex relative pt-2 pl-14.5 pb-1">
                        <ThemeToggle />
                        <button className="relative left-3">
                            <HiRefresh className="text-light-inactive-text hover:text-light-active-text active:text-light-body dark:text-dark-inactive-text 
                        dark:hover:text-dark-active-text dark:active:text-dark-body"/>
                        </button>
                        <div className="flex-initial shrink lg:min-w-10/11 relative left-6 font-heading pb-1 rounded-default bg-light-search md:text-sm lg:text-m 
                    dark:bg-dark-search md:min-w-8/10 sm:min-w-7/10 min-w-fit">
                            <div className="flex-initial pl-3 pt-1.5 pr-20 text-light-inactive-text hover:text-light-active-text dark:text-dark-inactive-text 
                        dark:hover:text-dark-active-text select-none md:pr-10 sm:pr-2 sm:text-sm">
                                jj-k-droid{"/"}home
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1/2 h-full relative top-1 rounded-default bg-light-browser pl-6 pr-6 font-body text-light-body outline-4 outline-light-secondary 
                dark:bg-dark-content dark:text-dark-body dark:outline-dark-secondary object-bottom">
                    <MainImage />
                    <div className="flex font-heading w-fit relative -top-5 left-1/10 p-6 pl-8 pr-8 lg:text-2xl rounded-default bg-[#7CA3D6] items-center sm:text-lg md:text-xl
                    dark:text-dark-primary dark:bg-[#363777] text-light-primary">
                        steph kama-kama
                        <br></br>
                        aspiring SWE
                    </div>
                </div>
            </div>
        </div>
    )
};