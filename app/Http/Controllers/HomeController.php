<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function home(){
        $data = [
            'title' => 'Home - Dbellsz Shots',
            'page' => 'home'
        ];
        return view('frontend.home', $data);
    }
}
