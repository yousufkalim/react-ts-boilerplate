export default interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  number: string;
  gender?: string;
  role: string;
  address?: string;
  city?: string;
  country?: string;
  photo?: string;
  createdAt: Date;
  updatedAt: Date;
}
