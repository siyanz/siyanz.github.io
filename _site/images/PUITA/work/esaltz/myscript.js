var deleteWord;
var deleteChar;
var S;

// Define mode
var mode;
var input;
var pInput;
// Var to add selected mode styling to active modes
var activeActionMode;
var activeSelectMode;

var clickCount = 0;

// Define command line prompts
var emptySelect = '<p>— — —</p>'
var startCommand = '<span>Select action mode</span>';
var insertSelectCommand = '<span>To insert text, select text or paragraph.</span><br /><span style="padding-left:.5em;">To change the action mode, back up.</span>';
var insertTxtCommand = '<span>Insert Text >> </span>';
// var insertParCommand = '<span>Insert Paragraph >> </span>';
var moveTxtCommand = `<span>Move Text >> [mark source text start]</span> </br>
             <span style="padding-left: 6em;">[mark source text end]</span> </br>
             <span style="padding-left: 6em;">[mark destination]</span> </br>
             <span style="padding-left: 6em;">[OK]</span>`

var deleteSelectCommand = '<span>To delete, select text, character, or word.</span> <br /> <span style="padding-left: .5em;">To change the action mode, back up.</span>'
var deleteTxtCommand = `<span>Delete Text >> [Mark source text start]</span> </br>
                        <span style="padding-left: 6.75em;">[Mark source text end]</span> </br>
                        <span style="padding-left: 6.75em;">[OK]</span>`

var deleteCharCommand = `<span>Delete Character >> [Mark char to delete]</span> <br />
                         <span style="padding-left: 8.8em;">[OK]</span>`
var deleteWordCommand = `<span>Delete Word >> [Mark word to delete]</span> <br />
                         <span style="padding-left: 6.75em;">[OK]</span>`

// Define select modes

$(document).on('keyup', function(e) {
    // if(e.which == 8) {
    //     e.preventDefault();
    //     console.log("back");
    //   }

    if (e.keyCode === 8) { // backspace
        console.log("backspace");
        // e.preventDefault();
        console.log(e);
        e.returnValue = false;

    }
});

//----- INIT -----//

// Add styling to active modes
function addModeStyles() {
    $(activeSelectMode).addClass('selected-mode');
    $(activeActionMode).addClass('selected-mode');
}

// Select mode
$('#empty-select').show();
$('#insert-text').hide();
$('#insert-paragraph').hide();
$('#delete-text').hide();
$('#delete-word').hide();
$('#delete-char').hide();
$('#command-line-input').hide();

//----- START MODE -----//

