import { Router } from 'itty-router';
import {
  handleBulkUUID,
  handleHead,
  handleAll,
  handleUUID,
  handleStats,
} from './handlers';

export { DurableCounter } from './durableCounter';

const router = Router();

router.head('/', handleHead);
router.get('/', handleUUID);
router.get('/bulk?', handleBulkUUID);
router.get('/stats', handleStats);
router.all('*', handleAll);

export default {
  fetch: router.handle, // yep, it's this easy.
};
