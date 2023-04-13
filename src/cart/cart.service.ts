import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { CartEntity } from './cart.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AutopartService } from 'src/autopart/autopart.service';
import { AutopartEntity } from 'src/autopart/autopart.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity)
    private readonly cartRepository: Repository<CartEntity>,
    @InjectRepository(AutopartEntity)
    private readonly autopartRepository: Repository<AutopartEntity>,
  ) {}

  async create(createCartDto: CreateCartDto) {
    const autopart = await this.autopartRepository.findOne({
      where: { id: createCartDto.autopart_id },
    });
    if (!autopart) {
      throw new NotFoundException('Деталь не найдена');
    }

    if (createCartDto.amount > autopart.amount) {
      throw new BadRequestException('Недостаточно деталей в наличии');
    }

    const cart = new CartEntity();
    cart.autopart_id = createCartDto.autopart_id;
    cart.order_id = createCartDto.order_id;
    cart.amount = createCartDto.amount;

    return this.cartRepository.save(cart);
  }
}
