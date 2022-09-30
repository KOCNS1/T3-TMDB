import React from "react";
import { useRouter } from "next/router";
import ContentDetails from "../../../components/tmdb/details/ContentDetails";

const Details = () => {
  const router = useRouter();
  if (!router.isReady) return;

  const { slug } = router.query as { slug: ["movie" | "tv", string] };
  const [type, id] = slug;

  return <ContentDetails type={type} id={id} />;
};

export default Details;
