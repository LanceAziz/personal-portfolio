import { Poppins } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Grid from "@/app/components/grid/grid";
import "./globals.css";
import ThemeProvider from "./providers/theme/ThemeProvider";
import { colors } from "@/app/utils/colors";

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
      <body>
        <ThemeProvider>
          <Grid
            className={`${poppins.className}`}
            style={{ backgroundColor: colors.black, minHeight: "100vh" }}
            color={colors.white_100}
          >
          {children}
        </Grid>
      </ThemeProvider>
    </body>
    </html >
  );
}
