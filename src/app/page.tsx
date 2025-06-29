import Tab from "./ui/components/tab";
import TabBar from "./ui/components/tab-bar";
import ThemeToggle from "./ui/components/light-dark-toggle";
import { HiRefresh } from "react-icons/hi";

export default function Page() {
    return (
        <div className="flex rounded-default flex-initial w-8/10 h-dvh place-self-center items-center">
            <div className="flex-initial h-9/12 w-full rounded-default bg-light-secondary outline-4 outline-light-secondary dark:bg-dark-secondary dark:outline-dark-secondary">
                <div className="rounded-tab bg-light-secondary outline-4 outline-light-secondary dark:bg-dark-secondary dark:outline-dark-secondary ">
                    <TabBar>
                        <Tab name="active">home</Tab>
                        <Tab name="inactive">about_me</Tab>
                        <Tab name="inactive">projects</Tab>
                        {/* <Tab name="inactive">vivero</Tab> */}
                        <Tab name="inactive">links</Tab>
                    </TabBar>
                    <div className="flex relative pt-2 pl-14.5">
                        <ThemeToggle />
                        <button className="relative left-3">
                            <HiRefresh className="text-light-inactive-text hover:text-light-active-text active:text-light-body dark:text-dark-inactive-text 
                        dark:hover:text-dark-active-text dark:active:text-dark-body"/>
                        </button>
                        <div className="flex-initial grow lg:max-w-10/11 relative left-6 font-heading pb-1 rounded-default bg-light-search md:text-sm lg:text-m 
                    dark:bg-dark-search md:max-w-8/10 sm:max-w-6/10">
                            <div className="flex-initial pl-3 pt-1.5 pr-20 text-light-inactive-text hover:text-light-active-text dark:text-dark-inactive-text 
                        dark:hover:text-dark-active-text select-none md:pr-10 sm:pr-2">
                                jj-k-droid.dev{"/"}home
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative h-891/1000 top-2 rounded-default p-8 font-body text-light-body bg-light-content dark:text-dark-body outline-4 outline-light-secondary dark:bg-dark-content
                dark:outline-dark-secondary">
                    home page
                </div>
            </div>
        </div>
    )
};