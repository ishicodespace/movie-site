import './Movie.css'
function Movie({title,img,cast}){
    return (
      <>
        <div className="root">
          <img src={img} alt="movie png" />
          <h3> {title}</h3>
          <h4>{cast.join(", ")}</h4>
          <button className="watchlist-button">Watch options</button>
          <button className="trailer-button"> Trailer </button>
        </div>
      </>
    );
}
export default Movie