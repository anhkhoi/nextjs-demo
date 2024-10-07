'use client';

import styled from 'styled-components';
import { MainLayout } from '../components';
import Link from 'next/link';

interface DashboardProps {
  children: React.ReactNode;
  aging: React.ReactNode;
  debtors: React.ReactNode;
  metrics: React.ReactNode;
}

const GridItem = styled.div`
  border: 1px solid #ccc;
  min-height: 200px;
`;

export default function DashboardLayout({
  children,
  aging,
  debtors,
  metrics,
}: Readonly<DashboardProps>) {
  return (
    <MainLayout title="Dashboard">
      <div className="flex flex-row space-x-5">
        <GridItem className="basis-1/3">{aging}</GridItem>
        <GridItem className="basis-1/3">{debtors}</GridItem>
        <GridItem className="basis-1/3">{metrics}</GridItem>
      </div>
      <div>{children}</div>
    </MainLayout>
  );
}
