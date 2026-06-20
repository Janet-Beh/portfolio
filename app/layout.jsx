import './globals.css'

export const metadata = {
  /* EDIT: Your name and a short description for search engines */
  title: 'Janet Beh Jing Le — Portfolio',
  description: 'Final year student at Sunway University passionate about computer science.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-800 antialiased">
        {children}
      </body>
    </html>
  )
}
