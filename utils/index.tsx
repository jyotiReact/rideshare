import { routeStopovers } from "@/settings";

export function getStopovers(origin: string, destination: string) {
  const routeKey = `${origin}-${destination}` as keyof typeof routeStopovers;
  return routeStopovers[routeKey]?.stopovers || [];
}
