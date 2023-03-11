export class OrderCreatedEvent {
    constructor(
        public readonly orderId: string,
        public readonly userId: string,
        public readonly price: string
    ) {}

    toString() { // Kafka serialization
        return JSON.stringify({
            orderId: this.orderId,
            userId: this.userId,
            price: this.price
        });
    }
}