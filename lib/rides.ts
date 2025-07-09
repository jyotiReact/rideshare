import { Ride, Location } from '@/types';

// Mock ride data
const MOCK_RIDES: Ride[] = [
  {
    id: '1',
    userId: '1',
    pickup: { address: '123 Main St, New York, NY', lat: 40.7128, lng: -74.0060 },
    destination: { address: '456 Broadway, New York, NY', lat: 40.7589, lng: -73.9851 },
    status: 'completed',
    driverName: 'John Doe',
    driverRating: 4.8,
    vehicleType: 'economy',
    fare: 15.50,
    distance: 2.5,
    duration: 12,
    createdAt: new Date('2024-01-15'),
    completedAt: new Date('2024-01-15')
  },
  {
    id: '2',
    userId: '1',
    pickup: { address: '789 5th Ave, New York, NY', lat: 40.7614, lng: -73.9776 },
    destination: { address: '321 Park Ave, New York, NY', lat: 40.7520, lng: -73.9737 },
    status: 'completed',
    driverName: 'Jane Smith',
    driverRating: 4.9,
    vehicleType: 'premium',
    fare: 22.00,
    distance: 1.8,
    duration: 8,
    createdAt: new Date('2024-01-10'),
    completedAt: new Date('2024-01-10')
  }
];

export const getUserRides = async (userId: string): Promise<Ride[]> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  return MOCK_RIDES.filter(ride => ride.userId === userId);
};

export const createRide = async (ride: Omit<Ride, 'id' | 'createdAt'>): Promise<Ride> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const newRide: Ride = {
    ...ride,
    id: Date.now().toString(),
    createdAt: new Date()
  };
  
  MOCK_RIDES.push(newRide);
  return newRide;
};

export const calculateFare = (distance: number, vehicleType: Ride['vehicleType']): number => {
  const baseRates = {
    economy: 2.50,
    premium: 3.50,
    luxury: 5.00
  };
  
  const perMileRates = {
    economy: 1.50,
    premium: 2.00,
    luxury: 3.00
  };
  
  return baseRates[vehicleType] + (distance * perMileRates[vehicleType]);
};