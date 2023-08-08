import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RoutesNative from './src/Routes/RoutesNative';
import React from 'react';
import { IdentityUserProvider } from './src/Contexts/IdentiryContext';
const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <IdentityUserProvider>
        <RoutesNative />
      </IdentityUserProvider>
    </QueryClientProvider>
  );
}