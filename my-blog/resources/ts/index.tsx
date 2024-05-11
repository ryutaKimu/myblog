
import { createRoot } from 'react-dom/client';
import { App } from './App';
import  React,{ StrictMode } from 'react';

// index.blade.phpのid="app"を読み込む
const container = document.getElementById('app');
const root = createRoot(container!);

root.render(
    <StrictMode>
    <App/>
    </StrictMode>
);
