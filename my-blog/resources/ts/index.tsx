
import { createRoot } from 'react-dom/client';

// index.blade.phpのid="app"を読み込む
const container = document.getElementById('app');
const root = createRoot(container!);

root.render(
    <div className="text-red">
        Laravel React+Typescript環境構築
    </div>
);
