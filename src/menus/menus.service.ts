import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './menus.entity';
import { Repository } from 'typeorm';


@Injectable()
export class MenusService {
    constructor(
        @InjectRepository(Menu)
        private menuRepository: Repository<Menu>,
    ) {}
    
    findAll(): Promise<Menu[]> {
        return this.menuRepository.find();
    }

    findOne(id: string): Promise<Menu> {
        return this.menuRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.menuRepository.delete(id)
    }

    async saveMenu(menu: object): Promise<void> {
        await this.menuRepository.save(menu)
    }

    async updateMenu(id: string, menu: object): Promise<void> {
        await this.menuRepository.update(id, menu)

    }
    
}