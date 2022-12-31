"use client";
import { ThemeProvider } from "next-themes";

// Here we are telling Nextjs that this provider will use client
// The provider will receive the same parameters that the RootLayout Component (layout.tsx)
//and render the children
function Providers({ children }: { children: React.ReactNode }) {
  // enableSystem: --> If the system by default is applying either a dark or light theme, then
  //use that theme by default.
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
}

export default Providers;
