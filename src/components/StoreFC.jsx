import { useState } from "react";
import { CardsViewFC } from "./CardsViewFC";
import { ListViewFC } from "./ListViewFC";
import { IconSwitchFC } from "./IconSwitchFC";

export const StoreFC = () => {

    const products = [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
      }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
      }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
      }];

  const [ mode, setState ] = useState('cards');

  const onSwitch = () => {
    setState(prevState => {
        if (prevState === 'cards')
            return 'list';
        return 'cards';
    });
  };

  if (mode === 'cards') {
    return (
        <>
            <IconSwitchFC icon={"view_module"} onSwitch={onSwitch}/>
            <CardsViewFC items={products}/>
        </>
    )
  }
  return (
    <>
        <IconSwitchFC icon={"view_list"} onSwitch={onSwitch}/>
        <ListViewFC items={products}/>
    </>
  )
}
