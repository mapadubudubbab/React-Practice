import PropTypes from "prop-types";

function MovieDetail({ id, title, medium_cover_image, genres, summary, year, rating, runtime, background_image }) {

    return (
        <div>
            <h2>{title}</h2>
            <img src={background_image} alt={title} />
            <p>{year}</p>
            <p>{rating}</p>
            <p>{runtime}</p>
            <ul>
                {genres.map(genre => (
                    <li key={genre}>{genre}</li>
                ))}
            </ul>
            <p>{summary}</p>
        </div>
    );
}

MovieDetail.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    background_image: PropTypes.string.isRequired,
}

export default MovieDetail;