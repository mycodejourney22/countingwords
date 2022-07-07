// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import HelloController from "./hello_controller.js"
application.register("hello", HelloController)

import WordcountersController from "./wordcounters_controller.js"
application.register("wordcounters", WordcountersController)


import { Application } from '@hotwired/stimulus'
import TextareaAutogrow from 'stimulus-textarea-autogrow'

application.register('textarea-autogrow', TextareaAutogrow)
