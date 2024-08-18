//assets
import StarFilled from '../assets/icons/star-icon-filled.svg'
import StarEmpty from '../assets/icons/star-icon-empty.svg'

export default function RateStars({ rate, maxRate = 5 }) {
   const rateNumber = parseInt(rate)
   let rateScale = []

   for (let i = 0; i < maxRate; i++) {
      const star = i < rateNumber ? StarFilled : StarEmpty
      rateScale.push(star)
   }

   return (
      <div className='flex gap-1'>
         {
            rateScale.map((star, index) => {
               return (
                  <img
                     key={index}
                     src={star}
                     alt="star"
                     width={14}
                     height={14}
                  />
               )
            })
         }
      </div>
   )
}
