import { DotWave } from "@uiball/loaders";

const Loader = () => {
  return (
    <div aria-live="polite" className="w-full flex justify-center">
      <DotWave color="#FFFFFF" />
    </div>
  );
};

export default Loader;
