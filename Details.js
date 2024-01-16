import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const getMovie = async () => {
        try {
            const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
            const json = await response.json();
            setMovie(json.data.movie);
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        getMovie();
    }, [id]);
    return (
        <div>
            {movie ? (
                <MovieDetail
                    id={movie.id}
                    title={movie.title}
                    medium_cover_image={movie.medium_cover_image}
                    genres={movie.genres}
                    summary={movie.summary}
                    year={movie.year}
                    rating={movie.rating}
                    runtime={movie.runtime}
                    background_image={movie.background_image}
                />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
export default Detail;