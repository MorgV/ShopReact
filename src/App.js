import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import Filter from "./components/Filter";
import ShowFullItem from "./components/ShowFullItem";
//ПЕТ ПРОЕКТ РЕАЛИЗОВАН ЧЕРЕЗ КЛАССЫ ДЛЯ ПРИМЕРА РАБОТЫ В ДАННОМ ФОРМАТЕ
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders:[], 
      currentItems:[],
      items:[
        {
          id:1,
          title: 'hutchinson',
          img: './images/1.jpg',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, ut!',
          category: 'Other',
          price: '49.99'
        },
        {
          id:2,
          title: 'Motocraft oil',
          img: './images/2.jpg',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, ut!',
          category: 'Oil',
          price: '10.99'
        },
        {
          id:3,
          title: 'Genesis oil',
          img: './images/3.jpg',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, ut!',
          category: 'Oil',
          price: '15.99'
        },
        {
          id:4,
          title: 'ravenol oil',
          img: './images/4.jpg',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, ut!',
          category: 'Oil',
          price: '19.99'
        },
        {
          id:5,
          title: 'zic oli',
          img: './images/5.jpg',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, ut!',
          category: 'Oil elit',
          price: '29.99'
        },
        {
          id:6,
          title: 'Magnetic castrol',
          img: './images/6.jpg',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, ut!',
          category: 'Oil elit',
          price: '49.99'
        },
      ],
      ShowFullItem:false,
      fullItem:{},
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {return(
    <div className="wrapper">
      <Header deleteOrder={this.deleteOrder} orders={this.state.orders}/>
      <Filter chooseCategory={this.chooseCategory}/>
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
      {this.state.ShowFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem} />}
      <Footer/>
    </div>
  );
}

onShowItem(item){
  this.setState({fullItem:item})
  this.setState({ShowFullItem: !this.state.ShowFullItem})
}

chooseCategory(cat){
  if(cat==="All"){
    this.setState({currentItems: this.state.items})
    return
  }
  this.setState({
    currentItems: this.state.items.filter(el => el.category === cat )
  })
}

deleteOrder(id){
  this.setState({orders: this.state.orders.filter(el => el.id !== id)})
}

addToOrder(item){
  let isInArray = false
  this.state.orders.forEach(el =>{
    if(el.id ===item.id){
      isInArray = true
    }
  })
  if(!isInArray){
    this.setState({orders: [...this.state.orders, item]})
  }
} 
}
export default App;
