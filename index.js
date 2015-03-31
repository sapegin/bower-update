/**
 * Updates Bower components to the really latest versions.
 *
 * @author Artem Sapegin (http://sapegin.me)
 */

'use strict';

var chalk = require('chalk');
var bower = require('bower');
var _ = require('lodash');
var async = require('async');
var readlineSync = require('readline-sync');

module.exports = function(options, allDone) {

	var bowerConfig = {
		cwd: options.cwd
	};

	var getComponents = function(done) {
		bower.commands.list({
			map: true
		}, bowerConfig)
			.on('error', allDone)
			.on('end', done.bind(null, null))
		;
	};

	var updateComponents = function(data, done) {
		var components = _.values(data.dependencies);
		components = _.filter(components, isUpdateAvailable);
		if (!components.length) {
			done(null, []);
			return;
		}

		var endpoints = _.map(components, function(component) { return component.endpoint.name; });
		bower.commands.install(endpoints, {save: true, forceLatest: true}, bowerConfig)
			.on('end', function(installed) {
				var updated = [];
				_.each(installed, function(component) {
					var name = component.endpoint.name;
					var meta = data.dependencies[name];
					if (meta) {
						updated.push({
							name: name,
							now: meta.update.latest,
							then: meta.update.target
						});
					}
				});
				done(null, updated);
			})
		;
	};

	var isUpdateAvailable = function(component) {
		if (!component.update || component.update.target === component.update.latest) return false;
		if (options.interactive) {
			console.log(component.endpoint.name + ': ' +  chalk.red(component.update.target) + ' → ' + chalk.green(component.update.latest));
			var answer = readlineSync.question('Update? (Y/n)').toLowerCase() !== 'n';
			console.log(answer ? 'Updated.\n' : 'Skipped.\n');
			return answer;
		}
		return true;
	};

	async.waterfall([
		getComponents,
		updateComponents
	], allDone);

};
