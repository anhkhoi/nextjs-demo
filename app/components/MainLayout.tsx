'use client';

import styled from 'styled-components';
import Navbar from './Navbar';

interface MainLayoutProps {
  useNav?: boolean;
  title: string;
  children?: React.ReactNode;
}

const Container = styled.div`
  padding: 15px;
  width: calc(100vw - 180px);
`;

export default ({ useNav = true, title, children }: MainLayoutProps) => {
  if (useNav) {
    return (
      <main className="flex">
        <Navbar />
        <Container>
          {title && (
            <h1 style={{ fontWeight: 600, fontSize: 20, marginBottom: 10 }}>
              {title}
            </h1>
          )}
          <div>{children}</div>
        </Container>
      </main>
    );
  }
  return <main>{children}</main>;
};
