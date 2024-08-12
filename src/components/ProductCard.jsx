import { Link } from 'react-router-dom';
import Tag from '../components/Tag'

export default function ProductCard({
    id,
    image,
    name,
    category,
    price,
    priceDiscount,
    offer
}) {
    return (
        <Link
            to={`/produto/${id}`}
            className='hover:scale-105 flex flex-col items-start gap-4'
        >
            <div className='overflow-hidden h-80 relative rounded shadow-smooth'>
                {
                    offer && <div className='absolute top-5 left-5'>
                        <Tag text={offer} />
                    </div>
                }
                <img
                    className='object-cover h-full'
                    src={image}
                    alt={name}
                />
            </div>

            <div>
                <span className='font-bold text-xs text-brand-light-gray-100'>
                    {category}
                </span>
                <div className='font-normal text-2xl mb-1'>
                    {name}
                </div>
                <div className='flex gap-2 text-2xl'>
                    <span className='text-brand-light-gray-100 line-through'>
                        {price}
                    </span>
                    <span className='font-bold text-brand-dark-gray-100'>
                        {priceDiscount}
                    </span>
                </div>
            </div>
        </Link>
    );
}