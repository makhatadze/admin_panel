<?php
/**
 *  app/Repositories/RoleRepositoryInterface.php
 *
 * Date-Time: 05.03.21
 * Time: 14:52
 * @author Vito Makhatadze <vitomaxatadze@gmail.com>
 */
namespace App\Repositories;
use App\Http\Requests\Admin\RoleRequest;

interface RoleRepositoryInterface
{
    /**
     * @param RoleRequest $request
     */
    public function getData(RoleRequest $request);
}