import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Kristina Doe',
    email: 'Kristina@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Mia Doe',
    email: 'Mia@example.com',
    password: bcrypt.hashSync('123456', 10),
  }
]

export default users