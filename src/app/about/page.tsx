import Tab from "../ui/components/tab";
import TabBar from "../ui/components/tab-bar";
import ThemeToggle from "../ui/components/light-dark-toggle";
import { HiRefresh } from "react-icons/hi";
import Link from "next/link";

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
                            <Tab name="active">about_me</Tab>
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
                            <HiRefresh className="text-light-inactive-text hover:text-light-active-text active:text-light-body dark:text-dark-inactive-text 
                        dark:hover:text-dark-active-text dark:active:text-dark-body invisible md:visible"/>
                        </button>
                        <div className="flex-initial shrink lg:min-w-10/11 relative md:left-6 font-heading pb-1 rounded-default bg-light-search md:text-sm lg:text-m dark:bg-dark-search min-w-8/10">
                            <div className="flex-initial pl-3 pt-1.5 pr-20 text-light-inactive-text hover:text-light-active-text dark:text-dark-inactive-text dark:hover:text-dark-active-text select-none md:pr-10 sm:pr-2 sm:text-sm">
                                jj-k-droid/about
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1/2 h-full relative top-1 rounded-default bg-light-browser p-8 font-body text-light-body outline-4 outline-light-secondary dark:bg-dark-content dark:text-dark-body dark:outline-dark-secondary overflow-scroll">
                    <div className="flex-initial p-6 text-light-body dark:text-dark-active-text md:p-12 text-pretty h-full">
                      <article className="w-full h-full place-content-center select-none">
                        <div className="h-fit">
                            <div className="grid md:flex md:float-right float-none md:pl-4">
                                <img className="flex-initial float-none justify-self-center md:float-right rounded-full size-50 md:size-70 shrink p-0 md:p-4 bg-light-secondary/15 dark:bg-dark-secondary/25" src="/media/jj-k-droid-git-pfp.webp"/>
                            </div>
                            <div className="flex-col basis-0 md:basis-2/3 pr-0 md:pr-7 h-full">
                                <p className="pt-5 md:pt-0 font-heading text-2xl md:text-3xl text-light-primary/80 dark:text-dark-primary">hi, hello! i{"'"}m steph / jj :{")"}</p>
                                <div className="text-lg">
                                    <p> a sophomore and prospective computer science major with a concentration (minor) in digital studies at <a className="text-light-primary/80 dark:text-dark-primary dark:hover:text-dark-subtitle hover:text-light-primary underline" href="https://www.grinnell.edu/">grinnell college</a> who loves to draw and code. a lot of my current experience comes from making small games or software prototypes, a few personal projects (like this website!) and or classes i have taken.</p>
                                    <p>i plan on building a few projects that combine both sofware and hardware components</p>
                                    <br></br>
                                    <p>i{"'"}m currently looking for software, computer engineering or web development internships or networking opportunites. if you know of any open positions or just want to say hi, feel free to reach out at <a className="text-light-primary/80 hover:text-light-primary dark:text-dark-primary dark:hover:text-dark-subtitle underline" href="mailto:kamakama@grinnell.edu">kamakama@grinnell.edu</a> or using any one of my socials linked <a className="text-light-primary/80 hover:text-light-primary dark:text-dark-primary dark:hover:text-dark-subtitle underline" href="/links">here :{")"}</a></p>
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