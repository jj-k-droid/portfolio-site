import Tab from "../ui/components/tab";
import TabBar from "../ui/components/tab-bar";
import ThemeToggle from "../ui/components/light-dark-toggle";
import { HiRefresh } from "react-icons/hi";
import Link from "next/link";
import { FaBluesky, FaGithub, FaLinkedinIn, FaItchIo } from "react-icons/fa6";;

export default function Page() {
    return (
        <div className="flex rounded-default flex-initial w-10/12 h-dvh items-center m-auto">
            <div className="flex flex-col h-10/12 w-full shrink rounded-default bg-light-content outline-4 outline-light-secondary dark:bg-dark-content dark:outline-dark-secondary m-auto min-w-fit">
                <div className="h-fit rounded-default bg-light-secondary outline-4 outline-light-secondary dark:bg-dark-secondary dark:outline-dark-secondary ">
                    <TabBar>
                        <Link
                            href="/">
                            <Tab name="inactive">home</Tab>
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
                            <Tab name="active">links</Tab>
                        </Link>
                    </TabBar>
                    <div className="flex relative pt-2 md:pl-14.5 pb-1 pl-2">
                        <ThemeToggle />
                        <button className="relative left-3">
                            <HiRefresh className="text-light-inactive-text hover:text-light-active-text active:text-light-body dark:text-dark-inactive-text 
                        dark:hover:text-dark-active-text dark:active:text-dark-body invisible md:visible"/>
                        </button>
                        <div className="flex-initial shrink lg:min-w-10/11 relative md:left-6 font-heading pb-1 rounded-default bg-light-search md:text-sm lg:text-m dark:bg-dark-search min-w-8/10">
                            <div className="flex-initial pl-3 pt-1.5 pr-20 text-light-inactive-text hover:text-light-active-text dark:text-dark-inactive-text dark:hover:text-dark-active-text select-none md:pr-10 sm:pr-2 sm:text-sm">
                                jj-k-droid/links
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1/2 h-full relative top-1 rounded-default bg-light-browser p-8 font-body text-light-active-text outline-4 outline-light-secondary 
                dark:bg-dark-content dark:text-dark-active-text dark:outline-dark-secondary overflow-auto select-none">
                    <div className="p-6 text-light-body dark:text-dark-body md:pl-12 md:pr-12 text-pretty h-full">
                        <article className="w-full h-full place-content-center select-none">
                            <div className="h-fit">
                                <p className="text-2xl md:text-3xl font-heading text-light-primary/80 dark:text-dark-primary pb-6">you can find me on...</p> 
                                <div className="w-full">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 content-center">
                                        <div className="text-center p-6 rounded-default m-auto my-3 bg-light-inactive-tab/25 dark:bg-dark-inactive-tab/25 hover:bg-light-secondary/50 hover:text-light-active-text dark:text-dark-inactive-text dark:hover:bg-dark-secondary/80 dark:hover:text-dark-inactive-text h-fit">
                                            <a href="https://bsky.app/profile/jj-k-droid.bsky.social" className="flex-initial">
                                                <FaBluesky className="size-15 md:size-20"/>
                                            </a>
                                            bluesky
                                        </div>
                                        <div className="text-center p-6 rounded-default m-auto my-3 bg-light-inactive-tab/25 dark:bg-dark-inactive-tab/25 hover:bg-light-secondary/50 hover:text-light-active-text dark:text-dark-inactive-text dark:hover:bg-dark-secondary/50 dark:hover:text-dark-inactive-text h-fit">
                                            <a href="https://www.linkedin.com/in/steph-kama-kama/" className="flex-initial">
                                                <FaLinkedinIn className="size-15 md:size-20"/>
                                            </a>
                                            linkedin
                                        </div>
                                        <div className="text-center p-6 rounded-default m-auto my-3 bg-light-inactive-tab/25 dark:bg-dark-inactive-tab/25 hover:bg-light-secondary/50 hover:text-light-active-text dark:text-dark-inactive-text dark:hover:bg-dark-secondary/50 dark:hover:text-dark-inactive-text h-fit">
                                            <a href="https://github.com/jj-k-droid" className="flex-initial">
                                                <FaGithub className="size-15 md:size-20"/>
                                            </a>
                                            github
                                        </div>
                                        <div className="text-center p-6 rounded-default m-auto my-3 bg-light-inactive-tab/25 dark:bg-dark-inactive-tab/25 hover:bg-light-secondary/50 hover:text-light-active-text dark:text-dark-inactive-text dark:hover:bg-dark-secondary/50 dark:hover:text-dark-inactive-text h-fit">
                                            <a href="https://jj-k.itch.io/" className="flex-initial">
                                                <FaItchIo className="size-15 md:size-20"/>
                                            </a>
                                            itch
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
};