import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { FormProvider } from '@/app/contexts/FormContext'

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "formsDevs",
  description: "Generate forms for devs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FormProvider>
          {children}
        </FormProvider>
      </body>
    </html>
  )
}

