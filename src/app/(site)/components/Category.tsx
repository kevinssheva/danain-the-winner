const Category = ({ name, color }: { name: string; color: string }) => {
  return (
    <div
      className={`
        px-1 sm:px-2 py-[0.2rem]
        border-white/50 border-[1px]
        inline-flex rounded-lg
        truncate
        text-sm
      `}
      style={{
        background: `radial-gradient(231% 135.8% at 0.9% 2.98%,${color} 0%,rgba(15,57,109,0.30) 100%)`,
      }}
    >
      {name}
    </div>
  );
};

export default Category;
