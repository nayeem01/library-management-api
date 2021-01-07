const Book = require("../model/book");

exports.getBook = async (req, res) => {
    try {
        let book = Book.find({ isDeleted: false });
        const books = await book;

        res.status(200).json({
            success: true,
            count: books.length,
            data: books,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
    }
};
exports.newBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);

        res.status(201).json({
            success: true,
            data: book,
        });
    } catch (error) {
        res.status(400).json({ success: false });
    }
};
exports.getBooksByquery = async (req, res) => {
    try {
        console.log(req.query);
        let query = { ...req.query };
        let book = Book.find(query);
        const books = await book;

        res.status(200).json({
            success: true,
            count: books.length,
            data: books,
        });
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ success: false });
    }
};
exports.deleteBookID = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, {
            isDeleted: true,
        });
        res.status(200).json({
            success: true,
            message: "book deleted",
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
    }
};
exports.updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            success: true,
            data: book,
        });
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ success: false });
    }
};
