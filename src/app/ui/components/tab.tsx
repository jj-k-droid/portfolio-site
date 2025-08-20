interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Tab({ children, name, ...rest } : TabProps) {
    if (name === "active") {
        return <main>
            <button
                {...rest}
                className="flex bg-light-secondary rounded-tab border-4 border-light-secondary pt-tab pl-tab-l md:pr-tab-r pr-tab-l font-heading md:text-xl lg:text-2xl text-light-active-text 
                dark:bg-dark-secondary dark:text-dark-active-text z-10 after:absolute box-border dark:border-dark-secondary min-w-fit">
                    {children}
                </button>
        </main>
    } else if (name === "inactive") {
        return <main >
            <button
                {...rest}
                className="flex bg-light-inactive-tab rounded-tab pt-tab pl-tab-l md:pr-tab-r pr-tab-l font-heading md:text-xl lg:text-2xl text-light-inactive-text 
                hover:bg-light-secondary/80 active:text-light-active-text active:bg-light-secondary hover:text-light-active-text dark:bg-dark-inactive-tab
                dark:text-dark-inactive-text dark:hover:bg-dark-secondary/80 dark:hover:text-dark-inactive-text dark:active:bg-dark-secondary 
                dark:active:text-dark-active-text box-content border-4 border-light-inactive-tab/0 hover:border-light-secondary/0 
                active:border-light-secondary dark:border-dark-inactive-tab/0 dark:hover:border-dark-secondary/0 dark:active:border-dark-secondary min-w-fit">
                    {children}
                </button>
        </main>
    };
}
