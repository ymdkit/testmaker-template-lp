import Link from "next/link";

export default function Header() {

  return (
    <div>
      <header className="bg-black">
        <div className="flex p-3">
          <Link href="/">
            <a className="text-white">
              { process.env.NEXT_PUBLIC_APP_NAME }
            </a>
          </Link>        
        </div>
      </header>
    </div>
  );
}
