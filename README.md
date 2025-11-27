# Raito-Opto Electronics Website

A modern, fully responsive website for Raito-Opto Electronics Pvt. Ltd., featuring advanced animations, sliders, and interactive elements.

## 📁 Project Structure

```
raycus_clone/
├── index.html              # Main HTML file with all page content
├── logo.jpg                # Company logo
├── public/                 # Public assets
│   ├── banner1.png        # Hero banner slide 1
│   ├── banner2.png        # Hero banner slide 2
│   ├── banner3.png        # Hero banner slide 3
│   ├── product1.png       # Product image 1
│   ├── product2.png       # Product image 2
│   ├── product3.png       # Product image 3
│   └── product4.png       # Product image 4
└── src/
    ├── main.js            # Main JavaScript (sliders, animations, interactions)
    ├── common.css         # Common styles (buttons, links, utilities)
    ├── index_raycus_part1.css  # Styles for upper sections
    └── index_raycus_part2.css  # Styles for lower sections
```

## 🎨 Key Features

### 1. **Animated Loader**
- Yellow water-filling animation
- Logo reveal effect using blend modes
- Auto-hides after 2 seconds

### 2. **Hero Banner Slider**
- Auto-playing carousel with 3 custom product images
- Pagination dots for navigation
- Previous/Next buttons
- 5-second slide interval

### 3. **Product Section**
- **Synchronized Swipers**: Left side (titles) and right side (images) move together
- **Dynamic Numbering**: Background number changes (01→02→03→04)
- **Responsive**: Shows 3 products on desktop, 2 on tablet, 1 on mobile
- **Vertical Fade**: Product titles fade in/out vertically

### 4. **News Section**
- Three tabs: Raito-Opto News, Industry Trends, Rayclass
- Auto-playing news carousel
- All news images display company logo
- Responsive grid layout

### 5. **Sticky Header**
- Becomes fixed when scrolling down
- Smooth transition animation
- Compact design when sticky

### 6. **Animated Counters**
- Numbers count up when scrolled into view
- Smooth animation effect
- Displays: Years Experience, Employees, Offices, Countries

### 7. **Color Theme**
- Primary color: Yellow (#ffcc00)
- Replaces all original blue elements
- Consistent branding throughout

## 🔧 Main JavaScript Functions

### Swiper Instances

```javascript
// Banner Slider
const bannerSwiper = new Swiper('.banner', {...})

// Product Title Slider (Left)
const productTitleSwiper = new Swiper('.product-title-swiper', {...})

// Product Image Slider (Right)
const productSwiper = new Swiper('.product-swiper', {...})

// News Slider
const newsSwiper = new Swiper('.news-swiper', {...})
```

### Event Listeners

```javascript
// Sticky header on scroll
window.addEventListener('scroll', () => {...})

// Product number update
productSwiper.on('slideChange', function () {...})

// News tab switching
tabs.forEach(tab => {
  tab.addEventListener('click', function () {...})
})

// Animated counters
window.addEventListener('scroll', startCounters)
```

## 📝 HTML Structure

### Main Sections

1. **Loader** (`#loader`)
   - `.loader-content` - Container
   - `.loader-logo` - Logo with blend mode
   - `.water-fill` - Yellow water animation

2. **Header** (`.header`)
   - `.logo` - Company logo
   - `.lang-select` - Language selector
   - `.nav-box` - Navigation menu

3. **Banner** (`.bannerBox`)
   - `.banner.swiper-container` - Hero slider
   - `.data-show-box` - Animated statistics

4. **Product Section** (`.part2`)
   - `.product-title-swiper` - Left side titles
   - `.product-swiper` - Right side images
   - `.product-number` - Dynamic number display

5. **News Section** (`.part4`)
   - `.news-tab-box` - Tab navigation
   - `.news-swiper` - News carousel

6. **Footer** (`.footer`)
   - Company information
   - Social links
   - Copyright

## 🎯 Customization Guide

### Changing Colors

The primary yellow color (#ffcc00) is used throughout. To change it:

**In CSS files:**
```css
/* Search for #ffcc00 and replace with your color */
background-color: #ffcc00;
color: #ffcc00;
border-color: #ffcc00;
```

### Updating Images

**Banner Images:**
- Replace `public/banner1.png`, `banner2.png`, `banner3.png`
- Recommended size: 1920x1080px

**Product Images:**
- Replace `public/product1.png` through `product4.png`
- Recommended size: 800x800px

**Logo:**
- Replace `logo.jpg` in root directory
- Recommended size: 200x50px (transparent background)

### Modifying Slider Speed

**In `src/main.js`:**
```javascript
// Banner: Change delay from 5000ms (5 seconds)
autoplay: { delay: 5000 }

// Products: Change delay from 3000ms (3 seconds)
autoplay: { delay: 3000 }

// News: Change delay from 3500ms (3.5 seconds)
autoplay: { delay: 3500 }
```

### Adding/Removing Products

**In `index.html`:**

1. Find the `.product-title-swiper` section
2. Add/remove `.swiper-slide` divs with product titles

3. Find the `.product-swiper` section
4. Add/remove corresponding `.swiper-slide` divs with product images

**Update the counter in `main.js`:**
```javascript
// Change 4 to your total number of unique products
const realIndex = (productSwiper.realIndex % 4) + 1;
```

## 🚀 Running the Website

### Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px (1 column)
- **Tablet**: 768px - 1023px (2 columns)
- **Desktop**: 1024px+ (3 columns)

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📦 Dependencies

- **Swiper.js** - Modern slider library
- **AOS** - Animate On Scroll library
- **Vite** - Build tool and dev server

## 💡 Tips

1. **Performance**: Images are loaded from CDN for news items. Consider hosting locally for better performance.

2. **SEO**: Update meta tags in `index.html` for better search engine optimization.

3. **Analytics**: Add Google Analytics or similar tracking code before the closing `</body>` tag.

4. **Accessibility**: All images have alt text. Ensure new images also include descriptive alt attributes.

## 🐛 Common Issues

### Slider Not Working
- Check that Swiper CSS is imported in `main.js`
- Verify HTML structure matches Swiper requirements
- Check browser console for errors

### Images Not Loading
- Verify image paths are correct
- Check that images exist in `public/` folder
- Ensure dev server is running

### Animations Not Triggering
- Check AOS initialization in `main.js`
- Verify elements have `data-aos` attributes
- Clear browser cache

## 📄 License

© 2025 Raito-Opto Electronics Pvt. Ltd. All Rights Reserved.

## 👥 Support

For questions or issues, contact the development team.
