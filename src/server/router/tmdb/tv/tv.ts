import { createRouter } from "../../context";
import { z } from "zod";
import {
  AppendToResponseTv,
  GenericListResult,
  PopularInput,
  Tv,
  TVDetails,
} from "../../../../types/api-interfaces";
import http from "../../../axios";

const getPopular = async (
  popularData?: PopularInput
): Promise<GenericListResult<TVDetails>> => {
  const { data } = await http.get<GenericListResult<TVDetails>>(
    "https://api.themoviedb.org/3/tv/popular",
    {
      params: {
        ...http.defaults.params,
        region: popularData?.region,
        page: popularData?.page,
      },
    }
  );

  return {
    ...data,
  };
};

const getDetails = async (
  id: number,
  appendToResponse?: AppendToResponseTv[]
): Promise<TVDetails> => {
  const { data } = await http.get<TVDetails>(
    `https://api.themoviedb.org/3/tv/${id}`,
    {
      params: {
        ...http.defaults.params,
        append_to_response: appendToResponse?.join(","),
      },
    }
  );

  return data;
};

export const tv = createRouter()
  .query("getAll", {
    async resolve({ ctx }) {
      return await getPopular();
    },
  })
  .query("getDetails", {
    input: z.object({
      id: z.number(),
      appendToResponse: z.array(z.string()).optional(),
    }),
    async resolve({ ctx, input }) {
      return await getDetails(
        input.id,
        input.appendToResponse as AppendToResponseTv[]
      );
    },
  });
