import { createWriteStream } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";
import routesConfig from "./routing/routesData";

const BASE_URL = "https://www.robincodes.io";

interface SitemapEntry {
  url: string;
  changefreq: "weekly" | "daily" | "monthly";
  priority: number;
}

(async () => {
  try {
    const stream = new SitemapStream({ hostname: BASE_URL });
    const writeStream = createWriteStream("./public/sitemap.xml");
    stream.pipe(writeStream);

    // Routen verarbeiten und zur Sitemap hinzufügen
    routesConfig.forEach((route) => {
      if (route.path === "*") return;

      const path = route.path.startsWith("/") ? route.path : `/${route.path}`;

      const entry: SitemapEntry = {
        url: path,
        changefreq: "weekly",
        priority: path === "/" ? 1.0 : 0.8, // higher priority for the index page
      };

      stream.write(entry);
    });

    // end stream
    stream.end();

    await streamToPromise(stream);
    console.log("Sitemap erfolgreich erstellt: ./public/sitemap.xml");
  } catch (error) {
    console.error("Fehler beim Erstellen der Sitemap:", error);
  }
})();
