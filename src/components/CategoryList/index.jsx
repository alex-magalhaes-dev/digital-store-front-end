//assets
import CategoryIcon1 from '../../assets/category/category-1.svg'
import CategoryIcon2 from '../../assets/category/category-2.svg'
import CategoryIcon3 from '../../assets/category/category-3.svg'
import CategoryIcon4 from '../../assets/category/category-4.svg'
import CategoryIcon5 from '../../assets/category/category-5.svg'
import CategoryCard from './CategoryCard'

const categoryList = [
   {
      icon: CategoryIcon5,
      title: 'Camisetas',
      highlight: true
   }, {
      icon: CategoryIcon4,
      title: 'Calças',
   }, {
      icon: CategoryIcon3,
      title: 'Bonés',
   }, {
      icon: CategoryIcon2,
      title: 'Headphones',
   }, {
      icon: CategoryIcon1,
      title: 'Tênis',
   },
]

export default function CategoryList() {
   return (
      <div className='flex gap-12 items-start justify-center'>
         {
            categoryList.map(({ icon, title, highlight }, index) => {
               return (
                  <CategoryCard
                     key={index}
                     icon={icon}
                     title={title}
                     highlight={highlight}
                  />
               )
            })
         }
      </div>
   )
}