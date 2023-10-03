import Provider from "./context/AuthContext";
import ToasterContext from "./context/ToasterContext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Project-DB | daedongCMC",
  description: "대동CMC-APP 프로젝트 관리",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Provider>
          <ToasterContext />
          {children}
        </Provider>
      </body>
    </html>
  );
}
