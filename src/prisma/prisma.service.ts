/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    // constructor() {
    //     super({
    //         datasources: {
    //             db: {
    //                 url: 'postgresql://postgres:admin@localhost:5432/testdb?schema=public'
    //             }
    //         }
    //     })
    // }
    constructor(config: ConfigService) {
        super({
            datasources: {
                db: {
                    url: config.get('DATABASE_URL')
                }
            }
        })
    }
}
