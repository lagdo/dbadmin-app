jaxon.config.requestURI = '/jaxon';
jaxon.config.statusMessages = false;
jaxon.config.waitCursor = true;
jaxon.config.version = 'Jaxon 5.x';
jaxon.config.defaultMode = 'asynchronous';
jaxon.config.defaultMethod = 'POST';
jaxon.config.responseType = 'JSON';
jaxon.setCsrf('csrf-token');

jaxon.dom.ready(() => jaxon.processCustomAttrs());

jaxon.dom.ready(() => jaxon.dialog.config({"labels":{"confirm":{"yes":"Yes","no":"No"}},"defaults":{"modal":"bootbox","alert":"sweetalert","confirm":"sweetalert"}}));

const jx = {
  rc: (name, method, parameters, options = {}) => jaxon.request({ type: 'class', name, method }, { parameters, ...options}),
  rf: (name, parameters, options = {}) => jaxon.request({ type: 'func', name }, { parameters, ...options}),
  c0: 'Lagdo.DbAdmin.Ajax.Admin.Admin',
  c1: 'Lagdo.DbAdmin.Ajax.Admin.Db.Command.Query.FavoriteFunc',
  c2: 'Lagdo.DbAdmin.Ajax.Admin.Db.Command.Query.FavoritePage',
  c3: 'Lagdo.DbAdmin.Ajax.Admin.Db.Database.Database',
  c4: 'Lagdo.DbAdmin.Ajax.Admin.Db.Database.Events',
  c5: 'Lagdo.DbAdmin.Ajax.Admin.Db.Database.Export',
  c6: 'Lagdo.DbAdmin.Ajax.Admin.Db.Database.Import',
  c7: 'Lagdo.DbAdmin.Ajax.Admin.Db.Database.Query',
  c8: 'Lagdo.DbAdmin.Ajax.Admin.Db.Database.Routines',
  c9: 'Lagdo.DbAdmin.Ajax.Admin.Db.Database.Sequences',
  c10: 'Lagdo.DbAdmin.Ajax.Admin.Db.Database.Tables',
  c11: 'Lagdo.DbAdmin.Ajax.Admin.Db.Database.UserTypes',
  c12: 'Lagdo.DbAdmin.Ajax.Admin.Db.Database.Views',
  c13: 'Lagdo.DbAdmin.Ajax.Admin.Db.Server.Databases',
  c14: 'Lagdo.DbAdmin.Ajax.Admin.Db.Server.Export',
  c15: 'Lagdo.DbAdmin.Ajax.Admin.Db.Server.Import',
  c16: 'Lagdo.DbAdmin.Ajax.Admin.Db.Server.Privilege',
  c17: 'Lagdo.DbAdmin.Ajax.Admin.Db.Server.Privileges',
  c18: 'Lagdo.DbAdmin.Ajax.Admin.Db.Server.Processes',
  c19: 'Lagdo.DbAdmin.Ajax.Admin.Db.Server.Query',
  c20: 'Lagdo.DbAdmin.Ajax.Admin.Db.Server.Status',
  c21: 'Lagdo.DbAdmin.Ajax.Admin.Db.Server.Variables',
  c22: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Ddl.Alter',
  c23: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Ddl.Column.CreateFunc',
  c24: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Ddl.Column.DeleteFunc',
  c25: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Ddl.Column.MoveFunc',
  c26: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Ddl.Column.UpdateFunc',
  c27: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Ddl.Create',
  c28: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Ddl.QueryFunc',
  c29: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Ddl.Table',
  c30: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Ddl.TableFunc',
  c31: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dml.Delete',
  c32: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dml.Insert',
  c33: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dml.Update',
  c34: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dql.Options.Fields.Columns',
  c35: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dql.Options.Fields.Filters',
  c36: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dql.Options.Fields.Form.Columns',
  c37: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dql.Options.Fields.Form.Filters',
  c38: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dql.Options.Fields.Form.Sorting',
  c39: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dql.Options.Fields.Sorting',
  c40: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dql.Options.Values',
  c41: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dql.ResultSet',
  c42: 'Lagdo.DbAdmin.Ajax.Admin.Db.Table.Dql.Select',
  c43: 'Lagdo.DbAdmin.Ajax.Admin.Db.View.Ddl.Form',
  c44: 'Lagdo.DbAdmin.Ajax.Admin.Db.View.Ddl.View',
  c45: 'Lagdo.DbAdmin.Ajax.Admin.Db.View.Ddl.ViewFunc',
  c46: 'Lagdo.DbAdmin.Ajax.Admin.Db.View.Dql.Select',
  c47: 'Lagdo.DbAdmin.Ajax.Admin.TabFunc',
};

