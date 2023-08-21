exports.updateOne = Model => async (req, res) => {
    try {
        const doc = await Model.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        )
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