export type Users = {
  userId: number;
  id:     number;
  title:  string;
  body:   string;
}


const API_URL = 'https://jsonplaceholder.typicode.com/posts'

const response = await fetch(API_URL)

if (!response.ok) {
  throw new Error(`HTTP error! status: ${response.status}`)
}


const data = await response.json() as Users
