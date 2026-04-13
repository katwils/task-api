import prisma from '../config/db.js';

export async function findAll(filter) {
  const where = filter && filter.completed !== undefined
    ? { completed: filter.completed }
    : {};
  
  return prisma.task.findMany({
    where,
  });
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
