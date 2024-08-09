import React from 'react';
import { createRoot } from 'react-dom/client';
import { PostsList } from './PostsList';
import { QueryClient, QueryClientProvider, useQueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <PostsList />
    </QueryClientProvider>
)
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
