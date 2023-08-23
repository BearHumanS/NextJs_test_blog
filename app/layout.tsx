import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kihun Blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="header_title">
        <Image src="/vercel.svg" width={100} height={100} alt="로고" />
        <Link href="/">
          <h1 className="blog_Name">기훈의 테스트 블로그</h1>
        </Link>
        <p className="description">문명 5, 세종대왕 대사</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="footer_inner">
        <h3>지식의 확산은 종종 지혜의 시작이죠.</h3>
      </div>
    </footer>
  );
  return (
    <html lang="en">
      <body>
        <div className="container">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
