
import Dexie from 'dexie';

export const db = new Dexie('userDatabase');
db.version(1).stores({
  userDetails: '++id, &email, password,phoneNumber,country' // Primary key and indexed props
});
// export { db };
