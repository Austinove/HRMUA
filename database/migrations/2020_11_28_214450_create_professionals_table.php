<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfessionalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('professionals', function (Blueprint $table) {
            $table->id();
            $table->string('surname');
            $table->string('otherNames');
            $table->string('sex');
            $table->string('title');
            $table->string('dob');
            $table->string('nationality');
            $table->string('mailingAdd',191)->nullable();
            $table->string('telephone');
            $table->string('fax');
            $table->string('email',191)->unique();
            $table->string('interest');
            $table->string('experience');
            $table->string('employer');
            $table->string('jobTitle');
            $table->string('employerEmail',191);
            $table->string('employerLocation');
            $table->text('qualification');
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
        Schema::dropIfExists('professionals');
    }
}