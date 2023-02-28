<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('games', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('team_1_id');
            $table->unsignedBigInteger('team_2_id');
            $table->unsignedBigInteger('field_id');
            $table->unsignedBigInteger('sport_id');
            $table->foreign('team_1_id')->references('id')->on('teams');
            $table->foreign('team_2_id')->references('id')->on('teams');
            $table->foreign('field_id')->references('id')->on('fields');
            $table->foreign('sport_id')->references('id')->on('sports');
            $table->tinyInteger('score_team_1')->nullable();
            $table->tinyInteger('score_team_2')->nullable();
            $table->timestamp('starts_at')->nullable();
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
        Schema::dropIfExists('games');
    }
};
