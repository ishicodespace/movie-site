import Movie from "./Movie.jsx";
import "./Movie.css";

function MovieTab() {
  let style = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "20px",
  };
  return (
    <div className="tab" style={style}>
      <Movie
        title="Kantara A Legend: Chapter 1"
        img="kantara.jpg"
        cast={["Rishab Shetty", "Rukmini Vasanth", "Jayaram"]}
      />
      <Movie
        title="Lokah Chapter One: Chandra"
        img="lokah.jpg"
        cast={["Kalyani Priyadarshan", "Naslen", "Sandy Master"]}
      />
      <Movie
        title="The Great Pre-Wedding Show"
        img="great_pre_wedding_show.jpeg"
        cast={["Thiruveer", "Teena Sravya", "Master Rohan"]}
      />
      <Movie
        title="Frankenstein"
        img="frankenstein.jpg"
        cast={["Jacob Elordi", "Christian Convery", "Felicity Jones"]}
      />
      <Movie
        title="Predator: Badlands"
        img="predator_badlands.jpg"
        cast={[
          "Elle Fanning",
          "Dimitrius Schuster-Koloamatangi",
          "Keanu Pires",
        ]}
      />
      <Movie
        title="The Fantastic Four: First Steps"
        img="fantastic_four.jpg"
        cast={["Pedro Pascal", "Vanessa Kirby", "Joseph Quinn"]}
      />
    </div>
  );
}

export default MovieTab;
