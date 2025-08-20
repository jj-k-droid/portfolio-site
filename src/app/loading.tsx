export default function Loading() {
    return (
        <div className="flex rounded-default flex-initial w-10/12 h-dvh items-center m-auto font-body">
            <div className="flex flex-col h-10/12 w-full shrink rounded-default bg-light-content outline-4 outline-light-secondary dark:bg-dark-content dark:outline-dark-secondary m-auto min-w-fit">
                loading...
            </div>
        </div>
    );
};