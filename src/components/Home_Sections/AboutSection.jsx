// AboutSection.jsx
import React from "react";
import team from '../../assets/img/icons/team.png'
import mission from '../../assets/img/icons/mission.png'
import story from '../../assets/img/icons/story.png'

const AboutSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16">
          About <span className="text-yellow-500">
            M<span className="text-black">tech</span>
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
              Founded in 2015, Mtech began with a simple mission: to create a
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
              Behind Mtech is a diverse team of passionate individuals
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
