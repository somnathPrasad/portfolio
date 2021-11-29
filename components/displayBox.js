import Image from "next/image";
import Link from "next/link";

export default function DisplayBox({ data }) {
  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-12 md:px-20 gap-y-2">
        {data.map((dataset) => {
          return (
            <div className="group" key={dataset.id}>
              <Link href={dataset.link}>
                <a target="_blank" className="relative">
                  <Image
                    className="rounded-sm hover:opacity-90"
                    src={dataset.img}
                    alt="website image"
                    title={dataset.title}
                  />
                  <p className="absolute text-white text-2xl md:bottom-10 bottom-5 left-1/2 transform -translate-x-1/2 shadow-2xl">
                    {dataset.title}
                  </p>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
