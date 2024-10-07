import React from 'react';
import { MainLayout } from '../components';

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <MainLayout title="Get started">
      <React.Suspense fallback={<div>Loading...</div>}>
        {children}
      </React.Suspense>
    </MainLayout>
  );
};
