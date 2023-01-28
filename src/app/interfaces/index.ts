// NEW DTOS
export interface UserRegisterDTO {
  userLoginId: number;
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  contact: number;
  email: string;
  reservation?: any;
}

export interface LoginAuthDTO {
  userName: string;
  password: string;
}

export interface AdminRegisterDTO {
  adminId: number;
  adminUsername: string;
  adminPassword: string;
}
export interface AdminLoginDTO {
  adminId: number;
  adminPassword: string;
}
