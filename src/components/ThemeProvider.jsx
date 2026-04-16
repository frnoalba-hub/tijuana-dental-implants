import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      storageKey="blaze-ui-theme"
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
