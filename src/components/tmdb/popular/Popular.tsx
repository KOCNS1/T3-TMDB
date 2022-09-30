import React, { useState } from "react";
import { Movie, Tv } from "../../../types/api-interfaces";
import { trpc } from "../../../utils/trpc";
import PopularSlider from "./PopularSlider";
import { Button } from "react-daisyui";

const Popular = () => {
  const [showFilm, setShowFilm] = useState(true);
  const movies = trpc.useQuery(["tmdb.movie.getAll"]);
  const tv = trpc.useQuery(["tmdb.tv.getAll"]);

  if (movies.isLoading || tv.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-xl text-white font-bold my-6">Popular</h2>
      <div className="flex gap-5 mb-6">
        <Button
          className="text-white w-32 shadow-xl"
          onClick={() => setShowFilm((showFilm) => !showFilm)}
        >
          {showFilm ? "Show Tv" : "Show Film"}
        </Button>
      </div>
      {showFilm ? (
        <PopularSlider content={movies.data?.results as Movie[]} />
      ) : (
        <PopularSlider content={tv.data?.results as Tv[]} />
      )}
    </div>
  );
};

export default Popular;
