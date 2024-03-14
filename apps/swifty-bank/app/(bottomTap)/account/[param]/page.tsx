export default function Page({ params }: { params: { param: string } }) {
  console.log(params.param);
  return <div>{params.param}</div>;
}
