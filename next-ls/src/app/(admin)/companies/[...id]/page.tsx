'use client';

import React from 'react';
import { useEffect } from 'react';
import Header from '@/app/components/header';
import { notFound } from 'next/navigation';

type PageProps = {
  params: { id: string };
};

export default function Page({ params }: PageProps) {
  useEffect(() => {
    const id = Number.parseInt(params.id);

    if (Number.isNaN(id)) {
      notFound();
    }
  }, [params.id]);

  return (
    <div className="py-6 px-10">
      <p>{`Information about company (${params.id})`}</p>
    </div>
  );
}
