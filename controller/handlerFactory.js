const APIFeatures = require('../utils/apiFeatures')

exports.getAll = (Model) => async (req, res) => {
    try {
        const features = new APIFeatures(Model.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate()

        const doc = await features.query.explain()

        // send response
        res.status(200).json({
            status: 'success',
            result: doc.length,
            data: {
                doc
            }
        })
    } catch (error) {
        console.log(error.message)
        res.status(404).json({
            status: 'fail',
            error: `Something wrong with the server, ${error.message} `
        })
    }
}

exports.getOne = (Model, popOptions) => async (req, res) => {
    try {
        let query = Model.findById(req.params.id)
        if (popOptions) query.populate(popOptions)
        const doc = await query

        if (!doc) {
            return res.status(404).json({
                status: false,
                message: 'document does not exist'
            })
        }

        res.status(200).json({
            status: 'success',
            data: {
                doc
            }
        })
    } catch (error) {
        console.log(error.message)
        res.status(404).json({
            status: 'fail',
            error: `Something wrong with the server, ${error.message} `
        })
    }
}

exports.createOne = (Model) => async (req, res, next) => {
    try {
        const doc = await Model.create(req.body)

        res.status(201).json({
            status: true,
            doc
        })

        next()
    } catch (error) {
        console.error(error)
        res.status(404).json({
            status: false,
            message: error.message
        })
    }
}

exports.updateOne = (Model) => async (req, res) => {
    try {
        const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!doc) {
            res.status(404).json({
                status: 'fail',
                message: 'Document not found'
            })
        }

        res.status(200).json({
            status: 'success',
            doc
        })
    } catch (error) {
        console.log(error.message)
        res.status(404).json({
            status: 'fail',
            message: 'Something Went Wrong'
        })
    }
}

exports.deleteOne = (Model) => async (req, res) => {
    try {
        const doc = await Model.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: 'success'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            error: 'Something wrong with the server '
        })
    }
}