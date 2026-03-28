<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('issue_id')->constrained()->cascadeOnDelete();
            $table->string('title');
            $table->text('abstract')->nullable();
            $table->string('keywords')->nullable();
            $table->string('pdf_path')->nullable();
            $table->string('doi')->nullable();
            $table->integer('pages_start')->nullable();
            $table->integer('pages_end')->nullable();
            $table->integer('sort_order')->default(0);
            $table->boolean('is_published')->default(false);
            $table->date('published_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('articles');
    }
};
