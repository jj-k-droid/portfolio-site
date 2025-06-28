import Tab from "./ui/components/tab";
import TabBar from "./ui/components/tab-bar";

export default function Page() {
    return (
        <div className="font-body pr-6 pl-6">jj{"'"}s portfolio
            <div className="pr-8 pl-8 pt-10">
                <div>
                    <TabBar>
                        <Tab name="active">home</Tab>
                        <Tab name="inactive">about_me</Tab>
                        <Tab name="inactive">projects</Tab>
                        {/* <Tab name="inactive">vivero</Tab> */}
                        <Tab name="inactive">links</Tab>
                    </TabBar>
                </div>
                <div className="dark relative top-2">
                    <TabBar>
                        <Tab name="active">home</Tab>
                        <Tab name="inactive">about_me</Tab>
                        <Tab name="inactive">projects</Tab>
                        {/* <Tab name="inactive">vivero</Tab> */}
                        <Tab name="inactive">links</Tab>
                    </TabBar>
                </div>
            </div>
        </div>
    )
};