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

export interface TimeDTO {
  hour?: number;
  minute?: number;
  second?: number;
  nano?: number;
}

export interface BusDTO {
  busId: number;
  busName: string;
  driverName: string;
  busType: string;
  routeFrom: string;
  routeTo: string;
  arrivalTime?: string;
  departureTime?: string;
  seats: number;
  avaiableSeats: number;
}
export interface FeedbackDTO {
  feedBackId?: number;
  driverRating: number;
  serviceRating: number;
  overallRating: number;
  comments: string;
  feedbackdate?: string;
  user?: UserRegisterDTO;
  bus?: BusDTO;
}

export interface ReservationDTO {
  reservationId?: number;
  reservationStatus: string;
  reservationType: string;
  reservationDate: string;
  reservationTime?: string;
  source: string;
  destination: string;
  bus?: BusDTO;
}
export interface RouteDTO {
  routeId: number;
  routeFrom: string;
  routeTo: string;
  distance: number;
  bus?: BusDTO[];
}
