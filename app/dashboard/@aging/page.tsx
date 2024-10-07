export default async function Aging() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div
      style={{
        background: 'whitesmoke',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <span>Aging loaded</span>
    </div>
  );
}
