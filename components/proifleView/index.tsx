import React from "react";

const ProfileView: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-white p-4 shadow-md">
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            className="rounded-full border-4 border-yellow-400"
          />
          <div>
            <h2 className="text-lg font-bold">Ritik B.</h2>
            <p className="text-sm text-gray-500">22 y/o</p>
            <p className="text-sm text-gray-500">Experience Level: Newcomer</p>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <p className="text-green-500">✔ Verified ID</p>
          <p className="text-green-500">✔ Confirmed email</p>
          <p className="text-green-500">✔ Confirmed phone number</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold"> Reachyo</h1>
          <div className="space-x-4">
            <button className="bg-purple-600 text-white px-4 py-2 rounded">
              Search a ride
            </button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded">
              Publish a ride
            </button>
          </div>
        </div>

        <div className="bg-white p-4 shadow-md">
          <p>About Ritik B.</p>
          <p className="text-gray-600">
            Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
          <div className="flex space-x-4 mt-2">
            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
              I am chatty when I feel comfortable
            </span>
            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
              Pets Allowed
            </span>
            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
              No Smoking
            </span>
          </div>
        </div>

        <div className="bg-white p-4 shadow-md mt-4">
          <h3>Vehicles</h3>
          <p>Tata Tiago XT</p>
          <p>White Color</p>
        </div>

        <div className="bg-white p-4 shadow-md mt-4">
          <h3>Reviews</h3>
          <div className="flex items-center">
            <span className="text-2xl font-bold">4.7</span>
            <div className="flex ml-2">
              <span className="text-yellow-400">★★★★☆</span>
            </div>
            <span className="ml-2 text-gray-500">(578 reviews)</span>
          </div>
          <div className="mt-2">
            <div className="flex justify-between">
              <span>5 stars</span>
              <span className="text-yellow-400">448</span>
            </div>
            <div className="flex justify-between">
              <span>4 stars</span>
              <span>94</span>
            </div>
            <div className="flex justify-between">
              <span>3 stars</span>
              <span>14</span>
            </div>
            <div className="flex justify-between">
              <span>2 stars</span>
              <span>0</span>
            </div>
            <div className="flex justify-between">
              <span>1 star</span>
              <span>0</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 shadow-md mt-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            Report/Flag this Member
          </button>
          <div className="mt-4 space-y-4">
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="rounded-full"
              />
              <div>
                <p className="font-bold">Ritik B.</p>
                <p className="text-gray-600">
                  Working at Sam AI has been an incredible journey so far. The
                  technology we're building is cutting-edge, and being part of a
                  team that's revolutionizing how people achieve their goals is
                  immensely fulfilling.
                </p>
                <p className="text-sm text-gray-500">Jan 20, 2024</p>
              </div>
            </div>
            {/* Repeat the review block as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
