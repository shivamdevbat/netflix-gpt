import { IMG_CDN } from "../utils/Constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48">
      <img alt="Movie_card" src={IMG_CDN + posterPath} />
    </div>
  );
};

export default MovieCard;
