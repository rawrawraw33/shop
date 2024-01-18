import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"
import Categories from "./components/Categories"
import ShowFullItem from "./components/ShowFullItem"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Кросівки "Мрія"',
          img: 'chair-grey1.jpg',
          desc: 'Дуже гарні червоні капці теплі, на байочці.',
          category: 'chairs',
          price: '69.69'
        },
        {
          id: 2,
          title: 'Кросівки "Сіренькі"',
          img: 'table1.webp.jpg',
          desc: 'Класичні цирли 45 розміру',
          category: 'tables',
          price: '777.00'
        },
        {
          id: 3,
          title: 'Кросівки "Модні"',
          img: 'sofa1.jpg',
          desc: 'Якщо ви моднік, то це для вас!',
          category: 'sofa',
          price: '1099.99'
        },
        {
          id: 4,
          title: 'Кросівки "Огородні"',
          img: 'wall-light1.jpg',
          desc: 'Збирайте урожай стильно',
          category: 'light',
          price: '25500.00'
        },
        {
          id: 5,
          title: 'Кросівки "Доброго вечора ми з України"',
          img: 'chair-white1.jpg',
          desc: 'Бий хімарси заради наших дітей!',
          category: 'chairs',
          price: '19.99'
        },
        {
          id: 6,
          title: 'Кросівки "Радуга"',
          img: '1.jpg',
          desc: 'Смачненькі кроси з віддтінком гниющого заходу',
          category: 'chairs',
          price: '500.00'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders ={this.state.orders} onDelete ={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory} />

        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem} />}
        <Footer />
      </div>
    )
  }



onShowItem(item){
  this.setState({fullItem: item})
  this.setState({ showFullItem: !this.state.showFullItem})
}


chooseCategory(category){

  if (category == 'all'){
    this.setState({currentItems: this.state.items})
    return
  }

  this.setState({
    currentItems: this.state.items.filter(el => el.category === category)
  })
}



  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})

  }


  addToOrder(item){
    let isInArray = false
    this.state.orders.forEach (el => {
      if(el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({orders: [...this.state.orders, item] })

  }
}

export default App;
