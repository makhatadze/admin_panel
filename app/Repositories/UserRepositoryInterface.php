<?php
namespace App\Repositories;
use App\Http\Requests\UserRequest;

interface UserRepositoryInterface
{
    /**
     * @param UserRequest $request
     */
    public function getUsers(UserRequest $request);
}