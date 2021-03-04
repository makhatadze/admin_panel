<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePermissionRoutesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('permission_routes', function (Blueprint $table) {
            $table->bigInteger('permission_id')->unsigned()->index();
            $table->bigInteger('route_id')->unsigned();
            $table->foreign('permission_id')->references('id')->on('permissions')->onDelete('cascade');
            $table->foreign('route_id')->references('id')->on('routes')->onDelete('cascade');
            $table->primary(['permission_id','route_id']);

            // Add columns to find author for this action.
            $table->foreignId('created_by')->unsigned()->nullable()->constrained('users')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('permission_routes');
    }
}
