"use client";

import CompanyCard from "../../(site)/components/CompanyCard";
import Pagination from "@/components/Pagination/Pagination";
import { useState } from "react";

const postPerPage = 12;

const ListCompany = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="w-full flex flex-col items-center gap-10">
      <div className="w-full flex flex-wrap justify-center gap-10">
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
      <Pagination
        totalDataCount={200}
        currentPage={currentPage}
        pageSize={postPerPage}
        onPageChange={(page) => {
          if (typeof page === "string") {
            return;
          }
          setCurrentPage(page);
        }}
      />
    </div>
  );
};

export default ListCompany;
