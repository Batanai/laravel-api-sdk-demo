<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Todo;

class TodoSeeder extends Seeder
{
    public function run()
    {
        Todo::create([
            'title' => 'Buy groceries',
            'description' => 'Milk, bread, eggs, and coffee',
            'completed' => false
        ]);

        Todo::create([
            'title' => 'Finish project',
            'description' => 'Complete the Laravel API SDK implementation',
            'completed' => false
        ]);

        Todo::create([
            'title' => 'Workout',
            'description' => 'Go for a 30-minute run',
            'completed' => false
        ]);
    }
}