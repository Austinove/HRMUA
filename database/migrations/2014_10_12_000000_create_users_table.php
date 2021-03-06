<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('fname', 255)->default('Admin');
            $table->string('lname', 255)->default('Admin');
            $table->string('email',191)->unique()->default('admin@gmail.com');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('image')->nullable()->default('profile.png');
            $table->rememberToken();
            $table->timestamps();
        });
        DB::table('users')->insert(array(
          
            ['password' => Hash::make('admin')],
        ));
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
