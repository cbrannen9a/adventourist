import { graphql, useStaticQuery } from "gatsby";

export default function useDestinations(): CmsResponse {
  const { gcms } = useStaticQuery(graphql`
    query {
      gcms {
        destinations {
          id
          name
          location {
            latitude
            longitude
          }
        }
      }
    }
  `);

  return gcms;
}

export type Destination = {
  id: string;
  name: string;
  location: { latitude: number; longitude: number };
};

type CmsResponse = {
  destinations: Destination[];
};
