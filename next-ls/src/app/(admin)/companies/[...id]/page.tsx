// app/companies/[id]/page.tsx
import React from 'react';
import Header from '@/app/components/header';

type PageProps = {
  params: { id: string[] };
};

export default function Page({ params }: PageProps) {
  return (
    <div>
      <Header>Company ({String(params.id)})</Header>
      <p>{new Date().toTimeString()}</p>
    </div>
  );
}
