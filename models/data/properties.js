import 'dotenv/config.js'
import '../../config/database.js'
import Property from "../Property.js";

const goods = [
    {
        name: 'Tesla Model S',
        category: 'Cars',
        value: 120000,
        user: '67328b04d4e49cc40a2bb962'
    },
    {
        name: 'Luxury Apartment',
        category: 'Houses',
        value: 500000,
        user: '67328b04d4e49cc40a2bb962'
    },
    {
        name: 'Real Estate Investment',
        category: 'Assets',
        value: 90000,
        user: '67328b04d4e49cc40a2bb962'
    },
    {
        name: 'Modern Villa',
        category: 'Houses',
        value: 450000,
        user: '67328b04d4e49cc40a2bb962'
    },
    {
        name: 'Commercial Property',
        category: 'Assets',
        value: 350000,
        user: '67328b04d4e49cc40a2bb962'
    },
    {
        name: 'BMW 5 Series',
        category: 'Cars',
        value: 80000,
        user: '67328b04d4e49cc40a2bb963'
    },
    {
        name: 'Beach House',
        category: 'Houses',
        value: 350000,
        user: '67328b04d4e49cc40a2bb963'
    },
    {
        name: 'Stock Market Portfolio',
        category: 'Assets',
        value: 1000000,
        user: '67328b04d4e49cc40a2bb963'
    },
    {
        name: 'Luxury Condo',
        category: 'Houses',
        value: 500000,
        user: '67328b04d4e49cc40a2bb963'
    },
    {
        name: 'Gold Investment',
        category: 'Assets',
        value: 250000,
        user: '67328b04d4e49cc40a2bb963'
    },
    {
        name: 'Audi A6',
        category: 'Cars',
        value: 40000,
        user: '67328b04d4e49cc40a2bb964'
    },
    {
        name: 'Office Building',
        category: 'Houses',
        value: 1200000,
        user: '67328b04d4e49cc40a2bb964'
    },
    {
        name: 'Vacation Home',
        category: 'Houses',
        value: 150000,
        user: '67328b04d4e49cc40a2bb964'
    },
    {
        name: 'Ferrari 488 GTB',
        category: 'Cars',
        value: 250000,
        user: '67328b04d4e49cc40a2bb964'
    },
    {
        name: 'Luxury Yacht',
        category: 'Assets',
        value: 2000000,
        user: '67328b04d4e49cc40a2bb964'
    },
    {
        name: 'MacBook Pro',
        category: 'Assets',
        value: 2500,
        user: '67328b04d4e49cc40a2bb965'
    },
    {
        name: 'Tesla Model X',
        category: 'Cars',
        value: 95000,
        user: '67328b04d4e49cc40a2bb965'
    },
    {
        name: 'Mountain House',
        category: 'Houses',
        value: 600000,
        user: '67328b04d4e49cc40a2bb965'
    },
    {
        name: 'Crypto Investment Portfolio',
        category: 'Assets',
        value: 500000,
        user: '67328b04d4e49cc40a2bb965'
    },
    {
        name: 'Classic Car Collection',
        category: 'Cars',
        value: 800000,
        user: '67328b04d4e49cc40a2bb965'
    },
    {
        name: 'Luxury Penthouse',
        category: 'Houses',
        value: 2500000,
        user: '67328b04d4e49cc40a2bb966'
    },
    {
        name: 'Private Jet',
        category: 'Assets',
        value: 8000000,
        user: '67328b04d4e49cc40a2bb966'
    },
    {
        name: 'Electric Bike',
        category: 'Assets',
        value: 2000,
        user: '67328b04d4e49cc40a2bb966'
    },
    {
        name: 'Chevrolet Corvette',
        category: 'Cars',
        value: 60000,
        user: '67328b04d4e49cc40a2bb966'
    },
    {
        name: 'Ranch Estate',
        category: 'Houses',
        value: 1200000,
        user: '67328b04d4e49cc40a2bb966'
    },
    {
        name: 'Rolex Watch',
        category: 'Assets',
        value: 15000,
        user: '67328b04d4e49cc40a2bb967'
    },
    {
        name: 'Porsche 911',
        category: 'Cars',
        value: 95000,
        user: '67328b04d4e49cc40a2bb967'
    },
    {
        name: 'Luxury Cabin',
        category: 'Houses',
        value: 450000,
        user: '67328b04d4e49cc40a2bb967'
    },
    {
        name: 'Private Villa',
        category: 'Houses',
        value: 850000,
        user: '67328b04d4e49cc40a2bb967'
    },
    {
        name: 'Bitcoin Investment',
        category: 'Assets',
        value: 700000,
        user: '67328b04d4e49cc40a2bb967'
    },
    {
        name: 'Rolls Royce Phantom',
        category: 'Cars',
        value: 400000,
        user: '67328b04d4e49cc40a2bb968'
    },
    {
        name: 'Gated Community Mansion',
        category: 'Houses',
        value: 3000000,
        user: '67328b04d4e49cc40a2bb968'
    },
    {
        name: 'Luxury Office Suite',
        category: 'Assets',
        value: 2000000,
        user: '67328b04d4e49cc40a2bb968'
    },
    {
        name: 'McLaren 720S',
        category: 'Cars',
        value: 300000,
        user: '67328b04d4e49cc40a2bb968'
    },
    {
        name: 'Private Island',
        category: 'Assets',
        value: 50000000,
        user: '67328b04d4e49cc40a2bb968'
    },
    {
        name: 'Lamborghini Aventador',
        category: 'Cars',
        value: 500000,
        user: '67328b04d4e49cc40a2bb969'
    },
    {
        name: 'Luxury Beach House',
        category: 'Houses',
        value: 1200000,
        user: '67328b04d4e49cc40a2bb969'
    },
    {
        name: 'Gold Bar Investment',
        category: 'Assets',
        value: 250000,
        user: '67328b04d4e49cc40a2bb969'
    },
    {
        name: 'Range Rover Velar',
        category: 'Cars',
        value: 75000,
        user: '67328b04d4e49cc40a2bb969'
    },
    {
        name: 'Luxury Yacht',
        category: 'Assets',
        value: 3500000,
        user: '67328b04d4e49cc40a2bb969'
    },
    {
        name: 'Ferrari F8 Tributo',
        category: 'Cars',
        value: 300000,
        user: '67328b04d4e49cc40a2bb96a'
    },
    {
        name: 'Beachfront Property',
        category: 'Houses',
        value: 2200000,
        user: '67328b04d4e49cc40a2bb96a'
    },
    {
        name: 'Vacation Villa',
        category: 'Houses',
        value: 800000,
        user: '67328b04d4e49cc40a2bb96a'
    },
    {
        name: 'Luxury Car Collection',
        category: 'Cars',
        value: 1000000,
        user: '67328b04d4e49cc40a2bb96a'
    },
    {
        name: 'Smart Home System',
        category: 'Assets',
        value: 12000,
        user: '67328b04d4e49cc40a2bb96a'
    },
    {
        name: 'Modern Apartment in City Center',
        category: 'Houses',
        value: 600000,
        user: '67328b04d4e49cc40a2bb96b'
    },
    {
        name: 'Audi R8',
        category: 'Cars',
        value: 160000,
        user: '67328b04d4e49cc40a2bb96b'
    },
    {
        name: 'Gold Coins Collection',
        category: 'Assets',
        value: 250000,
        user: '67328b04d4e49cc40a2bb96b'
    },
    {
        name: 'Mountain Cabin',
        category: 'Houses',
        value: 400000,
        user: '67328b04d4e49cc40a2bb96b'
    },
    {
        name: 'Rare Art Collection',
        category: 'Assets',
        value: 500000,
        user: '67328b04d4e49cc40a2bb96b'
    }
];

Property.insertMany(goods)