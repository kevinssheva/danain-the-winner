const PitchDeck = ({ link }: { link?: string }) => {
  console.log(link);
  return (
    <div className="flex-1 w-full">
      <div className="w-full overflow-hidden aspect-[796/450] rounded-lg bg-black flex items-center justify-center">
        {link ? (
          <iframe src={link} frameBorder={0} className="w-full h-full" />
        ) : (
          <div className="font-bold">No File Yet</div>
        )}
      </div>
    </div>
  );
};

export default PitchDeck;
