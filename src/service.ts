import { useQuery } from "@tanstack/vue-query";
import axios from "axios";

export function useService(page: string) {
  return useQuery({
    queryKey: ["query-key", page],
    queryFn: () =>
      axios.get(
        `https://raw.githubusercontent.com/mojdehm/portfolio-content/main/${page}.json`,
        {
          headers: {
            Accept: "application/vnd.github.v3.raw",
          },
        }
      ),
  });
}
