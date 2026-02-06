// apple-sync.ts

// Event-driven architecture for handling apple synchronization between host and clients

import { EventEmitter } from 'events';

class AppleSync extends EventEmitter {
    constructor() {
        super();
    }

    spawnApple(clientId: string) {
        // Logic to spawn apple for the given client
        console.log(`Spawning apple for client: ${clientId}`);
        this.emit('spawn', clientId);
    }

    despawnApple(clientId: string) {
        // Logic to despawn apple for the given client
        console.log(`Despawn apple for client: ${clientId}`);
        this.emit('despawn', clientId);
    }
}

// Example usage
const appleSync = new AppleSync();
appleSync.on('spawn', (clientId) => {
    console.log(`Event: apple spawned for client ${clientId}`);
});
appleSync.on('despawn', (clientId) => {
    console.log(`Event: apple despawned for client ${clientId}`);
});

// Exporting instance for use in other modules
export default appleSync;