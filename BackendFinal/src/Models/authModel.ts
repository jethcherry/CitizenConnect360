export interface User {
   UserId: string;
   Email: string;
   Name: string;
   Password: string;
   isDeleted: number;
   Role: string;
   isEmailSent: number;
   isAdmin: boolean;
   isApproved: boolean;
}

export interface Payload {
   Sub: string;
   Name: string;
   Email: string;
   isAdmin: boolean;
   isApproved: boolean;
   Role: string;
}
