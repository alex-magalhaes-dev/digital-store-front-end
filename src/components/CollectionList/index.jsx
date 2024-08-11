import CollectionCard from "./CollectionCard"

//assets
import Brand1 from "../../assets/collection-1.png"
import Brand2 from "../../assets/collection-2.png"
import Brand3 from "../../assets/collection-3.png"

const collectionList = [
   {
      tag: "30% OFF",
      title: "Novo drop Supreme",
      href: "#",
      image: Brand3
   }, {
      tag: "30% OFF",
      title: "Coleção Adidas",
      href: "#",
      image: Brand2
   }, {
      tag: "30% OFF",
      title: "Novo Beats Bass",
      href: "#",
      image: Brand1
   },
]

export default function CollectionList() {
   return (
      <div className="grid @tablet:grid-cols-3 @laptop:gap-3 gap-2 grid-cols-1">
         {
            collectionList.map(({ tag, title, href, image }) => {
               return (
                  <CollectionCard
                     tag={tag}
                     title={title}
                     href={href}
                     image={image}
                  />
               )
            })
         }
      </div>
   )
}