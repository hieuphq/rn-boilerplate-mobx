import config from './configureStore';
import setup from './setup';

export default function () {
  const stores = config();
  return setup(stores);
}
