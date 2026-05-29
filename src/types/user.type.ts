export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  avatar?: {
    url: string;
    publicId: string;
  };
  createdAt?: string;
  updatedAt?: string;
}
