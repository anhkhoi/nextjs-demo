import Link from 'next/link';

const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul style={{ width: 180, backgroundColor: 'whitesmoke' }}>{children}</ul>
  );
};

const Item = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li style={{ padding: '12px 10px' }}>
      <Link href={href}>{children}</Link>
    </li>
  );
};

Navbar.Item = Item;

export default () => {
  return (
    <Navbar>
      <Navbar.Item href="/get-started">Get Started</Navbar.Item>
      <Navbar.Item href="/dashboard">Dashboard</Navbar.Item>
      <Navbar.Item href="/@invoices">Invoices</Navbar.Item>
    </Navbar>
  );
};
