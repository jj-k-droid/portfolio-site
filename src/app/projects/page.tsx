import Tab from "../ui/components/tab";
import TabBar from "../ui/components/tab-bar";
import ThemeToggle from "../ui/components/light-dark-toggle";
import { HiRefresh } from "react-icons/hi";
import Link from "next/link";

export default function Page() {
    return (
        <div className="flex rounded-default flex-initial w-8/10 h-dvh items-center m-auto">
            <div className="flex flex-col h-10/12 w-full shrink rounded-default bg-light-content outline-4 outline-light-secondary dark:bg-dark-content dark:outline-dark-secondary m-auto min-w-fit">
                <div className="h-fit rounded-default bg-light-secondary outline-4 outline-light-secondary dark:bg-dark-secondary dark:outline-dark-secondary ">
                    <TabBar>
                        <Link
                            href="/">
                            <Tab name="inactive">home</Tab>
                        </Link>
                        <Link
                            href="/about">
                            <Tab name="inactive">about_me</Tab>
                        </Link>
                        <Link
                            href="/projects">
                            <Tab name="active">projects</Tab>
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
                        dark:hover:text-dark-active-text dark:active:text-dark-body sn"/>
                        </button>
                        <div className="flex-initial shrink lg:min-w-10/11 relative left-6 font-heading pb-1 rounded-default bg-light-search md:text-sm lg:text-m 
                    dark:bg-dark-search md:min-w-8/10 sm:min-w-6/10 min-w-fit">
                            <div className="flex-initial pl-3 pt-1.5 pr-15 text-light-inactive-text hover:text-light-active-text dark:text-dark-inactive-text 
                        dark:hover:text-dark-active-text select-none md:pr-10 sm:pr-0 sm:text-sm">
                                jj-k-droid{"/"}projects
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1/2 h-full relative top-1 rounded-default bg-light-browser p-8 font-body text-light-body outline-4 outline-light-secondary 
                dark:bg-dark-content dark:text-dark-body dark:outline-dark-secondary">
                    projects page
                </div>
            </div>
        </div>
    )
};