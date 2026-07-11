# West Hills Mall Website

A modern, responsive website featuring West Hills Mall in Accra, Ghana. Built with React, Vite, and TailwindCSS with beautiful animations and interactive design.

## Features

- **Animated Hero Section**: Full-screen hero with actual night view image, rating, address, contact info, hours, and animated stats grid
- **Categories**: Browse stores by category with gradient icons and hover effects (Food & Drink, Clothing, Sports & Fitness, Entertainment)
- **Photo Gallery**: Interactive image gallery with real mall photos and lightbox navigation
- **Showcase Sections**: Dedicated sections for Food & Dining, Fashion & Clothing, Sports & Fitness, Footwear, and Accessories with real product images
- **Featured Stores**: Highlighted stores with actual images, ratings, reviews, and operating hours
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

### Fixing PowerShell Execution Policy (Windows)

If you encounter a PowerShell execution policy error, run this command in PowerShell as Administrator:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then run:

```bash
npm install
npm run dev
```

### Alternative: Use Command Prompt

If PowerShell issues persist, use Command Prompt instead:

1. Open Command Prompt (cmd)
2. Navigate to the project directory
3. Run:
   ```bash
   npm install
   npm run dev
   ```

3. Open your browser to the URL shown in the terminal (usually http://localhost:5173)

## Images Used

The website uses actual images from the `images/` folder:

- **Hero**: night-view.jpg
- **Gallery**: night-view.jpg, half-view.jpg, food-area.jpg, game-room.jpg, bar-view.jpg, workes.jpg
- **Food Section**: food-section-1.jpg, food-section-2.jpg, Ice-cream.jpg, bar-view-1.jpg, bar-view-3.jpg, fruits.jpg
- **Fashion Section**: cloths-section.jpg, cloths-section-1.jpg, cloths-section-2.jpg, cloths-section-3.jpg
- **Sports Section**: football-section.jpg, football-section-1.jpg through 5.jpg, football-boots.jpg, football-boots-1.jpg, 3.jpg, 4.jpg, 5.jpg
- **Footwear Section**: shoes.jpg, shoes-1.jpg through 5.jpg
- **Accessories Section**: caps.jpg, caps-1.jpg through 5.jpg

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.
