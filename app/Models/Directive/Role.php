<?php
/**
 *  app/Models/Role.php
 *
 * Date-Time: 04.03.21
 * Time: 14:26
 * @author Vito Makhatadze <vitomaxatadze@gmail.com>
 */

namespace App\Models\Directive;

use App\Http\Requests\Admin\RoleRequest;
use App\Models\User;
use App\Traits\RoleFilters;
use http\Env\Request;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use RichanFongdasen\EloquentBlameable\BlameableTrait;

class Role extends Model
{
    use BlameableTrait, softDeletes, RoleFilters;


    /**
     * Get roles
     *
     * @return BelongsToMany
     */
    public function permissions(): BelongsToMany
    {
        return $this->belongsToMany(Permission::class, 'roles_permissions');
    }

    /**
     * Get Created By
     *
     * @return HasOne
     */
    public function createdBy(): HasOne
    {
        return $this->hasOne(User::class,'id','created_by');
    }

    /**
     * Get Updated By
     *
     * @return HasOne
     */
    public function updatedBy(): HasOne
    {
        return $this->hasOne(User::class,'id','updated_by');
    }
}
