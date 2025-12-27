// Shared types for the portfolio application
// Currently minimal as this is a static portfolio

export interface User {
  id: string;
  username: string;
  password: string;
}

export type InsertUser = Omit<User, "id">;
