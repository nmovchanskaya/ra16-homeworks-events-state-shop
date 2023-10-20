export const ShopCardFC = ({item}) => {
  return (
    <div className="shop__item">
        <div className="shop__item_name">
            {item.name}
        </div>
        <div className="shop__item_color">
            {item.color}
        </div>
        <div>
            <img src={item.img} className="shop__item_img"></img>
        </div>
        <div className="shop__item_footer">
            <div className="shop__item_price">${item.price}</div>
            <div>
                <button className="shop__item_button">add to cart</button>
            </div>
        </div>
    </div>
  )
}
