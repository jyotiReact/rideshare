'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { useAuth } from '@/contexts/AuthContext';
import { createRide, calculateFare } from '@/lib/rides';
import { Ride, Location } from '@/types';
import { MapPin, Car, Clock, DollarSign } from 'lucide-react';

const VEHICLE_TYPES = [
  { id: 'economy', name: 'Economy', icon: '🚗', description: 'Affordable rides' },
  { id: 'premium', name: 'Premium', icon: '🚙', description: 'Comfortable rides' },
  { id: 'luxury', name: 'Luxury', icon: '🚘', description: 'Luxury experience' }
] as const;

export const BookingForm = () => {
  const [formData, setFormData] = useState({
    pickup: '',
    destination: '',
    vehicleType: 'economy' as Ride['vehicleType']
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { user } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setError('');
    setLoading(true);

    try {
      // Mock locations (in production, use geocoding API)
      const pickup: Location = {
        address: formData.pickup,
        lat: 40.7128 + Math.random() * 0.01,
        lng: -74.0060 + Math.random() * 0.01
      };

      const destination: Location = {
        address: formData.destination,
        lat: 40.7128 + Math.random() * 0.01,
        lng: -74.0060 + Math.random() * 0.01
      };

      const distance = Math.random() * 10 + 1; // Mock distance
      const fare = calculateFare(distance, formData.vehicleType);

      const ride = await createRide({
        userId: user.id,
        pickup,
        destination,
        vehicleType: formData.vehicleType,
        fare,
        distance,
        duration: Math.floor(distance * 3),
        status: 'pending'
      });

      router.push(`/booking/confirmation/${ride.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const estimatedFare = formData.pickup && formData.destination ? 
    calculateFare(5, formData.vehicleType) : 0;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Car className="h-5 w-5 text-blue-600" />
            <span>Book Your Ride</span>
          </CardTitle>
          <CardDescription>
            Enter your pickup and destination to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="pickup">Pickup Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-600" />
                  <Input
                    id="pickup"
                    name="pickup"
                    type="text"
                    placeholder="Enter pickup location"
                    value={formData.pickup}
                    onChange={handleChange}
                    required
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="destination">Destination</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-red-600" />
                  <Input
                    id="destination"
                    name="destination"
                    type="text"
                    placeholder="Enter destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Label>Vehicle Type</Label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {VEHICLE_TYPES.map((type) => (
                  <div
                    key={type.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      formData.vehicleType === type.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setFormData(prev => ({ ...prev, vehicleType: type.id }))}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-1">{type.icon}</div>
                      <div className="font-medium">{type.name}</div>
                      <div className="text-sm text-gray-500">{type.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {estimatedFare > 0 && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span className="font-medium">Estimated Fare</span>
                  </div>
                  <span className="text-lg font-bold text-green-600">
                    ${estimatedFare.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center space-x-2 mt-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>Est. 15 minutes</span>
                </div>
              </div>
            )}

            {error && (
              <div className="text-red-600 text-sm text-center bg-red-50 p-3 rounded">
                {error}
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 py-3" 
              disabled={loading}
            >
              {loading ? (
                <LoadingSpinner size="sm" className="mr-2" />
              ) : null}
              Book Ride
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};