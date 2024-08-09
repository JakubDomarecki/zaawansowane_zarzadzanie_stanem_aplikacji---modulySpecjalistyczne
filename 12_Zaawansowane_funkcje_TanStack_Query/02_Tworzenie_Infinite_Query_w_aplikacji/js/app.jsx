import React from 'react';
import { createRoot } from 'react-dom/client';
import { PhotosGrid } from './PhotosGrid';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <PhotosGrid />
    </QueryClientProvider>
)
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
