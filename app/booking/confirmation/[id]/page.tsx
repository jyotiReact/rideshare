'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Ride } from '@/types';
import { CheckCircle, MapPin, Car, Clock, DollarSign, Phone, MessageSquare } from 'lucide-react';

export default function ConfirmationPage() {
  const [ride, setRide] = useState<Ride | null>(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    const fetchRide = async () => {
      try {
        // Simulate API call to fetch ride details
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock ride data
        const mockRide: Ride = {
          id: params.id as string,
          userId: '1',
          pickup: { address: '123 Main St, New York, NY', lat: 40.7128, lng: -74.0060 },
          destination: { address: '456 Broadway, New York, NY', lat: 40.7589, lng: -73.9851 },
          status: 'confirmed',
          driverName: 'John Doe',
          driverRating: 4.8,
          vehicleType: 'economy',
          fare: 18.50,
          distance: 2.5,
          duration: 12,
          createdAt: new Date(),
        };
        
        setRide(mockRide);
      } catch (error) {
        console.error('Error fetching ride:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRide();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!ride) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="text-center py-8">
            <p className="text-gray-600">Ride not found.</p>
            <Button className="mt-4" onClick={() => router.push('/dashboard')}>
              Back to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getStatusColor = (status: Ride['status']) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Ride Confirmed!</h1>
          <p className="text-gray-600">Your ride has been successfully booked.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ride Details */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Ride Details</span>
                  <Badge className={getStatusColor(ride.status)}>
                    {ride.status.charAt(0).toUpperCase() + ride.status.slice(1)}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium">Pickup</p>
                    <p className="text-gray-600">{ride.pickup.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 text-red-600 mt-1" />
                  <div>
                    <p className="font-medium">Destination</p>
                    <p className="text-gray-600">{ride.destination.address}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{ride.duration} min</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium">${ride.fare.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Driver Information */}
            {ride.driverName && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Car className="h-5 w-5 text-blue-600" />
                    <span>Driver Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-medium">
                          {ride.driverName.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">{ride.driverName}</p>
                        <p className="text-sm text-gray-600 flex items-center">
                          ⭐ {ride.driverRating} rating
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Phone className="h-4 w-4 mr-2" />
                        Call
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Message
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Trip Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Trip Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Ride Confirmed</p>
                      <p className="text-sm text-gray-600">
                        {ride.createdAt.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Car className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Driver Assigned</p>
                      <p className="text-sm text-gray-600">ETA: 5 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <Clock className="h-4 w-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-500">Trip in Progress</p>
                      <p className="text-sm text-gray-400">Pending</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Actions Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <MapPin className="h-4 w-4 mr-2" />
                  Track Ride
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Contact Driver
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Support
                </Button>
                <Button 
                  variant="destructive" 
                  className="w-full justify-start"
                  onClick={() => {
                    // Handle cancellation
                    console.log('Cancel ride');
                  }}
                >
                  Cancel Ride
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Trip Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Vehicle Type:</span>
                    <span className="font-medium capitalize">{ride.vehicleType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Distance:</span>
                    <span className="font-medium">{ride.distance} mi</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium">{ride.duration} min</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span>Total Fare:</span>
                    <span className="font-bold text-green-600">${ride.fare.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-8 flex justify-center space-x-4">
          <Button 
            variant="outline" 
            onClick={() => router.push('/dashboard')}
            className="px-8"
          >
            Back to Dashboard
          </Button>
          <Button 
            onClick={() => router.push('/booking')}
            className="px-8 bg-blue-600 hover:bg-blue-700"
          >
            Book Another Ride
          </Button>
        </div>
      </div>
    </div>
  );
}