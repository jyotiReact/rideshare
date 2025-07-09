import { User } from '@/types';

// Mock authentication - in production, use proper auth service
const MOCK_USERS: User[] = [
  {
    id: '1',
    email: 'demo@example.com',
    name: 'Demo User',
    phone: '+1234567890',
    createdAt: new Date('2024-01-01')
  }
];

export const mockLogin = async (email: string, password: string): Promise<User> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const user = MOCK_USERS.find(u => u.email === email);
  if (user && password === 'password') {
    return user;
  }
  throw new Error('Invalid credentials');
};

export const mockRegister = async (name: string, email: string, password: string): Promise<User> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const existingUser = MOCK_USERS.find(u => u.email === email);
  if (existingUser) {
    throw new Error('User already exists');
  }
  
  const newUser: User = {
    id: Date.now().toString(),
    email,
    name,
    createdAt: new Date()
  };
  
  MOCK_USERS.push(newUser);
  return newUser;
};

export const getStoredUser = (): User | null => {
  if (typeof window === 'undefined') return null;
  
  const stored = localStorage.getItem('user');
  if (stored) {
    return JSON.parse(stored);
  }
  return null;
};

export const storeUser = (user: User): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('user', JSON.stringify(user));
};

export const clearStoredUser = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('user');
};