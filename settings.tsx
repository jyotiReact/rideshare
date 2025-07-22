import { Ride } from "./types";

export const allRides: Ride[] = [
  {
    id: 1,
    departureTime: "08:00",
    arrivalTime: "11:30",
    duration: "03 h 30m",
    from: "New Delhi",
    to: "Chandigarh",
    rating: 4.8, // Also changed to number
    originalPrice: 1000, // number
    price: 1000,
    driver: "Ritik B.",
    driverImage: "/ellipse-11-4.png",
    car: "Tiago, White",
    carColor: "text-[#631cff]",
    carBg: "bg-[#631cff1a]",
    maxPassengers: 4,
    instantRequest: true,
  },
  {
    id: 2,
    departureTime: "10:15",
    arrivalTime: "13:45",
    duration: "03 h 30m",
    from: "Chandigarh",
    to: "Shimla",
    rating: 4.8, // Also changed to number
    originalPrice: 1000, // number
    price: 1000,
    driver: "Aman S.",
    driverImage: "/ellipse-11-4.png",
    car: "Swift, Blue",
    carColor: "text-[#0066cc]",
    carBg: "bg-[#0066cc1a]",
    maxPassengers: 3,
    instantRequest: false,
  },
  {
    id: 3,
    departureTime: "09:30",
    arrivalTime: "13:00",
    duration: "03 h 30m",
    from: "Jaipur",
    to: "Delhi",
    rating: 4.8, // Also changed to number
    originalPrice: 1000, // number
    price: 1000,
    driver: "Pooja M.",
    driverImage: "/ellipse-11-4.png",
    car: "Baleno, Silver",
    carColor: "text-[#28a745]",
    carBg: "bg-[#28a7451a]",
    maxPassengers: 5,
    instantRequest: true,
  },
  {
    id: 4,
    departureTime: "12:00",
    arrivalTime: "15:30",
    duration: "03 h 30m",
    from: "Mumbai",
    to: "Pune",
    rating: 4.8, // Also changed to number
    originalPrice: 1000, // number
    price: 1000,
    driver: "Neha K.",
    driverImage: "/ellipse-11-4.png",
    car: "Brezza, Red",
    carColor: "text-[#ff5733]",
    carBg: "bg-[#ff57331a]",
    maxPassengers: 4,
    instantRequest: true,
  },
  {
    id: 5,
    departureTime: "06:45",
    arrivalTime: "10:15",
    duration: "03 h 30m",
    from: "Kolkata",
    to: "Durgapur",
    rating: 4.8, // Also changed to number
    originalPrice: 1000, // number
    price: 1000,
    driver: "Aakash V.",
    driverImage: "/ellipse-11-4.png",
    car: "i20, Grey",
    carColor: "text-[#3333cc]",
    carBg: "bg-[#3333cc1a]",
    maxPassengers: 3,
    instantRequest: false,
  },
  {
    id: 6,
    departureTime: "12:15",
    arrivalTime: "13:45",
    duration: "03 h 30m",
    from: "Chandigarh",
    to: "Shimla",
    rating: 4.8, // Also changed to number
    originalPrice: 1000, // number
    price: 1000,
    driver: "Aman S.",
    driverImage: "/ellipse-11-4.png",
    car: "Swift, Blue",
    carColor: "text-[#0066cc]",
    carBg: "bg-[#0066cc1a]",
    maxPassengers: 4,
    instantRequest: true,
  },
];

export const routeStopovers = {
  "chandigarh-shimla": {
    origin: "Chandigarh",
    destination: "Shimla",
    stopovers: [
      { name: "Kalka", selected: false },
      { name: "Parwanoo", selected: false },
      { name: "Dharampur", selected: false },
    ],
  },
  "chandigarh-manali": {
    origin: "Chandigarh",
    destination: "Manali",
    stopovers: [
      { name: "Kalka", selected: false },
      { name: "Bilaspur", selected: false },
    ],
  },
  "delhi-chandigarh": {
    origin: "Delhi",
    destination: "Chandigarh",
    stopovers: [
      { name: "Panipat", selected: false },
      { name: "Karnal", selected: false },
      { name: "Ambala", selected: false },
    ],
  },
};
