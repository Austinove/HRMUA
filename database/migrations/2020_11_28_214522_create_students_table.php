<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('surname');
            $table->string('otherNames');
            $table->string('sex');
            $table->string('institutionName');
            $table->string('qualification');
            $table->text('target');
            $table->string('dob');
            $table->string('nationality');
            $table->string('telephone');
            $table->string('fax')->nullable();
            $table->string('email',191)->unique();
            $table->string('title')->nullable();
            $table->string('studentFile')->nullable();
            $table->string('experience')->nullable();
            $table->string('completions')->nullable();
            $table->string('approve')->nullable();
            $table->string('dapproved')->nullable();
            $table->string('doApp')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('students');
    }
}