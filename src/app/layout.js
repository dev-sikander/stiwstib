import "../../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
