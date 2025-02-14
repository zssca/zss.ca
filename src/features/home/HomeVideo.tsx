const HomeVideo = () => {
  return (
    <div className="w-full z-10">
      <div className="relative aspect-w-16 aspect-h-9">
        <iframe 
          src="https://player.vimeo.com/video/1056202703?h=01e221aff0&autoplay=1&muted=1&loop=1&background=1&controls=0&badge=0&autopause=0&app_id=58479" 
          className="absolute top-0 rounded-xl left-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Zenith Branding Video Presentation"
          aria-label="Zenith's brand showcase video"
        />
      </div>
    </div>
  );
};

export default HomeVideo;
