<?php

namespace App\Repositories\Eloquent;

use App\Http\Requests\Admin\UserRequest;
use App\Http\Resources\UserCollection;
use App\Models\User;
use App\Repositories\Eloquent\Base\BaseRepository;
use App\Repositories\UserRepositoryInterface;
use Illuminate\Support\Collection;

class UserRepository extends BaseRepository implements UserRepositoryInterface
{

    /**
     * UserRepository constructor.
     *
     * @param User $model
     */
    public function __construct(User $model)
    {
        parent::__construct($model);
    }

    /**
     * @param UserRequest $request
     *
     * @return UserCollection
     */
    public function getData(UserRequest $request): UserCollection
    {
        return new UserCollection($this->model->paginate(1));
    }

}