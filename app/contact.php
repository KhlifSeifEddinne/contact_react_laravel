<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class contact extends Model
{
    // Table Name
    protected $Table = 'contacts';
    // Primary key
    public $PrimaryKey = 'id';
    // TimeStamps
    public $TimeStamps = TRUE;
}
