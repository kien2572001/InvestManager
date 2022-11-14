<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'name' => 'kien2572001',
                'email' => 'kien@gmail.com',
                'password' => Hash::make('12345678'),
            ],
            [
                'name' => 'quan1782006',
                'email' => 'quan@gmail.com',
                'password' => Hash::make('12345678'),
            ]
        ]);
    }
}
