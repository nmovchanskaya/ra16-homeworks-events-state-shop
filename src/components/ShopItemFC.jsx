export const ShopItemFC = ({item}) => {
  return (
    <div className="shoplist__item">
        <div>
            <img src={item.img} className="shoplist__item_img"></img>
        </div>
        <div className="shoplist__item_name">
            {item.name}
        </div>
        <div className="shoplist__item_color">
            {item.color}
        </div>
        <div className="shoplist__item_price">${item.price}</div>
        <div>
            <button className="shoplist__item_button">add to cart</button>
        </div>
    </div>
  )
}
