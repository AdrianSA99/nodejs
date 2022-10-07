import express from 'express'
import bcrypt from 'bcrypt'
import stripe from 'stripe'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

//Configuracion de firebase
const firebaseConfig = {
    apiKey: "AIzaSyA5t-6wFzZEge4uN4dF_sbS5_op-f99BxY",
    authDomain: "demoeccomerce-ac9a2.firebaseapp.com",
    projectId: "demoeccomerce-ac9a2",
    storageBucket: "demoeccomerce-ac9a2.appspot.com",
    messagingSenderId: "121710504768",
    appId: "1:121710504768:web:d3132f7f3442eb9568e8a5"
}

const firebase = initializeApp(firebaseConfig)
const db = getFirestore()

const app = express()

app.use(express.static('public'))
app.use(express.json())


//Rutas
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public'})
})

app.listen(3000, () => {
    console.log('Servidor en ejecución...')
})