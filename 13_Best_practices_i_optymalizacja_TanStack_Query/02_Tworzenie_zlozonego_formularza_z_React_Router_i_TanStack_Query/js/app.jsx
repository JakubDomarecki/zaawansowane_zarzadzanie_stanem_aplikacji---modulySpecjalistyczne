import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {StepOne} from './StepOne'
import { StepTwo } from './StepTwo';
import { StepThree } from './StepThree';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CustomFormProvider } from './FormContext';


const queryClient = new QueryClient();

const App = () => {
    return (
      <CustomFormProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<StepOne />} />
              <Route path='/address' element={<StepTwo />} />
              <Route path='/confirmation' element={<StepThree />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </CustomFormProvider>
    );
  };

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
