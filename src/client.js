import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "5ypb4s4m",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skkxfTHY1BytGssRotRPJwASZzAFYplqVGDnvcYF1P1jEcnju4lM4VyznJ4uPukoGqfKN1hLIyNO2uGd7FHSuAHRduhVZmBIaSkjBEDUgNH82TTTRSRnd1rW372zilwMhpwZdCPpIiobXZdnKre2wiQhCQlx3m2VoU3I4QAcQQULq2LAakpe",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
