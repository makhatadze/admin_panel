<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\JsonResponse;

class TrashException extends Exception
{
    public function report()
    {
        //
    }

    /**
     * Return json error for dataNotFound
     *
     */
    public function render(): JsonResponse
    {
        return response()->json([
            'message' => "This item not exists in trash.",
            'status' => 400
        ],400);
    }
}
