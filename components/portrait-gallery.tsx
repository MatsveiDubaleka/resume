import Image from "next/image";

const portraits = [
    {
    id: "portrait-smile",
    src: "/portraits/smile.jpg",
    alt: "Matsvei Dubaleka smiling in a suit",
    label: "Smile",
    position: "40% 12%",
  },

  {
    id: "portrait-beach",
    src: "/portraits/beach.png",
    alt: "Matsvei Dubaleka on the beach",
    label: "Beach",
    position: "38% 28%",
  },
  {
    id: "portrait-cafe",
    src: "/portraits/cafe.jpg",
    alt: "Matsvei Dubaleka at a cafe",
    label: "Cafe",
    position: "50% 16%",
  },
    {
    id: "portrait-outdoor",
    src: "/portraits/outdoor.jpg",
    alt: "Matsvei Dubaleka outdoors by the sea",
    label: "Outdoor",
    position: "50% 18%",
  },

] as const;

export function PortraitGallery() {
  return (
    <figure className="portrait-gallery mx-auto w-full max-w-54 sm:mx-0">
      {portraits.map((photo, index) => (
        <input
          key={photo.id}
          id={photo.id}
          className="sr-only"
          type="radio"
          name="portrait"
          defaultChecked={index === 0}
        />
      ))}
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute -inset-2 -z-10 rounded-[1.8rem] bg-linear-to-br from-fill-coral via-fill-amber to-fill-teal opacity-80 blur-md print:hidden"
        />
        <div className="relative aspect-4/5 overflow-hidden rounded-[1.35rem] bg-surface shadow-lg">
          {portraits.map((photo) => (
            <Image
              key={photo.src}
              src={photo.src}
              alt=""
              fill
              priority
              unoptimized
              sizes="(max-width: 640px) 80vw, 540px"
              className={`object-cover portrait-frame portrait-frame-${photo.id}`}
              style={{ objectPosition: photo.position }}
            />
          ))}
        </div>
      </div>
      <div className="mt-3 flex justify-center gap-2 print:hidden sm:justify-start">
        {portraits.map((photo) => (
          <label
            key={photo.id}
            htmlFor={photo.id}
            className={`portrait-thumb portrait-thumb-${photo.id} relative size-11 cursor-pointer overflow-hidden rounded-lg ring-2 ring-offset-2 ring-offset-background transition motion-safe:hover:-translate-y-0.5`}
          >
              <Image
                src={photo.src}
                alt=""
                fill
                unoptimized
                sizes="88px"
                className="object-cover"
                style={{ objectPosition: photo.position }}
              />
            <span className="sr-only">Show {photo.label.toLowerCase()} portrait</span>
          </label>
        ))}
      </div>
      <figcaption className="sr-only">Portrait of Matsvei Dubaleka</figcaption>
    </figure>
  );
}
