'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import ProjectDetails from '../../../components/ProjectDetails';

export default function ProjectDetailsPage() {
  const params = useParams();
  const id = params?.id;
  return <ProjectDetails projectId={id} />;
}
