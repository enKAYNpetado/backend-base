const { Router } = require("express")

const TagsController = require("../controllers/TagsController")

const tagsRoutes = Router()

const tagsController = new TagsController()

tagsRoutes.get("/:user_id", tagsController.index)
//notesRoutes.post("/:user_id", notesController.create)
//notesRoutes.get("/:id", notesController.show)
//notesRoutes.delete("/:id", notesController.delete)

module.exports = tagsRoutes