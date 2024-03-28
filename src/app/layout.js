//===== Import Css =====
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
//===== Import Components =====
import Scripts from "./Scripts";
import ConditionalLayout from "./ConditionalLayout";
//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "App Development Company | Professional App Developers",
  description: "BitsWits is a leading app development company with a team of expert app developers that specialize in creating innovative and customized mobile applications.",
  //===== OG Tags =====
  openGraph: {
    title: "App Development Company | Professional App Developers",
    description: "BitsWits is a leading app development company with a team of expert app developers that specialize in creating innovative and customized mobile applications.",
    url: 'https://bitswits.co/',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: 'https://bitswits.co/' },
  //===== GEO Tags =====
  other: {},
  //===== Google Varification =====
  verification: {
    other: {
      "google-site-verification": ['Qt-497Wghx553U3hqDw6wV8NvilpVp8WK4_5W3rf_a0'],
      "dmca-site-verification": ['Z05ObW9WMWo4VTlQL0VpdEJuTzU0UT090'],
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Scripts />
      <body>
        <ConditionalLayout>
          <main>{children}</main>
        </ConditionalLayout>
      </body>
    </html>
  );
}
