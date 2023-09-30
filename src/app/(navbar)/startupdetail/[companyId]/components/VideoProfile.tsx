const VideoProfile = ({ link }: { link?: string }) => {
  return (
    <div className="flex-1 w-full">
      <div className="w-full overflow-hidden aspect-[796/450] rounded-lg bg-black">
        {link ? (
          <iframe
            width="560"
            height="315"
            src={link}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="w-full h-full"
          ></iframe>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-xl font-bold">No Videos Available :(</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoProfile;
