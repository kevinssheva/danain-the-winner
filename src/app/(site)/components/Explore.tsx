import CompanyCard from "./CompanyCard";

const Explore = () => {
  return (
    <div className="min-h-screen relative container mx-auto py-20 text-center">
      <h1 className="font-neuro text-5xl">Explore Startups Raising Now</h1>
      <div className="w-full flex gap-10 my-10">
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
      </div>
    </div>
  );
};

export default Explore;
