// WhatsApp Configuration - Replace with your business WhatsApp number
const WHATSAPP_NUMBER = "916300152676"; // Format: country code + number (no spaces, dashes, or +)

// Product Data
const products = [
    {
        id: 1,
        name: "Classic School Backpack",
        category: "school",
        price: 25.99,
        description: "Durable jute backpack perfect for students. Multiple compartments for books and supplies.",
        badge: "Best Seller",
        color: "#4A7C59"
    },
    {
        id: 2,
        name: "Corporate Messenger Bag",
        category: "corporate",
        price: 45.99,
        description: "Professional messenger bag with laptop compartment. Ideal for business meetings.",
        badge: "Popular",
        color: "#2C5282"
    },
    {
        id: 3,
        name: "Government Document Bag",
        category: "government",
        price: 39.99,
        description: "Secure document bag with lockable compartments. Designed for official use.",
        badge: "",
        color: "#744210"
    },
    {
        id: 4,
        name: "Retail Shopping Tote",
        category: "retail",
        price: 15.99,
        description: "Spacious tote bag for shopping. Reinforced handles for heavy loads.",
        badge: "Eco Choice",
        color: "#9F7AEA"
    },
    {
        id: 5,
        name: "Promotional Event Bag",
        category: "promotional",
        price: 12.99,
        description: "Customizable bag perfect for events and marketing campaigns.",
        badge: "",
        color: "#E53E3E"
    },
    {
        id: 6,
        name: "Lifestyle Shoulder Bag",
        category: "lifestyle",
        price: 22.99,
        description: "Stylish shoulder bag for everyday use. Lightweight and fashionable.",
        badge: "New",
        color: "#38A169"
    },
    {
        id: 7,
        name: "Student Drawstring Bag",
        category: "school",
        price: 18.99,
        description: "Easy-to-carry drawstring bag for gym and school supplies.",
        badge: "",
        color: "#4A7C59"
    },
    {
        id: 8,
        name: "Corporate Conference Bag",
        category: "corporate",
        price: 55.99,
        description: "Premium conference bag with multiple pockets for documents and tech.",
        badge: "Premium",
        color: "#2C5282"
    },
    {
        id: 9,
        name: "Government Utility Bag",
        category: "government",
        price: 42.99,
        description: "Heavy-duty utility bag for field work and official duties.",
        badge: "",
        color: "#744210"
    },
    {
        id: 10,
        name: "Retail Gift Bag",
        category: "retail",
        price: 8.99,
        description: "Elegant gift bag for retail stores. Perfect for special occasions.",
        badge: "",
        color: "#9F7AEA"
    },
    {
        id: 11,
        name: "Promotional Giveaway Bag",
        category: "promotional",
        price: 9.99,
        description: "Cost-effective bag for mass distribution at events.",
        badge: "",
        color: "#E53E3E"
    },
    {
        id: 12,
        name: "Lifestyle Crossbody Bag",
        category: "lifestyle",
        price: 28.99,
        description: "Trendy crossbody bag with adjustable strap. Perfect for urban living.",
        badge: "Trending",
        color: "#38A169"
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    loadFeaturedProducts();
    setupEventListeners();
    setupCategoryFilter();
    
    // Check for category in URL
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
        filterByCategory(category);
    }
});

// Load Products on Products Page
function loadProducts() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = products.map(product => createProductCard(product)).join('');
}

// Load Featured Products on Homepage
function loadFeaturedProducts() {
    const featuredGrid = document.getElementById('featured-products-grid');
    if (!featuredGrid) return;
    
    const featuredProducts = products.slice(0, 4);
    featuredGrid.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
}

// Create Product Card HTML
function createProductCard(product) {
    return `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <svg viewBox="0 0 200 200">
                    <rect x="40" y="60" width="120" height="120" rx="5" fill="${product.color}" stroke="${adjustColor(product.color, -30)}" stroke-width="2"/>
                    <path d="M60 60 L60 30 Q60 20 70 20 L130 20 Q140 20 140 30 L140 60" fill="none" stroke="${adjustColor(product.color, -30)}" stroke-width="4"/>
                    <text x="100" y="130" text-anchor="middle" fill="white" font-size="14" font-weight="bold">JUTE</text>
                </svg>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="whatsapp-btn" onclick="orderViaWhatsApp(${product.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Order via WhatsApp
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Adjust color brightness
function adjustColor(color, amount) {
    const hex = color.replace('#', '');
    const r = Math.max(0, Math.min(255, parseInt(hex.substr(0, 2), 16) + amount));
    const g = Math.max(0, Math.min(255, parseInt(hex.substr(2, 2), 16) + amount));
    const b = Math.max(0, Math.min(255, parseInt(hex.substr(4, 2), 16) + amount));
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

// Order via WhatsApp
function orderViaWhatsApp(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const message = `Hello! I'm interested in ordering the following product:\n\n` +
                   `📦 Product: ${product.name}\n` +
                   `🏷️ Category: ${product.category}\n` +
                   `💰 Price: $${product.price.toFixed(2)}\n` +
                   `📝 Description: ${product.description}\n\n` +
                   `Please let me know about availability and payment options.`;
    
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Setup Event Listeners
function setupEventListeners() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
}

// Setup Category Filter
function setupCategoryFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter products
            filterByCategory(category);
        });
    });
}

// Filter by Category
function filterByCategory(category) {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    
    // Update filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
}

// Handle Contact Form
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Send contact form via WhatsApp
    const message = `New Contact Form Submission:\n\n` +
                   `👤 Name: ${data.name}\n` +
                   `📧 Email: ${data.email}\n` +
                   `📞 Phone: ${data.phone || 'Not provided'}\n` +
                   `🏷️ Interested In: ${data.category || 'General inquiry'}\n` +
                   `💬 Message: ${data.message}`;
    
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    showNotification('Opening WhatsApp...');
    e.target.reset();
}

// Show Notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #2D5A3D;
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    
    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}
