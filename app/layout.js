import { Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Grid from "@/app/components/grid/grid";

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
      <body style={{ backgroundColor: "#121212", color: "white" }}>
          <Grid
            className={`${poppins.className}`}
            style={{minHeight: "100vh" }}
          >
          {children}
        </Grid>
    </body>
    </html >
  );
}
