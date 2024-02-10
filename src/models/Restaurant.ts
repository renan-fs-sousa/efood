class Restaurant {
  id: number
  title: string
  image: string
  text: string
  rate: string
  category: string[]

  constructor(
    id: number,
    title: string,
    image: string,
    text: string,
    rate: string,
    category: string[]
  ) {
    this.id = id
    this.title = title
    this.image = image
    this.text = text
    this.rate = rate
    this.category = category
  }
}

export default Restaurant
