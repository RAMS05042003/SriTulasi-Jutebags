# Sri Tulasi - Premium Jute Bags Website

A professional, end-to-end website for a Jute Bags business with product catalog and WhatsApp ordering functionality.

## Features

- **Professional Homepage** - Hero section, business overview, and featured products
- **Product Catalog** - 12 products across 6 categories (School, Corporate, Government, Retail, Promotional, Lifestyle)
- **Category Filtering** - Easy navigation by product category
- **WhatsApp Integration** - Direct ordering via WhatsApp for products
- **Contact Form** - Professional contact page for inquiries and quotes
- **About Page** - Company story, values, and statistics
- **Responsive Design** - Mobile-friendly layout that works on all devices
- **Modern UI** - Clean, professional design with smooth animations
- **No Dependencies** - Pure HTML, CSS, and JavaScript - no build tools required

## File Structure

```
jute-bags-website/
├── index.html          # Homepage
├── products.html       # Product catalog page
├── about.html          # About us page
├── contact.html        # Contact page
├── cart.html           # Shopping cart page
├── styles.css          # All styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## How to Use

### Local Development

1. **Download or clone** the project to your local machine
2. **Open the folder** in your file explorer
3. **Double-click `index.html`** to open the website in your browser
4. **Navigate** through the pages using the navigation menu

### Customization

#### Configure WhatsApp

The website includes WhatsApp integration for direct ordering. To set it up:

1. **Open `script.js`** and find the WhatsApp configuration at the top:
   ```javascript
   const WHATSAPP_NUMBER = "916300152676"; // Format: country code + number (no spaces, dashes, or +)
   ```

2. **Replace the number** with your business WhatsApp number:
   - Format: Country code + phone number (no spaces, dashes, or + sign)
   - Example: For US number +1 (555) 123-4567, use: `15551234567`
   - Example: For India number +91 98765 43210, use: `919876543210`

3. **Test the integration** by clicking "Order via WhatsApp" on any product

**WhatsApp Features:**
- Product ordering directly from product cards
- Contact form submissions

#### Change Business Information

Edit the following files to customize for your business:

- **Contact Details**: Update in `contact.html` and `footer` sections in all HTML files
  - Email: `info@ecojute.com`
  - Phone: `+1 (555) 123-4567`
  - Address: `123 Green Street, Eco City`

- **Business Name**: Replace "Sri Tulasi" with your business name in all HTML files

#### Modify Products

Edit the `products` array in `script.js` to add, remove, or modify products:

```javascript
const products = [
    {
        id: 1,
        name: "Your Product Name",
        category: "school", // school, corporate, government, retail, promotional, lifestyle
        price: 25.99,
        description: "Product description",
        badge: "Best Seller", // Optional: leave empty string for no badge
        color: "#4A7C59" // Color for product display
    },
    // Add more products...
];
```

#### Change Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2D5A3D;    /* Main brand color */
    --secondary-color: #8B7355;  /* Secondary color */
    --accent-color: #D4A574;     /* Accent color */
    --text-dark: #1A1A1A;         /* Dark text */
    --text-light: #666666;       /* Light text */
    --bg-light: #F9F9F9;         /* Light background */
    --bg-white: #FFFFFF;          /* White background */
}
```

#### Add Real Images

Replace the SVG placeholders with real product images:

1. Create an `images/` folder in the project directory
2. Add your product images (JPG, PNG, etc.)
3. Update the `createProductCard` function in `script.js` to use `<img>` tags instead of SVG

## Deployment Options

### Option 1: Netlify (Recommended - Free)

1. **Sign up** at [netlify.com](https://www.netlify.com)
2. **Drag and drop** the `jute-bags-website` folder to the Netlify dashboard
3. **Your site will be live instantly** with a URL like `https://your-site-name.netlify.app`

### Option 2: GitHub Pages (Free)

1. **Create a GitHub repository** and upload all files
2. Go to repository **Settings** > **Pages**
3. **Select** the main branch as source
4. **Save** - your site will be available at `https://yourusername.github.io/repository-name`

### Option 3: Vercel (Free)

1. **Sign up** at [vercel.com](https://vercel.com)
2. **Install Vercel CLI** or use their dashboard
3. **Deploy** by connecting your GitHub repository or uploading files
4. **Your site will be live** with a Vercel domain

### Option 4: Traditional Web Hosting

1. **Purchase hosting** from providers like GoDaddy, Bluehost, or HostGator
2. **Upload files** via FTP or file manager to the `public_html` folder
3. **Your site will be live** at your domain

### Option 5: AWS S3 (Low Cost)

1. **Create an AWS S3 bucket**
2. **Enable static website hosting**
3. **Upload all files** to the bucket
4. **Set bucket policy** for public read access
5. **Access via** the S3 website endpoint

## Features Breakdown

### Homepage
- Hero section with call-to-action buttons
- Feature highlights (Eco-friendly, Premium Quality, Customizable, Fast Delivery)
- Category cards with visual icons
- Featured products section
- Call-to-action for bulk orders

### Products Page
- Full product catalog with 12 products
- Category filter buttons
- Product cards with images, descriptions, and prices
- WhatsApp ordering for each product

### Contact Page
- Contact information display
- Contact form for inquiries
- Category selection for targeted inquiries
- Business hours

### About Page
- Company story and mission
- Core values
- Business statistics
- Professional layout

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Fast loading (no external dependencies)
- Optimized CSS
- Minimal JavaScript
- Responsive images (SVG placeholders)

## Security Considerations

For production use, consider:

1. **SSL Certificate** - Enable HTTPS (most hosts provide free SSL)
2. **Form Validation** - Server-side validation for contact forms
3. **CSRF Protection** - Add CSRF tokens for forms
4. **Rate Limiting** - Prevent form spam

## Future Enhancements

- Real product images
- User accounts
- Product reviews
- Search functionality
- Advanced filtering
- Admin dashboard
- Inventory management

## Support

For questions or issues with the website, contact:
- Email: sritulasijutebags@gmail.com
- Phone: +91 6300152676

## License

This website is provided as-is for your Jute Bags business. Feel free to modify and customize as needed.

---

**Ready to launch your Jute Bags business online! 🌱**
