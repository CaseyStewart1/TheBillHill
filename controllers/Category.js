
// const { Category } = require('../models')


// const GetAllCategories = async (req, res) => {
//     try {
//         const all = await Category.findAll({
//             attributes: [
//                 'primarySubject',
//                 'description'
//             ],
//         })
//         res.send(all)
//     } catch (error) {
//         throw error
//     }
// }

// const GetCategoriesById = async (req, res) => {
//     try {
//         const categoryById = await Category.findById({
//             attributes:[
//                 'id'
//             ],
//         })
//         res.send(categoryById)
//     } catch (error) {
//         throw error
//     }
// },


// const UpdateCategories = async (req, res) => {
//     try {
//         let categoryId = parseInt(req.params.category_id)
//         let updatedCategory = await Category.update(req.body, {
//             where: { id: categoryId },
//             returning: true
//         })
//         res.send(updatedCategory)
//     } catch (error) {
//         throw error
//     }
// }






// module.exports = {
//     GetAllCategories
//     // GetCategoriesById,
//     // UpdateCategories


// }
