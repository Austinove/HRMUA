<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMemberTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('member_types', function (Blueprint $table) {
            $table->id();
            $table->string('typeName');
            $table->timestamps();
        });

        DB::table('member_types')->insert(
            array(
                ['typeName'=>'Professional'],
                ['typeName'=>'Student '],
                ['typeName'=>'Retired'],
                ['typeName'=>'Corporate'],
                ['typeName'=>'Genral']
            )
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('member_types');
    }
}
