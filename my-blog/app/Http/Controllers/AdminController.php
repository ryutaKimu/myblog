<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function index()
    {
        if(Auth::check()){
            return redirect('/admin/home');
        };
    }

    public function login(Request $request)
    {
        $credentials = $request->only('name', 'password');

    
        $admin = Admin::where('name', $credentials['name'])->first();

         // 名前とパスワードが空でないことを確認
    if (empty($credentials['name']) || empty($credentials['password'])) {
        return redirect()->route('admin')->withErrors(['message' => '名前とパスワードを入力してください。']);
    }
    
        if (!$admin) {
            return redirect()->route('admin')->withErrors(['message' => '指定された管理者は存在しません。']);
        }
    
        // パスワードをハッシュ化してから比較
        if ($credentials['password'] !== $admin->password) {
            return redirect()->route('admin')->withErrors(['message' => 'パスワードが正しくありません。']);
        }
    
        // 認証成功の場合の処理
        Auth::login($admin);
    
        return redirect('/admin/home');
    }
    


}
