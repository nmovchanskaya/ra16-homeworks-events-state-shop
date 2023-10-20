import { ShopItemFC } from "./ShopItemFC";

export const ListViewFC = ({items}) => {

  let shopElems = items.map((item) => {
    return <ShopItemFC item={item}/>
  });

  return (
    <div class="shoplist">
        {shopElems}
    </div>
  )
}
