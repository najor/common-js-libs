/**
 * @overview: Map of shared modules and the location where they are provided.
 *
 * The MODULE_PATHS maps module names to the relative locations of the files
 * which provide them.  This map is used to resolve dependencies listed in
 * define() calls.
 */

var root = ((typeof SETTINGS !== 'undefined' && SETTINGS.root) ? SETTINGS.root : '') + 'shared';
var MODULE_PATHS = (typeof MODULE_PATHS !== 'undefined') ? MODULE_PATHS : {};

// Common libraries
MODULE_PATHS['Class']             = root + '/class';                 // Mutates global namespace
MODULE_PATHS['jquery']            = root + '/jquery-1.7.2';          // Mutates global namespace
MODULE_PATHS['jqueryui']          = root + '/jquery-ui-1.8.18';      // Mutates jquery
// Vendor libraries
MODULE_PATHS['jquery-layout']     = root + '/vendor/jquery.layout';  // Mutates jquery
MODULE_PATHS['jstree']            = root + '/vendor/jquery.jstree';  // Mutates jquery
MODULE_PATHS['jqgrid']            = root + '/vendor/jquery.jqgrid';  // Mutates jquery
MODULE_PATHS['jqgrid-locale-en']  = root + '/vendor/grid.locale.en'; // Mutates jqgrid
MODULE_PATHS['jqgrid-locale-de']  = root + '/vendor/grid.locale.de'; // Mutates jqgrid
// Custom libraries
MODULE_PATHS['PubSub']            = root + '/pubsub';
MODULE_PATHS['RepositoryBrowser'] = root + '/repository-browser/repository-browser.js';
