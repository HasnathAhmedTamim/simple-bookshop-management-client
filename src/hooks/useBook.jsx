// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useBook = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: cart = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["book"],
    queryFn: async () => {
      const res = await axiosPublic.get("/book");
      return res.data;
    },
  });

  return [cart, loading, refetch];
};

export default useBook;
