import Image from "next/image";

const portraits = [
    {
    id: "portrait-outdoor",
    src: "/portraits/outdoor.jpg",
    alt: "Matsvei Dubaleka outdoors by the sea",
    label: "Outdoor",
    position: "50% 18%",
  },
  {
    id: "portrait-studio",
    src: "/portraits/studio.jpg",
    alt: "Matsvei Dubaleka in a suit, facing the camera",
    label: "Studio",
    position: "34% 16%",
  },
  {
    id: "portrait-profile",
    src: "/portraits/profile.jpg",
    alt: "Matsvei Dubaleka in a suit, looking aside",
    label: "Profile",
    position: "36% 14%",
  },
  {
    id: "portrait-smile",
    src: "/portraits/smile.jpg",
    alt: "Matsvei Dubaleka smiling in a suit",
    label: "Smile",
    position: "40% 12%",
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
              quality={100}
              sizes="216px"
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
              sizes="44px"
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
