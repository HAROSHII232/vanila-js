type LocalCityType = {
  title: string;
  country: string;
};

type LocalAdressType = {
  streetTitle: string;
  city: LocalCityType;
};

type TechnologiesType = {
  id: number;
  title: string;
};

type StydentType = {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
  adress: LocalAdressType;
  technologies: Array<TechnologiesType>;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const object: StydentType = {
  id: 1,
  name: "Igor",
  age: 34,
  isActive: true,
  adress: {
    streetTitle: "Kojara",
    city: {
      title: "Gomel",
      country: "BY",
    },
  },
  technologies: [
    {
      id: 1,
      title: "HTML",
    },
    {
      id: 2,
      title: "CSS",
    },
    {
      id: 3,
      title: "React",
    },
  ],
};
