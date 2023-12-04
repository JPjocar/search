<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta
    name="description"
    content="Page to Search Products or Items">
    <title>Document</title>
    <style>
        *{
            box-sizing: border-box;
            font-family: cascadia code;
        }
        .hidden{
            display: none;
        }
        .form{
            width: 200px;
        } 
        ul{
            list-style: none;
            padding: 0;
            margin: 0;
        }
        ul, input{
            width: 100%;
        }
        li{
            background-color: beige;
            cursor: pointer;
        }
        li:hover{
            background-color: bisque;
        }
        .selected{
            background-color: bisque;
        }
    
    </style>
</head>
<body>
    <form id="div_searchBox">
        @csrf
        <input type="text" name="search" id="input_search" placeholder="Busqueda" autocomplete="off">
        <ul class="hidden" id="resultsList">
        </ul>
    </form>
    <script src="{{asset('js/busqueda.js')}}"></script>
</body>
</html>