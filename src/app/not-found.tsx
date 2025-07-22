'use client'
import Tab from "./ui/components/tab";
import TabBar from "./ui/components/tab-bar";
import ThemeToggle from "./ui/components/light-dark-toggle";
import { HiRefresh } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="flex rounded-default flex-initial w-dvw h-dvh items-center">
            <div className="flex flex-col h-10/12 w-8/10 rounded-default bg-light-content outline-4 outline-light-secondary dark:bg-dark-content dark:outline-dark-secondary m-auto">
                <div className="h-fit rounded-default bg-light-secondary outline-4 outline-light-secondary dark:bg-dark-secondary dark:outline-dark-secondary ">
                    <TabBar>
                         <Tab name="active">err_404</Tab>
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
                                jj-k-droid{"/"}404
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1/2 h-full relative top-1 rounded-default bg-light-content p-8 font-body text-light-body outline-4 outline-light-secondary 
                dark:bg-dark-content dark:text-dark-body dark:outline-dark-secondary">
                    <div className="font-heading text-3xl text-light-primary dark:text-dark-primary">
                        uh-oh! <br></br>
                    </div>
                    page not found :{"("}
                    <div onClick={() => router.back()} className="pt-2 hover:text-light-active-text hover:underline dark:hover:text-dark-subtitle active:text-light-primary
                    active:underline dark:active:text-dark-primary">
                        go back?
                    </div>
                </div>
            </div>
        </div>
    )
};