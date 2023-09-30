const VideoProfile = ({ link }: { link?: string }) => {
  return (
    <div className="flex-1">
      <div className="w-full overflow-hidden aspect-[796/450] rounded-lg bg-black">
        {link ? (
          <iframe
            src={link}
            width="840"
            height="480"
            allow="autoplay"
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
