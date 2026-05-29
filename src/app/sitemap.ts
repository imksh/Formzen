import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";

const routes = [
  "/",
  "/login",
  "/register",
  "/dashboard",
  "/dashboard/forms",
  "/dashboard/profile",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    lastModified,
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
