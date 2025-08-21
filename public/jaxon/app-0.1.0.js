jaxon.config.requestURI = "/jaxon";
jaxon.config.statusMessages = false;
jaxon.config.waitCursor = true;
jaxon.config.version = "Jaxon 5.x";
jaxon.config.defaultMode = "asynchronous";
jaxon.config.defaultMethod = "POST";
jaxon.config.responseType = "JSON";



jaxon.setCsrf('csrf-token');

Lagdo = {};
Lagdo.DbAdmin = {};
Lagdo.DbAdmin.Ajax = {};
Lagdo.DbAdmin.Ajax.App = {};
Lagdo.DbAdmin.Ajax.App.Db = {};
Lagdo.DbAdmin.Ajax.App.Db.Command = {};
Lagdo.DbAdmin.Ajax.App.Db.Database = {};
Lagdo.DbAdmin.Ajax.App.Db.Server = {};
Lagdo.DbAdmin.Ajax.App.Db.Table = {};
Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl = {};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dml = {};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql = {};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options = {};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields = {};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form = {};
Lagdo.DbAdmin.Ajax.App.Db.View = {};
Lagdo.DbAdmin.Ajax.App.Menu = {};
Lagdo.DbAdmin.Ajax.App.Menu.Database = {};
Lagdo.DbAdmin.Ajax.App.Menu.Server = {};
Lagdo.DbAdmin.Ajax.App.Page = {};
if(Lagdo.DbAdmin.Ajax.App.Admin === undefined) {
    Lagdo.DbAdmin.Ajax.App.Admin = {};
}
Lagdo.DbAdmin.Ajax.App.Admin.server = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Admin', method: 'server' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Admin.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Admin', method: 'render' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Admin.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Admin', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Admin.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Admin', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"] });
};
if(Lagdo.DbAdmin.Ajax.App.Db.View.View === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.View.View = {};
}
Lagdo.DbAdmin.Ajax.App.Db.View.View.show = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.View.View', method: 'show' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.View.View.add = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.View.View', method: 'add' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.View.View.create = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.View.View', method: 'create' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.View.View.edit = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.View.View', method: 'edit' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.View.View.update = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.View.View', method: 'update' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.View.View.drop = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.View.View', method: 'drop' }, { parameters: arguments, bags: ["dbadmin"] });
};
if(Lagdo.DbAdmin.Ajax.App.Page.Content === undefined) {
    Lagdo.DbAdmin.Ajax.App.Page.Content = {};
}
Lagdo.DbAdmin.Ajax.App.Page.Content.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Page.Content', method: 'render' }, { parameters: arguments });
};
Lagdo.DbAdmin.Ajax.App.Page.Content.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Page.Content', method: 'clear' }, { parameters: arguments });
};
Lagdo.DbAdmin.Ajax.App.Page.Content.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Page.Content', method: 'visible' }, { parameters: arguments });
};
if(Lagdo.DbAdmin.Ajax.App.Menu.Sections === undefined) {
    Lagdo.DbAdmin.Ajax.App.Menu.Sections = {};
}
Lagdo.DbAdmin.Ajax.App.Menu.Sections.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Menu.Sections', method: 'render' }, { parameters: arguments });
};
Lagdo.DbAdmin.Ajax.App.Menu.Sections.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Menu.Sections', method: 'clear' }, { parameters: arguments });
};
Lagdo.DbAdmin.Ajax.App.Menu.Sections.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Menu.Sections', method: 'visible' }, { parameters: arguments });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Server.Query === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Server.Query = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Server.Query.server = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Query', method: 'server' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Server.Query.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Query', method: 'render' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Server.Query.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Query', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Server.Query.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Query', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Server.Query.exec = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Query', method: 'exec' }, { parameters: arguments, bags: ["dbadmin"] });
};
if(Lagdo.DbAdmin.Ajax.App.Db.FuncComponent === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.FuncComponent = {};
}
if(Lagdo.DbAdmin.Ajax.App.Db.Server.Export === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Server.Export = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Server.Export.server = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Export', method: 'server' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Server.Export.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Export', method: 'render' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Server.Export.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Export', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Server.Export.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Export', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Server.Export.exportSet = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Export', method: 'exportSet' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Server.Export.exportOne = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Export', method: 'exportOne' }, { parameters: arguments, bags: ["dbadmin"] });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Server.Import === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Server.Import = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Server.Import.server = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Import', method: 'server' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Server.Import.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Import', method: 'render' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Server.Import.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Import', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Server.Import.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Import', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Server.Import.executeWebFile = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Import', method: 'executeWebFile' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Server.Import.executeSqlFiles = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Import', method: 'executeSqlFiles' }, { parameters: arguments, bags: ["dbadmin"], upload: 'dbadmin-import-sql-files-input' });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Server.Server === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Server.Server = {};
}
if(Lagdo.DbAdmin.Ajax.App.Db.Server.Status === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Server.Status = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Server.Status.show = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Status', method: 'show' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Server.Status.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Status', method: 'render' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Server.Status.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Status', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Server.Status.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Status', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"] });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Database.Query === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Database.Query = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Database.Query.database = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Query', method: 'database' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.Query.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Query', method: 'render' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.Query.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Query', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.Query.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Query', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.Query.exec = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Query', method: 'exec' }, { parameters: arguments, bags: ["dbadmin"] });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Database.Views === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Database.Views = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Database.Views.show = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Views', method: 'show' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.Views.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Views', method: 'render' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.Views.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Views', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.Views.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Views', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"] });
};
if(Lagdo.DbAdmin.Ajax.App.Page.DbConnection === undefined) {
    Lagdo.DbAdmin.Ajax.App.Page.DbConnection = {};
}
Lagdo.DbAdmin.Ajax.App.Page.DbConnection.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Page.DbConnection', method: 'render' }, { parameters: arguments });
};
Lagdo.DbAdmin.Ajax.App.Page.DbConnection.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Page.DbConnection', method: 'clear' }, { parameters: arguments });
};
Lagdo.DbAdmin.Ajax.App.Page.DbConnection.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Page.DbConnection', method: 'visible' }, { parameters: arguments });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Database.Events === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Database.Events = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Database.Events.show = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Events', method: 'show' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.Events.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Events', method: 'render' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.Events.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Events', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.Events.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Events', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"] });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Database.Export === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Database.Export = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Database.Export.database = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Export', method: 'database' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.Export.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Export', method: 'render' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.Export.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Export', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.Export.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Export', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.Export.exportSet = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Export', method: 'exportSet' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.Export.exportOne = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Export', method: 'exportOne' }, { parameters: arguments, bags: ["dbadmin"] });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Database.Import === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Database.Import = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Database.Import.database = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Import', method: 'database' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.Import.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Import', method: 'render' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.Import.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Import', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.Import.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Import', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.Import.executeWebFile = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Import', method: 'executeWebFile' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.Import.executeSqlFiles = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Import', method: 'executeSqlFiles' }, { parameters: arguments, bags: ["dbadmin"], upload: 'dbadmin-import-sql-files-input' });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Database.Tables === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Database.Tables = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Database.Tables.show = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Tables', method: 'show' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.Tables.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Tables', method: 'render' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.Tables.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Tables', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.Tables.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Tables', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"] });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Alter === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Alter = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Alter.save = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Alter', method: 'save' }, { parameters: arguments, bags: ["dbadmin","dbadmin.table"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Alter.drop = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Alter', method: 'drop' }, { parameters: arguments, bags: ["dbadmin","dbadmin.table"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Alter.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Alter', method: 'render' }, { parameters: arguments, bags: ["dbadmin","dbadmin.table"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Alter.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Alter', method: 'clear' }, { parameters: arguments, bags: ["dbadmin","dbadmin.table"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Alter.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Alter', method: 'visible' }, { parameters: arguments, bags: ["dbadmin","dbadmin.table"] });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Table === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Table = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Table.show = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Table', method: 'show' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Table.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Table', method: 'render' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Table.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Table', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Table.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Table', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"] });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Server.Databases === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Server.Databases = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Server.Databases.show = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Databases', method: 'show' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Server.Databases.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Databases', method: 'render' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Server.Databases.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Databases', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Server.Databases.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Databases', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"] });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Server.Privilege === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Server.Privilege = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Server.Privilege.add = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Privilege', method: 'add' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Server.Privilege.create = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Privilege', method: 'create' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Server.Privilege.edit = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Privilege', method: 'edit' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Server.Privilege.update = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Privilege', method: 'update' }, { parameters: arguments, bags: ["dbadmin"] });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Server.Processes === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Server.Processes = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Server.Processes.show = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Processes', method: 'show' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Server.Processes.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Processes', method: 'render' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Server.Processes.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Processes', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Server.Processes.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Processes', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"] });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Server.Variables === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Server.Variables = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Server.Variables.show = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Variables', method: 'show' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Server.Variables.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Variables', method: 'render' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Server.Variables.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Variables', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Server.Variables.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Variables', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"] });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Create === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Create = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Create.show = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Create', method: 'show' }, { parameters: arguments, bags: ["dbadmin","dbadmin.table"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Create.save = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Create', method: 'save' }, { parameters: arguments, bags: ["dbadmin","dbadmin.table"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Create.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Create', method: 'render' }, { parameters: arguments, bags: ["dbadmin","dbadmin.table"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Create.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Create', method: 'clear' }, { parameters: arguments, bags: ["dbadmin","dbadmin.table"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Create.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Create', method: 'visible' }, { parameters: arguments, bags: ["dbadmin","dbadmin.table"] });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Delete === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Delete = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Delete.exec = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Delete', method: 'exec' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Insert === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Insert = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Insert.show = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Insert', method: 'show' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Insert.exec = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Insert', method: 'exec' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Insert.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Insert', method: 'render' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Insert.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Insert', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Insert.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Insert', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"] });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Update === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Update = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Update.show = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Update', method: 'show' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Update.back = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Update', method: 'back' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Update.exec = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Update', method: 'exec' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Update.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Update', method: 'render' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Update.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Update', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Update.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dml.Update', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"] });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Select === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Select = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Select.show = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Select', method: 'show' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Select.edit = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Select', method: 'edit' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Select.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Select', method: 'render' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Select.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Select', method: 'clear' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Select.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Select', method: 'visible' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
if(Lagdo.DbAdmin.Ajax.App.Menu.Server.Command === undefined) {
    Lagdo.DbAdmin.Ajax.App.Menu.Server.Command = {};
}
Lagdo.DbAdmin.Ajax.App.Menu.Server.Command.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Menu.Server.Command', method: 'render' }, { parameters: arguments });
};
Lagdo.DbAdmin.Ajax.App.Menu.Server.Command.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Menu.Server.Command', method: 'clear' }, { parameters: arguments });
};
Lagdo.DbAdmin.Ajax.App.Menu.Server.Command.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Menu.Server.Command', method: 'visible' }, { parameters: arguments });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Database.Database === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Database.Database = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Database.Database.select = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Database', method: 'select' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.Database.add = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Database', method: 'add' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.Database.create = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Database', method: 'create' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.Database.drop = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Database', method: 'drop' }, { parameters: arguments, bags: ["dbadmin"] });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Database.Routines === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Database.Routines = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Database.Routines.show = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Routines', method: 'show' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.Routines.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Routines', method: 'render' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.Routines.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Routines', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.Routines.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Routines', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"] });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Server.Privileges === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Server.Privileges = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Server.Privileges.show = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Privileges', method: 'show' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Server.Privileges.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Privileges', method: 'render' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Server.Privileges.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Privileges', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Server.Privileges.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Server.Privileges', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"] });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Columns === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Columns = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Columns.add = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Columns', method: 'add' }, { parameters: arguments, bags: ["dbadmin","dbadmin.table"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Columns.del = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Columns', method: 'del' }, { parameters: arguments, bags: ["dbadmin","dbadmin.table"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Columns.cancel = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Columns', method: 'cancel' }, { parameters: arguments, bags: ["dbadmin","dbadmin.table"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Columns.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Columns', method: 'render' }, { parameters: arguments, bags: ["dbadmin","dbadmin.table"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Columns.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Columns', method: 'clear' }, { parameters: arguments, bags: ["dbadmin","dbadmin.table"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Columns.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Ddl.Columns', method: 'visible' }, { parameters: arguments, bags: ["dbadmin","dbadmin.table"] });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Results === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Results = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Results.page = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Results', method: 'page' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Results.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Results', method: 'render' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Results.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Results', method: 'clear' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Results.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Results', method: 'visible' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Database.Sequences === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Database.Sequences = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Database.Sequences.show = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Sequences', method: 'show' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.Sequences.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Sequences', method: 'render' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.Sequences.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Sequences', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.Sequences.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.Sequences', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"] });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Database.UserTypes === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Database.UserTypes = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Database.UserTypes.show = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.UserTypes', method: 'show' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.UserTypes.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.UserTypes', method: 'render' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.UserTypes.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.UserTypes', method: 'clear' }, { parameters: arguments, bags: ["dbadmin"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Database.UserTypes.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Database.UserTypes', method: 'visible' }, { parameters: arguments, bags: ["dbadmin"] });
};
if(Lagdo.DbAdmin.Ajax.App.Menu.Database.Command === undefined) {
    Lagdo.DbAdmin.Ajax.App.Menu.Database.Command = {};
}
Lagdo.DbAdmin.Ajax.App.Menu.Database.Command.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Menu.Database.Command', method: 'render' }, { parameters: arguments });
};
Lagdo.DbAdmin.Ajax.App.Menu.Database.Command.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Menu.Database.Command', method: 'clear' }, { parameters: arguments });
};
Lagdo.DbAdmin.Ajax.App.Menu.Database.Command.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Menu.Database.Command', method: 'visible' }, { parameters: arguments });
};
if(Lagdo.DbAdmin.Ajax.App.Menu.Database.Schemas === undefined) {
    Lagdo.DbAdmin.Ajax.App.Menu.Database.Schemas = {};
}
Lagdo.DbAdmin.Ajax.App.Menu.Database.Schemas.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Menu.Database.Schemas', method: 'render' }, { parameters: arguments });
};
Lagdo.DbAdmin.Ajax.App.Menu.Database.Schemas.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Menu.Database.Schemas', method: 'clear' }, { parameters: arguments });
};
Lagdo.DbAdmin.Ajax.App.Menu.Database.Schemas.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Menu.Database.Schemas', method: 'visible' }, { parameters: arguments });
};
if(Lagdo.DbAdmin.Ajax.App.Menu.Server.Databases === undefined) {
    Lagdo.DbAdmin.Ajax.App.Menu.Server.Databases = {};
}
Lagdo.DbAdmin.Ajax.App.Menu.Server.Databases.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Menu.Server.Databases', method: 'render' }, { parameters: arguments });
};
Lagdo.DbAdmin.Ajax.App.Menu.Server.Databases.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Menu.Server.Databases', method: 'clear' }, { parameters: arguments });
};
Lagdo.DbAdmin.Ajax.App.Menu.Server.Databases.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Menu.Server.Databases', method: 'visible' }, { parameters: arguments });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields', method: 'render' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields', method: 'clear' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields', method: 'visible' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Values === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Values = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Values.saveSelectLimit = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Values', method: 'saveSelectLimit' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Values.saveTextLength = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Values', method: 'saveTextLength' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Values.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Values', method: 'render' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Values.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Values', method: 'clear' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Values.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Values', method: 'visible' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Columns === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Columns = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Columns.edit = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Columns', method: 'edit' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Columns.save = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Columns', method: 'save' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Filters === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Filters = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Filters.edit = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Filters', method: 'edit' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Filters.save = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Filters', method: 'save' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Sorting === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Sorting = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Sorting.edit = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Sorting', method: 'edit' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Sorting.save = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Sorting', method: 'save' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Columns === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Columns = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Columns.show = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Columns', method: 'show' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Columns.add = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Columns', method: 'add' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Columns.del = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Columns', method: 'del' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Columns.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Columns', method: 'render' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Columns.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Columns', method: 'clear' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Columns.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Columns', method: 'visible' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Filters === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Filters = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Filters.show = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Filters', method: 'show' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Filters.add = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Filters', method: 'add' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Filters.del = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Filters', method: 'del' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Filters.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Filters', method: 'render' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Filters.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Filters', method: 'clear' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Filters.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Filters', method: 'visible' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
if(Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Sorting === undefined) {
    Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Sorting = {};
}
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Sorting.show = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Sorting', method: 'show' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Sorting.add = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Sorting', method: 'add' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Sorting.del = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Sorting', method: 'del' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Sorting.render = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Sorting', method: 'render' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Sorting.clear = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Sorting', method: 'clear' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
};
Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Sorting.visible = function() {
    return jaxon.request({ type: 'class', name: 'Lagdo.DbAdmin.Ajax.App.Db.Table.Dql.Options.Fields.Form.Sorting', method: 'visible' }, { parameters: arguments, bags: ["dbadmin","dbadmin.select"] });
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
        container: null,
        hintOptions: {},
        modes: {
            sql: 'text/x-sql',
            mysql: 'text/x-mysql',
            pgsql: 'text/x-pgsql',
        },
    };

    const createSqlEditor = function(containerId, driver) {
        const container = document.getElementById(containerId);
        editor.container = CodeMirror.fromTextArea(container, {
            mode: editor.modes[driver] || editor.modes.sql,
            indentWithTabs: true,
            smartIndent: true,
            lineNumbers: true,
            matchBrackets : true,
            autofocus: true,
            extraKeys: {'Ctrl-Space': 'autocomplete'},
            hintOptions: editor.hintOptions,
            /*hintOptions: {
                tables: {
                    users: ["name", "score", "birthDate"],
                    countries: ["name", "population", "size"]
                }
            }*/
        });
    };

    const refreshSqlQuery = (txtQueryId, driver) => {
        // The query is replaced by the string formatted with CodeMirror.
        const container = document.getElementById(txtQueryId);
        const query = container.innerText || container.textContent;
        // Erase the initial SQL text.
        container.innerHTML = '';
        CodeMirror(container, {
            value: query,
            mode: editor.modes[driver] || editor.modes.sql,
            lineNumbers: false,
            readOnly: true,
        });
    };

    const getSqlQuery = () => {
        // Try to get the selected text first.
        const selectedText = editor.container.getSelection();
        return selectedText ? selectedText : editor.container.getValue();
    };

    const saveSqlEditorContent = () => editor.container.save();

    return {
        countTableCheckboxes,
        selectTableCheckboxes,
        selectAllCheckboxes,
        setFileUpload,
        createSqlEditor,
        refreshSqlQuery,
        getSqlQuery,
        saveSqlEditorContent,
    };
})();