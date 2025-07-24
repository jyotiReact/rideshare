export interface LoginPayload {
  email: string;
  password: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}
