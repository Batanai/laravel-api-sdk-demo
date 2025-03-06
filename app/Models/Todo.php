<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


/**
 * @OA\Schema(
 *     schema="Todo",
 *     type="object",
 *     title="Todo",
 *     required={"title"},
 *     @OA\Property(property="id", type="integer", example=1),
 *     @OA\Property(property="title", type="string", example="Buy groceries"),
 *     @OA\Property(property="description", type="string", example="Milk, Bread, Cheese"),
 *     @OA\Property(property="created_at", type="string", format="date-time"),
 *     @OA\Property(property="updated_at", type="string", format="date-time")
 * )
 */
class Todo extends Model
{
    use HasFactory;

    // Specify which fields are mass assignable
    protected $fillable = [
        'title',
        'description',
        'completed'
    ];

    // Cast attributes to specific types
    protected $casts = [
        'completed' => 'boolean',
    ];
}
