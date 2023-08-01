import { Global, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Global()
@Module({
    imports: [
        ClientsModule.register([
            {
              name: 'USERS_SERVICE',
              transport: Transport.KAFKA,
              options: {
                client: {
                  clientId: 'users',
                  brokers: ['host.docker.internal:9094'],
                },
                consumer: {
                    groupId: 'users-consumer',
                },
              },
            },
        ]),
    ],
    exports: [
        ClientsModule.register([
            {
              name: 'USERS_SERVICE',
              transport: Transport.KAFKA,
              options: {
                client: {
                  clientId: 'users',
                  brokers: ['host.docker.internal:9094'],
                },
                consumer: {
                    groupId: 'users-consumer',
                },
              },
            },
          ]),
    ]
})
export class ClientModule {}
