import NavBar from './NavBar'
import Footer from './Footer'
import BookNowFAB from './BookNowFAB'
import { ThemeProvider } from '@/contexts/ThemeContext'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors">
        <NavBar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <BookNowFAB />
      </div>
    </ThemeProvider>
  )
} 