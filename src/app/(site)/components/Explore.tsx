"use client";

import Button from "@/components/Button";
import CompanyCard from "./CompanyCard";

const Explore = () => {
  return (
    <div className="min-h-screen relative container mx-auto py-20 text-center z-20">
      <h1 className="font-neuro text-4xl md:text-5xl">Explore Startups Raising Now</h1>
      <div className="w-full flex gap-10 mt-10 mb-16 justify-center flex-wrap">
        <CompanyCard
          name="Gojek"
          headline="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque blanditiis ut cum modi, enim ex voluptate et architecto consequatur labore?"
          companyImage="/landing/company_1.jpg"
          ownerImage="/profile.jpg"
          price="$1,000,000"
        />
        <CompanyCard
          name="Gojek"
          headline="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque blanditiis ut cum modi, enim ex voluptate et architecto consequatur labore?"
          companyImage="/landing/company_1.jpg"
          ownerImage="/profile.jpg"
          price="$1,000,000"
        />
        <CompanyCard
          name="Gojek"
          headline="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque blanditiis ut cum modi, enim ex voluptate et architecto consequatur labore?"
          companyImage="/landing/company_1.jpg"
          ownerImage="/profile.jpg"
          price="$1,000,000"
        />
      </div>
      <div className="flex justify-center">
        <Button
          text="Explore More Startup"
          isPrimary
          onClick={() => {}}
          isGradient
          isBig
        />
      </div>
    </div>
  );
};

export default Explore;
