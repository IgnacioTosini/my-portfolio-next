import { prisma } from '@/lib/prisma';
import { TechnologiesClient } from './TechnologiesClient';
import './_technologies.scss';

export const Technologies = async () => {
  const technologies = await prisma.technology.findMany();

  return <TechnologiesClient technologies={technologies} />;
}
