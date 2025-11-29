import "./globals.css";
import localFont from "next/font/local";

const sansation = localFont({
  src: "../public/fonts/Sansation-Regular.ttf",
  variable: "--font-sansation",
});

export const metadata = {
  title: "Shanti Space",
  description: "Security • Intelligence • Protection",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sansation.variable} font-sansation`}>
        {children}
      </body>
    </html>
  );
}