function getMode() {
    if (mode == 'inStartMode') {
        // Select mode
        $('#empty-select').show();
        $('#insert-text').hide();
        $('#insert-paragraph').hide();
        $('#delete-text').hide();
        $('#delete-word').hide();
        $('#delete-char').hide();
        $('#command-line-input').hide();

        // Command-line
        $('#command-line').empty();
        $('#command-line').append(startCommand);

        // Mode styling
        $(activeSelectMode).removeClass('selected-mode');
        $(activeActionMode).removeClass('selected-mode');
    }

    //----- INSERT TEXT -----//
    else if (mode == 'inInsertTextMode') {
        // Select mode
        $('#insert-text').show();
        // $('#insert-paragraph').show();
        $('#empty-select').hide();
        $('#delete-word').hide();
        $('#delete-char').hide();
        $('#delete-text').hide();
        $('#command-line-input').show();

        $('#command-line-input').attr("placeholder", "Click here to type, and OK to submit.");

        // Command-line
        $('#command-line').empty();
        $('#command-line').append(insertTxtCommand);

        // Mode styling
        activeActionMode = '#insert';
        activeSelectMode = '#insert-text';

        // Add styling to active modes
        $(activeSelectMode).addClass('selected-mode');
        $(activeActionMode).addClass('selected-mode');
    }

    //----- MOVE MODE -----//
    else if (mode == 'inMoveMode') {
        clickCount = 0;
        // Select mode
        $('#insert-text').show();
        $('#insert-paragraph').hide();
        $('#empty-select').hide();
        $('#delete-word').hide();
        $('#delete-char').hide();
        $('#command-line-input').hide();

        // Command-line
        $('#command-line').empty();
        $('#command-line').append(moveTxtCommand);

        // Mode styling
        activeActionMode = '#move';
        activeSelectMode = '#insert-text';

        // Add styling to active modes
        $(activeSelectMode).addClass('selected-mode');
        $(activeActionMode).addClass('selected-mode');

        // Use regex to wrap each character in a span
        $('#text-output').each(function() {
            $this = $(this);
            $this.html($this.text().replace(/(.)/g, "<span class='char'>$1</span>"));
        });

        $('#text-output span').click(function() {
            var thisCharIndex = $('.char').index(this);

            // apply selected style to span with clicked character
            $(this).css('background-color', '#9B9B9B');

            // save the character index at each text click
            if (clickCount == 0) {
                bIndex = thisCharIndex;
            } else if (clickCount == 1) {
                eIndex = thisCharIndex + 1;
            } else if (clickCount == 2) {
                moveToElement = $(this);
            } else if (clickCount > 2) {
              alert("Source text, end text and destination already selected. Click OK to move text, or back up to cancel.")
            }

            // increment clicks
            clickCount++;

        });
    }

    //----- DELETE SELECT MODE -----//
    else if (mode == 'inDeleteSelectMode') {
        // Select mode
        $('#delete-text').show();
        $('#delete-word').show();
        $('#delete-char').show();
        $('#insert-paragraph').hide();
        $('#empty-select').hide();
        $('#command-line-input').hide();
        // Command-line
        $('#command-line').empty();
        $('#command-line').append(deleteSelectCommand);

        // Mode styling
        activeActionMode = '#delete';

        // Add styling to active modes
        $(activeActionMode).addClass('selected-mode');
        $(activeSelectMode).removeClass('selected-mode');
    }

    //----- DELETE CHAR -----//
    else if (mode == 'inDeleteCharMode') {
        clickCount = 0;
        // Command-line
        $('#command-line').empty();
        $('#command-line').append(deleteCharCommand);
        $('#command-line-input').hide();
        // Mode styling
        activeSelectMode = '#delete-char';

        // Add styling to active modes
        $(activeSelectMode).addClass('selected-mode');

        $('#text-output').each(function() {
            $this = $(this);
            $this.html($this.text().replace(/(.)/g, "<span class='char'>$1</span>"));
        });

        $('#text-output span').click(function() {
            // console.log(this);
            // this.remove();
            if (clickCount == 0) {
                deleteChar = $(this);
                $(this).css('background-color', '#9B9B9B');
                // if deleting text span, replace output with new substring
            } else if (clickCount > 1 && mode == 'inDeleteCharMode')  {
                alert("Character already selected. Click OK to delete the character or back up to cancel.");
            }
            clickCount++;

            $('#ok-btn').click(function() {
                deleteChar.remove();
                clearToStart();
            });
        });
    }

    //----- DELETE TEXT -----//
    else if (mode == 'inDeleteTextMode') {
        // Command-line
        $('#command-line').empty();
        $('#command-line').append(deleteTxtCommand);
        $('#command-line-input').hide();
        // Mode styling
        activeSelectMode = '#delete-text';

        // Add styling to active modes
        $(activeSelectMode).addClass('selected-mode');

        $('#text-output').each(function() {
            $this = $(this);
            $this.html($this.text().replace(/(.)/g, "<span class='char'>$1</span>"));
        });

        $('#text-output span').click(function() {
            var thisCharIndex = $('.char').index(this);
            if (clickCount == 0) {
                bIndex = thisCharIndex;
            } else if (clickCount == 1) {
                eIndex = thisCharIndex + 1;
            }
            clickCount++;
            console.log("clickCount: " + clickCount);

            $(this).css('background-color', '#9B9B9B');
        });
    }

    //----- DELETE WORD -----//
    else if (mode == 'inDeleteWordMode') {
        clickCount = 0;
        // Command-line
        $('#command-line').empty();
        $('#command-line').append(deleteWordCommand);

        // Mode styling
        activeSelectMode = '#delete-word';

        // Add styling to active modes
        $(activeSelectMode).addClass('selected-mode');

        $('#text-output').each(function() {
            $this = $(this);
            $this.html($this.text().replace(/\b(\w+)\b/g, "<span class='word'>$1</span>"));
        });

        $('#text-output span').click(function() {
            // console.log(this);
            // this.remove();
            if (clickCount == 0) {
                deleteWord = $(this);
                $(this).css('background-color', '#9B9B9B');
            } else if (clickCount > 0 && mode == 'inDeleteWordMode') {
                alert("Word already selected. Click OK to delete the character or back up to cancel.");
            }
            clickCount++;

            $('#ok-btn').click(function() {
                deleteWord.remove();
                clearToStart();
            });
        });
      }
    }

    //----- jQuery Events -----//

    $("#insert").click(function() {
        if (mode != 'inMoveMode' && mode != 'inDeleteSelectMode') {
            mode = 'inInsertTextMode';
            console.log(mode);
            getMode();
        } else {
            alert("Back up to change modes!");
        }

    });

    $("#backmode").click(function() {
        // if backing up from action mode go to start mode
        if (mode == 'inInsertTextMode' || mode == 'inMoveMode' || mode == 'inDeleteSelectMode') {
            mode = 'inStartMode';
            getMode();
        }
        // if backing up from delete noun mode, go to delete select mode
        else if (mode == 'inDeleteWordMode' || mode == 'inDeleteCharMode' || mode == 'inDeleteTextMode') {
            mode = 'inDeleteSelectMode';
            getMode();
        }
        // if backing up from insert noun mode, go to insert select mode
        // else if (mode == 'inInsertTextMode' || mode == 'inInsertParMode') {
        //     mode = 'inInsertSelectMode';
        //     getMode();
        // }
        // if backing up from start mode, do nothing
        else if (mode == 'inStartMode') {}

    });

    // $("#insert-paragraph").click(function() {
    //     if (mode = 'inMoveMode' && mode != 'inDeleteSelectMode' && mode != 'inInsertTextMode') {
    //         mode = 'inInsertParMode';
    //         getMode();
    //     } else {
    //         alert("Back up to change modes!");
    //     }
    //
    // });

    // Clear command line and go to start mode
    function clearToStart() {
        input = $('#command-line-input').val('');
        mode = 'inStartMode';
        $('#command-line-input').hide();
        getMode();
    }

    $("#ok-btn").click(function() {
        S = $('#text-output').text().toString();
        // if inserting text span, get input value and append to output and go to start
        if (mode == 'inInsertTextMode') {
            input = $('#command-line-input').val();
            $('#text-output').append(input);
            clearToStart();
        }
        // if deleting text span, replace output with new substring
        else if (mode == 'inDeleteTextMode') {
            new_txt = S.substr(0, bIndex) + S.substr(eIndex);
            S = $('#text-output').text(new_txt);
            clearToStart();
        }
        // if deleting text span, replace output with new substring
        else if (mode == 'inMoveMode') {
            S = $('#text-output').text().toString();
            new_txt = '<span>' + S.substr(bIndex, eIndex); + '</span>'
            $(moveToElement).append(new_txt);
            clearToStart();
            $('.char').css('background-color', '#ffffff');
        }

    });

    $("#insert-text").click(function() {
        if (mode = 'inMoveMode' && mode != 'inDeleteSelectMode' && mode != 'inInsertParMode') {
            mode = 'inInsertTextMode';
            getMode();
        } else {
            alert("Back up to change modes!");
        }
    });

    $("#move").click(function() {

        if (mode != 'inDeleteSelectMode' && mode != 'inInsertSelectMode') {
            mode = 'inMoveMode';
            getMode();
            console.log(mode);
        } else {
            alert("Back up to change modes!");
        }

    });

    $("#delete").click(function() {
        if (mode != 'inMoveMode' && mode != 'inInsertSelectMode') {
            mode = 'inDeleteSelectMode';
            console.log(mode);
            getMode();
        } else {
            alert("Back up to change modes!");
        }
    });

    $("#delete-word").click(function() {
        if (mode = 'inMoveMode' && mode != 'inInsertSelectMode' && mode != 'inDeleteTextMode' && mode != 'inDeleteCharMode') {
            mode = 'inDeleteWordMode';
            getMode();
        } else {
            alert("Back up to change modes!");
        }
    });

    $("#delete-text").click(function() {
        if (mode = 'inMoveMode' && mode != 'inInsertSelectMode' && mode != 'inDeleteWordMode' && mode != 'inDeleteCharMode') {
            mode = 'inDeleteTextMode';
            getMode();
        } else {
            alert("Back up to change modes!");
        }
    });

    $("#delete-char").click(function() {
        if (mode = 'inMoveMode' && mode != 'inInsertSelectMode' && mode != 'inDeleteWordMode' && mode != 'inDeleteTextMode') {
            mode = 'inDeleteCharMode';
            getMode();
        } else {
            alert("Back up to change modes!");
        }
    });

    //// Manual

    $("#manual").click(function() {
        // open bootstrap modal with command summaries and descriptions
    })

    //// About
    $("#about").click(function() {
        // open bootstrap modal with text about the history of text editor and link to the Larry Tessler essay inspiration
    })
