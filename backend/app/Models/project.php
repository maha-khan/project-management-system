<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class project extends Model
{
    use HasFactory;
    protected $table = 'projects';
    protected $fillable = [
        'p_name',
        'p_des',
        'start_date',
        'tech_stacks',
        'github_link',
        'domain_link',
        'image',
    ];
}
