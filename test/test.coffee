expect = (require 'chai').expect
updater = require '../index'

describe 'basic', ->

	semverRegEx = /^\d+\.\d+\.\d+$/

	it 'works', (done) ->
		updater({
			cwd: __dirname
		}, (err, updated) ->
			expect(err).to.not.exists
			expect(updated).to.have.length.at.least(1)
			for component in updated
				expect(['fotorama', 'jquery', 'lodash']).to.include(component.name)
				expect(component.now).not.to.be.equal(component.then)
				expect(component.now).to.match(semverRegEx)
				expect(component.then).to.match(semverRegEx)
			done()
		)
