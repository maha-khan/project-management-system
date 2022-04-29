<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\project;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class ProjectController extends Controller
{
    public function addProject(Request $request){
        $project = project::create([
            'p_name'=>$request->p_name,
            'p_des'=>$request->p_des,
            'start_date'=>$request->start_date,
            'tech_stacks'=>$request->tech_stacks,
            'github_link'=>$request->github_link,
            'domain_link'=>$request->domain_link,
            'image'=>$request->image
        ]);
        return response()->json([
            'status'=>'200',
            'project'=> $project,
            'message' => 'Project Added Successfully'
        ]);
    }
    public function projectList(){
        $project = DB::table('projects')->where('status','current')->get();
 
            return response()->json([
                'status'=>'200',
                'message' => $project
            ]);
        
     
    }
    public function projecArchive(){
        $project = DB::table('projects')->where('status','archive')->get();
 
            return response()->json([
                'status'=>'200',
                'message' => $project
            ]);
        
     
    }
    public function projectCompleted(){
        $project = DB::table('projects')->where('status','completed')->get();
 
            return response()->json([
                'status'=>'200',
                'message' => $project
            ]);
        
     
    }
    public function completed($id){

        $project = project::find($id);
        $project->status = "completed";
        $project->update();
        return response()->json([
            'status'=>'200',
            'project'=> $project,
            'message' => 'Project Updated Successfully'
        ]);
     
    }
    public function archive($id){

        $project = project::find($id);
        $project->status = "archive";
        $project->update();
        return response()->json([
            'status'=>'200',
            'project'=> $project,
            'message' => 'Project Updated Successfully'
        ]);
     
    }
}
