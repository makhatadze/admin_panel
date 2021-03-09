<?php

namespace App\Policies;

use App\Exceptions\PermissionException;
use App\Models\Directive\Role;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class RolePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param User $user
     *
     * @return mixed
     * @throws PermissionException
     */
    public function viewAny(User $user)
    {
        if (1===2) {
            throw new PermissionException();
        }
        return true;
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param User $user
     *
     * @return mixed
     */
    public function view(User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can create models.
     *
     * @param User $user
     *
     * @return mixed
     */
    public function create(User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param User $user
     * @param Role $role
     *
     * @return mixed
     * @throws PermissionException
     */
    public function update(User $user)
    {
        return true;
    }


    /**
     * Determine whether the user can delete the model.
     *
     * @param  User  $user
     * @return mixed
     */
    public function delete(User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param User $user
     * @param  \App\Models\Role  $role
     *
     * @return mixed
     */
    public function restore(User $user, Role $role)
    {
        return true;
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param User  $user
     * @param  \App\Models\Role  $role
     *
     * @return mixed
     */
    public function forceDelete(User $user, Role $role)
    {
        return true;

    }
}
