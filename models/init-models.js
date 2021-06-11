var DataTypes = require("sequelize").DataTypes;
var _activity_log = require("./activity_log");
var _cadres = require("./cadres");
var _categories = require("./categories");
var _departments = require("./departments");
var _facilities = require("./facilities");
var _failed_jobs = require("./failed_jobs");
var _licenses = require("./licenses");
var _migrations = require("./migrations");
var _model_has_permissions = require("./model_has_permissions");
var _model_has_roles = require("./model_has_roles");
var _password_resets = require("./password_resets");
var _permissions = require("./permissions");
var _posts = require("./posts");
var _profile = require("./profile");
var _role_has_permissions = require("./role_has_permissions");
var _roles = require("./roles");
var _settings = require("./settings");
var _users = require("./users");

function initModels(sequelize) {
  var activity_log = _activity_log(sequelize, DataTypes);
  var cadres = _cadres(sequelize, DataTypes);
  var categories = _categories(sequelize, DataTypes);
  var departments = _departments(sequelize, DataTypes);
  var facilities = _facilities(sequelize, DataTypes);
  var failed_jobs = _failed_jobs(sequelize, DataTypes);
  var licenses = _licenses(sequelize, DataTypes);
  var migrations = _migrations(sequelize, DataTypes);
  var model_has_permissions = _model_has_permissions(sequelize, DataTypes);
  var model_has_roles = _model_has_roles(sequelize, DataTypes);
  var password_resets = _password_resets(sequelize, DataTypes);
  var permissions = _permissions(sequelize, DataTypes);
  var posts = _posts(sequelize, DataTypes);
  var profile = _profile(sequelize, DataTypes);
  var role_has_permissions = _role_has_permissions(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var settings = _settings(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  permissions.belongsToMany(roles, { as: 'role_id_roles', through: role_has_permissions, foreignKey: "permission_id", otherKey: "role_id" });
  roles.belongsToMany(permissions, { as: 'permission_id_permissions', through: role_has_permissions, foreignKey: "role_id", otherKey: "permission_id" });
  profile.belongsTo(cadres, { as: "cadre", foreignKey: "cadre_id"});
  cadres.hasMany(profile, { as: "profiles", foreignKey: "cadre_id"});
  posts.belongsTo(categories, { as: "category", foreignKey: "category_id"});
  categories.hasMany(posts, { as: "posts", foreignKey: "category_id"});
  profile.belongsTo(departments, { as: "department", foreignKey: "department_id"});
  departments.hasMany(profile, { as: "profiles", foreignKey: "department_id"});
  profile.belongsTo(facilities, { as: "facility", foreignKey: "facility_id"});
  facilities.hasMany(profile, { as: "profiles", foreignKey: "facility_id"});
  profile.belongsTo(licenses, { as: "licence", foreignKey: "licence_id"});
  licenses.hasMany(profile, { as: "profiles", foreignKey: "licence_id"});
  model_has_permissions.belongsTo(permissions, { as: "permission", foreignKey: "permission_id"});
  permissions.hasMany(model_has_permissions, { as: "model_has_permissions", foreignKey: "permission_id"});
  role_has_permissions.belongsTo(permissions, { as: "permission", foreignKey: "permission_id"});
  permissions.hasMany(role_has_permissions, { as: "role_has_permissions", foreignKey: "permission_id"});
  model_has_roles.belongsTo(roles, { as: "role", foreignKey: "role_id"});
  roles.hasMany(model_has_roles, { as: "model_has_roles", foreignKey: "role_id"});
  role_has_permissions.belongsTo(roles, { as: "role", foreignKey: "role_id"});
  roles.hasMany(role_has_permissions, { as: "role_has_permissions", foreignKey: "role_id"});
  users.belongsTo(roles, { as: "role", foreignKey: "role_id"});
  roles.hasMany(users, { as: "users", foreignKey: "role_id"});
  categories.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(categories, { as: "categories", foreignKey: "user_id"});
  licenses.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(licenses, { as: "licenses", foreignKey: "user_id"});
  posts.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(posts, { as: "posts", foreignKey: "user_id"});
  profile.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(profile, { as: "profiles", foreignKey: "user_id"});

  return {
    activity_log,
    cadres,
    categories,
    departments,
    facilities,
    failed_jobs,
    licenses,
    migrations,
    model_has_permissions,
    model_has_roles,
    password_resets,
    permissions,
    posts,
    profile,
    role_has_permissions,
    roles,
    settings,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
