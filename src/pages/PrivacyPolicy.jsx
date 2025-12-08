import React from "react";
import { ScrollRestoration } from "react-router-dom";

const privacyTerms = [
  "Lorem ipsum dolor sit amet consectetur. Lacus at venenatis gravida vivamus mauris. Quisque mi est vel dis. Donec rhoncus laoreet odio orci sed risus elit accumsan. Mattis ut est tristique amet vitae at aliquet. Ac vel porttitor egestas scelerisque enim quisque senectus. Euismod ultricies vulputate id cras bibendum sollicitudin proin odio bibendum. Velit velit in scelerisque erat etiam rutrum phasellus nunc. Sed lectus sed a at et eget. Nunc purus sed quis at risus. Consectetur nibh justo proin placerat condimentum id at adipiscing.",
  "Vel blandit mi nulla sodales consectetur. Egestas tristique ultrices gravida duis nisl odio. Posuere curabitur eu platea pellentesque ut. Facilisi elementum neque mauris facilisis in. Cursus condimentum ipsum pretium consequat turpis at porttitor nisi.",
  "Scelerisque tellus praesent condimentum euismod a faucibus. Auctor at ultricies at urna aliquam massa pellentesque. Vitae vulputate nullam diam placerat m.",
  // repeated 3x as seen in image
  "Lorem ipsum dolor sit amet consectetur. Lacus at venenatis gravida vivamus mauris. Quisque mi est vel dis. Donec rhoncus laoreet odio orci sed risus elit accumsan. Mattis ut est tristique amet vitae at aliquet. Ac vel porttitor egestas scelerisque enim quisque senectus. Euismod ultricies vulputate id cras bibendum sollicitudin proin odio bibendum. Velit velit in scelerisque erat etiam rutrum phasellus nunc. Sed lectus sed a at et eget. Nunc purus sed quis at risus. Consectetur nibh justo proin placerat condimentum id at adipiscing.",
  "Vel blandit mi nulla sodales consectetur. Egestas tristique ultrices gravida duis nisl odio. Posuere curabitur eu platea pellentesque ut. Facilisi elementum neque mauris facilisis in. Cursus condimentum ipsum pretium consequat turpis at porttitor nisi.",
  "Scelerisque tellus praesent condimentum euismod a faucibus. Auctor at ultricies at urna aliquam massa pellentesque. Vitae vulputate nullam diam placerat m.",
];

const PrivacyPolicy = () => {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 bg-[#FAF8F2] text-gray-800">
      <ScrollRestoration />
      <div className="max-w-5xl mx-auto">
        <nav className="text-xs sm:text-sm text-gray-500 mb-4">
          <span className="hover:underline cursor-pointer">Home</span> /{" "}
          <span className="text-gray-700 font-medium">Privacy Policy</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">
          Privacy Policy
        </h1>
        <ul className="space-y-5 list-disc pl-5 sm:pl-6 text-base sm:text-lg lg:text-xl text-left">
          {privacyTerms.map((term, index) => (
            <li key={index}>{term}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
