export type Author = {
  name: string;
  twitter: string;
  avatar: string;
};

export const authors = {
  yakaTeam: {
    name: "YakaJS Team",
    twitter: "yakajs",
    avatar: "/images/authors/yaka-team.jpg",
  },
  dillLk: {
    name: "Dill LK",
    twitter: "dill_lk",
    avatar: "/images/authors/dill-lk.jpg",
  },
} satisfies Record<string, Author>;
