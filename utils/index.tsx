import { routeStopovers } from "@/settings";

export function getStopovers(origin: string, destination: string) {
  const routeKey = `${origin}-${destination}`;
  return routeStopovers[routeKey]?.stopovers || [];
}
