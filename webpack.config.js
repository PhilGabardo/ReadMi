var Encore = require('@symfony/webpack-encore');

Encore
// directory where all compiled assets will be stored
	.setOutputPath('web/build/')

	// what's the public path to this directory (relative to your project's document root dir)
	.setPublicPath('/build')

	// empty the outputPath dir before each build
	.cleanupOutputBeforeBuild()

	.copyFiles({
		from: './web/assets/images',
		// optional target path, relative to the output dir
		to: 'images/[path][name].[ext]',
		pattern: /\.(png|jpg|jpeg)$/
	})

	// will output as web/build/app.js
	.addEntry('bar_computer', './web/assets/js/bar_computer.js')
	.addEntry('filter_table', './web/assets/js/filter_table.js')
	.addEntry('key_comparison', './web/assets/js/key_comparison.js')
	.addEntry('key_signature', './web/assets/js/key_signatures.js')
	.addEntry('metronome', './web/assets/js/metronome.js')
	.addEntry('note_detection', './web/assets/js/note_detection.js')
	.addEntry('note_player', './web/assets/js/note_player.js')
	.addEntry('score_renderer', './web/assets/js/score_renderer.js')
	.addEntry('audio_stream_controller', './web/assets/js/audio_stream_controller.js')
	.addEntry('test', './web/assets/js/test.js')
	.addEntry('note_hinter', './web/assets/js/note_hinter.js')
	.addEntry('instruments', './web/assets/js/instruments.js')

	// will output as web/build/global.css
	.addStyleEntry('dialogbox', './web/assets/css/dialogbox.css')
	.addStyleEntry('filterable_table', './web/assets/css/filterable_table.css')
	.addStyleEntry('note_hint', './web/assets/css/note_hint.css')
	.addStyleEntry('main', './web/assets/css/main.css')
	.addStyleEntry('sidebar', './web/assets/css/sidebar.css')
	.addStyleEntry('text', './web/assets/css/text.css')
	.addStyleEntry('songs', './web/assets/css/songs.css')
	.addStyleEntry('selectize_override', './web/assets/css/selectize_override.css')

	// allow sass/scss files to be processed
	.enableSassLoader()

	// allow legacy applications to use $/jQuery as a global variable
	.autoProvidejQuery()

	.enableSourceMaps(!Encore.isProduction())

// create hashed filenames (e.g. app.abc123.css)
// .enableVersioning()
;

// export the final configuration
module.exports = Encore.getWebpackConfig();
