// AboutSection.jsx
import React from "react";
import team from "../../assets/img/icons/team.png";
import mission from "../../assets/img/icons/mission.png";
import story from "../../assets/img/icons/story.png";

const AboutSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-16"
    style={{
        backgroundColor: '#f3f4f6',
        backgroundImage: `
          radial-gradient(at 50% 10%, rgba(213, 181, 110, 0.1) 0px, transparent 40%),
          radial-gradient(at 0% 90%, rgba(213, 181, 110, 0.08) 0px, transparent 40%),
          linear-gradient(115deg, transparent 40%, rgba(213, 181, 110, 0.03) 44%, rgba(213, 181, 110, 0.08) 48%, rgba(213, 181, 110, 0.12) 50%, rgba(213, 181, 110, 0.08) 52%, rgba(213, 181, 110, 0.03) 56%, transparent 60%)
        `
      }}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16">
          About{" "}
          <span className="text-[#D5B56E]">
            1<span className="text-[#0B3C5D]">ezy</span>
            <span className="text-[#D5B56E]">buy</span>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          {/* Our Story */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-yellow-100 p-4 rounded-full mb-4">
              <img src={story} alt="" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Our Story</h3>
            <p className="text-gray-600 font-normal text-base">
              Founded in 2010, 1ezybuy began with a simple mission: to create a
              seamless shopping experience that connects people with quality
              products. What started as a small venture has grown into a trusted
              marketplace for thousands of customers worldwide.
            </p>
          </div>

          {/* Our Mission */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-yellow-100 p-4 rounded-full mb-4">
              <img src={mission} alt="" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-600 font-normal text-base">
              We're committed to providing an exceptional shopping experience
              with a focus on customer satisfaction, product quality, and
              ethical business practices. We believe in transparency,
              sustainability, and building lasting relationships with our
              customers.
            </p>
          </div>

          {/* Our Team */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-yellow-100 p-4 rounded-full mb-4">
              <img src={team} alt="" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Our Team</h3>
            <p className="text-gray-600 font-normal text-base">
              Behind 1ezybuy is a diverse team of passionate individuals
              dedicated to innovation and excellence. Our experts work
              tirelessly to curate the best products, develop intuitive
              features, and ensure your shopping experience is exceptional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
