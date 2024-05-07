import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Sarah Green",
    userName: "@sarah_green",
    comment: "EcoFolio has transformed the way I approach sustainability. It's user-friendly interface and comprehensive features make it easy for me to track my progress and make meaningful changes in my daily life.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "David Smith",
    userName: "@david_smith",
    comment: "I've been using EcoFolio for a few months now, and I'm impressed with the personalized recommendations it offers. It's helped me discover new ways to reduce my carbon footprint and live more sustainably.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Emma Johnson",
    userName: "@emma_johnson",
    comment: "EcoFolio's gamification features make sustainability fun and engaging. I love earning rewards and competing with friends to adopt eco-friendly habits. It's a great motivator!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Michael Brown",
    userName: "@michael_brown",
    comment: "As a business owner, I appreciate EcoFolio's scalable solutions. It's helped me implement sustainable practices across my organization and reduce our environmental impact while saving costs.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sophia Lee",
    userName: "@sophia_lee",
    comment: "I highly recommend EcoFolio to anyone looking to live a more eco-friendly lifestyle. It's been an invaluable tool in my sustainability journey, providing me with actionable insights and resources to make a positive impact.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          People Love{" "}
        </span>
        This Landing Page
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non unde error
        facere hic reiciendis illo
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
