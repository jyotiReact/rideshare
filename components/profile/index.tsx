import { NextPage } from 'next';

const ProfilePage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">RideShare</h1>
          <div className="flex space-x-4">
            <button className="px-4 py-2 text-gray-700 hover:text-blue-600">Search a ride</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Publish a ride
            </button>
            <span className="px-4 py-2 text-gray-700">INR</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Sidebar */}
        <div className="md:col-span-1 bg-white rounded-lg shadow-sm p-6">
          <div className="mb-8">
            <h2 className="font-semibold text-lg mb-4">Verify your Account</h2>
            <p className="text-sm text-gray-600 mb-4">
              This helps builds trust, encouraging members to travel with you.
            </p>
            <div className="mb-2 flex justify-between items-center">
              <span className="text-sm font-medium">2 of 6 complete</span>
              <span className="text-xs text-blue-600">View all</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '33%' }}></div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">RB</span>
              </div>
              <div>
                <h3 className="font-medium">Ritik B.</h3>
                <p className="text-sm text-gray-500">22/10</p>
              </div>
              <button className="text-blue-600 text-sm">Edit</button>
            </div>

            <div className="space-y-4">
              <button className="w-full flex justify-between items-center text-left">
                <span className="font-medium">Verify your profile</span>
                <span className="text-gray-400">→</span>
              </button>
              <button className="w-full flex justify-between items-center text-left">
                <span className="font-medium">Verify your Govt. ID</span>
                <span className="text-gray-400">→</span>
              </button>
              <button className="w-full flex justify-between items-center text-left">
                <span className="font-medium">About you</span>
                <span className="text-gray-400">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:col-span-3 bg-white rounded-lg shadow-sm p-6">
          <h2 className="font-semibold text-lg mb-6">Account</h2>

          <div className="space-y-6">
            <div className="flex justify-between items-center border-b pb-4">
              <div>
                <h3 className="font-medium">Confirm email</h3>
                <p className="text-sm text-gray-500">ritikbhardwa@gmail.com</p>
              </div>
              <button className="text-blue-600 text-sm">Edit</button>
            </div>

            <div className="flex justify-between items-center border-b pb-4">
              <div>
                <h3 className="font-medium">Confirm phone</h3>
                <p className="text-sm text-gray-500">+91?813897220</p>
              </div>
              <button className="text-blue-600 text-sm">Edit</button>
            </div>

            <div className="flex justify-between items-center border-b pb-4">
              <div>
                <h3 className="font-medium">About you</h3>
                <p className="text-sm text-gray-500">Add a mini bio</p>
              </div>
              <button className="text-blue-600 text-sm">Edit</button>
            </div>

            <div className="flex justify-between items-center border-b pb-4">
              <div>
                <h3 className="font-medium">Travel preferences</h3>
              </div>
              <button className="text-blue-600 text-sm">Edit</button>
            </div>

            <div className="pt-4">
              <button className="text-red-600 text-sm">Logout</button>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-medium mb-4">Vehicles</h3>
              <button className="text-blue-600 text-sm">Add a vehicle</button>
            </div>

            <div className="border-t pt-6">
              <button className="text-red-600 text-sm">Close my account</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;