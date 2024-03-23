import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import PrevAndNextArrow from "../Buttons/PrevAndNextArrow";
import { ImageT } from "../../redux/type";

type Props = {
  images: ImageT[];
};

const Carousel = (props: Props) => {
  const { images } = props;
  return (
    <ResponsiveCarousel
      showThumbs={false}
      renderArrowNext={(onClickHandler, hasNext) =>
        hasNext && (
          <PrevAndNextArrow
            type="next"
            onClick={onClickHandler}
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          />
        )
      }
      renderArrowPrev={(onClickHandler, hasPrev) =>
        hasPrev && (
          <PrevAndNextArrow
            type="prev"
            onClick={onClickHandler}
            className="absolute left-2 z-10 top-1/2 transform -translate-y-1/2"
          />
        )
      }>
      {images?.map((el: ImageT) => {
        return (
          <div
            key={el?.id}
            className="lg:rounded-tr-[12px] lg:rounded-tl-[12px]">
            <img
              src={el?.url}
              alt={el?.url}
              className="h-[233px] lg:rounded-tr-[12px] lg:rounded-tl-[12px]"
              loading="lazy"
            />
          </div>
        );
      })}
    </ResponsiveCarousel>
  );
};

export default Carousel;
