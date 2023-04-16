export enum User {
  Sam = "Sam",
  Russell = "Russell",
  Joyse = "Joyse",
}

export const UserAvatars: Record<string, string> = {
  [User.Joyse]: "https://angular-test-backend-yc4c5cvnnq-an.a.run.app/Joyse.png",
  [User.Sam]: "https://angular-test-backend-yc4c5cvnnq-an.a.run.app/Sam.png",
  [User.Russell]: "https://angular-test-backend-yc4c5cvnnq-an.a.run.app/Russell.png",
};
