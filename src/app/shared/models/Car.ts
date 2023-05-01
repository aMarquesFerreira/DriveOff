export class Car{
    
    id!: number;
    name!: string;
    kms!: number;
    type_of_fuel!: string;
    cc!: number;
    year!: number;
    trunk_liters!: number;
    color!: string;
    brand!: string;
    description!: string;
    price!: number;
    price_per_month!: number;
	favorite:boolean = false;
    imageUrl!:string;
    origins!:string[];
	tags?:string[];
    showDetails:boolean = false;
}