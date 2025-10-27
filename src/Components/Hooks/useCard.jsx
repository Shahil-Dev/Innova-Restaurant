import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";

const useCard = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { refetch, data: card = [] } = useQuery({
    queryKey: ["card", user?.email],
    enabled: !!user?.email, // ✅ only run if user exists
    queryFn: async () => {
      const res = await axiosSecure.get(`/cards?email=${user.email}`);
      return res.data;
    },
  });

  return [card, refetch];
};

export default useCard;
