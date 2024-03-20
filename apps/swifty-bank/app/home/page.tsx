import Card from "./_component/Card";
import SendButton from "./_component/SendButton";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Card cardType="Banner">Banner</Card>
      <Card cardType="List">List</Card>
      <Card cardType="Link">Link</Card>
      <SendButton />
    </div>
  );
}
