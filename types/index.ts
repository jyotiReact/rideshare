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
  rating: string;
  originalPrice: string;
  price: string;
  driver: string;
  driverImage: string;
  car: string;
  carColor: string;
  carBg: string;
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