<?php

namespace App\Http\Controllers\v1\Admin;

use App\Http\Controllers\v1\ApiController;
use App\Http\Requests\Admin\RoleRequest;
use App\Http\Resources\RoleCollection;
use App\Models\Directive\Role;
use App\Repositories\RoleRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class RoleController extends ApiController
{
    private $roleRepository;

    public function __construct(RoleRepositoryInterface $roleRepository)
    {
        $this->roleRepository = $roleRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @param RoleRequest $request
     *
     * @return RoleCollection
     */
    public function index(RoleRequest $request)
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
     * @param  \Illuminate\Http\Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        //
    }
}
