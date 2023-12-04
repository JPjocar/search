<?php

namespace App\Http\Controllers;

use App\Models\Productos;
use Illuminate\Http\Request;

class ProductoController extends Controller
{
    public function index(){
        $productos = Productos::all();
        return view('index', compact('productos'));
    }

    public function filtrar(Request $request){
        $word = $request->input('word');
        $filters = Productos::select('id', 'nombre')->orderBy('id', 'desc')->where('nombre', 'LIKE', "%$word%")->get();
        return json_encode($filters);
    }
}
