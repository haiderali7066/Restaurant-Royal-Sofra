"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, Heart, Plus, Minus, ShoppingBag, Trash2, Search } from "lucide-react";
import Navbar from "@/components/header";
import Footer from "@/components/footer";

// ALL SOFRA MENU CATEGORIES
const CATEGORIES = [
  { name: "Appetizers", slug: "appetizers" },
  { name: "Signature Handi", slug: "signature-handi" },
  { name: "Karahi", slug: "karahi" },
  { name: "BBQ", slug: "bbq" },
  { name: "Chinese", slug: "chinese" },
  { name: "Rice & Noodles", slug: "rice-noodles" },
  { name: "Fish", slug: "fish" },
  { name: "Takka Takk", slug: "takka-takk" },
  { name: "Platters", slug: "platters" },
  { name: "Tandoor", slug: "tandoor" },
  { name: "Beverages", slug: "beverages" },
  { name: "Desserts", slug: "desserts" },
];

interface PortionOption {
  label: string;
  price: number;
}

interface Product {
  id: number;
  name: string;
  description: string;
  categorySlug: string;
  image: string;
  options: PortionOption[];
}

// FULL MENU DATA DIRECTLY FROM SOFRA MENU CARD
const PRODUCTS: Product[] = [
  // --- APPETIZERS ---
  {
    id: 101,
    name: "Signature Special Soup",
    description: "Sofra's exclusive thick soup packed with shredded chicken, prawns, and black mushrooms.",
    categorySlug: "appetizers",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=600",
    options: [{ label: "Standard", price: 430 }],
  },
  {
    id: 102,
    name: "Hot & Sour Soup",
    description: "Classic Chinese starter broth spiced with white pepper, soy, vinegar, and fresh veggies.",
    categorySlug: "appetizers",
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=600",
    options: [{ label: "Standard", price: 350 }],
  },
  {
    id: 103,
    name: "Chicken Corn Soup",
    description: "Traditional comforting soup loaded with tender shredded chicken and sweet corn kernels.",
    categorySlug: "appetizers",
    image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?q=80&w=600",
    options: [{ label: "Standard", price: 320 }],
  },
  {
    id: 104,
    name: "Garden Salad",
    description: "Fresh crisp cucumbers, juicy tomatoes, onions, and seasonal garden greens.",
    categorySlug: "appetizers",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600",
    options: [{ label: "Standard", price: 180 }],
  },
  {
    id: 105,
    name: "Russian Salad",
    description: "Diced garden fruits and boiled vegetables tossed in smooth sweetened mayo cream.",
    categorySlug: "appetizers",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=600",
    options: [{ label: "Standard", price: 180 }],
  },
  {
    id: 106,
    name: "Waldorf Salad",
    description: "Premium salad featuring crisp apples, walnuts, and fresh celery in light mayonnaise coating.",
    categorySlug: "appetizers",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600",
    options: [
      { label: "Full", price: 500 },
      { label: "Half", price: 450 },
    ],
  },
  {
    id: 107,
    name: "Kachumar Salad",
    description: "Finely chopped tomatoes, onions, green chilies tossed with fresh lemon juice and coriander.",
    categorySlug: "appetizers",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=600",
    options: [{ label: "Standard", price: 300 }],
  },
  {
    id: 108,
    name: "Zeera Raita",
    description: "Chilled whipped yogurt infused with roasted cumin seeds and fine herbs.",
    categorySlug: "appetizers",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=600",
    options: [{ label: "Standard", price: 180 }],
  },

  // --- SIGNATURE HANDI ---
  {
    id: 201,
    name: "Signature Boneless Handi",
    description: "Succulent chicken breast cubes slow-cooked in rich onion tomato creamy gravy.",
    categorySlug: "signature-handi",
    image: "https://images.unsplash.com/photo-1606499878233-0182ceac6f50?q=80&w=600",
    options: [
      { label: "Full", price: 1690 },
      { label: "Half", price: 950 },
    ],
  },
  {
    id: 202,
    name: "Chicken Handi",
    description: "Traditional bone-in chicken curry cooked in an earthen clay pot with traditional aromatics.",
    categorySlug: "signature-handi",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=600",
    options: [
      { label: "Full", price: 1530 },
      { label: "Half", price: 880 },
    ],
  },
  {
    id: 203,
    name: "Chicken Achari Handi",
    description: "Boneless chicken simmered with spicy tangy pickling spices and green chilies.",
    categorySlug: "signature-handi",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=600",
    options: [
      { label: "Full", price: 1690 },
      { label: "Half", price: 950 },
    ],
  },
  {
    id: 204,
    name: "Chicken Cheese Handi",
    description: "Rich Mughlai chicken gravy finished with melted mozzarella and heavy cream.",
    categorySlug: "signature-handi",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=600",
    options: [
      { label: "Full", price: 1600 },
      { label: "Half", price: 920 },
    ],
  },
  {
    id: 205,
    name: "Chicken Mughlai Handi",
    description: "Royal gravy prepared with cashew paste, cream, saffron, and subtle spices.",
    categorySlug: "signature-handi",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600",
    options: [
      { label: "Full", price: 1600 },
      { label: "Half", price: 920 },
    ],
  },
  {
    id: 206,
    name: "Chicken Madrasi Handi",
    description: "Spicy Southern style chicken gravy cooked with coconut milk, curry leaves, and mustard seeds.",
    categorySlug: "signature-handi",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=600",
    options: [
      { label: "Full", price: 1430 },
      { label: "Half", price: 820 },
    ],
  },
  {
    id: 207,
    name: "Chicken Ginger Handi",
    description: "Tender chicken strips wok-tossed with abundant julienned ginger and crushed pepper.",
    categorySlug: "signature-handi",
    image: "https://images.unsplash.com/photo-1606499878233-0182ceac6f50?q=80&w=600",
    options: [
      { label: "Full", price: 1300 },
      { label: "Half", price: 750 },
    ],
  },
  {
    id: 208,
    name: "Chicken Jalfrezi Handi",
    description: "Boneless chicken pieces cooked with crisp bell peppers, tomatoes, and fried onions.",
    categorySlug: "signature-handi",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=600",
    options: [
      { label: "Full", price: 1300 },
      { label: "Half", price: 750 },
    ],
  },
  {
    id: 209,
    name: "Chicken Hara Masala Handi",
    description: "Herbaceous green gravy made from fresh mint, coriander, green chilies, and yogurt.",
    categorySlug: "signature-handi",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=600",
    options: [
      { label: "Full", price: 1430 },
      { label: "Half", price: 820 },
    ],
  },
  {
    id: 210,
    name: "Chicken Tawa Handi",
    description: "Sizzling iron griddle prepared chicken coated in thick coarse onion-tomato masala.",
    categorySlug: "signature-handi",
    image: "https://images.unsplash.com/photo-1606499878233-0182ceac6f50?q=80&w=600",
    options: [
      { label: "Full", price: 1350 },
      { label: "Half", price: 780 },
    ],
  },
  {
    id: 211,
    name: "Mutton Handi",
    description: "Prime mutton cuts slow-cooked to perfection in traditional terracotta Handi.",
    categorySlug: "signature-handi",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600",
    options: [
      { label: "Full", price: 2390 },
      { label: "Half", price: 1350 },
    ],
  },
  {
    id: 212,
    name: "Mutton Achari Handi",
    description: "Mutton slow-cooked in pickled spice blend with cracked black seeds and dried red chili.",
    categorySlug: "signature-handi",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=600",
    options: [
      { label: "Full", price: 2390 },
      { label: "Half", price: 1350 },
    ],
  },
  {
    id: 213,
    name: "Mutton Brain Handi",
    description: "Fresh goat brain delicate curry tempered with garlic, fenugreek leaves, and butter.",
    categorySlug: "signature-handi",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600",
    options: [{ label: "Standard", price: 1590 }],
  },
  {
    id: 214,
    name: "Makhni Daal Handi",
    description: "Black lentils and kidney beans simmered overnight with white butter and fresh cream.",
    categorySlug: "signature-handi",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=600",
    options: [{ label: "Standard", price: 780 }],
  },
  {
    id: 215,
    name: "Mix Vegetable Handi",
    description: "Assorted seasonal garden vegetables tossed in home-style tomato onion masala.",
    categorySlug: "signature-handi",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600",
    options: [{ label: "Standard", price: 780 }],
  },
  {
    id: 216,
    name: "Palak Paneer Handi",
    description: "Soft cottage cheese cubes cooked in rich seasoned spinach puree.",
    categorySlug: "signature-handi",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=600",
    options: [{ label: "Standard", price: 780 }],
  },

  // --- KARAHI ---
  {
    id: 301,
    name: "Chicken Karahi",
    description: "Wok-cooked chicken stir-fried with tomatoes, green chilies, ginger, and black pepper.",
    categorySlug: "karahi",
    image: "https://images.unsplash.com/photo-1606499878233-0182ceac6f50?q=80&w=600",
    options: [
      { label: "Full", price: 1290 },
      { label: "Half", price: 750 },
      { label: "Quarter", price: 420 },
    ],
  },
  {
    id: 302,
    name: "Butter Chicken Karahi",
    description: "Chicken pieces cooked in rich tomato puree, butter, and light sweet spices.",
    categorySlug: "karahi",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=600",
    options: [
      { label: "Full", price: 1560 },
      { label: "Half", price: 880 },
    ],
  },
  {
    id: 303,
    name: "Lahori Chicken Karahi",
    description: "Traditional vibrant Lahori street style Karahi with thick tomato gravy and yogurt.",
    categorySlug: "karahi",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600",
    options: [
      { label: "Full", price: 1290 },
      { label: "Half", price: 750 },
    ],
  },
  {
    id: 304,
    name: "Shinwari Chicken Karahi",
    description: "Pashtun style minimal salt & black pepper chicken karahi cooked in animal fat & tomatoes.",
    categorySlug: "karahi",
    image: "https://images.unsplash.com/photo-1606499878233-0182ceac6f50?q=80&w=600",
    options: [
      { label: "Full", price: 1280 },
      { label: "Half", price: 740 },
    ],
  },
  {
    id: 305,
    name: "Mutton Karahi",
    description: "Fresh mutton stir-fried in a heavy cast iron wok with tomatoes, ginger, and chilies.",
    categorySlug: "karahi",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600",
    options: [
      { label: "Full", price: 2390 },
      { label: "Half", price: 1350 },
      { label: "Quarter", price: 750 },
    ],
  },
  {
    id: 306,
    name: "Lahori Mutton Karahi",
    description: "Flavorful mutton cooked in traditional spicy Lahori yogurt and onion curry base.",
    categorySlug: "karahi",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=600",
    options: [
      { label: "Full", price: 2390 },
      { label: "Half", price: 1350 },
    ],
  },
  {
    id: 307,
    name: "Shinwari Namkeen Karahi",
    description: "Authentic KPK style mutton cooked strictly with salt, fat, green chilies, and ripe tomatoes.",
    categorySlug: "karahi",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600",
    options: [
      { label: "Full", price: 2600 },
      { label: "Half", price: 1450 },
    ],
  },
  {
    id: 308,
    name: "Sulemani Karahi",
    description: "Mild aromatic mutton cooked with fresh garlic cloves, black pepper, and green chilies.",
    categorySlug: "karahi",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600",
    options: [
      { label: "Full", price: 2100 },
      { label: "Half", price: 1200 },
    ],
  },
  {
    id: 309,
    name: "Dum Pukht Koila Karahi",
    description: "Slow steam cooked mutton infused with real charcoal smoke.",
    categorySlug: "karahi",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=600",
    options: [
      { label: "Full", price: 2100 },
      { label: "Half", price: 1200 },
    ],
  },

  // --- BBQ ---
  {
    id: 401,
    name: "Chicken Tikka",
    description: "Charcoal-grilled quarter chicken piece marinated in traditional tandoori spices.",
    categorySlug: "bbq",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=600",
    options: [{ label: "Standard", price: 460 }],
  },
  {
    id: 402,
    name: "Chicken Malai Boti",
    description: "Melt-in-your-mouth boneless chicken cubes in cream, green cardamom, and light pepper.",
    categorySlug: "bbq",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600",
    options: [{ label: "Plate", price: 460 }],
  },
  {
    id: 403,
    name: "Chicken Achari Boti",
    description: "Charcoal skewers of chicken marinated in tangy pickling herbs and yogurt.",
    categorySlug: "bbq",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600",
    options: [{ label: "Plate", price: 460 }],
  },
  {
    id: 404,
    name: "Chicken Boti",
    description: "Classic charcoal-smoked boneless chicken cubes marinated in red spice mix.",
    categorySlug: "bbq",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=600",
    options: [{ label: "Plate", price: 460 }],
  },
  {
    id: 405,
    name: "Chicken Seekh Kabab",
    description: "Flame-grilled minced chicken skewers seasoned with crushed chilies and coriander.",
    categorySlug: "bbq",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600",
    options: [{ label: "Plate", price: 460 }],
  },
  {
    id: 406,
    name: "Beef Seekh Kabab",
    description: "Juicy minced beef mixed with traditional herbs and cooked on open embers.",
    categorySlug: "bbq",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600",
    options: [{ label: "Plate", price: 460 }],
  },
  {
    id: 407,
    name: "Fish Tikka",
    description: "Fresh fish cubes marinated in lemon, garlic, and carom seeds, grilled over coal.",
    categorySlug: "bbq",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600",
    options: [{ label: "Plate", price: 490 }],
  },
  {
    id: 408,
    name: "Crispy Finger Fish",
    description: "Golden fried breaded fish strips served with homemade tartar sauce.",
    categorySlug: "bbq",
    image: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?q=80&w=600",
    options: [{ label: "Plate", price: 1550 }],
  },
  {
    id: 409,
    name: "Mutton Ribs",
    description: "Smokey succulent lamb ribs glazed with special house barbecue rub.",
    categorySlug: "bbq",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600",
    options: [{ label: "Plate", price: 2999 }],
  },
  {
    id: 410,
    name: "Charcoal Bater (Quail)",
    description: "Whole marinated quails charbroiled over coal.",
    categorySlug: "bbq",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600",
    options: [
      { label: "Full (6 Pcs)", price: 1520 },
      { label: "Half (3 Pcs)", price: 799 },
    ],
  },

  // --- CHINESE ---
  {
    id: 501,
    name: "Chicken Cashewnut",
    description: "Stir-fried chicken, toasted cashews, capsicum, and celery in rich brown sauce.",
    categorySlug: "chinese",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=600",
    options: [{ label: "Standard", price: 1250 }],
  },
  {
    id: 502,
    name: "Chicken Chilli Dry",
    description: "Sliced chicken breast tossed with green chilies, garlic, and soy seasoning.",
    categorySlug: "chinese",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=600",
    options: [{ label: "Standard", price: 1150 }],
  },
  {
    id: 503,
    name: "Chicken Manchurian",
    description: "Wok-tossed chicken cubes in sweet & sour spicy garlic tomato glaze.",
    categorySlug: "chinese",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=600",
    options: [{ label: "Standard", price: 1099 }],
  },
  {
    id: 504,
    name: "Garlic Chicken",
    description: "Tender chicken cooked with loads of fresh crushed garlic and savory soy sauce.",
    categorySlug: "chinese",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=600",
    options: [{ label: "Standard", price: 1050 }],
  },
  {
    id: 505,
    name: "Black Pepper Chicken",
    description: "Chicken wok-fried with freshly cracked black peppercorns, onions, and capsicum.",
    categorySlug: "chinese",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=600",
    options: [{ label: "Standard", price: 1050 }],
  },

  // --- RICE & NOODLES ---
  {
    id: 601,
    name: "Signature Fried Rice",
    description: "Sofra special fried rice loaded with chicken, prawn, egg, and fresh garden veggies.",
    categorySlug: "rice-noodles",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=600",
    options: [{ label: "Standard", price: 800 }],
  },
  {
    id: 602,
    name: "Chicken Fried Rice",
    description: "Long-grain rice stir-fried with diced chicken, egg, and spring onions.",
    categorySlug: "rice-noodles",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=600",
    options: [{ label: "Standard", price: 680 }],
  },
  {
    id: 603,
    name: "Chicken Masala Rice",
    description: "Spiced fried rice infused with Pakistani wok aromatics and seasoned chicken.",
    categorySlug: "rice-noodles",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=600",
    options: [{ label: "Standard", price: 720 }],
  },
  {
    id: 604,
    name: "Egg Fried Rice",
    description: "Fluffy basmati rice tossed with scrambled egg, soy sauce, and scallions.",
    categorySlug: "rice-noodles",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=600",
    options: [{ label: "Standard", price: 610 }],
  },
  {
    id: 605,
    name: "Vegetable Fried Rice",
    description: "Aromatic rice stir-fried with shredded carrots, cabbage, and green peas.",
    categorySlug: "rice-noodles",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=600",
    options: [{ label: "Standard", price: 600 }],
  },
  {
    id: 606,
    name: "Chicken Chow Mein",
    description: "Stir-fried soft noodles tossed with chicken, crunchy vegetables, and savory seasonings.",
    categorySlug: "rice-noodles",
    image: "https://images.unsplash.com/photo-1541613569553-332a2574a508?q=80&w=600",
    options: [{ label: "Standard", price: 620 }],
  },
  {
    id: 607,
    name: "Vegetable Chow Mein",
    description: "Noodles wok-tossed with fresh capsicum, cabbage, carrots, and dark soy glaze.",
    categorySlug: "rice-noodles",
    image: "https://images.unsplash.com/photo-1541613569553-332a2574a508?q=80&w=600",
    options: [{ label: "Standard", price: 550 }],
  },
  {
    id: 608,
    name: "Kabuli Pulao",
    description: "Traditional Afghan rice topped with caramelized carrots, raisins, and tender meat.",
    categorySlug: "rice-noodles",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=600",
    options: [{ label: "Per Plate", price: 990 }],
  },
  {
    id: 609,
    name: "Plain Biryani",
    description: "Fragrant basmati biryani rice layered with saffron and fried onions.",
    categorySlug: "rice-noodles",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=600",
    options: [{ label: "Per Plate", price: 550 }],
  },
  {
    id: 610,
    name: "Chicken Masala Biryani",
    description: "Layered basmati rice with heavily spiced chicken curry and fresh herbs.",
    categorySlug: "rice-noodles",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=600",
    options: [{ label: "Per Plate", price: 750 }],
  },
  {
    id: 611,
    name: "Chicken Tikka Biryani",
    description: "Smokey charcoal-grilled chicken tikka boti embedded in spicy biryani rice.",
    categorySlug: "rice-noodles",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=600",
    options: [{ label: "Per Plate", price: 750 }],
  },

  // --- FISH ---
  {
    id: 701,
    name: "Rahu Fish",
    description: "Freshwater Rahu fish marinated in traditional Lahori spices and deep-fried.",
    categorySlug: "fish",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600",
    options: [
      { label: "Per Kg", price: 3400 },
      { label: "Half Kg", price: 900 },
    ],
  },
  {
    id: 702,
    name: "Saiman Fish",
    description: "Premium fried Saiman fish seasoned with garlic, roasted cumin, and red chili flakes.",
    categorySlug: "fish",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600",
    options: [
      { label: "Per Kg", price: 1700 },
      { label: "Half Kg", price: 850 },
    ],
  },
  {
    id: 703,
    name: "Mushka Fish",
    description: "Crispy fried Mushka fish cuts served with mint chutney and fresh lemon.",
    categorySlug: "fish",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600",
    options: [
      { label: "Per Kg", price: 1350 },
      { label: "Half Kg", price: 700 },
    ],
  },

  // --- TAKKA TAKK ---
  {
    id: 801,
    name: "Brain Masala",
    description: "Goat brain griddle-fried on high heat with ginger, tomatoes, and aromatic spices.",
    categorySlug: "takka-takk",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600",
    options: [{ label: "Plate", price: 700 }],
  },
  {
    id: 802,
    name: "Gurda",
    description: "Tawa-fried goat kidneys cooked in spicy coarse masala gravy.",
    categorySlug: "takka-takk",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600",
    options: [{ label: "Plate", price: 300 }],
  },
  {
    id: 803,
    name: "Dil",
    description: "Fresh goat heart chopped & fried live on heavy iron tawa.",
    categorySlug: "takka-takk",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600",
    options: [{ label: "Plate", price: 300 }],
  },
  {
    id: 804,
    name: "Kapoora",
    description: "Special griddle-fried goat organs cooked with green chilies and butter.",
    categorySlug: "takka-takk",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600",
    options: [{ label: "Plate", price: 300 }],
  },
  {
    id: 805,
    name: "Mutton Chop Takka Takk",
    description: "Tenderized mutton chops chopped live on griddle with spicy tomato gravy.",
    categorySlug: "takka-takk",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600",
    options: [{ label: "Per Plate", price: 1500 }],
  },
  {
    id: 806,
    name: "Mutton Qeema",
    description: "Minced mutton cooked with ginger, garlic, green chilies, and fresh butter on tawa.",
    categorySlug: "takka-takk",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600",
    options: [{ label: "Plate", price: 900 }],
  },

  // --- PLATTERS ---
  {
    id: 901,
    name: "Student Platter",
    description: "Single portion serving of Chicken Tikka, Seekh Kabab, Naan, and soft drink.",
    categorySlug: "platters",
    image: "https://images.unsplash.com/photo-1626804475297-41607ea0af49?q=80&w=600",
    options: [{ label: "Standard", price: 1199 }],
  },
  {
    id: 902,
    name: "Executive BBQ Platter",
    description: "Combines Malai Boti, Beef Seekh Kabab, Fish Tikka, Chicken Tikka, and Roghni Naan.",
    categorySlug: "platters",
    image: "https://images.unsplash.com/photo-1626804475297-41607ea0af49?q=80&w=600",
    options: [{ label: "Standard", price: 4999 }],
  },
  {
    id: 903,
    name: "Grill Platter",
    description: "Assorted grill feast featuring mixed BBQ skewers, chops, dips, and freshly baked naan.",
    categorySlug: "platters",
    image: "https://images.unsplash.com/photo-1626804475297-41607ea0af49?q=80&w=600",
    options: [{ label: "Standard", price: 4490 }],
  },
  {
    id: 904,
    name: "Family Feast",
    description: "Serves 3-4 Persons: Full BBQ selection, Chicken Handi, Biryani, Naan basket, & Salads.",
    categorySlug: "platters",
    image: "https://images.unsplash.com/photo-1626804475297-41607ea0af49?q=80&w=600",
    options: [{ label: "3-4 Persons", price: 6550 }],
  },
  {
    id: 905,
    name: "Grand Family Feast",
    description: "Serves 5-7 Persons: Royal grand meal with Mutton Karahi, BBQ array, Rice, Naan, & Desserts.",
    categorySlug: "platters",
    image: "https://images.unsplash.com/photo-1626804475297-41607ea0af49?q=80&w=600",
    options: [{ label: "5-7 Persons", price: 12600 }],
  },

  // --- TANDOOR ---
  {
    id: 1001,
    name: "Cheese Naan",
    description: "Leavened tandoori bread stuffed with melted cheese.",
    categorySlug: "tandoor",
    image: "https://images.unsplash.com/photo-1626508035298-42284af64bb2?q=80&w=600",
    options: [{ label: "Piece", price: 380 }],
  },
  {
    id: 1002,
    name: "Chicken Qeema Cheese Naan",
    description: "Tandoori bread stuffed with spiced minced chicken and melted cheese.",
    categorySlug: "tandoor",
    image: "https://images.unsplash.com/photo-1626508035298-42284af64bb2?q=80&w=600",
    options: [{ label: "Piece", price: 300 }],
  },
  {
    id: 1003,
    name: "Chicken Qeema Naan",
    description: "Clay oven naan stuffed with herbs and minced chicken meat.",
    categorySlug: "tandoor",
    image: "https://images.unsplash.com/photo-1626508035298-42284af64bb2?q=80&w=600",
    options: [{ label: "Piece", price: 300 }],
  },
  {
    id: 1004,
    name: "Garlic Naan",
    description: "Freshly baked naan coated with crushed garlic, butter, and parsley.",
    categorySlug: "tandoor",
    image: "https://images.unsplash.com/photo-1626508035298-42284af64bb2?q=80&w=600",
    options: [{ label: "Piece", price: 150 }],
  },
  {
    id: 1005,
    name: "Roghni Naan",
    description: "Traditional soft tandoori bread sprinkled with sesame seeds and brushed with milk/butter.",
    categorySlug: "tandoor",
    image: "https://images.unsplash.com/photo-1626508035298-42284af64bb2?q=80&w=600",
    options: [{ label: "Piece", price: 120 }],
  },
  {
    id: 1006,
    name: "Kalonji Naan",
    description: "Fluffy naan topped with aromatic nigella seeds.",
    categorySlug: "tandoor",
    image: "https://images.unsplash.com/photo-1626508035298-42284af64bb2?q=80&w=600",
    options: [{ label: "Piece", price: 120 }],
  },
  {
    id: 1007,
    name: "Tandoori Paratha",
    description: "Layered crispy whole wheat flatbread baked in clay oven.",
    categorySlug: "tandoor",
    image: "https://images.unsplash.com/photo-1626508035298-42284af64bb2?q=80&w=600",
    options: [{ label: "Piece", price: 100 }],
  },
  {
    id: 1008,
    name: "Khamiri Roti",
    description: "Traditional yeast-leavened Pakistani flatbread.",
    categorySlug: "tandoor",
    image: "https://images.unsplash.com/photo-1626508035298-42284af64bb2?q=80&w=600",
    options: [{ label: "Per Head", price: 30 }],
  },
  {
    id: 1009,
    name: "Chapati",
    description: "Thin whole-wheat flatbread prepared fresh on griddle.",
    categorySlug: "tandoor",
    image: "https://images.unsplash.com/photo-1626508035298-42284af64bb2?q=80&w=600",
    options: [{ label: "Per Head", price: 17 }],
  },

  // --- BEVERAGES ---
  {
    id: 1101,
    name: "Fresh Lime",
    description: "Refreshing sparkling drink made with real squeezed lime juice.",
    categorySlug: "beverages",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600",
    options: [{ label: "Glass", price: 120 }],
  },
  {
    id: 1102,
    name: "Mint Mojito",
    description: "Crushed fresh mint leaves, lemon juice, ice, and sparkling soda water.",
    categorySlug: "beverages",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600",
    options: [{ label: "Glass", price: 350 }],
  },
  {
    id: 1103,
    name: "Blue Lagoon",
    description: "Cool blue curaçao mocktail mixed with citrus soda and mint.",
    categorySlug: "beverages",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600",
    options: [{ label: "Glass", price: 350 }],
  },
  {
    id: 1104,
    name: "Signature Lemonade",
    description: "Sofra's special handcrafted iced citrus lemonade.",
    categorySlug: "beverages",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600",
    options: [{ label: "Glass", price: 300 }],
  },
  {
    id: 1105,
    name: "Ice Tea",
    description: "Chilled sweetened black tea infused with peach or lemon flavour.",
    categorySlug: "beverages",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=600",
    options: [{ label: "Glass", price: 300 }],
  },
  {
    id: 1106,
    name: "Fresh Juices",
    description: "Pure freshly squeezed seasonal fruit juice.",
    categorySlug: "beverages",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=600",
    options: [{ label: "Glass", price: 450 }],
  },
  {
    id: 1107,
    name: "Ice Cream Shake",
    description: "Thick creamy milkshakes made with premium ice cream scoops.",
    categorySlug: "beverages",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600",
    options: [{ label: "Glass", price: 500 }],
  },
  {
    id: 1108,
    name: "Soft Drink",
    description: "Chilled carbonated soft drink selection.",
    categorySlug: "beverages",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=600",
    options: [
      { label: "Can", price: 160 },
      { label: "1.5 Ltr", price: 240 },
    ],
  },
  {
    id: 1109,
    name: "Mineral Water",
    description: "Pure bottled drinking water.",
    categorySlug: "beverages",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?q=80&w=600",
    options: [
      { label: "Large", price: 150 },
      { label: "Small", price: 80 },
    ],
  },

  // --- DESSERTS ---
  {
    id: 1201,
    name: "Ice Cream",
    description: "Rich traditional ice cream available in Vanilla, Chocolate, and Mango flavors.",
    categorySlug: "desserts",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=600",
    options: [
      { label: "1 Scoop", price: 160 },
      { label: "2 Scoops", price: 310 },
      { label: "3 Scoops", price: 360 },
    ],
  },
  {
    id: 1202,
    name: "Kulfi",
    description: "Traditional frozen dairy dessert scented with pistachio and saffron.",
    categorySlug: "desserts",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=600",
    options: [{ label: "Standard", price: 200 }],
  },
  {
    id: 1203,
    name: "Hot Qehwa",
    description: "Traditional green tea boiled with cardamom and cinnamon.",
    categorySlug: "desserts",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=600",
    options: [{ label: "Cup", price: 60 }],
  },
];

