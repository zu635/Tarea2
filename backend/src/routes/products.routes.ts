import {Router} from "express";
import {ProductController} from "../controllers/products.cotroller.ts";

const productController = new ProductController();
const router = Router();

router.get('/', productController.getAll);
router.get('/:id', productController.getById);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.productDelete);
router.patch('/:id', productController.changePrice);

export default router;