// hooks/useServerStatus.ts
import { useQuery } from "@tanstack/react-query";

async function checkServer() {
  const response = await fetch("http://localhost:5254/api/todo");
  if (!response.ok) throw new Error("Servidor offline");
  return true;
}

export function useServerStatus() {
const { isLoading, isError } = useQuery({
  queryKey: ["server-status"],
  queryFn: checkServer,
  retry: false,
  refetchInterval: 10000,
  refetchIntervalInBackground: true,
  retryOnMount: false,
});

  const status = isLoading ? 0 : isError ? 1 : 2;
  return { status };
}