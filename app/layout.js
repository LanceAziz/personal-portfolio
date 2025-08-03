import { Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Grid from "@/app/components/grid/grid";
import Navbar from "./components/navbar/navbar.jsx";
import { styles } from './layoutStyles.js'
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Lance Aziz",
  description: "Lance Aziz Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={styles.body}>
        <Grid
          className={`${poppins.className}`}
          style={styles.grid}
        >
          <div style={styles.navContainer}>
            <Navbar />
          </div>
          <div style={styles.homeContainer}>
            {children}
          </div>
        </Grid>
      </body>
    </html >
  );
}
