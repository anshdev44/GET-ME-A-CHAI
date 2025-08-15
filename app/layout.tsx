import "./globals.css";
import NAV from "./components/nav.js";
import Galaxy from "./Galaxy.js";
import SessionWrapper from "./sessionwrapper.js";
import Foot from "./components/foot.js";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-black">
        <SessionWrapper>
        <div className="absolute inset-0 -z-10">
          <Galaxy />
        </div>
        <main className="relative z-0">
          <NAV />
          {children}
      
        </main>
        </SessionWrapper>
      </body>
    </html>
  );
}