Lagdo = {
  DbAdmin: {
    Ajax: {
      Admin: {
        Admin: {
          server: (...args) => jx.rc(jx.c0, 'server', args, { bags: ["dbadmin","dbadmin.tab"] }),
        },
        Db: {
          Command: {
            Query: {
              FavoriteFunc: {
                add: (...args) => jx.rc(jx.c1, 'add', args, { bags: ["dbadmin","dbadmin.tab"] }),
                create: (...args) => jx.rc(jx.c1, 'create', args, { bags: ["dbadmin","dbadmin.tab"] }),
                edit: (...args) => jx.rc(jx.c1, 'edit', args, { bags: ["dbadmin","dbadmin.tab"] }),
                update: (...args) => jx.rc(jx.c1, 'update', args, { bags: ["dbadmin","dbadmin.tab"] }),
                delete: (...args) => jx.rc(jx.c1, 'delete', args, { bags: ["dbadmin","dbadmin.tab"] }),
              },
              FavoritePage: {
                html: (...args) => jx.rc(jx.c2, 'html', args, { bags: ["dbadmin","dbadmin.tab"] }),
                page: (...args) => jx.rc(jx.c2, 'page', args, { bags: ["dbadmin","dbadmin.tab"] }),
                paginationAttributes: (...args) => jx.rc(jx.c2, 'paginationAttributes', args, { bags: ["dbadmin","dbadmin.tab"] }),
                clear: (...args) => jx.rc(jx.c2, 'clear', args, { bags: ["dbadmin","dbadmin.tab"] }),
                visible: (...args) => jx.rc(jx.c2, 'visible', args, { bags: ["dbadmin","dbadmin.tab"] }),
                render: (...args) => jx.rc(jx.c2, 'render', args, { bags: ["dbadmin","dbadmin.tab"] }),
                item: (...args) => jx.rc(jx.c2, 'item', args, { bags: ["dbadmin","dbadmin.tab"] }),
              },
            },
          },
          Database: {
            Database: {
              select: (...args) => jx.rc(jx.c3, 'select', args, { bags: ["dbadmin","dbadmin.tab"] }),
              add: (...args) => jx.rc(jx.c3, 'add', args, { bags: ["dbadmin","dbadmin.tab"] }),
              create: (...args) => jx.rc(jx.c3, 'create', args, { bags: ["dbadmin","dbadmin.tab"] }),
              drop: (...args) => jx.rc(jx.c3, 'drop', args, { bags: ["dbadmin","dbadmin.tab"] }),
            },
            Events: {
              show: (...args) => jx.rc(jx.c4, 'show', args, { bags: ["dbadmin","dbadmin.tab"] }),
            },
            Export: {
              database: (...args) => jx.rc(jx.c5, 'database', args, { bags: ["dbadmin","dbadmin.tab"] }),
              export: (...args) => jx.rc(jx.c5, 'export', args, { bags: ["dbadmin","dbadmin.tab"] }),
            },
            Import: {
              database: (...args) => jx.rc(jx.c6, 'database', args, { bags: ["dbadmin","dbadmin.tab"] }),
              executeWebFile: (...args) => jx.rc(jx.c6, 'executeWebFile', args, { bags: ["dbadmin","dbadmin.tab"] }),
              executeSqlFiles: (...args) => jx.rc(jx.c6, 'executeSqlFiles', args, { bags: ["dbadmin","dbadmin.tab"], upload: 'dbadmin-import-sql-files-input' }),
            },
            Query: {
              database: (...args) => jx.rc(jx.c7, 'database', args, { bags: ["dbadmin","dbadmin.tab"] }),
              exec: (...args) => jx.rc(jx.c7, 'exec', args, { bags: ["dbadmin","dbadmin.tab"] }),
            },
            Routines: {
              show: (...args) => jx.rc(jx.c8, 'show', args, { bags: ["dbadmin","dbadmin.tab"] }),
            },
            Sequences: {
              show: (...args) => jx.rc(jx.c9, 'show', args, { bags: ["dbadmin","dbadmin.tab"] }),
            },
            Tables: {
              show: (...args) => jx.rc(jx.c10, 'show', args, { bags: ["dbadmin","dbadmin.tab"] }),
            },
            UserTypes: {
              show: (...args) => jx.rc(jx.c11, 'show', args, { bags: ["dbadmin","dbadmin.tab"] }),
            },
            Views: {
              show: (...args) => jx.rc(jx.c12, 'show', args, { bags: ["dbadmin","dbadmin.tab"] }),
            },
          },
          Server: {
            Databases: {
              show: (...args) => jx.rc(jx.c13, 'show', args, { bags: ["dbadmin","dbadmin.tab"] }),
            },
            Export: {
              server: (...args) => jx.rc(jx.c14, 'server', args, { bags: ["dbadmin","dbadmin.tab"] }),
              export: (...args) => jx.rc(jx.c14, 'export', args, { bags: ["dbadmin","dbadmin.tab"] }),
            },
            Import: {
              server: (...args) => jx.rc(jx.c15, 'server', args, { bags: ["dbadmin","dbadmin.tab"] }),
              executeWebFile: (...args) => jx.rc(jx.c15, 'executeWebFile', args, { bags: ["dbadmin","dbadmin.tab"] }),
              executeSqlFiles: (...args) => jx.rc(jx.c15, 'executeSqlFiles', args, { bags: ["dbadmin","dbadmin.tab"], upload: 'dbadmin-import-sql-files-input' }),
            },
            Privilege: {
              add: (...args) => jx.rc(jx.c16, 'add', args, { bags: ["dbadmin","dbadmin.tab"] }),
              create: (...args) => jx.rc(jx.c16, 'create', args, { bags: ["dbadmin","dbadmin.tab"] }),
              edit: (...args) => jx.rc(jx.c16, 'edit', args, { bags: ["dbadmin","dbadmin.tab"] }),
              update: (...args) => jx.rc(jx.c16, 'update', args, { bags: ["dbadmin","dbadmin.tab"] }),
            },
            Privileges: {
              show: (...args) => jx.rc(jx.c17, 'show', args, { bags: ["dbadmin","dbadmin.tab"] }),
            },
            Processes: {
              show: (...args) => jx.rc(jx.c18, 'show', args, { bags: ["dbadmin","dbadmin.tab"] }),
            },
            Query: {
              server: (...args) => jx.rc(jx.c19, 'server', args, { bags: ["dbadmin","dbadmin.tab"] }),
              exec: (...args) => jx.rc(jx.c19, 'exec', args, { bags: ["dbadmin","dbadmin.tab"] }),
            },
            Status: {
              show: (...args) => jx.rc(jx.c20, 'show', args, { bags: ["dbadmin","dbadmin.tab"] }),
            },
            Variables: {
              show: (...args) => jx.rc(jx.c21, 'show', args, { bags: ["dbadmin","dbadmin.tab"] }),
            },
          },
          Table: {
            Ddl: {
              Alter: {
                render: (...args) => jx.rc(jx.c22, 'render', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table"] }),
              },
              Column: {
                CreateFunc: {
                  add: (...args) => jx.rc(jx.c23, 'add', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table"] }),
                  save: (...args) => jx.rc(jx.c23, 'save', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table"] }),
                },
                DeleteFunc: {
                  exec: (...args) => jx.rc(jx.c24, 'exec', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table"] }),
                  cancel: (...args) => jx.rc(jx.c24, 'cancel', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table"] }),
                },
                MoveFunc: {
                  up: (...args) => jx.rc(jx.c25, 'up', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table"] }),
                  down: (...args) => jx.rc(jx.c25, 'down', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table"] }),
                },
                UpdateFunc: {
                  edit: (...args) => jx.rc(jx.c26, 'edit', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table"] }),
                  save: (...args) => jx.rc(jx.c26, 'save', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table"] }),
                  cancel: (...args) => jx.rc(jx.c26, 'cancel', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table"] }),
                },
              },
              Create: {
                render: (...args) => jx.rc(jx.c27, 'render', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table"] }),
              },
              QueryFunc: {
                changes: (...args) => jx.rc(jx.c28, 'changes', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table"] }),
                createTable: (...args) => jx.rc(jx.c28, 'createTable', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table"] }),
                alterTable: (...args) => jx.rc(jx.c28, 'alterTable', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table"] }),
              },
              Table: {
                show: (...args) => jx.rc(jx.c29, 'show', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table"] }),
              },
              TableFunc: {
                create: (...args) => jx.rc(jx.c30, 'create', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table"] }),
                alter: (...args) => jx.rc(jx.c30, 'alter', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table"] }),
                drop: (...args) => jx.rc(jx.c30, 'drop', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table"] }),
              },
            },
            Dml: {
              Delete: {
                exec: (...args) => jx.rc(jx.c31, 'exec', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
                showQueryCode: (...args) => jx.rc(jx.c31, 'showQueryCode', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
              },
              Insert: {
                show: (...args) => jx.rc(jx.c32, 'show', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
                save: (...args) => jx.rc(jx.c32, 'save', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
                showQueryForm: (...args) => jx.rc(jx.c32, 'showQueryForm', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
                showQueryCode: (...args) => jx.rc(jx.c32, 'showQueryCode', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
              },
              Update: {
                edit: (...args) => jx.rc(jx.c33, 'edit', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
                save: (...args) => jx.rc(jx.c33, 'save', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
                showQueryForm: (...args) => jx.rc(jx.c33, 'showQueryForm', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
                showQueryCode: (...args) => jx.rc(jx.c33, 'showQueryCode', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
              },
            },
            Dql: {
              Options: {
                Fields: {
                  Columns: {
                    edit: (...args) => jx.rc(jx.c34, 'edit', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
                    save: (...args) => jx.rc(jx.c34, 'save', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
                  },
                  Filters: {
                    edit: (...args) => jx.rc(jx.c35, 'edit', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
                    save: (...args) => jx.rc(jx.c35, 'save', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
                  },
                  Form: {
                    Columns: {
                      show: (...args) => jx.rc(jx.c36, 'show', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
                      add: (...args) => jx.rc(jx.c36, 'add', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
                      del: (...args) => jx.rc(jx.c36, 'del', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
                    },
                    Filters: {
                      show: (...args) => jx.rc(jx.c37, 'show', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
                      add: (...args) => jx.rc(jx.c37, 'add', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
                      del: (...args) => jx.rc(jx.c37, 'del', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
                    },
                    Sorting: {
                      show: (...args) => jx.rc(jx.c38, 'show', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
                      add: (...args) => jx.rc(jx.c38, 'add', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
                      del: (...args) => jx.rc(jx.c38, 'del', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
                    },
                  },
                  Sorting: {
                    edit: (...args) => jx.rc(jx.c39, 'edit', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
                    save: (...args) => jx.rc(jx.c39, 'save', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
                  },
                },
                Values: {
                  saveSelectLimit: (...args) => jx.rc(jx.c40, 'saveSelectLimit', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
                  saveSelectTotal: (...args) => jx.rc(jx.c40, 'saveSelectTotal', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
                  saveTextLength: (...args) => jx.rc(jx.c40, 'saveTextLength', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
                },
              },
              ResultSet: {
                html: (...args) => jx.rc(jx.c41, 'html', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
                page: (...args) => jx.rc(jx.c41, 'page', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
                paginationAttributes: (...args) => jx.rc(jx.c41, 'paginationAttributes', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
                clear: (...args) => jx.rc(jx.c41, 'clear', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
                visible: (...args) => jx.rc(jx.c41, 'visible', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
                render: (...args) => jx.rc(jx.c41, 'render', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
                item: (...args) => jx.rc(jx.c41, 'item', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
              },
              Select: {
                show: (...args) => jx.rc(jx.c42, 'show', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
                edit: (...args) => jx.rc(jx.c42, 'edit', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
              },
            },
          },
          View: {
            Ddl: {
              Form: {
                add: (...args) => jx.rc(jx.c43, 'add', args, { bags: ["dbadmin","dbadmin.tab"] }),
                edit: (...args) => jx.rc(jx.c43, 'edit', args, { bags: ["dbadmin","dbadmin.tab"] }),
              },
              View: {
                show: (...args) => jx.rc(jx.c44, 'show', args, { bags: ["dbadmin","dbadmin.tab"] }),
              },
              ViewFunc: {
                create: (...args) => jx.rc(jx.c45, 'create', args, { bags: ["dbadmin","dbadmin.tab"] }),
                update: (...args) => jx.rc(jx.c45, 'update', args, { bags: ["dbadmin","dbadmin.tab"] }),
                drop: (...args) => jx.rc(jx.c45, 'drop', args, { bags: ["dbadmin","dbadmin.tab"] }),
              },
            },
            Dql: {
              Select: {
                show: (...args) => jx.rc(jx.c46, 'show', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
                edit: (...args) => jx.rc(jx.c46, 'edit', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.table","dbadmin.select"] }),
              },
            },
          },
        },
        TabFunc: {
          add: (...args) => jx.rc(jx.c47, 'add', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.tabs"] }),
          del: (...args) => jx.rc(jx.c47, 'del', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.tabs"] }),
          editTitle: (...args) => jx.rc(jx.c47, 'editTitle', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.tabs"] }),
          saveTitle: (...args) => jx.rc(jx.c47, 'saveTitle', args, { bags: ["dbadmin","dbadmin.tab","dbadmin.tabs"] }),
        },
      },
    },
  },
};

// Spinner javascript code.

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Spin = {}));
})(this, (function (exports) { 'use strict';

    var __assign = (undefined && undefined.__assign) || function () {
        __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    var defaults = {
        lines: 12,
        length: 7,
        width: 5,
        radius: 10,
        scale: 1.0,
        corners: 1,
        color: '#000',
        fadeColor: 'transparent',
        animation: 'spinner-line-fade-default',
        rotate: 0,
        direction: 1,
        speed: 1,
        zIndex: 2e9,
        className: 'spinner',
        top: '50%',
        left: '50%',
        shadow: '0 0 1px transparent', // prevent aliased lines
        position: 'absolute',
    };
    var Spinner = /** @class */ (function () {
        function Spinner(opts) {
            if (opts === void 0) { opts = {}; }
            this.opts = __assign(__assign({}, defaults), opts);
        }
        /**
         * Adds the spinner to the given target element. If this instance is already
         * spinning, it is automatically removed from its previous target by calling
         * stop() internally.
         */
        Spinner.prototype.spin = function (target) {
            this.stop();
            this.el = document.createElement('div');
            this.el.className = this.opts.className;
            this.el.setAttribute('role', 'progressbar');
            this.el.style.position = this.opts.position;
            this.el.style.width = "0";
            this.el.style.zIndex = this.opts.zIndex.toString();
            this.el.style.left = this.opts.left;
            this.el.style.top = this.opts.top;
            this.el.style.transform = "scale(".concat(this.opts.scale, ")");
            if (target) {
                target.insertBefore(this.el, target.firstChild || null);
            }
            drawLines(this.el, this.opts);
            return this;
        };
        /**
         * Stops and removes the Spinner.
         * Stopped spinners may be reused by calling spin() again.
         */
        Spinner.prototype.stop = function () {
            if (this.el) {
                if (this.el.parentNode) {
                    this.el.parentNode.removeChild(this.el);
                }
                this.el = undefined;
            }
            return this;
        };
        return Spinner;
    }());
    /**
     * Returns the line color from the given string or array.
     */
    function getColor(color, idx) {
        return typeof color == 'string' ? color : color[idx % color.length];
    }
    /**
     * Internal method that draws the individual lines.
     */
    function drawLines(el, opts) {
        var borderRadius = (Math.round(opts.corners * opts.width * 500) / 1000) + 'px';
        var shadow = 'none';
        if (opts.shadow === true) {
            shadow = '0 2px 4px #000'; // default shadow
        }
        else if (typeof opts.shadow === 'string') {
            shadow = opts.shadow;
        }
        var shadows = parseBoxShadow(shadow);
        for (var i = 0; i < opts.lines; i++) {
            var degrees = ~~(360 / opts.lines * i + opts.rotate);
            var backgroundLine = document.createElement('div');
            backgroundLine.style.position = 'absolute';
            backgroundLine.style.top = "".concat(-opts.width / 2, "px");
            backgroundLine.style.width = (opts.length + opts.width) + 'px';
            backgroundLine.style.height = opts.width + 'px';
            backgroundLine.style.background = getColor(opts.fadeColor, i);
            backgroundLine.style.borderRadius = borderRadius;
            backgroundLine.style.transformOrigin = 'left';
            backgroundLine.style.transform = "rotate(".concat(degrees, "deg) translateX(").concat(opts.radius, "px)");
            var delay = i * opts.direction / opts.lines / opts.speed;
            delay -= 1 / opts.speed; // so initial animation state will include trail
            var line = document.createElement('div');
            line.style.width = '100%';
            line.style.height = '100%';
            line.style.background = getColor(opts.color, i);
            line.style.borderRadius = borderRadius;
            line.style.boxShadow = normalizeShadow(shadows, degrees);
            line.style.animation = "".concat(1 / opts.speed, "s linear ").concat(delay, "s infinite ").concat(opts.animation);
            backgroundLine.appendChild(line);
            el.appendChild(backgroundLine);
        }
    }
    function parseBoxShadow(boxShadow) {
        var regex = /^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/;
        var shadows = [];
        for (var _i = 0, _a = boxShadow.split(','); _i < _a.length; _i++) {
            var shadow = _a[_i];
            var matches = shadow.match(regex);
            if (matches === null) {
                continue; // invalid syntax
            }
            var x = +matches[2];
            var y = +matches[5];
            var xUnits = matches[4];
            var yUnits = matches[7];
            if (x === 0 && !xUnits) {
                xUnits = yUnits;
            }
            if (y === 0 && !yUnits) {
                yUnits = xUnits;
            }
            if (xUnits !== yUnits) {
                continue; // units must match to use as coordinates
            }
            shadows.push({
                prefix: matches[1] || '', // could have value of 'inset' or undefined
                x: x,
                y: y,
                xUnits: xUnits,
                yUnits: yUnits,
                end: matches[8],
            });
        }
        return shadows;
    }
    /**
     * Modify box-shadow x/y offsets to counteract rotation
     */
    function normalizeShadow(shadows, degrees) {
        var normalized = [];
        for (var _i = 0, shadows_1 = shadows; _i < shadows_1.length; _i++) {
            var shadow = shadows_1[_i];
            var xy = convertOffset(shadow.x, shadow.y, degrees);
            normalized.push(shadow.prefix + xy[0] + shadow.xUnits + ' ' + xy[1] + shadow.yUnits + shadow.end);
        }
        return normalized.join(', ');
    }
    function convertOffset(x, y, degrees) {
        var radians = degrees * Math.PI / 180;
        var sin = Math.sin(radians);
        var cos = Math.cos(radians);
        return [
            Math.round((x * cos + y * sin) * 1000) / 1000,
            Math.round((-x * sin + y * cos) * 1000) / 1000,
        ];
    }

    exports.Spinner = Spinner;
}));

jaxon.dbadmin = {};

(function(self) {
    /**
     * @param {string} checkboxClass
     * @param {string} checkboxId
     *
     * @returns {void}
     */
    const countTableCheckboxes = (checkboxClass, checkboxId) => $(`#${checkboxId}-count`)
        .html($(`.${checkboxClass}` + ':checked').length);

    /**
     * @param {string} checkboxClass
     * @param {string} checkboxId
     * @param {string} wrapperId
     *
     * @returns {void}
     */
    self.selectTableCheckboxes = (checkboxClass, checkboxId, wrapperId) => {
        $(`#${checkboxId}-all`).change(function() {
            $(`.${checkboxClass}`, `#${wrapperId}`).prop('checked', this.checked);
            countTableCheckboxes(checkboxClass, checkboxId);
        });
        $(`.${checkboxClass}`, `#${wrapperId}`).change(function() {
            countTableCheckboxes(checkboxClass, checkboxId);
        });
    };

    /**
     * @param {string} itemNameClass
     * @param {string} itemNameId
     * @param {string} itemDataClass
     * @param {string} itemDataId
     * @param {string} wrapperId
     *
     * @returns {void}
     */
    self.setExportEventHandlers = (itemNameClass, itemNameId, itemDataClass, itemDataId, wrapperId) => {
        $(`#${itemNameId}-all`).change(function() {
            $(`.${itemNameClass}`, `#${wrapperId}`).prop('checked', this.checked);
        });
        $(`#${itemDataId}-all`).change(function() {
            $(`.${itemDataClass}`, `#${wrapperId}`).prop('checked', this.checked);
        });
        // Check or uncheck the data checkbox when the name is changed.
        $(`.${itemNameClass}`, `#${wrapperId}`).change(function() {
            const itemDataPos = $(this).attr('data-pos');
            $(`#${itemDataId}-${itemDataPos}`, `#${wrapperId}`).prop('checked', this.checked);
        });
    };

    /**
     * @param {string} wrapperId
     *
     * @returns {void}
     */
    self.setFileUpload = (wrapperId) => {
        $(`#${wrapperId}`).on('change', ':file', function() {
            const fileInput = $(this);
            const numFiles = fileInput.get(0).files ? fileInput.get(0).files.length : 1;
            const label = fileInput.val().replace(/\\/g, '/').replace(/.*\//, '');
            const textInput = $(`#${wrapperId}`).find(':text');
            const text = numFiles > 1 ? numFiles + ' files selected' : label;
            if (textInput.length > 0) {
                textInput.val(text);
            }
        });
    };

    /**
     * @param {string} url
     * @param {string} filename
     *
     * @returns {void}
     */
    self.downloadFile = (url, filename) => {
        const downloadLink = document.createElement("a");
        downloadLink.href = url;
        downloadLink.download = filename;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    /**
     * Convert an HTML text to a DOM node. Only the first child is returned.
     *
     * @param {string} htmlText
     *
     * @returns {string}
     */
    const makeHtmlNode = (htmlText) => {
        const node = document.createElement('div');
        node.innerHTML = htmlText;
        // Parse the custom Jaxon attributes in the node.
        // Todo: automate this with the Jaxon library.
        if (node.firstChild !== null) {
            jaxon.parser.attr.process(node.firstChild);
        }
        return node.firstChild;
    };

    /**
     * @param {string} tabId
     *
     * @returns {void}
     */
    self.setCurrentTab = (tabId) => {
        // Todo: merge this value into the "dbadmin" databag?
        jaxon.ajax.parameters.setBag('dbadmin.tab', { current: tabId });
    };

    /**
     * @param {string} titleId 
     *
     * @returns {void}
     */
    const activateTab = (titleId) => document.getElementById(titleId)?.click(new Event('click'));

    /**
     * @param {string} tabNavHtml
     * @param {string} tabContentHtml
     * @param {string} titleId 
     *
     * @returns {void}
     */
    self.addTab = (tabNavHtml, tabContentHtml, titleId) => {
        const tabNav = document.getElementById('dbadmin-server-tab-nav');
        tabNav.appendChild(makeHtmlNode(tabNavHtml));
        const tabContent = document.getElementById('dbadmin-server-tab-content');
        tabContent.appendChild(makeHtmlNode(tabContentHtml));
        // Activate the new tab.
        activateTab(titleId);
    };

    /**
     * @param {string} titleId 
     * @param {string} wrapperId 
     * @param {string} activeTab 
     *
     * @returns {void}
     */
    self.deleteTab = (titleId, wrapperId, activeTab) => {
        // The title is the child of a parent element.
        document.getElementById(titleId)?.parentElement?.remove();
        document.getElementById(wrapperId)?.remove();
        // Activate another tab, so the screen is not left blank.
        activateTab(activeTab);
    };
})(jaxon.dbadmin);

jaxon.dom.ready(() => {
    const spin = {
        spinner: new Spin.Spinner({ position: 'fixed' }),
        count: 0, // To make sure that the spinner is started once.
        cursor: jaxon.config.cursor.update,
    };

    // Replace the default Jaxon defined cursor with our custom spinner.
    jaxon.config.cursor.update = {
        onRequest: function() {
            if(spin.count++ === 0)
            {
                spin.spinner.spin(document.body);
                spin.cursor.onRequest();
            }
        },
        onComplete: function() {
            if(--spin.count === 0)
            {
                spin.spinner.stop();
                spin.cursor.onComplete();
            }
        },
        onFailure: function() {
            if(--spin.count === 0)
            {
                spin.spinner.stop();
                spin.cursor.onFailure && spin.cursor.onFailure();
            }
        },
    };
});

(function(self) {
    const editor = {
        ace: null,
        page: '',
        fontSize: '13px',
        modes: {
            sql: 'ace/mode/sql',
            mysql: 'ace/mode/mysql',
            pgsql: 'ace/mode/pgsql',
        },
        theme: 'ace/theme/textmate',
    };

    /**
     * @param {string} containerId
     * @param {string} driver
     *
     * @returns {void}
     */
    self.createSqlQueryEditor = function(containerId, driver) {
        editor.ace = ace.edit(containerId, {
            mode: editor.modes[driver] ?? editor.modes.sql,
            selectionStyle: "text",
            dragEnabled: false,
            useWorker: false,
            enableBasicAutocompletion: true,
            enableSnippets: false,
            enableLiveAutocompletion: true,
            showPrintMargin: false,
        });
        editor.ace.setTheme(editor.theme);
        editor.ace.session.setUseWrapMode(true);
        document.getElementById(containerId).style.fontSize = editor.fontSize;
    };

    /**
     * @param {string} containerId
     * @param {string} driver
     *
     * @returns {void}
     */
    self.createSqlSelectEditor = (containerId, driver) => {
        editor.ace = ace.edit(containerId, {
            mode: editor.modes[driver] ?? editor.modes.sql,
            selectionStyle: "text",
            dragEnabled: false,
            useWorker: false,
            showPrintMargin: false,
            showLineNumbers: false,
            showGutter: false, // Also hide the line number "column".
            readOnly: true,
        });
        editor.ace.setTheme(editor.theme);
        editor.ace.session.setUseWrapMode(true);
        editor.ace.resize();
        document.getElementById(containerId).style.fontSize = editor.fontSize;
    };

    /**
     * @returns {string}
     */
    self.getSqlQuery = () => {
        // Try to get the selected text first.
        const selectedText = editor.ace.getSelectedText();
        return selectedText ? selectedText : editor.ace.getValue();
    };

    /**
     * Set the SQL query value and reset the undo history.
     *
     * @param {string} query
     *
     * @returns {void}
     */
    self.setSqlQuery = (query) => editor.ace.session.setValue(query);

    /**
     * When the editor content is changed when it is in a hidden tab, the visible content
     * is not updated when the tab becomes visible. We need to force the refresh.
     *
     * @returns {void}
     */
    self.refreshContent = () => editor.ace.session.setValue(self.getSqlQuery());

    /**
     * Read the data-query-id attribute in the parent with the given tag name
     *
     * @param {Element} node
     * @param {string} tag
     *
     * @returns {string}
     */
    const getQueryId = (node, tag) => {
        while ((parent = node?.parent())) {
            if (parent.prop('tagName')?.toLowerCase() === tag) {
                return parent.attr('data-query-id') ?? '';
            }
            node = parent;
        }
        return '';
    };

    /**
     * @param {Element} node
     * @param {string} prefix
     *
     * @returns {string}
     */
    const getHistoryQuery = (node, prefix) => $(`#${prefix}` + getQueryId(node, 'td')).text();

    /**
     * @param {Element} node
     * @param {string} prefix
     *
     * @returns {string}
     */
    const getFavoriteQuery = (node, prefix) => $(`#${prefix}` + getQueryId(node, 'td')).text();

    self.history =  {
        /**
         * @param {Element} node
         * @param {string} prefix
         *
         * @returns {void}
         */
        copySqlQuery: (node, prefix) => self.setSqlQuery(getHistoryQuery(node, prefix)),

        /**
         * @param {Element} node
         * @param {string} prefix
         *
         * @returns {void}
         */
        insertSqlQuery: (node, prefix) => editor.ace.insert(getHistoryQuery(node, prefix)),
    };

    self.favorite = {
        /**
         * @param {Element} node
         *
         * @returns {string}
         */
        getQueryId: (node) => getQueryId(node, 'td'),

        /**
         * @param {Element} node
         * @param {string} prefix
         *
         * @returns {string}
         */
        getSqlQuery: (node, prefix) => getFavoriteQuery(node, prefix),

        /**
         * @param {Element} node
         * @param {string} prefix
         *
         * @returns {void}
         */
        copySqlQuery: (node, prefix) => self.setSqlQuery(getFavoriteQuery(node, prefix)),

        /**
         * @param {Element} node
         * @param {string} prefix
         *
         * @returns {void}
         */
        insertSqlQuery: (node, prefix) => editor.ace.insert(getFavoriteQuery(node, prefix)),
    };
})(jaxon.dbadmin);

/**
 * Bootbox dialogs plugin
 * Class: jaxon.dialog.libs.bootbox
 */

jaxon.dom.ready(() => jaxon.dialog.register('bootbox', (self, options, utils) => {
    // Dialogs options
    const {
        labels,
        modal: modalOptions = {},
        alert: alertOptions = {},
        confirm: confirmOptions = {},
    } = options;

    /**
     * @var {object}
     */
    const dialog = {
        dom: null,
    };

    /**
     * Show the modal dialog
     *
     * @param {object} dialog The dialog parameters
     * @param {string} dialog.title The dialog title
     * @param {string} dialog.content The dialog HTML content
     * @param {array} dialog.buttons The dialog buttons
     * @param {array} dialog.options The dialog options
     * @param {function} cbDomElement A callback to call with the DOM element of the dialog content
     *
     * @returns {object}
     */
    self.show = ({ title, content, buttons, options }, cbDomElement) => {
        let btnIndex = 1;
        const oButtons = {};
        buttons.forEach(({ title: label, class: className, click }) => {
            if (!utils.isObject(click)) {
                oButtons.cancel = {label, className: 'btn-danger' };
                return;
            }
            oButtons[`btn${btnIndex++}`] = {
                label,
                className,
                callback: () => {
                    utils.js(click);
                    return false; // Do not close the dialog.
                },
            };
        });
        dialog.dom = bootbox.dialog({
            ...modalOptions,
            ...options,
            title,
            message: content !== '' ? content : '&nbsp;',
            buttons: oButtons,
        });
        // Pass the js content element to the callback.
        cbDomElement(dialog.dom.get(0));
    };

    /**
     * Hide the modal dialog
     *
     * @returns {void}
     */
    self.hide = () => {
        if ((dialog.dom)) {
            dialog.dom.modal('hide');
            dialog.dom = null;
        }
    };

    const xTypes = {
        success: 'success',
        info: 'info',
        warning: 'warning',
        error: 'danger',
    };

    /**
     * Show an alert message
     *
     * @param {object} alert The alert parameters
     * @param {string} alert.type The alert type
     * @param {string} alert.message The alert message
     * @param {string} alert.title The alert title
     *
     * @returns {void}
     */
    self.alert = ({ type, message, title }) => {
        message = '<div class="alert alert-' + (xTypes[type] ?? xTypes.info) +
            '" style="margin-top:15px;margin-bottom:-15px;">' +
            (!message ? '' : '<strong>' + title + '</strong><br/>') + message + '</div>';
        bootbox.alert({ ...alertOptions, message });
    };

    /**
     * Ask a confirm question to the user.
     *
     * @param {object} confirm The confirm parameters
     * @param {string} confirm.question The question to ask
     * @param {string} confirm.title The question title
     * @param {object} callback The confirm callbacks
     * @param {callback} callback.yes The function to call if the answer is yes
     * @param {callback=} callback.no The function to call if the answer is no
     *
     * @returns {void}
     */
    self.confirm = ({ question, title }, { yes: yesCb, no: noCb = () => {} }) => bootbox.confirm({
        ...confirmOptions,
        title: title,
        message: question,
        buttons: {
            cancel: {label: labels.no},
            confirm: {label: labels.yes}
        },
        callback: (res) => {
            res ? yesCb() : noCb();
        },
    });
}));

/**
 * Class: jaxon.dialog.libs.sweetalert
 */

jaxon.dom.ready(() => jaxon.dialog.register('sweetalert', (self, options) => {
    // Dialogs options
    const {
        labels,
        alert: alertOptions = {},
        confirm: confirmOptions = {},
    } = options;

    const xTypes = {
        success: 'success',
        info: 'info',
        warning: 'warning',
        error: 'error',
    };

    /**
     * Show an alert message
     *
     * @param {object} alert The alert parameters
     * @param {string} alert.type The alert type
     * @param {string} alert.message The alert message
     * @param {string} alert.title The alert title
     *
     * @returns {void}
     */
    self.alert = ({ type, message, title }) => Swal.fire({
        ...alertOptions,
        text: message,
        title: title ?? '',
        icon: xTypes[type] ?? xTypes.info,
    });

    /**
     * Ask a confirm question to the user.
     *
     * @param {object} confirm The confirm parameters
     * @param {string} confirm.question The question to ask
     * @param {string} confirm.title The question title
     * @param {object} callback The confirm callbacks
     * @param {callback} callback.yes The function to call if the answer is yes
     * @param {callback=} callback.no The function to call if the answer is no
     *
     * @returns {void}
     */
    self.confirm = ({ question, title }, { yes: yesCb, no: noCb = () => {} }) => Swal.fire({
        ...confirmOptions,
        icon: "question",
        title,
        text: question,
        showCancelButton: true,
        confirmButtonText: labels.yes,
        cancelButtonText: labels.no,
        reverseButtons: true,
    }).then((result) => {
        result.isConfirmed ? yesCb() : noCb();
    });
}));