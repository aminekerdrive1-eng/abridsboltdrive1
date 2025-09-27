import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ThemeProvider } from '@/components/theme-provider';

// Import pages
import Index from '@/pages/Index';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import UserDashboard from '@/pages/UserDashboard';
import DatabaseSettings from '@/pages/DatabaseSettings';
import DemoData from '@/pages/DemoData';
import NotificationDemo from '@/pages/NotificationDemo';
import BookingFlowDemo from '@/pages/BookingFlowDemo';
import NotificationCenter from '@/pages/NotificationCenter';
import NotificationSystemTest from '@/pages/NotificationSystemTest';

// Import components
import ProtectedRoute from '@/components/ProtectedRoute';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="dz-taxi-theme">
        <TooltipProvider>
          <Router>
            <div className="min-h-screen bg-background">
              <Routes>
                {/* Public routes */}
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/auth/signin" element={<SignIn />} />
                <Route path="/auth/signup" element={<SignUp />} />
                <Route path="/database-settings" element={<DatabaseSettings />} />
                <Route path="/demo-data" element={<DemoData />} />
                <Route path="/notification-demo" element={<NotificationDemo />} />
                <Route path="/booking-flow-demo" element={<BookingFlowDemo />} />
                <Route path="/notification-center" element={<NotificationCenter />} />
                <Route path="/notification-system-test" element={<NotificationSystemTest />} />
                
                {/* Protected routes */}
                <Route 
                  path="/dashboard" 
                  element={
                    <ProtectedRoute>
                      <UserDashboard />
                    </ProtectedRoute>
                  } 
                />
              </Routes>
            </div>
          </Router>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;