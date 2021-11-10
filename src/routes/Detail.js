import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Movie from '../components/Movie';
import './Detail.css';

function Detail() {
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
            console.log(json.data.movie);
            setMovie(json.data.movie);
            setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
    <div>
        {loading ? <h1>Now Loading..</h1> : 
        <div>
            <hr/>
            <img className="imgRadius" src={movie.large_cover_image}/>
            <h1 className="sexyFont" style={{ color:"tomato" }}>{movie.title}</h1>
            <h3 className="sexyFont">Years : {movie.year}</h3>
            <h5 className="sexyFont">Some People's Like : {movie.like_count} 💜 </h5>
            <h5 className="sexyFont">Total download count : {movie.download_count} !!</h5>
            <h4 className="sexyFont">This Movie is : {movie.description_full}</h4>
            <hr/>
            <div>
                <h5>
                Download Torrent :
                    <ul>

                    </ul>
                    
                    
                </h5>
            </div>
        </div>
        }
        
    </div>
    )
}
export default Detail;