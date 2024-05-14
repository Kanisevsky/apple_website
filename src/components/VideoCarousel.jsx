import { hightlightsSlides } from '../utils';
const VideoCarousel = () => {
  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="video-carousel_container">
            Test
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoCarousel;
