import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Code Collaboration",
    description:
      "Collaborate seamlessly with your team using EcoFolio's code collaboration tools. Share code snippets, track changes, and work together in real-time to bring your projects to life.",
    icon: <ChartIcon />,
  },
  {
    title: "Project Management",
    description:
      "Streamline your project management process with EcoFolio's intuitive tools. Plan tasks, set deadlines, and monitor progress effortlessly, ensuring that your projects stay on track and within budget.",
    icon: <WalletIcon />,
  },
  {
    title: "Task Automation",
    description:
      "Automate repetitive tasks and streamline your workflow with EcoFolio's task automation features. Save time and increase productivity by automating routine processes, allowing you to focus on more important aspects of your work.",
    icon: <MagnifierIcon />,
  },
];
export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Client-Centric{" "}
            </span>
            Services
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
          Discover how EcoFolio's client-centric services can empower your business and streamline your workflow.

          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
