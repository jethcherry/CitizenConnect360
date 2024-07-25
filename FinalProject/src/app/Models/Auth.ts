export interface AddUser {
    Name: string;
    Password: string;
    Email: string; 
    Role:string
  }
  export interface RegisterResponse {
    message:string
    isSuccess:boolean
  }
  export interface User {
    UserId: string;
    Name: string;
    Email: string;
    Role: string;  
    isApproved: boolean;
  }
  

  export interface getUser{
    Email: string
    Password:string
  }
  export interface LoginResponse{
    message:string
    token:string
    isSuccess:boolean
    Role: string

  }
  
  