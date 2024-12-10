import Image from "next/image";
import Tag from "../Tag";

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
          <div key={index} className="flex-grow">
            <div className="relative mb-4 h-[580px] w-full">
              <Image
                src={service.imageUrl}
                alt={`Gif image of ${service.title} from wimbee`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="font-mono text-lg uppercase text-primary-800">
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
