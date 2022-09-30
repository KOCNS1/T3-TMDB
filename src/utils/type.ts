import { Movie, Tv, TVDetails } from "../types/api-interfaces";

export const isMovie = (content: Movie | TVDetails): content is Movie => {
  return (content as Movie).title !== undefined;
};
