export interface Recipe {
  id: number
  name: string
  placed: boolean
  location: string
  ingredients: Ingredient[]
  steps: Step[]
  tags: string[]
}

export interface Ingredient {
  name: string
  quantity: number
  unit: string
}

export interface Step {
  name: string
  description: string
  time: number
}
