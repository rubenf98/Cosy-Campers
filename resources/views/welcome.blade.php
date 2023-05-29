<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=5">

    <title>Cosy Campers</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap" rel="stylesheet">

</head>


<style>
    html,
    body,
    #index {
        height: 100%;
        font-family: 'Poppins', sans-serif;
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        position: relative;
    }

    .rmdp-week-day {
        height: 90px;
    }
</style>



<body>
    <div id="index">
        <script src="{{ mix('/js/app.js') }}"></script>
    </div>
</body>

</html>