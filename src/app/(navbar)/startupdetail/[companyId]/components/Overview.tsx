import Category from "@/app/(navbar)/(site)/components/Category";
import { deconvertCategoryName } from "@/app/(navbar)/(site)/components/CompanyCard";
import { Category as CategoryInterface } from "@prisma/client";

const Overview = ({
  description,
  categories,
}: {
  description?: string;
  categories?: CategoryInterface[];
}) => {
  return (
    <div className="flex-1 glass px-7 py-7 rounded-lg">
      <h1 className="font-bold text-2xl md:text-3xl mb-5">
        Business Description
      </h1>
      <p className="text-base md:text-lg font-montserrat">
        {description ?? "No Description Yet"}
      </p>
      <div className="flex flex-wrap gap-2 mt-5">
        {categories?.map((category) => (
          <Category
            key={category.id}
            name={deconvertCategoryName(category.name)}
            color={category.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Overview;
