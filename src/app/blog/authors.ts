export type Author = {
  name: string;
  twitter: string;
  avatar: string;
};

export const authors = {
  jinukChanthusa: {
    name: "Jinuk Chanthusa",
    twitter: "dill_lk",
    avatar: "https://avatars.githubusercontent.com/u/241706614?v=4&size=64",
  },
} satisfies Record<string, Author>;
