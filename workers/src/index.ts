import { Router } from 'itty-router';
import { handleBulkUUID, handleHead, handleAll, handleUUID } from './handlers';

const router = Router();

router.head('/', handleHead);
router.get('/', handleUUID);
router.get('/bulk?', handleBulkUUID);
router.all('*', handleAll);

export default {
  fetch: router.handle, // yep, it's this easy.
};
