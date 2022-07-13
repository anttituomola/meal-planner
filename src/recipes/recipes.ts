import { Recipe } from "./types"
export const recipes: Recipe[] = [
  {
    id: 1,
    name: "Shrimp Pasta",
    placed: false,
    location: "ChoreContainer",
    tags: ["pasta", "shrimp"],
    ingredients: [
      {
        name: "pasta",
        quantity: 56,
        unit: "g",
      },
      {
        name: "olive oil",
        quantity: 5,
        unit: "g",
      },
      {
        name: "butter",
        quantity: 10,
        unit: "g",
      },
      {
        name: "garlic",
        quantity: 1,
        unit: "clove",
      },
      {
        name: "sun-dried tomatoes",
        quantity: 30,
        unit: "g",
      },
      {
        name: "flour",
        quantity: 10,
        unit: "g",
      },
      {
        name: "cream",
        quantity: 0.5,
        unit: "dl",
      },
      {
        name: "Parmesan",
        quantity: 10,
        unit: "g",
      },
      {
        name: "Baby spinach",
        quantity: 30,
        unit: "g",
      },
      {
        name: "basil",
        quantity: 5,
        unit: "g",
      },
    ],
    steps: [
      {
        name: "Boil the pasta",
        description:
          "Bring a large pot of salted water to a boil over medium-high heat. Add spaghetti noodles and cook until al dente (fully cooked but still firm) according to package directions, about 10 minutes. Drain well in a colander and set aside. Toss in some olive oil to keep the pasta from sticking together.",
        time: 10,
      },
      {
        name: "Sear the shrimp",
        description:
          "Heat oil in a large skillet over medium high heat for 2 minutes until the hot oil is sizzling hot. Add shrimp and season with salt and pepper. Sauté for 5 minutes until the shrimp becomes nicely browned on both sides. Set aside on a plate.",
        time: 8,
      },
      {
        name: "Sauté aromatics",
        description:
          "In the same skillet, add butter, garlic, and sun-dried tomatoes. Sauté until fragrant, about 1 minute. Stir in flour and mix until well combined.",
        time: 2,
      },
      {
        name: "Make the creamy sauce",
        description:
          "Add heavy cream and Parmesan cheese. Stir well and bring the sauce to a simmer. Reduce the heat to medium and keep stirring until thickened to a desired consistency. Stir in spinach and cook until softened, about 1 minute.",
        time: 2,
      },
      {
        name: "Toss and serve",
        description:
          "Return the cooked shrimp to the skillet and toss well to coat. Add in cooked spaghetti and toss well to combine. Sprinkle fresh basil and extra Parmesan cheese on top and drizzle with olive oil if desired.",
        time: 2,
      },
    ],
  },
  {
    id: 2,
    name: "string",
    placed: false,
    location: "string",
    ingredients: [],
    steps: [],
    tags: [],
  },
]
