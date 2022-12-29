interface SeedData {
  entries: SeedEntry[]
}

interface SeedEntry {
  description: string,
  status: string,
  createdAt: number
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        "Pendiente: in Lorem irure ipsum sit nostrud commodo ullamco tempor occaecat voluptate.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description:
        "Progreso: minim nulla nisi mollit labore enim sunt quis mollit in.",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      description: "Finalizado: laborum in consequat mollit ut ea elit.",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ]
}