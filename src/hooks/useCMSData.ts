
import { useQuery } from '@tanstack/react-query';
import { 
  fetchFromCMS, 
  GET_SERVICES, 
  GET_ADVANTAGES,
  GET_ABOUT,
  ServiceItem,
  AdvantageItem,
  AboutInfo
} from '@/lib/cms';

export function useServices() {
  return useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const data = await fetchFromCMS<{ services: ServiceItem[] }>(GET_SERVICES);
      return data.services;
    },
    placeholderData: [],
  });
}

export function useAdvantages() {
  return useQuery({
    queryKey: ['advantages'],
    queryFn: async () => {
      const data = await fetchFromCMS<{ advantages: AdvantageItem[] }>(GET_ADVANTAGES);
      return data.advantages;
    },
    placeholderData: [],
  });
}

export function useAbout() {
  return useQuery({
    queryKey: ['about'],
    queryFn: async () => {
      const data = await fetchFromCMS<{ about: AboutInfo }>(GET_ABOUT);
      return data.about;
    }
  });
}
