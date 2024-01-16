import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, medium_cover_image, genres, summary }) {
    return (
        <div>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <img src={medium_cover_image} alt={title} />
            <ul>
                {genres.map(genre => (
                    <li key={genre}>{genre}</li>
                ))}
            </ul>
            <p>{summary}</p>
        </div>);
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired,
}

export default Movie;