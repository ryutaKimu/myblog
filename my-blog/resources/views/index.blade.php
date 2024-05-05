
 <!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>laravelView側タイトル</title>
    @viteReactRefresh
    @vite([
    'resources/css/app.css',
    'resources/scss/app.scss',
    'resources/ts/index.tsx',
    ])
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
</head>
<body>
    <div id="app"></div>
</body>
</html>
