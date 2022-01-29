const postOne = (model) => async (req, res) => {
    try {
        const item = await model.create(req.body);

        return res.status(201).json(item);

    } catch (e) {

        return res.status(500).json({ message: e.message, status: "failed" })
    }
}

const getAll = (model) => async (req, res) => {
    try {
        const items = await model.find().lean().exec();

        return res.status(201).send(items);

    } catch (e) {

        return res.status(500).json({ message: e.message, status: "Failed" });
    }
}




module.exports = {
    postOne,
    getAll,
};