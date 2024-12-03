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

function ServicesSection({ content }) {
  return (
    <section className="mx-auto max-w-[1568px] px-4 py-8 lg:pb-20 lg:pt-12">
      <div className="mb-12 flex flex-col items-start justify-between lg:mb-28 lg:flex-row">
        <Tag>{content.tag}</Tag>
        <h2 className="mt-8 max-w-5xl text-2xl text-primary-600 lg:mt-0 lg:w-2/3 lg:text-3xl 2xl:text-[40px] 2xl:leading-[117.647%]">
          {content.description}
        </h2>
      </div>

      <div className="flex flex-col items-start gap-6 lg:flex-row">
        {content.hubs.map((service, index) => (
          <div key={index}>
            <Image
              src={service.imageUrl}
              alt={`Gif image of ${service.title} from wimbee`}
              width={300}
              height={300}
              className="mb-4 h-full w-full"
            />
            <p className="text-lg font-medium uppercase text-primary-800">
              {service.title}
            </p>
            <p className="text-lg text-primary-500">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
