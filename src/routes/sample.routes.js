import { Router } from 'express';
import {
    sampleController
} from '../controller/sample.controller.js';

const router = Router();

router.get('/', sampleController);

export default router;