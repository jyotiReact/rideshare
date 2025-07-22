import type { IconSvgElement } from "@hugeicons/react";


export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  createdAt: Date;
}



export interface Ride {
  id: number;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  from: string;
  to: string;
  rating: number;
  originalPrice: number;
  price: number ;
  driver: string;
  driverImage: string;
  car: string;
  carColor: string;
  carBg: string;
  maxPassengers: number;
  instantRequest: boolean;
}

export interface Location {
  address: string;
  lat: number;
  lng: number;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

// In @/types.ts or at the top of ProfileLayout.tsx

type HugeIcon = React.ComponentType<{
  color?: string;
  size?: number | string;
  className?: string;
}> | IconSvgElement 
;

export type TabOption = {
  id: string;
  label: string;
  icon?: any
};



export interface ChatPreview {
  name: string;
  message: string;
  avatar: string;
}

export interface Message {
  content: string;
  time: string;
  isOutgoing: boolean;
}

export interface Notification {
  id: number;
  name: string;
  message: string;
  image: string;
}
export type InboxLayoutProps = {
  tabOptions?: TabOption[];
  handleTabClick?: (id: string) => void;
  data: Notification[] | ChatPreview[];
  children: React.ReactNode;
  alertIcon?: boolean;
  showTabs?: boolean;
  title?: string;
  description?: string;
  handleMessageClick?: () => void;
  
};

 
export  type JourneyLocation = {
  city: string;
  address: string;
};

export type JourneyDetailsType = {
  date: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  locations: JourneyLocation[];
};

export interface SearchItem {
  route: string;
  date?: Date | string | null | undefined;
  passengers: string;
   timestamp: number;
}

export interface RouteOption {
  id: string;
  duration: string;
  tollInfo: string;
  distance: string;
  path: string;
}
