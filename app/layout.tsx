import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://miftahunajat.github.io/"),

  title: 'Miftahunajat',
  authors: {
    name: "miftahunajat",
  },

  description:
    "Cast your vote now and see live updates on the poll results, powered by the real-time capabilities of Supabase database integration in our web app",
  openGraph: {
    title: "Miftahun Najat",
    description:
      "Software engineer backend from Jakarta Indonesia, specialized in building highly scalable web application",
    url: "https://miftahunajat.github.io/",
    siteName: "miftahunajat",
    images: "/og.png",
    type: "website",
  },
  keywords: ["software engineer web developer", "miftahun", "miftahunajat"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
