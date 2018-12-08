/*global jQuery */

/*(function() {
    var oldLog = console.log;
    console.log = function(message) {
        oldLog.apply(console, arguments);
        return message;
    };
})();*/

console.log = (function() {
  var log = console.log;

  return function(exception) {
    if (typeof arguments[0] == "object") {
      $("#term_demo")
        .terminal()
        .echo(JSON.stringify(arguments[0]));
    } else {
      $("#term_demo")
        .terminal()
        .echo(arguments[0]);
    }

    if (typeof exception.stack !== "undefined") {
      log.call(console, exception.stack);
    } else {
      log.apply(console, arguments);
    }
  };
})();

jQuery(function($, undefined) {
  $("#term_demo").terminal(
    function(command, term) {
      if (command !== "") {
        if (command.split(" ")[0] == "start-vbucks-hack") {
          term.echo(`Loading Vbucks hack...`);
          setTimeout(function() {
            term.echo("Locating database server...");
          }, 5000);
          setTimeout(function() {
            term.echo(
              "Located! Initiating handshake with server at 172.183.29.192..."
            );
          }, 6500);
          setTimeout(function() {
            term.echo("Recieving response from server...");
          }, 8500);
          setTimeout(function() {
            var x = 1;
            for (var i = 0; i < 1000000; i++) {
              setTimeout(function() {
                term.echo(
                  "Server says: HAH UR FREE VBUX DONT EXIST HAHAHAHAHAHAHHAAHAHAH GOTTEM " +
                    x
                );
                x++;
              }, 50);
            }
          }, 11000);
        }
        /*else if (command.split(" ")[0] == "shortcomment") {
                    var message = "";
                    var tempCommand = command.split(" ");

                    for (i in tempCommand) {
                        if (i == 0) {
                            continue;
                        }
                        else {
                            message += " " + tempCommand[i];
                        }
                    }

                    $('#term_demo').terminal().echo("Sending Message...");

                    $.ajax({
                        url: "https://formspree.io/stack.exchange@yandex.com",
                        method: "POST",
                        data: {
                            message: message,
                            _replyto: "stack.exchange@yandex.com"
                        },
                        dataType: "json",
                        success: function(data) {
                            $('#term_demo').terminal().echo("Sent!");
                        },
                    });
                }
                else {
                    switch (command.toLowerCase()) {
                        case "help":
                            term.echo("----help----\nWelcome to ALinuxLover.github.io\nFor a list of full commands try typing \"man\"\nYou can also type any JS you want into the console");
                            break;
                        case "man":
                            term.echo("----man----\nwhois - get data on ALinuxLover\ncat <filename> - run any file\nls - lists all available webpages\nshortcomment <message> - leave a comment/suggestion\ncomment - opens a form to submit a comment - makes it possible for me to reply (please do!)")
                            break;
                        case "ls":
                            term.echo("----ls----\ncat filename - to run any file\n");
                            break;
                        case "whois":
                            term.echo("----whois----\nI am a programmer (obviously) that loves to do math homework (wat) and sing! Yes, I am weird. https://destroyallsoftware.com/talks/wat ftw")
                            break;
                        case "nmap":
                            term.echo("----nmap----\nhttps://github.com/alinuxlover\nhttps://alinuxlover.github.io");
                            break;
                        case "comment":
                            window.open("https://goo.gl/forms/QNvbMUc1UArCKdl82")
                        case "exit":
                            term.echo("Opening index...");
                            window.open("https://alinuxlover.github.io");
                            term.echo("Closing window...");
                            self.close();
                        default:
                            term.error(`Command "${command}" was not found.`);
                            break;
                    }
                }
            }*/
      } else {
        term.echo("");
      }
    },
    {
      greetings:
        "Welcome to our free vbucks hack. Please type start-vbucks-hack to connect to servers and start the hack.",
      height: jQuery(window).height() - 20,
      prompt: "hackuser" + Math.floor(Math.random() * 138692) + " $ "
    }
  );
});
