import { container } from './page.css';
import Input from '@swifty/ui';

export default async function Page() {
  return (
    <main className={container}>
      <Input />
    </main>
  );
}
