import TestimoniCard from "./TestimoniCard";

const Testimoni = () => {
  return (
    <div className="min-h-screen relative container mx-auto py-20 text-center z-20 ">
      <h1 className="font-neuro text-4xl md:text-5xl">Testimonials</h1>
      <div className="w-full flex flex-wrap gap-10 justify-center my-10 text-left">
        <TestimoniCard
          name="Kevin Lie"
          role="Investor"
          testimonial="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            maiores nobis qui illum nam eaque aliquid cum accusamus pariatur
            itaque!"
          imageURL="/profile.jpg"
        />
        <TestimoniCard
          name="Kevin Lie"
          role="Investor"
          testimonial="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            maiores nobis qui illum nam eaque aliquid cum accusamus pariatur
            itaque!"
          imageURL="/profile.jpg"
        />
        <TestimoniCard
          name="Kevin Lie"
          role="Investor"
          testimonial="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            maiores nobis qui illum nam eaque aliquid cum accusamus pariatur
            itaque!"
          imageURL="/profile.jpg"
        />
      </div>
    </div>
  );
};

export default Testimoni;
