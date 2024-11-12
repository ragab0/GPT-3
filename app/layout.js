import "./globals.css";
import AosContainer from "@/components/aos/Aos";

export const metadata = {
  title: "GPT3 - JavaScript Mastery Design",
  description:
    "A responsive landing page transformed from JavaScript Mastery Academy's Figma design. Built by Ragab",
  icon: "/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AosContainer />
        {children}
      </body>
    </html>
  );
}
