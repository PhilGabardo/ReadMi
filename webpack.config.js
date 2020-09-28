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
	.addEntry('session_controller', './web/assets/js/session_controller.js')
	.addEntry('note_detection', './web/assets/js/note_detection.js')
	.addEntry('score_renderer', './web/assets/js/score_renderer.js')
	.addEntry('audio_stream_controller', './web/assets/js/audio_stream_controller.js')
	.addEntry('test', './web/assets/js/test.js')
	.addEntry('note_hinter', './web/assets/js/note_hinter.js')
	.addEntry('instruments', './web/assets/js/instruments.js')
	.addEntry('timing', './web/assets/js/timing.js')
	.addEntry('metronome', './web/assets/js/metronome.js')
	.addEntry('song_player', './web/assets/js/song_player.js')
	.addEntry('note_timing', './web/assets/js/note_timing.js')
	.addEntry('note_feedback_v2', './web/assets/js/note_feedback_v2.js')
	.addEntry('landing', './web/assets/js/landing.js')
	.addEntry('layout', './web/assets/js/layout.js')
	.addEntry('login', './web/assets/js/login.js')
	.addEntry('demo', './web/assets/js/demo.js')
	.addEntry('payment', './web/assets/js/payment.js')
	.addEntry('instrument_select_action', './web/assets/js/instrument_select.js')
	.addEntry('audio_context', './web/assets/js/audio_context.js')
	.addEntry('feedback', './web/assets/js/feedback.js')
	.addEntry('account_view', './web/assets/js/account_view.js')
	.addEntry('draw_keyboard', './web/assets/js/draw_keyboard.js')
	.addEntry('non_piano_stave_updater', './web/assets/js/non_piano_stave_updater.js')


	// will output as web/build/global.css
	.addStyleEntry('filterable_table', './web/assets/css/filterable_table.css')
	.addStyleEntry('layout_style', './web/assets/css/layout.css')
	.addStyleEntry('demo_layout', './web/assets/css/demo_layout.css')
	.addStyleEntry('text', './web/assets/css/text.css')
	.addStyleEntry('songs', './web/assets/css/songs.scss')
	.addStyleEntry('selectize_override', './web/assets/css/selectize_override.css')
	.addStyleEntry('landing_style', './web/assets/css/landing.css')
	.addStyleEntry('demo_landing_style', './web/assets/css/demo_landing.css')
	.addStyleEntry('instrument_select', './web/assets/css/instrument_select.css')
	.addStyleEntry('feedback_style', './web/assets/css/feedback.css')
	.addStyleEntry('account_view_style', './web/assets/css/account_view.css')


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
