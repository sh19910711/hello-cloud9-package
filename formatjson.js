define(function(require, exports, module) {
  console.log('here?');
  main.consumes = ["Plugin", "commands"];
  main.provides = ['formatjson'];
  return main;

  function main(options, imports, register) {
    var Plugin = imports.Plugin;
    var commands = imports.commands;
    var plugin = new Plugin("Ajax.org", main.consumes);

    plugin.on("load", function() {
      console.log('formatjson: loaded');
    });

    commands.addCommand({
      name: "formatjson_format",
      bindKey: { 
        mac: "Command-Shift-J", 
        linux: "Ctrl-Shift-J",
        win: "Ctrl-Shift-J" 
      },
      exec: function(){ 
        alert("Success?");
      }
    }, plugin);

    plugin.freezePublicAPI({});
    register(null, {
      'formatjson': plugin
    });

    return plugin;
  }
});
