import Image from "next/image";

const ImageOverlay = ({ imgOverlay, children, className }) => {
  return (
    <section className={`relative w-full ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imgOverlay}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="brightness-75" // Darkens image for better readability
        />
      </div>

      {/* Content on top of the overlay */}
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default ImageOverlay;
