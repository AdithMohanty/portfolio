import { Cards } from "@/app/components/Card";

export function AboutSection() {

    return (
        <div className="flex flex-wrap gap-5">
            <div>
                <Cards.ProjectCard title="OptionsPricer" stack={["python-", "numpy-", "flask"]} description="this is a description for the options pricer which is a project i did for quant" />
            </div>
            <div>
                <Cards.ProjectCard title="OptionsPricer" stack={["python-", "numpy-", "flask"]} description="this is a description for the options pricer which is a project i did for quant" />
            </div>
            <div>
                <Cards.ProjectCard title="OptionsPricer" stack={["python-", "numpy-", "flask"]} description="this is a description for the options pricer which is a project i did for quant" />
            </div>
            <div>
                <Cards.ProjectCard title="OptionsPricer" stack={["python-", "numpy-", "flask"]} description="this is a description for the options pricer which is a project i did for quant" />
            </div>
            <div>
                <Cards.ProjectCard title="OptionsPricer" stack={["python-", "numpy-", "flask"]} description="this is a description for the options pricer which is a project i did for quant" />
            </div>
        </div>
        
    )
};