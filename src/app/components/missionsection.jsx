import Image from "next/image";

const MissionSection = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Mission Text */}
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At Thrive Sphere, our mission is to make high-quality education
            available to everyone and anywhere. We are committed to empowering
            individuals with the tools, knowledge, and skills they need to
            thrive in a rapidly changing world.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            We are here to bridge skill gaps, inspire lifelong learning, and
            foster a global community. Our goal is to transform education,
            making it flexible, engaging, and tailored to fit your unique and
            special journey.
          </p>
        </div>

        {/* Right: Image Grid */}
        <div className="grid grid-cols-2 gap-3">
          <Image
            src="/assets/our_mission_img2.png" // Replace with actual image path
            alt="Learning Image"
            width={300}
            height={200}
            className="rounded-lg object-cover"
          />
          <Image
            src="/assets/our_mission_img1.png"
            alt="Student Image"
            width={300}
            height={200}
            className="rounded-lg object-cover"
          />
          <Image
            src="/assets/our_mission_img3.png"
            alt="Studying"
            width={600}
            height={200}
            className="rounded-lg object-cover col-span-2"
          />
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
