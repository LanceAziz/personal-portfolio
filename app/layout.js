import { Poppins } from "next/font/google";
import { colors } from "./utils/colors";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Grid from "@/app/components/grid/grid";
import { globalStyles } from "./globalStyles";
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
      <body style={globalStyles(colors.black).body}>
        <Grid
          className={poppins.className}
          style={{ backgroundColor: colors.black, color: colors.white, height: "100vh" }}
          color={colors.white_500}
        >
          {children}
        </Grid>
      </body>
    </html>
  );
}
