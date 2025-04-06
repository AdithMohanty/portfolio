interface ProjectCardProps {
    title: string;
    stack: string[];
    description: string;
}

interface ExperienceCardProps {
    company: string;
    role: string;
    description: string;
    date: string;
    bullets: string[];
}

export const Cards = {
    ProjectCard: ({title, stack, description}: ProjectCardProps) => {
        return (
            <div 
            className="flex flex-col text-left items-left gap-2 bg-slate-800 rounded-lg border-tekehelet border-3 w-2xs p-4">
                <div className="hover:-translate-3 transition-all ease-in-out">
                    {title}
                </div>
                <div>
                    {stack}
                </div>
                <div>
                    {description}
                </div>
            </div>
        );
    
    
    },

    ExperienceCard: ({role, description, date}: ExperienceCardProps) => {
        return (
            <div className="flex flex-col gap-10 items-center">



            </div>
        );
    
    }
}





