import { Inject, Injectable } from '@nestjs/common';
import { UserCreateDto } from './dto/user-create.dto';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class UsersService {
    constructor(@Inject("USERS_SERVICE") private readonly userClient: ClientKafka){}

    create(userData: UserCreateDto) {
        this.userClient.emit('user_create', JSON.stringify(userData));
    }
}
