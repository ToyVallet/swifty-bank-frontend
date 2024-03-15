import Card from "./_component/Card";

export default function Home() {
  return (
    <div>
      <Card cardType="Banner">Banner</Card>
      <Card cardType="List">List</Card>
      <Card cardType="Link">Link</Card>

      <h1>Home</h1>
    </div>
  );
}
