import Link from "next/link";
import Head from 'next/head'

export default function Header() {

  return (
    <div>
      <Head>
        <link rel="shortcut icon" href={`${process.env.NEXT_PUBLIC_APP_NAME_EN}/favicon.ico`}/>
      </Head>
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
