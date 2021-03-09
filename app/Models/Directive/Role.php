<?php
/**
 *  app/Models/Role.php
 *
 * Date-Time: 04.03.21
 * Time: 14:26
 * @author Vito Makhatadze <vitomaxatadze@gmail.com>
 */

namespace App\Models\Directive;

use App\Models\User;
use App\Traits\RoleFilters;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;
use RichanFongdasen\EloquentBlameable\BlameableTrait;

/**
 * @mixin Builder
 */
class Role extends Model
{
    use BlameableTrait, softDeletes, RoleFilters;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'roles';


    protected static function boot()
    {
        parent::boot();

        static::creating(function ($role) {
           $role->slug = Str::slug($role->name);
        });
    }

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
