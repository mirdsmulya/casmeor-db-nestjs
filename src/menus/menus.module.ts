import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from './menus.entity';
import { MenusController } from './menus.controller';
import { MenusService } from './menus.service'; 



@Module({
    imports: [TypeOrmModule.forFeature([Menu])],
    controllers: [MenusController],
    providers: [MenusService]
})
export class MenuModule {}