import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
function Movie({ id, title, coverImg, summary, genres }) {
return(
        <div>
          <img className="imgRadius" src={coverImg} alt={title}/>
          <h2 className="sexyFont" style={{color:"tomato"}}>
            <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
          <p className="sexyFont">{summary}</p>
          <ul className="sexyFont">
            {genres.map((g) => 
            (<li key={g}>{g}</li>
              ))}
          </ul>
          <hr/>
        </div>
)
};

Movie.propTypes ={
    id : propTypes.number.isRequired,
    coverImg : propTypes.string.isRequired,
    title : propTypes.string.isRequired,
    summary : propTypes.string.isRequired,
    genres : propTypes.arrayOf(propTypes.string).isRequired,
}

export default Movie;