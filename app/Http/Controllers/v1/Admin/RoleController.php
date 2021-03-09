<?php
/**
 *  app/Http/Controllers/v1/Admin/RoleController.php
 *
 * Date-Time: 09.03.21
 * Time: 13:09
 * @author Vito Makhatadze <vitomaxatadze@gmail.com>
 */
namespace App\Http\Controllers\v1\Admin;

use App\Exceptions\DataNotFoundException;
use App\Http\Requests\Admin\RoleRequest;
use App\Http\Resources\RoleCollection;
use App\Http\Resources\RoleResource;
use App\Repositories\RoleRepositoryInterface;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class RoleController extends AdminController
{
    private $roleRepository;

    public function __construct(RoleRepositoryInterface $roleRepository)
    {
        // Initialize roleRepository
        $this->roleRepository = $roleRepository;

//        $this->authorizeResource(Role::class);
    }

    /**
     * Display a listing of the resource.
     *
     * @param RoleRequest $request
     *
     * @return RoleCollection
     *
     */
    public function index(RoleRequest $request): RoleCollection
    {
        return $this->roleRepository->getData($request);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  RoleRequest $request
     *
     * @return RoleResource
     */
    public function store(RoleRequest $request): RoleResource
    {
        // Get only name from request
       $data = $request->only('name');
        return new RoleResource($this->roleRepository->create($data));
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     *
     * @return DataNotFoundException|RoleResource|Exception|JsonResponse
     * @throws DataNotFoundException
     */
    public function show(int $id)
    {
        $data = $this->roleRepository->findOrFail($id);
        return new RoleResource($data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     *
     * @return Response
     */
    public function edit(int $id)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     *
     * @return Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        //
    }
}
