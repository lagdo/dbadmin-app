jaxon.config.requestURI = "/jaxon";
jaxon.config.statusMessages = false;
jaxon.config.waitCursor = true;
jaxon.config.version = "Jaxon 5.x";
jaxon.config.defaultMode = "asynchronous";
jaxon.config.defaultMethod = "POST";
jaxon.config.responseType = "JSON";



jaxon.setCsrf('csrf-token');

Lagdo = {
  DbAdmin: {
    Ajax: {
      App: {
        Admin: {
          server: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Admin', method: 'server' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
          render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Admin', method: 'render' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
          clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Admin', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
          visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Admin', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
        },
        Db: {
          Command: {
            Query: {
              Favorite: {
                render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Command.Query.Favorite', method: 'render' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
                clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Command.Query.Favorite', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
                visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Command.Query.Favorite', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              },
              FavoriteFunc: {
                add: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Command.Query.FavoriteFunc', method: 'add' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
                create: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Command.Query.FavoriteFunc', method: 'create' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
                edit: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Command.Query.FavoriteFunc', method: 'edit' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
                update: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Command.Query.FavoriteFunc', method: 'update' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
                delete: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Command.Query.FavoriteFunc', method: 'delete' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              },
              FavoritePage: {
                page: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Command.Query.FavoritePage', method: 'page' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
                render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Command.Query.FavoritePage', method: 'render' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
                clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Command.Query.FavoritePage', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
                visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Command.Query.FavoritePage', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              },
              Queries: {
                render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Command.Query.Queries', method: 'render' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
                clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Command.Query.Queries', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
                visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Command.Query.Queries', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              },
            },
          },
          Database: {
            Database: {
              select: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Database', method: 'select' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              add: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Database', method: 'add' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              create: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Database', method: 'create' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              drop: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Database', method: 'drop' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
            },
            Events: {
              show: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Events', method: 'show' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Events', method: 'render' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Events', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Events', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
            },
            Export: {
              database: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Export', method: 'database' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Export', method: 'render' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Export', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Export', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              exportSet: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Export', method: 'exportSet' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              exportOne: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Export', method: 'exportOne' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
            },
            Import: {
              database: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Import', method: 'database' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Import', method: 'render' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Import', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Import', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              executeWebFile: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Import', method: 'executeWebFile' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              executeSqlFiles: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Import', method: 'executeSqlFiles' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner], upload: 'dbadmin-import-sql-files-input' }); },
            },
            Query: {
              database: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Query', method: 'database' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Query', method: 'render' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Query', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Query', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              exec: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Query', method: 'exec' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
            },
            Routines: {
              show: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Routines', method: 'show' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Routines', method: 'render' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Routines', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Routines', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
            },
            Sequences: {
              show: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Sequences', method: 'show' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Sequences', method: 'render' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Sequences', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Sequences', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
            },
            Tables: {
              show: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Tables', method: 'show' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Tables', method: 'render' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Tables', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Tables', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
            },
            UserTypes: {
              show: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.UserTypes', method: 'show' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.UserTypes', method: 'render' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.UserTypes', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.UserTypes', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
            },
            Views: {
              show: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Views', method: 'show' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Views', method: 'render' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Views', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Views', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
            },
          },
          FuncComponent: {

          },
          Server: {
            Databases: {
              show: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Databases', method: 'show' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Databases', method: 'render' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Databases', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Databases', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
            },
            Export: {
              server: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Export', method: 'server' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Export', method: 'render' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Export', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Export', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              exportSet: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Export', method: 'exportSet' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              exportOne: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Export', method: 'exportOne' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
            },
            Import: {
              server: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Import', method: 'server' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Import', method: 'render' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Import', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Import', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              executeWebFile: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Import', method: 'executeWebFile' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              executeSqlFiles: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Import', method: 'executeSqlFiles' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner], upload: 'dbadmin-import-sql-files-input' }); },
            },
            Privilege: {
              add: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Privilege', method: 'add' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              create: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Privilege', method: 'create' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              edit: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Privilege', method: 'edit' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              update: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Privilege', method: 'update' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
            },
            Privileges: {
              show: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Privileges', method: 'show' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Privileges', method: 'render' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Privileges', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Privileges', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
            },
            Processes: {
              show: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Processes', method: 'show' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Processes', method: 'render' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Processes', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Processes', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
            },
            Query: {
              server: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Query', method: 'server' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Query', method: 'render' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Query', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Query', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              exec: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Query', method: 'exec' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
            },
            Server: {

            },
            Status: {
              show: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Status', method: 'show' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Status', method: 'render' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Status', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Status', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
            },
            Variables: {
              show: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Variables', method: 'show' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Variables', method: 'render' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Variables', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Variables', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
            },
          },
          Table: {
            Ddl: {
              Alter: {
                save: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Alter', method: 'save' }, { parameters: arguments, bags: ["dbadmin","dbadmin.table"], callback: [jaxon.dbadmin.callback.spinner] }); },
                drop: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Alter', method: 'drop' }, { parameters: arguments, bags: ["dbadmin","dbadmin.table"], callback: [jaxon.dbadmin.callback.spinner] }); },
                render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Alter', method: 'render' }, { parameters: arguments, bags: ["dbadmin","dbadmin.table"], callback: [jaxon.dbadmin.callback.spinner] }); },
                clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Alter', method: 'clear' }, { parameters: arguments, bags: ["dbadmin","dbadmin.table"], callback: [jaxon.dbadmin.callback.spinner] }); },
                visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Alter', method: 'visible' }, { parameters: arguments, bags: ["dbadmin","dbadmin.table"], callback: [jaxon.dbadmin.callback.spinner] }); },
              },
              Columns: {
                add: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Columns', method: 'add' }, { parameters: arguments, bags: ["dbadmin","dbadmin.table"], callback: [jaxon.dbadmin.callback.spinner] }); },
                del: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Columns', method: 'del' }, { parameters: arguments, bags: ["dbadmin","dbadmin.table"], callback: [jaxon.dbadmin.callback.spinner] }); },
                cancel: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Columns', method: 'cancel' }, { parameters: arguments, bags: ["dbadmin","dbadmin.table"], callback: [jaxon.dbadmin.callback.spinner] }); },
                render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Columns', method: 'render' }, { parameters: arguments, bags: ["dbadmin","dbadmin.table"], callback: [jaxon.dbadmin.callback.spinner] }); },
                clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Columns', method: 'clear' }, { parameters: arguments, bags: ["dbadmin","dbadmin.table"], callback: [jaxon.dbadmin.callback.spinner] }); },
                visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Columns', method: 'visible' }, { parameters: arguments, bags: ["dbadmin","dbadmin.table"], callback: [jaxon.dbadmin.callback.spinner] }); },
              },
              Create: {
                show: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Create', method: 'show' }, { parameters: arguments, bags: ["dbadmin","dbadmin.table"], callback: [jaxon.dbadmin.callback.spinner] }); },
                save: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Create', method: 'save' }, { parameters: arguments, bags: ["dbadmin","dbadmin.table"], callback: [jaxon.dbadmin.callback.spinner] }); },
                render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Create', method: 'render' }, { parameters: arguments, bags: ["dbadmin","dbadmin.table"], callback: [jaxon.dbadmin.callback.spinner] }); },
                clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Create', method: 'clear' }, { parameters: arguments, bags: ["dbadmin","dbadmin.table"], callback: [jaxon.dbadmin.callback.spinner] }); },
                visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Create', method: 'visible' }, { parameters: arguments, bags: ["dbadmin","dbadmin.table"], callback: [jaxon.dbadmin.callback.spinner] }); },
              },
              Table: {
                show: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Table', method: 'show' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
                render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Table', method: 'render' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
                clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Table', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
                visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Table', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              },
            },
            Dml: {
              Delete: {
                exec: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Delete', method: 'exec' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
              },
              Insert: {
                show: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Insert', method: 'show' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
                exec: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Insert', method: 'exec' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
                render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Insert', method: 'render' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
                clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Insert', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
                visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Insert', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              },
              Update: {
                show: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Update', method: 'show' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
                back: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Update', method: 'back' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                exec: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Update', method: 'exec' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Update', method: 'render' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
                clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Update', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
                visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Update', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              },
            },
            Dql: {
              Options: {
                Fields: {
                  render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields', method: 'render' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                  clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields', method: 'clear' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                  visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields', method: 'visible' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                  Columns: {
                    edit: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Columns', method: 'edit' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                    save: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Columns', method: 'save' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                  },
                  Filters: {
                    edit: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Filters', method: 'edit' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                    save: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Filters', method: 'save' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                  },
                  Form: {
                    Columns: {
                      show: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Columns', method: 'show' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                      add: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Columns', method: 'add' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                      del: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Columns', method: 'del' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                      render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Columns', method: 'render' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                      clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Columns', method: 'clear' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                      visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Columns', method: 'visible' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                    },
                    Filters: {
                      show: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Filters', method: 'show' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                      add: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Filters', method: 'add' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                      del: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Filters', method: 'del' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                      render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Filters', method: 'render' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                      clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Filters', method: 'clear' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                      visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Filters', method: 'visible' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                    },
                    Sorting: {
                      show: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Sorting', method: 'show' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                      add: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Sorting', method: 'add' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                      del: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Sorting', method: 'del' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                      render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Sorting', method: 'render' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                      clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Sorting', method: 'clear' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                      visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Sorting', method: 'visible' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                    },
                  },
                  Sorting: {
                    edit: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Sorting', method: 'edit' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                    save: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Sorting', method: 'save' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                  },
                },
                Values: {
                  saveSelectLimit: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Values', method: 'saveSelectLimit' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                  saveTextLength: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Values', method: 'saveTextLength' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                  render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Values', method: 'render' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                  clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Values', method: 'clear' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                  visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Values', method: 'visible' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                },
              },
              Results: {
                page: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Results', method: 'page' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Results', method: 'render' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Results', method: 'clear' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Results', method: 'visible' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
              },
              Select: {
                show: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Select', method: 'show' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                edit: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Select', method: 'edit' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Select', method: 'render' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Select', method: 'clear' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Select', method: 'visible' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
              },
            },
          },
          View: {
            Ddl: {
              Form: {
                add: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.View.Ddl.Form', method: 'add' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
                edit: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.View.Ddl.Form', method: 'edit' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
                render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.View.Ddl.Form', method: 'render' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
                clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.View.Ddl.Form', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
                visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.View.Ddl.Form', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              },
              View: {
                show: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.View.Ddl.View', method: 'show' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
                create: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.View.Ddl.View', method: 'create' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
                update: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.View.Ddl.View', method: 'update' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
                drop: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.View.Ddl.View', method: 'drop' }, { parameters: arguments, bags: ["dbadmin"], callback: [jaxon.dbadmin.callback.spinner] }); },
              },
            },
            Dql: {
              Select: {
                show: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.View.Dql.Select', method: 'show' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                edit: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.View.Dql.Select', method: 'edit' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.View.Dql.Select', method: 'render' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.View.Dql.Select', method: 'clear' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
                visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.View.Dql.Select', method: 'visible' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"], callback: [jaxon.dbadmin.callback.spinner] }); },
              },
            },
          },
        },
        Menu: {
          Database: {
            Command: {
              render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Menu.Database.Command', method: 'render' }, { parameters: arguments, callback: [jaxon.dbadmin.callback.spinner] }); },
              clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Menu.Database.Command', method: 'clear' }, { parameters: arguments, callback: [jaxon.dbadmin.callback.spinner] }); },
              visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Menu.Database.Command', method: 'visible' }, { parameters: arguments, callback: [jaxon.dbadmin.callback.spinner] }); },
            },
            Schemas: {
              render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Menu.Database.Schemas', method: 'render' }, { parameters: arguments, callback: [jaxon.dbadmin.callback.spinner] }); },
              clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Menu.Database.Schemas', method: 'clear' }, { parameters: arguments, callback: [jaxon.dbadmin.callback.spinner] }); },
              visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Menu.Database.Schemas', method: 'visible' }, { parameters: arguments, callback: [jaxon.dbadmin.callback.spinner] }); },
            },
          },
          Sections: {
            render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Menu.Sections', method: 'render' }, { parameters: arguments, callback: [jaxon.dbadmin.callback.spinner] }); },
            clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Menu.Sections', method: 'clear' }, { parameters: arguments, callback: [jaxon.dbadmin.callback.spinner] }); },
            visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Menu.Sections', method: 'visible' }, { parameters: arguments, callback: [jaxon.dbadmin.callback.spinner] }); },
          },
          Server: {
            Command: {
              render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Menu.Server.Command', method: 'render' }, { parameters: arguments, callback: [jaxon.dbadmin.callback.spinner] }); },
              clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Menu.Server.Command', method: 'clear' }, { parameters: arguments, callback: [jaxon.dbadmin.callback.spinner] }); },
              visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Menu.Server.Command', method: 'visible' }, { parameters: arguments, callback: [jaxon.dbadmin.callback.spinner] }); },
            },
            Databases: {
              render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Menu.Server.Databases', method: 'render' }, { parameters: arguments, callback: [jaxon.dbadmin.callback.spinner] }); },
              clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Menu.Server.Databases', method: 'clear' }, { parameters: arguments, callback: [jaxon.dbadmin.callback.spinner] }); },
              visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Menu.Server.Databases', method: 'visible' }, { parameters: arguments, callback: [jaxon.dbadmin.callback.spinner] }); },
            },
          },
        },
        Page: {
          Content: {
            render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Page.Content', method: 'render' }, { parameters: arguments }); },
            clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Page.Content', method: 'clear' }, { parameters: arguments }); },
            visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Page.Content', method: 'visible' }, { parameters: arguments }); },
          },
          DbConnection: {
            render: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Page.DbConnection', method: 'render' }, { parameters: arguments, callback: [jaxon.dbadmin.callback.spinner] }); },
            clear: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Page.DbConnection', method: 'clear' }, { parameters: arguments, callback: [jaxon.dbadmin.callback.spinner] }); },
            visible: function() { return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Page.DbConnection', method: 'visible' }, { parameters: arguments, callback: [jaxon.dbadmin.callback.spinner] }); },
          },
        },
      },
    },
  },
};

jaxon.dom.ready(() => jaxon.processCustomAttrs());

jaxon.dbadmin = (function() {
    const countTableCheckboxes = (checkboxId) => $('#dbadmin-table-' + checkboxId + '-count')
        .html($('.dbadmin-table-' + checkboxId + ':checked').length);

    const selectTableCheckboxes = (checkboxId) => {
        $('#dbadmin-table-' + checkboxId + '-all').change(function() {
            $('.dbadmin-table-' + checkboxId, '#jaxon-dbadmin').prop('checked', this.checked);
            countTableCheckboxes(checkboxId);
        });
        $('.dbadmin-table-' + checkboxId).change(function() {
            countTableCheckboxes(checkboxId);
        });
    };

    const selectAllCheckboxes = (checkboxId) => $('#' + checkboxId + '-all').change(function() {
        $('.' + checkboxId, '#jaxon-dbadmin').prop('checked', this.checked);
    });

    const setFileUpload = (container, buttonId, fileInputId) => {
        // Trigger a click on the hidden file select component when the user clicks on the button.
        $(buttonId).click(() => $(fileInputId).trigger("click"));
        $(container).on('change', ':file', function() {
            const fileInput = $(this);
            const numFiles = fileInput.get(0).files ? fileInput.get(0).files.length : 1;
            const label = fileInput.val().replace(/\\/g, '/').replace(/.*\//, '');
            const textInput = $(container).find(':text');
            const text = numFiles > 1 ? numFiles + ' files selected' : label;
            textInput.length > 0 && textInput.val(text);
        });
    };

    const editor = {
        ace: null,
        page: '',
        fontSize: '13px',
        modes: {
            sql: 'ace/mode/sql',
            mysql: 'ace/mode/mysql',
            pgsql: 'ace/mode/pgsql',
        },
    };

    const createSqlQueryEditor = function(containerId, driver) {
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
        editor.ace.setTheme("ace/theme/textmate");
        editor.ace.session.setUseWrapMode(true);
        document.getElementById(containerId).style.fontSize = editor.fontSize;
    };

    const createSqlSelectEditor = (containerId, driver) => {
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
        editor.ace.setTheme("ace/theme/textmate");
        editor.ace.session.setUseWrapMode(true);
        editor.ace.resize();
        document.getElementById(containerId).style.fontSize = editor.fontSize;
    };

    const getSqlQuery = () => {
        // Try to get the selected text first.
        const selectedText = editor.ace.getSelectedText();
        return selectedText ? selectedText : editor.ace.getValue();
    };

    // Set the SQL query value and reset the undo history.
    const setSqlQuery = (query) => editor.ace.session.setValue(query);

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

    const getHistoryQuery = (node) =>
        $('#dbadmin-history-query-' + getQueryId(node, 'td')).text();

    const getFavoriteQuery = (node) =>
        $('#dbadmin-favorite-query-' + getQueryId(node, 'td')).text();

    return {
        countTableCheckboxes,
        selectTableCheckboxes,
        selectAllCheckboxes,
        setFileUpload,
        createSqlQueryEditor,
        createSqlSelectEditor,
        getSqlQuery,
        setSqlQuery,
        history: {
            copySqlQuery: (node) => setSqlQuery(getHistoryQuery(node)),
            insertSqlQuery: (node) => editor.ace.insert(getHistoryQuery(node)),
        },
        favorite: {
            getQueryId: (node) => getQueryId(node, 'td'),
            copySqlQuery: (node) => setSqlQuery(getFavoriteQuery(node)),
            insertSqlQuery: (node) => editor.ace.insert(getFavoriteQuery(node)),
        },
    };
})();

jaxon.dom.ready(() => {
    const spin = {
        spinner: new Spin.Spinner({ position: 'fixed' }),
        count: 0, // To make sure that the spinner is started once.
    };

    const spinnerCallback = {
        onRequest: function() {
            if(spin.count++ === 0)
            {
                spin.spinner.spin(document.body);
            }
        },
        onComplete: function() {
            if(--spin.count === 0)
            {
                spin.spinner.stop();
            }
        },
        onFailure: function() {
            if(--spin.count === 0)
            {
                spin.spinner.stop();
            }
        },
    };

    jaxon.dbadmin.callback = {
        spinner: spinnerCallback,
    };
});

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