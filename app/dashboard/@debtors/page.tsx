export default async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <div
      style={{
        background: 'green',
        height: '100%',
        display: 'flex',
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <span>Debtors loaded</span>
    </div>
  );
};
