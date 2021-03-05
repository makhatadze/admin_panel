<?php
namespace App\Repositories;
use App\Http\Requests\Admin\UserRequest;

interface UserRepositoryInterface
{
    /**
     * @param UserRequest $request
     */
    public function getData(UserRequest $request);
}