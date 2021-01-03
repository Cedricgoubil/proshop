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
    email: 'kristina@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Mia Doe',
    email: 'mia@example.com',
    password: bcrypt.hashSync('123456', 10),
  }
]

export default users