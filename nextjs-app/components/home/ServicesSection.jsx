import Image from "next/image";
import Tag from "../Tag";

const SERVICES = [
  {
    image: "/service1.gif",
    title: "Data & AI Hub",
    description:
      "Empowering businesses and individuals for an AI-driven future with tailored strategies and advanced solutions.",
  },
  {
    image: "/service2.gif",
    title: "Talent Hub",
    description:
      "Preparing tomorrow’s workforce by nurturing talent for the evolving business landscape.",
  },
  {
    image: "/service3.gif",
    title: "Digital Transformation Hub",
    description:
      "Driving innovation through cutting-edge digital solutions that ensure businesses excel in the digital age.",
  },
];

function ServicesSection() {
  return (
    <section className="mx-auto max-w-[1568px] pb-20 pt-12">
      <div className="mb-28 flex items-start justify-between">
        <Tag>Key Services Across Sectors</Tag>
        <h2 className="text-primary-600 max-w-5xl text-[40px]">
          We offer tailored solutions to help businesses and individuals thrive
          with AI, talent development, and digital transformation.
        </h2>
      </div>

      <div className="flex items-start gap-6">
        {SERVICES.map((service, index) => (
          <div key={index}>
            <Image
              src={service.image}
              alt={`Gif image of ${service.title} from wimbee`}
              width={300}
              height={300}
              unoptimized
              className="mb-4 w-full"
            />
            <p className="text-primary-800 text-lg font-medium uppercase">
              {service.title}
            </p>
            <p className="text-primary-500 text-xl">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
