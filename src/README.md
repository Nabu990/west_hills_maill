# West Hills Mall Website

A modern, responsive website featuring West Hills Mall in Accra, Ghana. Built with React, Vite, and TailwindCSS with beautiful animations and interactive design.

## Features

- **Animated Hero Section**: Mall overview with rating, address, contact info, hours, and animated stats grid
- **Categories**: Browse stores by category with gradient icons and hover effects (Food & Drink, Clothing, Health & Beauty, Home & Kitchen)
- **Photo Gallery**: Interactive image gallery with lightbox and navigation
- **Featured Stores**: Highlighted stores with image placeholders, ratings, reviews, and operating hours
- **Popular Tags**: Animated tags with hover effects and search counts
- **Customer Reviews**: Beautiful review cards with quotes, ratings, and user info
- **Scroll Animations**: Elements animate as you scroll down the page
- **Responsive Design**: Fully responsive layout for all screen sizes
- **Modern UI**: Gradients, shadows, backdrop blur, and smooth transitions

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **TailwindCSS** - Styling
- **Lucide React** - Icons

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to the URL shown in the terminal (usually http://localhost:5173)

## Adding Real Images

The `images/` folder contains placeholder files. To add real images:

1. Replace the placeholder files in the `images/` folder with actual images:
   - `hero-bg.jpg` - Hero background image
   - `mall-exterior.jpg` - Mall exterior photo
   - `food-court.jpg` - Food court photo
   - `shopping.jpg` - Shopping area photo
   - `cinema.jpg` - Cinema photo
   - `melcom.jpg` - Melcom store photo
   - `pizza-inn.jpg` - Pizza Inn photo
   - `barcelos.jpg` - Barcelos photo
   - `silverbird.jpg` - Silverbird Cinemas photo

2. The images will automatically appear in the gallery and store cards

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.
