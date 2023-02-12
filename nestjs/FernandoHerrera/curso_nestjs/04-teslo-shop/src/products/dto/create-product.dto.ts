import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsPositive,
  MinLength,
  IsString,
  IsInt,
  IsArray,
  IsIn,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    description: 'Proudct Title (unique)',
    nullable: false,
    minLength: 1,
  })
  @IsString()
  @MinLength(1)
  title: string;

  @ApiProperty({
    description: 'Proudct Price',
    nullable: false,
    minimum: 0,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;

  @ApiProperty({
    description: 'Proudct Description',
    nullable: false,
    minLength: 1,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'Proudct Slug',
    required: true,
    nullable: true,
  })
  @IsString()
  @IsOptional()
  slug?: string;

  @ApiProperty({
    description: 'Proudct Stock',
    nullable: false,
    minimum: 0,
  })
  @IsInt()
  @IsPositive()
  @IsOptional()
  stock?: number;

  @ApiProperty({
    description: 'Proudct Sizes',
    nullable: false,
    minItems: 1,
  })
  @IsString({ each: true })
  @IsArray()
  sizes: string[];

  @ApiProperty({
    description: 'Proudct Gender',
    nullable: false,
  })
  @IsIn(['men', 'women', 'kid', 'unisex'])
  gender: string;

  @ApiProperty({
    description: 'Proudct Tags',
    nullable: false,
    minItems: 1,
  })
  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  tags: string[];

  @ApiProperty({
    description: 'Proudct Images',
    nullable: true,
  })
  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  images: string[];
}
