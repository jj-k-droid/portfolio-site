export default function Loading() {
    return (
        <div className="flex rounded-default flex-initial w-10/12 h-dvh items-center m-auto font-body select-none min-w-fit">
            <div className="flex flex-col h-10/12 w-full shrink rounded-default bg-light-content outline-4 outline-light-secondary dark:bg-dark-content dark:outline-dark-secondary m-auto text-2xl md:text-3xl min-w-fit">
                <div className="relative h-full w-full text-light-secondary dark:text-dark-secondary min-w-fit shrink">
                    <p className="absolute bottom-0 right-0 p-6 md:p-12 place-self-center">
                    loading...
                    </p>
                </div>
            </div>
        </div>
    );
};