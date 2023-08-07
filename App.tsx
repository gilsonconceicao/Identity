import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RoutesNative from './src/Routes/RoutesNative';
const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RoutesNative/>
    </QueryClientProvider>
  );
}