import Image from "next/image";
import Link from "next/link";

export default function DisplayBox({ data }) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-x-12 px-20">
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
                  <p className="absolute text-white text-2xl bottom-10 left-1/2 transform -translate-x-1/2 shadow-2xl">
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
