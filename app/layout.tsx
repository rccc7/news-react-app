import "../styles/globals.css";
import Header from "./Header";
import Providers from "./Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      {/* In order to apply the dark mode we need to surroud the body with a provider, 
      but to use any provider such as redux or even a theme provider we must do inside a
       client-side rendered component; however, since this component is server side we are 
       creating a Providers component which receives the same parameters as this component 
       "({ children }: { children: React.ReactNode })" and then wrap the body within this
       new Component  this trick */}
      {/* IMPORTANT NOTICE: Initially the Providers tag was outside the body tag which caused the 
       rise of the "Error: Hydration failed because the initial UI does not match what was rendered on the server" 
       After doing some research, it turnded out that the fix was to put the providers tag inside the
       body tag. 
       I also found out some the reasons of the hydration error and their corresponding workarounds: 
        https://nextjs.org/docs/messages/react-hydration-error
        One of them among others is that a p tag must not wrap a div tag for example.
        */}

      {/* The transition-all is to apply an effect when changing from dark to white theme */}
      <body className="bg-gray-100 dark:bg-zinc-900 transition-all duration-700">
        <Providers>
          <Header />
          <div className="max-w-6xl mx-auto">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
