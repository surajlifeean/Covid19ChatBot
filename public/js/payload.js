// The PayloadPanel module is designed to handle
// all display and behaviors of the conversation column of the app.
/* eslint no-unused-vars: "off" */
/* global Api: true, Common: true, PayloadPanel: true*/

var PayloadPanel = (function() {
  var settings = {
    selectors: {
      payloadColumn: '#payload-column',
      payloadRequest: '#payload-request',
      payloadResponse: '#payload-response'
    },
    payloadTypes: {
      request: 'request',
      response: 'response'
    }
  };

  // Publicly accessible methods defined
  return {
    init: init,
    togglePanel: togglePanel
  };

  // Initialize the module
  function init() {
    // payloadUpdateSetup();
  }

  // Toggle panel between being:
  // reduced width (default for large resolution apps)
  // hidden (default for small/mobile resolution apps)
  // full width (regardless of screen size)
  function togglePanel(event, element) {
    var payloadColumn = document.querySelector(settings.selectors.payloadColumn);
    if (element.classList.contains('full')) {
      element.classList.remove('full');
      payloadColumn.classList.remove('full');
    } else {
      element.classList.add('full');
      payloadColumn.classList.add('full');
    }
  }


  // Constructs new DOM element to use in displaying the payload
  function buildPayloadDomElement(isRequest) {
    var payloadJson = {
      'tagName': 'div',
      'children': [{
        // <div class='header-text'>
        'tagName': 'div',
        'text': isRequest ? 'User input' : 'Watson understands',
        'classNames': ['header-text']
      }, {
        // <div class='code-line responsive-columns-wrapper'>
        'tagName': 'div',
        'classNames': ['code-line', 'responsive-columns-wrapper'],
        'children': []
      }]
    };

    return Common.buildDomElement(payloadJson);
  }

  // Used to generate a string of consecutive numbers separated by new lines
  // - used as line numbers for displayed JSON

}());
