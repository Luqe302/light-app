import React from 'react';
import './App.css';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {LampsDashboard} from "./lampGroupControl/views/LampsDashboard/LampsDashboard";
import {SnackbarProvider} from "./common/contexts/SnackbarProvider";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <SnackbarProvider>
            <LampsDashboard/>
            </SnackbarProvider>
        </QueryClientProvider>
    );
}

export default App;
