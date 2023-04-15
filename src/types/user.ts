export enum User {
  Sam = "Sam",
  Russell = "Russell",
  Joyse = "Joyse",
}

export const UserAvatars: Record<string, string> = {
  [User.Joyse]: `${import.meta.env.VITE_BASE_URI}/Joyse.png`,
  [User.Sam]: `${import.meta.env.VITE_BASE_URI}/Sam.png`,
  [User.Russell]: `${import.meta.env.VITE_BASE_URI}/Russell.png`,
};
