<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGeneralsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('generals', function (Blueprint $table) {
            $table->id();
            $table->string('surname');
            $table->string('otherNames');
            $table->string('sex');
            $table->string('title');
            $table->string('dob');
            $table->string('nationality');
            $table->string('mailingAdd',191)->unique();
            $table->string('telephone');
            $table->string('fax');
            $table->string('email',191)->unique();
            $table->string('interest');
            $table->string('experience');
            $table->string('approve');
            $table->string('dapproved');
            $table->string('doApp');
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
        Schema::dropIfExists('generals');
    }
}
