import type { Metadata } from "next";

import {
  Plus_Jakarta_Sans,
} from "next/font/google";

import "./globals.css";


const jakarta =
  Plus_Jakarta_Sans({
    variable: "--font-jakarta",
    subsets: ["latin"],
    weight: [
      "400",
      "500",
      "600",
      "700",
    ],
});


export const metadata: Metadata = {
  title: {
    default: "Task Manager",
    template: "%s | Task Manager",
  },

  description:
    "A modern task management application for organizing daily tasks and categories.",


  keywords: [
    "tasks",
    "todo",
    "productivity",
    "task manager",
  ],


  openGraph: {
    title: "Task Manager",

    description:
      "Manage your tasks with a clean and modern interface.",

    type: "website",

    siteName: "Task Manager",
  },


  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body
        className={jakarta.variable}
      >
        {children}
      </body>

    </html>
  );
}