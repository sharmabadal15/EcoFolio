import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Accessibility",
    description:
      "At EcoFolio, accessibility is paramount. We strive to make sustainable living accessible to everyone, regardless of background or experience. Our user-friendly platform and comprehensive resources ensure that anyone can embark on their journey towards a greener lifestyle with ease.",
  },
  {
    icon: <MapIcon />,
    title: "Community",
    description:
      "Join our dynamic community at EcoFolio and become part of a global movement towards sustainability. Connect with like-minded individuals, share ideas, and support each other on your eco-friendly journey. Together, we can make a real difference in creating a more sustainable world.",
  },
  {
    icon: <PlaneIcon />,
    title: "Scalability",
    description:
      "EcoFolio adapts to your evolving sustainability needs. Whether you're just starting out on your eco-friendly journey or you're a seasoned environmental advocate, our platform offers scalable solutions tailored to your level of experience. From beginner tips to advanced strategies, we've got you covered every step of the way.",
  },
  {
    icon: <GiftIcon />,
    title: "Gamification",
    description:
      "Experience sustainability in a whole new way with EcoFolio's gamified approach. Earn rewards, track your progress, and compete with friends as you adopt eco-friendly habits and make positive changes in your daily life. Our gamification features turn sustainability into an engaging and enjoyable experience for all.",
  },
];


export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Dive into EcoFolio's intuitive step-by-step guide to discover how you
        can seamlessly integrate sustainable practices into your daily life.
        From practical tips to actionable insights, EcoFolio empowers you to
        make meaningful changes for a greener future.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
