import Link from "next/link";
import { serverAction } from "@/actions";

export default function Home() {
  return (
    <div>
      This is the home page.
      <Link href="/modal">I will open the modal</Link>
      <form action={serverAction}>
        <button type="submit">Activate Server Action (from app)</button>
      </form>
    </div>
  );
}
