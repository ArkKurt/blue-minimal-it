
import { GraphQLClient } from 'graphql-request';

// Initialize the GraphQL client with your Hygraph endpoint
// You'll need to replace this with your actual Hygraph API endpoint
const hygraphEndpoint = 'https://api-eu-central-1.hygraph.com/v2/YOUR_API_KEY/master';

export const graphQLClient = new GraphQLClient(hygraphEndpoint);

// Generic function to fetch data from Hygraph
export async function fetchFromCMS<T>(query: string, variables = {}): Promise<T> {
  try {
    return await graphQLClient.request<T>(query, variables);
  } catch (error) {
    console.error('Error fetching data from CMS:', error);
    throw error;
  }
}

// Query for fetching services
export const GET_SERVICES = `
  query GetServices {
    services {
      id
      title
      description
      icon
    }
  }
`;

// Query for fetching advantages
export const GET_ADVANTAGES = `
  query GetAdvantages {
    advantages {
      id
      title
      description
      icon
    }
  }
`;

// Query for fetching about info
export const GET_ABOUT = `
  query GetAbout {
    about {
      content
      stats {
        label
        number
        icon
      }
    }
  }
`;

// Types for the CMS responses
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface AdvantageItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface AboutStats {
  label: string;
  number: string;
  icon: string;
}

export interface AboutInfo {
  content: string;
  stats: AboutStats[];
}
