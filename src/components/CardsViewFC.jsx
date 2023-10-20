import { ShopCardFC } from "./ShopCardFC"

export const CardsViewFC = ({items}) => {

  let shopElems = items.map((item) => {
    return <ShopCardFC item={item}/>
  });

  return (
    <div class="shop">
        {shopElems}
    </div>
  )
}
