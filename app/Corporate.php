<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Corporate extends Model
{
    protected $guarded = [];

    public function staffMembers()
    {
        return $this->hasMany('App\Staff', 'staff', 'id');
    }
}