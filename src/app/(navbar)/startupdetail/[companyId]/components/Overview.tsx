const Overview = ({ description }: { description?: string }) => {
  return (
    <div className="flex-1 glass px-7 py-7 rounded-lg">
      <h1 className="font-bold text-2xl md:text-3xl mb-5">Business Description</h1>
      <p className="text-base md:text-lg font-montserrat">
        {description ?? "No Description Yet"}
      </p>
    </div>
  );
};

export default Overview;
