/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library demo.centralmtalib.
 */
sap.ui.define([
	"sap/ui/core/library"
], function () {
	"use strict";

	// delegate further initialization of this library to the Core
	// Hint: sap.ui.getCore() must still be used to support preload with sync bootstrap!
	sap.ui.getCore().initLibrary({
		name: "demo.centralmtalib",
		version: "${version}",
		dependencies: [ // keep in sync with the ui5.yaml and .library files
			"sap.ui.core"
		],
		types: [
			"demo.centralmtalib.ExampleColor"
		],
		interfaces: [],
		controls: [
			"demo.centralmtalib.Example"
		],
		elements: [],
		noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
	});

	/**
	 * Some description about <code>centralmtalib</code>
	 *
	 * @namespace
	 * @name demo.centralmtalib
	 * @author Yasutake
	 * @version ${version}
	 * @public
	 */
	var thisLib = demo.centralmtalib;

	/**
	 * Semantic Colors of the <code>demo.centralmtalib.Example</code>.
	 *
	 * @enum {string}
	 * @public
	 */
	thisLib.ExampleColor = {

		/**
		 * Default color (brand color)
		 * @public
		 */
		Default : "Default",

		/**
		 * Highlight color
		 * @public
		 */
		Highlight : "Highlight"

	};

	return thisLib;

});
