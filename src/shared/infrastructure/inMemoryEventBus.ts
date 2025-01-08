import IEvent from '../domain/interfaces/IEvent.interface';

type EventHandler = (event: IEvent) => Promise<void> | void;


export class InMemoryEventBus {
    private handlers: Map<string, EventHandler[]> = new Map();

    subscribe(eventName: string, handler: EventHandler): void {
        const handlers = this.handlers.get(eventName) || [];
        handlers.push(handler);
        this.handlers.set(eventName, handlers);
    }

    async publish(event: IEvent): Promise<void> {
        const handlers = this.handlers.get(event.eventName) || [];
        console.log(`Publishing event ${event.eventName} to ${handlers.length} handlers`);
        const promises = handlers.map(handler => {
            try {
                console.log(`Handling event ${event.eventName} with handler ${handler.name}`);
                return Promise.resolve(handler(event));
            } catch (error) {
                console.error(`Error handling event ${event.eventName}:`, error);
                return Promise.reject(error);
            }
        });

        await Promise.all(promises);
    }
}