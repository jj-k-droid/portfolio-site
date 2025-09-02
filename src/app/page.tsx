import Tab from "./ui/components/tab";
import TabBar from "./ui/components/tab-bar";
import ThemeToggle from "./ui/components/light-dark-toggle";
import { HiRefresh } from "react-icons/hi";
import Link from "next/link";
import MainImage from "./ui/components/main_image";

export default function Page() {
    return (
        <div className="flex rounded-default flex-initial w-10/12 h-dvh items-center m-auto">
            <div className="flex flex-col h-10/12 w-full shrink rounded-default bg-light-content outline-4 outline-light-secondary dark:bg-dark-content dark:outline-dark-secondary m-auto min-w-fit">
                <div className="h-fit rounded-default bg-light-secondary outline-4 outline-light-secondary dark:bg-dark-secondary dark:outline-dark-secondary ">
                    <TabBar>
                        <Link
                            href="/">
                            <Tab name="active">home</Tab>
                        </Link>
                        <Link
                            href="/about">
                            <Tab name="inactive">about</Tab>
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
                    <div className="flex relative pt-2 md:pl-14.5 pb-1 pl-2">
                        <ThemeToggle />
                        <button className="relative left-3">
                            <HiRefresh className="text-light-inactive-text hover:text-light-active-text active:text-light-body dark:text-dark-inactive-text  dark:hover:text-dark-active-text dark:active:text-dark-body invisible md:visible"/>
                        </button>
                        <div className="flex-initial shrink lg:min-w-10/11 relative md:left-6 font-heading pb-1 rounded-default bg-light-search md:text-sm lg:text-m dark:bg-dark-search min-w-8/10">
                            <div className="flex-initial pl-3 pt-1.5 pr-20 text-light-inactive-text hover:text-light-active-text dark:text-dark-inactive-text dark:hover:text-dark-active-text select-none md:pr-10 sm:pr-2 sm:text-sm">
                                jj-k-droid/home
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 relative top-1 rounded-default bg-light-browser pl-6 pr-6 font-body text-light-body outline-4 outline-light-secondary 
                dark:bg-dark-content dark:text-dark-body dark:outline-dark-secondary object-bottom overflow-auto scroll-pb-12">
                    <div className="grid md:flex w-full h-full">
                        <div className="w-full pt-16 md:pt-0">
                            <MainImage />
                            <p className="flex font-heading w-fit relative top-1/30 left-1/10 p-4 md:p-6 pl-8 pr-8 text-2xl md:text-4xl rounded-default bg-[#9BB9E1] items-center
                            dark:text-dark-primary dark:bg-[#1A224B] text-light-primary select-none">
                                welcome!
                            </p>
                        </div>
                        <div className="md:basis-1/5 content-center md:w-fit md:pr-12 md:top-0 relative -top-4/10">
                            <div className="grid">
                                <a className="p-1 md:p-2 my-1 w-auto min-w-fit rounded-default h-fit bg-light-inactive-tab dark:bg-dark-inactive-tab hover:bg-light-secondary/80 hover:text-light-active-text dark:text-dark-inactive-text dark:hover:bg-dark-secondary/80 dark:hover:text-dark-inactive-text text-center md:text-left" href="/about">about me</a>
                                <a className="p-1 md:p-2 my-1 w-auto min-w-fit rounded-default h-fit bg-light-inactive-tab dark:bg-dark-inactive-tab hover:bg-light-secondary/80 hover:text-light-active-text dark:text-dark-inactive-text dark:hover:bg-dark-secondary/80 dark:hover:text-dark-inactive-text text-center md:text-left" href="/projects">projects</a>
                                <a className="p-1 md:p-2 my-1 w-auto min-w-fit rounded-default h-fit bg-light-inactive-tab dark:bg-dark-inactive-tab hover:bg-light-secondary/80 hover:text-light-active-text dark:text-dark-inactive-text dark:hover:bg-dark-secondary/80 dark:hover:text-dark-inactive-text text-center md:text-left" href="/links">links</a>
                                <a className="p-1 md:p-2 my-1 w-auto min-w-fit rounded-default h-fit bg-light-inactive-tab dark:bg-dark-inactive-tab hover:bg-light-secondary/80 hover:text-light-active-text dark:text-dark-inactive-text dark:hover:bg-dark-secondary/80 dark:hover:text-dark-inactive-text text-center md:text-left" href="https://vivero.steph-k.sites.grinnell.edu">vivero</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};