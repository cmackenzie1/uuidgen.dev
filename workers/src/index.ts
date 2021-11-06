import { Router } from 'itty-router';
import {
  handleBulkUUID,
  handleHead,
  handleNotFound,
  handleUUID,
} from './handlers';

const router = Router();

router.head('/', handleHead);
router.get('/', handleUUID);
router.get('/bulk?', handleBulkUUID);
router.all('*', handleNotFound);

export default {
  fetch: router.handle, // yep, it's this easy.
};
