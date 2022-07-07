export interface ChoreType {
  id: number
  name: string
  placed: boolean
  location: string
}

export const mandatoryChores: ChoreType[] = [
  {
    id: 1,
    name: "Clean the kitchen",
    placed: false,
    location: "ChoreContainer",
  },
  {
    id: 2,
    name: "Clean the bathroom",
    placed: false,
    location: "ChoreContainer",
  },
  {
    id: 3,
    name: "Clean the bedroom",
    placed: false,
    location: "ChoreContainer",
  },
  {
    id: 4,
    name: "Clean the living room",
    placed: false,
    location: "ChoreContainer",
  },
  {
    id: 5,
    name: "Gym: arms",
    placed: false,
    location: "ChoreContainer",
  },
  {
    id: 6,
    name: "Gym: legs",
    placed: false,
    location: "ChoreContainer",
  },
  {
    id: 7,
    name: "Gym: upper body",
    placed: false,
    location: "ChoreContainer",
  },
]
