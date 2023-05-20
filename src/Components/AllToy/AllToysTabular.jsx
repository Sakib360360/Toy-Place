import React from 'react';
import { Link } from 'react-router-dom';

const AllToysTabular = ({ data }) => {
    const { price, subCategory, name, rating, quantity, category, postedBy, details, picture, _id } = data
    return (
        <tr>

            <td className='border-l-2'>

                {name}
            </td>
            <td className='border-l-2 border-r-2'>{postedBy}</td>
            <td>


                <span className="badge badge-ghost badge-sm">{price}$</span>
            </td>
            <td className='border-l-2 border-r-2'>{subCategory}</td>

            <td className='border-l-2 border-r-2'>{quantity}</td>


            <td className=' border-r-2'><button className='btn btn-outline'><Link to={`/toyDetails/${_id}`}>Details</Link></button></td>
        </tr>
    );
};

export default AllToysTabular;