interface CartItem {
  cartId: string; // Unique combination of product id + chosen option
  id: number;
  name: string;
  optionLabel: string;
  price: number;
  quantity: number;
  image: string;
}

function MenuContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const categoryQuery = searchParams.get("category");

  // Category State
  const [activeCategorySlug, setActiveCategorySlug] = useState<string>(
    categoryQuery || CATEGORIES[0].slug
  );

  // Search State
  const [searchQuery, setSearchQuery] = useState("");

  // Wishlist State
  const [favorites, setFavorites] = useState<number[]>([]);

  // Selected Variant Option for each item: { [productId]: optionIndex }
  const [selectedVariants, setSelectedVariants] = useState<{ [key: number]: number }>({});

  // Item Quantities for cards: { [productId]: number }
  const [itemQuantities, setItemQuantities] = useState<{ [key: number]: number }>({});

  // Cart State
  const [cart, setCart] = useState<CartItem[]>([]);

  // Temporary added alert
  const [addedNotice, setAddedNotice] = useState<number | null>(null);

  const categoryScrollRef = useRef<HTMLDivElement>(null);

  // Sync category state when URL parameter changes
  useEffect(() => {
    if (categoryQuery) {
      const match = CATEGORIES.find((cat) => cat.slug === categoryQuery);
      if (match) {
        setActiveCategorySlug(match.slug);
      }
    }
  }, [categoryQuery]);

  const currentCategoryObj =
    CATEGORIES.find((cat) => cat.slug === activeCategorySlug) || CATEGORIES[0];

  // Filter products by category AND search query
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = product.categorySlug === activeCategorySlug;
    const matchesSearch =
      searchQuery.trim() === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return searchQuery.trim() === "" ? matchesCategory : matchesSearch;
  });

  const handleCategorySelect = (slug: string) => {
    setActiveCategorySlug(slug);
    setSearchQuery("");
    router.push(`/menu?category=${slug}`, { scroll: false });
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const scrollCategories = (direction: "left" | "right") => {
    if (categoryScrollRef.current) {
      const scrollAmount = direction === "left" ? -250 : 250;
      categoryScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Set chosen variant (Full, Half, Quarter, etc.)
  const handleVariantSelect = (productId: number, optionIdx: number) => {
    setSelectedVariants((prev) => ({ ...prev, [productId]: optionIdx }));
  };

  // Card Quantity Selector
  const handleQuantityChange = (productId: number, delta: number) => {
    setItemQuantities((prev) => {
      const current = prev[productId] || 1;
      const updated = Math.max(1, current + delta);
      return { ...prev, [productId]: updated };
    });
  };

  // Add Item to Cart
  const handleAddToCart = (product: Product) => {
    const selectedOptIdx = selectedVariants[product.id] || 0;
    const chosenOption = product.options[selectedOptIdx] || product.options[0];
    const qtyToAdd = itemQuantities[product.id] || 1;
    const cartId = `${product.id}-${chosenOption.label}`;

    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex((item) => item.cartId === cartId);
      if (existingIdx > -1) {
        const updated = [...prevCart];
        updated[existingIdx].quantity += qtyToAdd;
        return updated;
      } else {
        return [
          ...prevCart,
          {
            cartId,
            id: product.id,
            name: product.name,
            optionLabel: chosenOption.label,
            price: chosenOption.price,
            quantity: qtyToAdd,
            image: product.image,
          },
        ];
      }
    });

    // Reset card quantity counter to 1
    setItemQuantities((prev) => ({ ...prev, [product.id]: 1 }));

    // Show temporary "Added" feedback
    setAddedNotice(product.id);
    setTimeout(() => {
      setAddedNotice(null);
    }, 1400);
  };

  // Sidebar Cart Quantity Adjustment
  const updateCartQuantity = (cartId: string, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.cartId === cartId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeFromCart = (cartId: string) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="flex-1 w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* SEARCH BAR & HEADER BANNER */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-[#FAF7F2] p-4 md:p-6 rounded-2xl border border-[#E8DFD3] shadow-sm">
        <div>
          <span className="text-[#D4A24C] font-extrabold uppercase tracking-widest text-xs block mb-1">
            Rawalpindi Food Street
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-[#2B1B12] tracking-tight">
            SOFRA Menu Delicacies
          </h2>
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5C4638]" size={18} />
          <input
            type="text"
            placeholder="Search food items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#FFFDF9] border border-[#E8DFD3] rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#2B1B12] placeholder-[#5C4638]/60 focus:outline-none focus:border-[#D4A24C] transition-colors"
          />
        </div>
      </div>

      {/* 1. CATEGORY NAVIGATION BAR */}
      <div className="flex items-center gap-2 mb-10 bg-[#FAF7F2] p-2.5 rounded-2xl relative shadow-sm border border-[#E8DFD3]">
        <button
          onClick={() => scrollCategories("left")}
          className="w-10 h-10 shrink-0 bg-[#FFFDF9] border border-[#E8DFD3] rounded-full flex items-center justify-center text-[#D4A24C] hover:bg-[#D4A24C] hover:text-[#FFFFFF] shadow-sm z-10 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft size={22} />
        </button>

        <div
          ref={categoryScrollRef}
          className="flex-1 flex items-center gap-2.5 overflow-x-auto hide-scrollbar scroll-smooth px-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeCategorySlug === cat.slug && searchQuery === "";
            return (
              <button
                key={cat.slug}
                onClick={() => handleCategorySelect(cat.slug)}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? "bg-[#D4A24C] text-[#FFFFFF] shadow-md scale-[1.02]"
                    : "bg-[#FFFDF9] text-[#2B1B12] hover:bg-[#FAF7F2] hover:text-[#D4A24C] shadow-sm border border-[#E8DFD3]"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => scrollCategories("right")}
          className="w-10 h-10 shrink-0 bg-[#FFFDF9] border border-[#E8DFD3] rounded-full flex items-center justify-center text-[#D4A24C] hover:bg-[#D4A24C] hover:text-[#FFFFFF] shadow-sm z-10 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* 2. MAIN LAYOUT (Overlapping Image Cards + Sticky Cart Sidebar) */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
  {/* Left Side: Product Grid */}
  <div className="flex-1 w-full">
    {/* Header */}
    <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E8DFD3]">
      <div>
        <span className="text-[#D4A24C] font-bold uppercase tracking-widest text-xs block mb-1">
          {searchQuery ? "Search Results" : "Selected Category"}
        </span>
        <h1 className="text-3xl font-black text-[#2B1B12]">
          {searchQuery ? `"${searchQuery}"` : currentCategoryObj.name}
        </h1>
      </div>
      <span className="text-sm font-semibold text-[#5C4638] bg-[#FAF7F2] px-4 py-1.5 rounded-full border border-[#E8DFD3]">
        {filteredProducts.length} {filteredProducts.length === 1 ? "Item" : "Items"}
      </span>
    </div>

    {/* Product Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => {
          const isFav = favorites.includes(product.id);
          const selectedOptIdx = selectedVariants[product.id] || 0;
          const activeOption = product.options[selectedOptIdx] || product.options[0];
          const currentQty = itemQuantities[product.id] || 1;
          const isJustAdded = addedNotice === product.id;

          return (
            <div
              key={product.id}
              className="flex flex-col bg-[#FFFDF9] rounded-2xl overflow-hidden border border-[#E8DFD3] hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="relative w-full aspect-square bg-[#FAF7F2]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:scale-105 transition-transform"
                  aria-label="Favorite item"
                >
                  <Heart
                    size={18}
                    className={`transition-colors ${
                      isFav ? "fill-[#D4A24C] text-[#D4A24C]" : "text-[#5C4638] hover:text-[#D4A24C]"
                    }`}
                  />
                </button>
              </div>

              {/* Content Section */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-lg text-[#2B1B12] mb-1 truncate">
                  {product.name}
                </h3>
                <p className="text-sm text-[#5C4638] mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Variant Selector */}
                {product.options.length > 1 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {product.options.map((opt, idx) => (
                        <button
                          key={opt.label}
                          onClick={() => handleVariantSelect(product.id, idx)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                            selectedOptIdx === idx
                              ? "bg-[#2B1B12] text-white"
                              : "bg-[#FAF7F2] text-[#5C4638] border border-[#E8DFD3] hover:border-[#D4A24C]"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Price & Actions */}
                <div className="mt-auto pt-4 border-t border-[#FAF7F2]">
                  <div className="text-2xl font-black text-[#2B1B12] mb-3">
                    Rs. {activeOption.price.toLocaleString()}
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Quantity Selector */}
                    <div className="flex items-center bg-[#FAF7F2] border border-[#E8DFD3] rounded-xl p-1">
                      <button
                        onClick={() => handleQuantityChange(product.id, -1)}
                        className="w-8 h-8 flex items-center justify-center bg-white rounded-lg text-[#2B1B12] hover:text-[#D4A24C] border border-[#E8DFD3]"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center font-bold text-sm text-[#2B1B12]">
                        {currentQty}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(product.id, 1)}
                        className="w-8 h-8 flex items-center justify-center bg-white rounded-lg text-[#2B1B12] hover:text-[#D4A24C] border border-[#E8DFD3]"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    {/* Add to Cart */}
                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`flex-1 flex items-center justify-center gap-2 font-bold py-2.5 px-4 rounded-xl text-sm transition-colors ${
                        isJustAdded
                          ? "bg-[#2B1B12] text-white"
                          : "bg-[#D4A24C] hover:bg-[#B8862B] text-white"
                      }`}
                    >
                      {isJustAdded ? (
                        <span>✓ ADDED</span>
                      ) : (
                        <>
                          <Plus size={16} /> ADD
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="col-span-full py-16 text-center bg-[#FFFDF9] rounded-2xl border border-[#E8DFD3]">
          <p className="text-lg font-bold text-[#2B1B12]">No delicacies found.</p>
          <p className="text-sm text-[#5C4638] mt-1">Try searching for a different dish.</p>
        </div>
      )}
    </div>
  </div>

  {/* Right Side: Cart Sidebar */}
  <aside className="hidden lg:flex flex-col w-[340px] shrink-0 bg-[#FFFDF9] rounded-2xl p-5 border border-[#E8DFD3] sticky top-[120px] max-h-[calc(100vh-140px)] shadow-sm">
    <div className="flex items-center justify-between pb-4 border-b border-[#E8DFD3]">
      <div className="flex items-center gap-2 text-[#2B1B12]">
        <ShoppingBag size={20} className="text-[#D4A24C]" />
        <h3 className="font-bold uppercase tracking-wide">Your Order</h3>
      </div>
      <span className="bg-[#FAF7F2] text-[#D4A24C] border border-[#E8DFD3] text-xs font-bold px-2.5 py-1 rounded-full">
        {totalCartCount} Items
      </span>
    </div>

    {cart.length > 0 ? (
      <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-2">
        {cart.map((item) => (
          <div key={item.cartId} className="flex gap-3 relative group">
            <div className="w-16 h-16 relative rounded-lg overflow-hidden shrink-0 border border-[#E8DFD3]">
              <Image src={item.image} alt={item.name} fill className="object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-sm text-[#2B1B12] truncate">{item.name}</h4>
              <span className="text-[11px] font-semibold text-[#5C4638]">
                {item.optionLabel}
              </span>
              <p className="text-sm font-bold text-[#D4A24C] mt-0.5">
                Rs. {(item.price * item.quantity).toLocaleString()}
              </p>
              
              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center bg-[#FAF7F2] border border-[#E8DFD3] rounded-md px-1">
                  <button
                    onClick={() => updateCartQuantity(item.cartId, -1)}
                    className="w-6 h-6 flex items-center justify-center text-[#2B1B12]"
                  >
                    -
                  </button>
                  <span className="px-2 text-xs font-bold text-[#2B1B12]">{item.quantity}</span>
                  <button
                    onClick={() => updateCartQuantity(item.cartId, 1)}
                    className="w-6 h-6 flex items-center justify-center text-[#2B1B12]"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.cartId)}
                  className="text-[#5C4638] hover:text-red-500 transition-colors"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className="flex-1 flex flex-col items-center justify-center text-center py-10">
        <ShoppingBag size={40} className="text-[#E8DFD3] mb-4" />
        <h4 className="font-bold text-[#2B1B12] mb-1">Bag is Empty</h4>
        <p className="text-sm text-[#5C4638]">Add items to begin your order.</p>
      </div>
    )}

    <div className="pt-4 border-t border-[#E8DFD3] mt-auto">
      <div className="flex justify-between items-center mb-4">
        <span className="font-bold text-[#2B1B12]">Subtotal</span>
        <span className="text-lg font-black text-[#D4A24C]">
          Rs. {cartSubtotal.toLocaleString()}
        </span>
      </div>
      <button
        disabled={cart.length === 0}
        className={`w-full rounded-xl py-3.5 font-bold text-sm uppercase tracking-wider transition-colors ${
          cart.length > 0
            ? "bg-[#D4A24C] hover:bg-[#B8862B] text-white"
            : "bg-[#E8DFD3] text-[#5C4638]/50 cursor-not-allowed"
        }`}
      >
        Checkout
      </button>
    </div>
  </aside>
</div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `
      }} />
    </main>
  );
}

export default function MenuPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFFFF] font-sans text-[#2B1B12]">
      <Navbar />
      <Suspense fallback={
        <div className="min-h-[60vh] flex items-center justify-center text-[#D4A24C] font-bold">
          Loading Royal Sofra Menu...
        </div>
      }>
        <MenuContent />
      </Suspense>
      <Footer />
    </div>
  );
}