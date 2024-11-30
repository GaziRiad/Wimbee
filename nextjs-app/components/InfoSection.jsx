import Image from "next/image";
import infoImg from "../public/images/info.png";
import ContactBtn from "./ContactBtn";

const locations = [
  {
    name: "Wimbee France",
    phone: "+33 (18) 8614122",
    address: "74 Avenue Kléber, 75116 Paris",
  },
  {
    name: "Wimbee France",
    phone: "+33 (18) 8614122",
    address: "74 Avenue Kléber, 75116 Paris",
  },
  {
    name: "Wimbee France",
    phone: "+33 (18) 8614122",
    address: "74 Avenue Kléber, 75116 Paris",
  },
  {
    name: "Wimbee France",
    phone: "+33 (18) 8614122",
    address: "74 Avenue Kléber, 75116 Paris",
  },
];

function InfoSection() {
  return (
    <section className="bg-primary-800 py-20 text-light-200">
      <div className="mx-auto flex max-w-[1568px] items-start justify-between gap-40">
        <Image
          src={infoImg}
          alt="Introduction section of wimbee GIF"
          className="rounded-custom h-[808px] flex-1"
        />

        <div className="flex-1">
          <h2 className="mb-6 text-[40px] text-light-300">
            Find the space to drive innovation and bring ideas to life with us.
          </h2>
          <p className="mb-20 text-xl text-[#93989C]">
            Fill out the form and contact <br /> wimbee as soon as possible!
          </p>
          <div className="mb-28 w-fit">
            <ContactBtn />
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10">
            {locations.map((location, index) => (
              <div key={index}>
                <p className="mb-6 text-base font-medium uppercase text-[#93989C]">
                  {location.name}
                </p>
                <p className="text-xl leading-normal">{location.phone}</p>
                <p className="whitespace-pre-line text-xl leading-normal">
                  {location.address.split(",").join("\n")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
