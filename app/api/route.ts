export const GET = async () => {
  const res = await fetch('https://api.vercel.app/blog');
  const data = await res.json();
  console.log(data);
  return Response.json(data);
};
