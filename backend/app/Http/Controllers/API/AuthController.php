<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request){
        $user = User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>Hash::make($request->password),
        ]);
        return response()->json([
            'status'=>'200',
            'username'=> $user,
            'message' => 'Registration Successfully'
        ]);
    }
    public function login(Request $request){
        $user = User::where('email', $request->email)->first();
 
        if (! $user || ! Hash::check($request->password, $user->password)) {
            return response()->json([
                'status'=>'401',
                'message' => 'Invalid credentials'
            ]);
        }
        else{
        //    $token = $user->createToken($user->email.'_Token')->plainTextToken;
            return response()->json([
                'status'=>'200',
                'username'=> $user->name,
                // 'token' => $token,
                'message' => 'Logged In Successfully'
            ]);
        }
     
    }
}
