import Tab from"../ui/components/tab";
import TabBar from"../ui/components/tab-bar";
import ThemeToggle from"../ui/components/light-dark-toggle";
import { HiRefresh } from"react-icons/hi";
import Link from"next/link";

export default function Page() {
    return (
        <div className="flex rounded-default flex-initial w-10/12 h-dvh items-center m-auto">
            <div className="flex flex-col h-10/12 w-full shrink rounded-default bg-light-content outline-4 outline-light-secondary dark:bg-dark-content dark:outline-dark-secondary m-auto min-w-fit">
                <div className="h-fit rounded-default bg-light-secondary outline-4 outline-light-secondary dark:bg-dark-secondary dark:outline-dark-secondary">
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
                    <div className="flex relative pt-2 md:pl-14.5 pb-1 pl-2">
                        <ThemeToggle />
                        <button className="relative left-3">
                            <HiRefresh className="text-light-inactive-text hover:text-light-active-text active:text-light-body dark:text-dark-inactive-text 
                        dark:hover:text-dark-active-text dark:active:text-dark-body invisible md:visible"/>
                        </button>
                        <div className="flex-initial shrink lg:min-w-10/11 relative md:left-6 font-heading pb-1 rounded-default bg-light-search md:text-sm lg:text-m dark:bg-dark-search min-w-8/10">
                            <div className="flex-initial pl-3 pt-1.5 pr-20 text-light-inactive-text hover:text-light-active-text dark:text-dark-inactive-text dark:hover:text-dark-active-text select-none md:pr-10 sm:pr-2 sm:text-sm">
                                jj-k-droid/projects
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1/2 h-full relative top-1 rounded-default bg-light-browser p-8 font-body text-light-active-text outline-4 outline-light-secondary 
                dark:bg-dark-content dark:text-dark-active-text dark:outline-dark-secondary overflow-scroll select-none">
                    <div className="p-6 text-light-body dark:text-dark-body md:pl-12 md:pr-12 text-pretty h-full">
                        <p className="text-2xl md:text-3xl font-heading text-light-primary/80 dark:text-dark-primary pb-6">projects</p> 
                        {/*section*/}
                        <div className="md:flex my-4 rounded-default p-6 bg-light-secondary/5 dark:bg-dark-secondary/5">
                            <div className="flex-col md:basis-4/5">
                                <p className="font-heading text-xl md:text-2xl text-light-subtitle dark:text-dark-subtitle">portfolio site</p>
                                <p className="flex md:pr-6">a portfolio site built using react and next.js. inspired by retro and browser UI</p>
                                <a className="text-light-primary/80 dark:text-dark-primary dark:hover:text-dark-subtitle hover:text-light-primary underline after:content-['↗']" href="https://github.com/jj-k-droid/portfolio-site">repo</a>
                                <div className="md:basis-1/5 content-center md:w-fit pt-3">
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 content-center grid-auto-flow-col space-x-3 md:space-x-4">
                                        <p className="p-1 md:p-2 my-1 w-auto min-w-fit rounded-default h-fit bg-light-inactive-tab dark:bg-dark-inactive-tab hover:bg-light-secondary/80 hover:text-light-active-text dark:text-dark-inactive-text dark:hover:bg-dark-secondary/80 dark:hover:text-dark-inactive-text">react</p>
                                        <p className="p-1 md:p-2 my-1 w-auto min-w-fit rounded-default h-fit bg-light-inactive-tab dark:bg-dark-inactive-tab hover:bg-light-secondary/80 hover:text-light-active-text dark:text-dark-inactive-text dark:hover:bg-dark-secondary/80 dark:hover:text-dark-inactive-text">next.js</p>
                                        <p className="p-1 md:p-2 my-1 w-auto min-w-fit rounded-default h-fit bg-light-inactive-tab dark:bg-dark-inactive-tab hover:bg-light-secondary/80 hover:text-light-active-text dark:text-dark-inactive-text dark:hover:bg-dark-secondary/80 dark:hover:text-dark-inactive-text">git</p>
                                        <p className="p-1 md:p-2 my-1 w-auto min-w-fit rounded-default h-fit bg-light-inactive-tab dark:bg-dark-inactive-tab hover:bg-light-secondary/80 hover:text-light-active-text dark:text-dark-inactive-text dark:hover:bg-dark-secondary/80 dark:hover:text-dark-inactive-text">tailwind css</p>
                                        <p className="p-1 md:p-2 my-1 w-auto min-w-fit rounded-default h-fit bg-light-inactive-tab dark:bg-dark-inactive-tab hover:bg-light-secondary/80 hover:text-light-active-text dark:text-dark-inactive-text dark:hover:bg-dark-secondary/80 dark:hover:text-dark-inactive-text">web dev</p>
                                    </div>
                                </div>
                            </div>
                            <div className="grid md:flex md:float-right float-none md:pl-4 shrink-0 pt-3 md:pt-0">
                                <img className="flex-initial float-none justify-self-center md:float-right rounded-default size-40 md:size-50" src="/media/jj-k-droid-git-pfp.webp"/>
                            </div>
                        </div>
                        <div className="md:flex my-4 rounded-default p-6 bg-light-secondary/5 dark:bg-dark-secondary/5">
                            <div className="flex-col md:basis-4/5">
                                <p className="font-heading text-xl md:text-2xl text-light-subtitle dark:text-dark-subtitle">tetris in scamper</p>
                                <p className="flex md:pr-6">NES tetris made in scamper (a scheme derivative) for a CS final</p>
                                <a className="text-light-primary/80 dark:text-dark-primary dark:hover:text-dark-subtitle hover:text-light-primary underline after:content-['↗']" href="https://github.com/jj-k-droid/Tetris-in-Scamper">repo</a>
                                <div className="md:basis-1/5 content-center md:w-fit pt-3">
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 content-center grid-auto-flow-col space-x-3 md:space-x-4">
                                        <p className="p-1 md:p-2 my-1 w-auto min-w-fit rounded-default h-fit bg-light-inactive-tab dark:bg-dark-inactive-tab hover:bg-light-secondary/80 hover:text-light-active-text dark:text-dark-inactive-text dark:hover:bg-dark-secondary/80 dark:hover:text-dark-inactive-text">scheme</p>
                                        <p className="p-1 md:p-2 my-1 w-auto min-w-fit rounded-default h-fit bg-light-inactive-tab dark:bg-dark-inactive-tab hover:bg-light-secondary/80 hover:text-light-active-text dark:text-dark-inactive-text dark:hover:bg-dark-secondary/80 dark:hover:text-dark-inactive-text">git</p>
                                        <p className="p-1 md:p-2 my-1 w-auto min-w-fit rounded-default h-fit bg-light-inactive-tab dark:bg-dark-inactive-tab hover:bg-light-secondary/80 hover:text-light-active-text dark:text-dark-inactive-text dark:hover:bg-dark-secondary/80 dark:hover:text-dark-inactive-text">game dev</p>
                                        <p className="p-1 md:p-2 my-1 w-auto min-w-fit rounded-default h-fit bg-light-inactive-tab dark:bg-dark-inactive-tab hover:bg-light-secondary/80 hover:text-light-active-text dark:text-dark-inactive-text dark:hover:bg-dark-secondary/80 dark:hover:text-dark-inactive-text">functional programming</p>
                                    </div>
                                </div>
                            </div>
                            <div className="grid md:flex md:float-left float-none md:pl-4 shrink-0 pt-3 md:pt-0">
                                <img className="flex-initial float-none justify-self-center md:float-right rounded-default size-40 md:size-50" src="/media/tetris-in-scamper.webp"/>
                            </div>
                        </div>
                        <div className="pb-12"/>
                    </div>
                </div>
            </div>
        </div>
    )
};