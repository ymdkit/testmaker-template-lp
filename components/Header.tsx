import Link from "next/link";

export default function Header() {
  return (
    <div>
      <header className="bg-black text-white">
        <div className="flex p-3">
          <Link href="/">
            <a>{process.env.NEXT_PUBLIC_APP_NAME}</a>
          </Link>
          <div className="flex-grow"></div>
          <a href="/privacy" className="block mx-3">
            プライバシーポリシー
          </a>
          <a href="/terms" className="block mx-3">
            利用規約
          </a>
        </div>
      </header>
    </div>
  );
}
