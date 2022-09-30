import { createRouter } from "../context";
import { z } from "zod";
import { movies } from "./movie/movies";
import { tv } from "./tv/tv";

export const tmdb = createRouter().merge("movie.", movies).merge("tv.", tv);
