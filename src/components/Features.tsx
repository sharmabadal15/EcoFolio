import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Data-Driven Insights",
    description:
      "Gain valuable insights into your sustainability journey with EcoFolio's data-driven approach. Track your progress, set goals, and make informed decisions based on real-time data analysis.",
    image: image4,
  },
  {
    title: "Personalized Recommendations",
    description:
      "Receive personalized recommendations tailored to your unique lifestyle and preferences. Whether you're interested in reducing waste, conserving energy, or supporting eco-friendly businesses, EcoFolio offers personalized suggestions to help you achieve your sustainability goals.",
    image: image3,
  },
  {
    title: "Interactive Learning",
    description:
      "Engage in interactive learning experiences with EcoFolio's educational resources. From interactive quizzes to immersive tutorials, EcoFolio makes learning about sustainability fun and engaging for users of all ages.",
    image: image,
  },
];

const featureList: string[] = [
  "Dark/Light Theme",
  "Reviews",
  "Features",
  "Pricing",
  "Contact Form",
  "Our Team",
  "Responsive Design",
  "Newsletter",
  "Minimalist Design",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
