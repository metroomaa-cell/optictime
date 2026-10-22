import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Search, ShoppingBag, UserRound, Menu, X, ChevronDown, ChevronLeft, ChevronRight, Heart, ArrowRight, Phone, MapPin, Mail, Clock3, ShieldCheck, Truck, Headphones, Home, LayoutGrid } from 'lucide-react';
import './style.css';

const img = (name) => `https://royalman.com.bd/wp-content/uploads/2026/09/${name}`;
const assets = {
  banner: '/branding/optictime-banner-photo.jpg',
  banner2: '/branding/optictime-banner-photo.jpg',
  sunnies: 'https://royalman.com.bd/wp-content/uploads/2026/08/Sunglass-Bander-Royalman.webp',
  citizen: img('Citizen-Classic-Chronograph-Analogue-Watch-for-Men-5-300x300.webp'),
  rayban: img('RayBan-Polarized-Sunglass-Premium-Quality-Sunglass-RB-57-B-3-300x300.webp'),
  olevs: 'https://royalman.com.bd/wp-content/uploads/2026/08/Olevs-Black-Golden-Dial-Rubber-Belt-Watch-For-Men-300x300.webp',
  hublot: img('Hublot-Big-Bang-Black-Dial-Quartz-Extreme-Luxury-Watch-For-Mens-4-300x300.webp'),
};
const watchFallbacks = [
  'https://royalman.com.bd/wp-content/uploads/2026/10/Rolex-Luxury-Gold-and-Steel-Skeleton-Automatics-Watch-300x300.webp',
  'https://royalman.com.bd/wp-content/uploads/2026/09/Hublot-watch-300x300.webp',
  'https://royalman.com.bd/wp-content/uploads/2026/09/emotion-amanda-watch-bangladesh-300x300.webp',
  'https://royalman.com.bd/wp-content/uploads/2026/07/Casio-Watch-golden-color-300x300.webp',
  'https://royalman.com.bd/wp-content/uploads/2026/02/Signature-Chocolate-Colour-Trendy-Men-Watch-300x300.webp',
  'https://royalman.com.bd/wp-content/uploads/2026/09/Arabic-Aura-Watch-1-300x300.webp',
  'https://royalman.com.bd/wp-content/uploads/2026/08/Orginal-Double-Polo-Sunglass-300x300.webp',
  'https://royalman.com.bd/wp-content/uploads/2026/01/Paydagor-613-Watch-White-colour-watch-300x300.webp',
  'https://royalman.com.bd/wp-content/uploads/2026/01/binbond-diamond-cut-full-golden-colour-watch-300x300.webp',
  'https://royalman.com.bd/wp-content/uploads/2026/01/Paydagor-Watch-613-model-White-colour-300x300.webp',
  'https://royalman.com.bd/wp-content/uploads/2026/09/Citizen-Classic-Chronograph-Analogue-Watch-for-Men-4-300x300.webp',
  'https://royalman.com.bd/wp-content/uploads/2026/09/Emotion-Amanda-300x300.webp',
  'https://royalman.com.bd/wp-content/uploads/2026/08/Rolex-Watch-1-300x300.webp',
  'https://royalman.com.bd/wp-content/uploads/2026/08/Olevs-2872-Brown-PU-Leather-Chronograph-Wrist-Blue-Brown-Watch-For-Men-300x300.webp',
  'https://royalman.com.bd/wp-content/uploads/2026/07/Casio-AE-1200WHL-5AVDF-World-Time-Digital-Leather-Belt-Watch-Full-Black-1-300x300.webp',
  'https://royalman.com.bd/wp-content/uploads/2026/01/Paydagor-Watch-613-model-blue-colour-watch-300x300.webp',
  'https://royalman.com.bd/wp-content/uploads/2026/08/Prada-Sunglass-Full-Black-300x300.webp',
  'https://royalman.com.bd/wp-content/uploads/2026/01/Current-belt-watch-300x300.webp',
];
const product = (name, price, old, category, image, badge, color) => ({ name, price, old, category, image, badge, color });
const products = [
  product('Citizen Classic Chronograph — Black Dial', 590, 750, 'Belt Watches', assets.citizen, '-21%'),
  product('RayBan Polarized Sunglass RB 57 B', 790, 1000, 'Sunglasses', assets.rayban, '-21%'),
  product('Olevs Black & Golden Dial Rubber Belt', 750, null, 'Olevs Watch', assets.olevs, 'FREE DELIVERY'),
  product('Casio World Time Digital Leather Watch', 999, 1550, 'Casio Watch', watchFallbacks[3], '-36%'),
  product('Signature Chocolate Colour Trendy Watch', 650, 850, 'Belt Watches', watchFallbacks[4], '-24%'),
  product('Arabic Aura Full Black Carbon Fiber Watch', 550, 1150, 'Watch Collection', watchFallbacks[5], '-52%'),
  product('Double Poly Polarized Sunglass — Black', 760, 1100, 'Sunglasses', watchFallbacks[6], '-31%'),
  product('Poedagar White 613 Luxury Wrist Watch', 900, 1300, 'Poedagar Watch', watchFallbacks[7], '-31%'),
  product('Binbond Full Golden 2521 Quartz Watch', 999, 1400, 'Watch Collection', watchFallbacks[1], '-29%'),
  product('Rolex Skeleton Automatic Dual Tone', 2450, null, 'Rolex Watch', watchFallbacks[0], 'NEW'),
  product('Hublot Big Bang Black Dial Quartz', 1400, 1550, 'New Arrivals', assets.hublot, '-10%'),
  product('Emotion Amanda Premium Black Belt Watch', 830, 950, 'Belt Watches', watchFallbacks[2], '-13%'),
  product('Rolex Premium Magnetic Black Watch', 880, 950, 'Rolex Watch', watchFallbacks[0], '-7%'),
  product('Olevs Chronograph Blue & Brown Watch', 720, 800, 'Olevs Watch', watchFallbacks[3], '-10%'),
  product('Casio Bronze Gold World Time Digital', 999, 1550, 'Casio Watch', watchFallbacks[5], '-36%'),
  product('Poedagar Blue 613 Luxury Wrist Watch', 900, 1300, 'Poedagar Watch', watchFallbacks[7], '-31%'),
  product('Prada Full Black Sunglass PDA 05 B', 950, null, 'Sunglasses', assets.rayban, 'BESTSELLER'),
  product('Current Black Leather Belt 8301 Watch', 699, 1050, 'Belt Watches', watchFallbacks[6], 'FREE DELIVERY'),
  product('Rolex Premium Rubber Strap Magnetic Silver Watch', 880, 950, 'Rolex Watch', 'https://royalman.com.bd/wp-content/uploads/2026/08/Rolex-Watch-2-300x300.webp', '-7%'),
  product('Rolex Gold Date Just Black Dial Oyster Band', 1400, 1990, 'Rolex Watch', 'https://royalman.com.bd/wp-content/uploads/2026/08/Royalman-Rolex-WATCH-3-300x300.webp', '-30%'),
  product('Rolex Blue Day Date Quartz Watch', 1500, 2250, 'Rolex Watch', 'https://royalman.com.bd/wp-content/uploads/2026/08/Rolex-Watch-White-Blue-Colour-rOYALMAN-1-300x300.webp', '-33%'),
  product('Rolex Day-Date Oyster Olive Black Watch', 1450, 2050, 'Rolex Watch', 'https://royalman.com.bd/wp-content/uploads/2026/08/Rolex-Day-Date-40-–-Oyster-Olive-Black-Watch-2-300x300.webp', '-29%'),
  product('Rolex Day-Date Full Golden Luxury Watch', 1450, 2015, 'Rolex Watch', 'https://royalman.com.bd/wp-content/uploads/2026/08/Rolex-Day-Date-40-Oyster-Luxury-Watch-4-300x300.webp', '-28%'),
  product('Olevs White & Golden Dial Rubber Belt Watch', 750, null, 'Olevs Watch', 'https://royalman.com.bd/wp-content/uploads/2026/08/Olevs-Watch-703-300x300.webp', 'FREE DELIVERY'),
  product('Olevs White Black & Golden Mix Dial Watch', 750, null, 'Olevs Watch', 'https://royalman.com.bd/wp-content/uploads/2026/08/Olevs-Black-Golden-Dial-Rubber-Belt-Watch-For-Men-3-300x300.webp', 'FREE DELIVERY'),
  product('Casio Full Black World Time Digital Watch', 999, 1550, 'Casio Watch', 'https://royalman.com.bd/wp-content/uploads/2026/07/Casio-AE-1200WHL-5AVDF-World-Time-Digital-Leather-Belt-Watch-Full-Black-1-300x300.webp', '-36%'),
  product('Casio Silver Black World Time Digital Watch', 999, 1550, 'Casio Watch', 'https://royalman.com.bd/wp-content/uploads/2026/07/Casio-Watch-Silver-gold-300x300.webp', '-36%'),
  product('Arabic Aura White Black Carbon Fiber Watch', 550, 1150, 'Watch Collection', 'https://royalman.com.bd/wp-content/uploads/2026/09/Arabic-Aura-Watch-3-300x300.webp', '-52%'),
  product('Arabic Aura White Blue Carbon Fiber Watch', 550, 1150, 'Watch Collection', 'https://royalman.com.bd/wp-content/uploads/2026/09/Arabic-Aura-Watch-4-300x300.webp', '-52%'),
  product('Binbond Blue 2521 Quartz Diamond Cut Watch', 999, 1400, 'Watch Collection', 'https://royalman.com.bd/wp-content/uploads/2026/01/binbond-diamond-cut-Blue-colour-watch-300x300.webp', '-29%'),
  product('Binbond Full Black 2521 Quartz Diamond Cut Watch', 999, 1400, 'Watch Collection', 'https://royalman.com.bd/wp-content/uploads/2026/01/binbond-diamond-cut-full-black-watch-300x300.webp', '-29%'),
  product('Binbond White 2521 Quartz Diamond Cut Watch', 999, 1400, 'Watch Collection', 'https://royalman.com.bd/wp-content/uploads/2026/01/binbond-diamond-cut-White-colour-watch-300x300.webp', '-29%'),
  product('Poedagar Black 613 Luxury Wrist Watch', 900, 1300, 'Poedagar Watch', 'https://royalman.com.bd/wp-content/uploads/2026/01/Paydagor-Watch-613-Model-Black-colour-300x300.webp', '-31%'),
  product('Poedagar Blue 613 Luxury Wrist Watch', 900, 1300, 'Poedagar Watch', 'https://royalman.com.bd/wp-content/uploads/2026/01/Paydagor-Watch-613-model-blue-colour-watch-300x300.webp', '-31%'),
  product('Poedagar Green 613 Luxury Wrist Watch', 900, 1300, 'Poedagar Watch', 'https://royalman.com.bd/wp-content/uploads/2026/01/Paydagor-Green-colour-613-model-300x300.webp', '-31%'),
  product('Poedagar Silver Blue 930 Luxury Watch', 950, 1400, 'Poedagar Watch', 'https://royalman.com.bd/wp-content/uploads/2026/01/Paydagor-Watch-613-model-blue-colour-watch-300x300.webp', '-32%'),
  product('Current Brown Leather Belt 8301 Watch', 699, 1050, 'Belt Watches', 'https://royalman.com.bd/wp-content/uploads/2026/01/Current-belt-watch-1-300x300.webp', 'FREE DELIVERY'),
  product('Current Chocolate Leather Belt 8301 Watch', 699, 1050, 'Belt Watches', 'https://royalman.com.bd/wp-content/uploads/2026/01/Current-Chocolate-Color-Leather-Belt-8301-Mens-Premium-Watch-300x300.webp', 'FREE DELIVERY'),
  product('Emotion Amanda Coffee Brown Belt Watch', 830, 950, 'Belt Watches', 'https://royalman.com.bd/wp-content/uploads/2026/09/emotion-amanda-watch-price-in-bd-300x300.webp', '-13%'),
  product('RayBan Wayfarer Premium Sunglass RB2140', 850, null, 'Sunglasses', 'https://royalman.com.bd/wp-content/uploads/2026/09/Rayban-Stylish-Premium-Quality-Wayfarer-Sunglass-300x300.webp', 'POPULAR'),
  product('Mascot Rectangle Black Frame Sunglasses', 990, null, 'Sunglasses', 'https://royalman.com.bd/wp-content/uploads/2026/08/Mascot-Rectangle-Sunglasses-Transparent-Frame-Black-Glasses-3-300x300.webp', 'NEW'),
  product('Prada Silver Black Sunglass PDA 05 A', 950, null, 'Sunglasses', 'https://royalman.com.bd/wp-content/uploads/2026/08/Prada-Sunglass-Silver-Black-300x300.webp', 'POPULAR'),
  product('Prada Silver Blue Sunglass PDA 05 C', 950, null, 'Sunglasses', 'https://royalman.com.bd/wp-content/uploads/2026/08/Prada-Sunglass-Silver-Blue-300x300.webp', 'POPULAR'),
  product('RayBan Fancy UV Protected Sunglasses', 900, null, 'Sunglasses', 'https://royalman.com.bd/wp-content/uploads/2026/08/RayBan-Fancy-Sunglass-For-Daily-Causal-Evergreen-UV-Protected-For-Men-3-300x300.webp', 'POPULAR'),
  product('Emotion Amanda MT-12214 Black Belt Watch', 830, 950, 'New Arrivals', 'https://royalman.com.bd/wp-content/uploads/2026/09/emotion-amanda-watch-bangladesh-300x300.webp', '-13%'),
  product('Rolex Magnetic Black Strap Watch for Men', 880, 950, 'New Arrivals', 'https://royalman.com.bd/wp-content/uploads/2026/08/Rolex-Watch-1-300x300.webp', '-7%'),
  product('Rolex Magnetic Silver Strap Watch for Men', 880, 950, 'New Arrivals', 'https://royalman.com.bd/wp-content/uploads/2026/08/Rolex-Watch-2-300x300.webp', '-7%'),
  product('Emotion Amanda Coffee Brown Belt Watch', 830, 950, 'New Arrivals', 'https://royalman.com.bd/wp-content/uploads/2026/09/emotion-amanda-watch-price-in-bangladesh-300x300.webp', '-13%'),
  product('RayBan Fancy Sunglass for Everyday', 900, null, 'Sunglasses', 'https://royalman.com.bd/wp-content/uploads/2026/08/RayBan-Fancy-Sunglass-For-Daily-Causal-Evergreen-UV-Protected-For-Men-4-300x300.webp', 'POPULAR'),
  product('Royalman Black Leather Belt Watch', 699, 1050, 'Belt Watches', 'https://royalman.com.bd/wp-content/uploads/2026/01/Current-belt-watch-2-300x300.webp', 'FREE DELIVERY'),
];
const categories = ['Automatic Watch','Premium Collection','Rolex Watch','Couple Watch','Smart Watch','Sunglasses','Wallet','Women Collection'];
const brands = ['Rolex','Casio','Hublot','Poedagar','Prada','Binbond','Omega','Curren','Tissot','Best Win','Universe Point'];
const sections = [
  { title: 'New Arrivals', eyebrow: 'JUST LANDED', filter: 'New Arrivals', count: 8 },
  { title: 'Sunglasses', eyebrow: 'OWN THE LOOK', filter: 'Sunglasses', count: 7 },
  { title: 'Rolex Watch', eyebrow: 'TIMELESS ICONS', filter: 'Rolex Watch', count: 6 },
  { title: 'Olevs Watch', eyebrow: 'EVERYDAY LUXURY', filter: 'Olevs Watch', count: 4 },
  { title: 'Casio Watch', eyebrow: 'BUILT FOR EVERY DAY', filter: 'Casio Watch', count: 4 },
  { title: 'Watch Collection', eyebrow: 'FIND YOUR SIGNATURE', filter: 'Watch Collection', count: 6 },
  { title: 'Poedagar Watch', eyebrow: 'MADE TO BE NOTICED', filter: 'Poedagar Watch', count: 4 },
  { title: 'Belt Watches', eyebrow: 'A CLASSIC, REDEFINED', filter: 'Belt Watches', count: 6 },
];
const taka = (n) => `৳${n.toLocaleString('en-BD')}`;
const formatPhone = value => {
  const digits = String(value || '').replace(/\D/g, '');
  if (!digits) return '';
  return digits.startsWith('880') ? `+${digits}` : digits.startsWith('0') ? `+88 ${digits}` : `+${digits}`;
};
function StoreLogo({ settings }) {
  const [failed, setFailed] = useState(false);
  const configuredName = String(settings?.storeName || '').trim();
  const label = configuredName && !/^(royalman|shakil ecom|secrate|metr(r)?oma)$/i.test(configuredName) ? configuredName : 'Optic Time Shop';
  const logoPath = String(settings?.logo || '');
  const legacyLogo = /secrate|royalman|metr(r)?oma|shakil/i.test(logoPath);
  const logo = settings?.logo && !legacyLogo ? settings.logo : '/branding/optictime-logo.svg';
  if (!failed) return <img src={logo} alt={label} onError={() => setFailed(true)} />;
  return <span className="wordmark-text">{label}</span>;
}

function App() {
  const [query, setQuery] = useState('');
  const searchInputRef = useRef(null);
  const [cartItems, setCartItems] = useState({});
  const cart = Object.values(cartItems).reduce((sum, count) => sum + count, 0);
  const [liked, setLiked] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [activeBrand, setActiveBrand] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState('');
  const [cartOpen, setCartOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const [remaining, setRemaining] = useState(30256);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [catalog, setCatalog] = useState(products);
  const [storeCategories, setStoreCategories] = useState(categories.map(name => ({name, slug:name.toLowerCase().replace(/[^a-z0-9]+/g,'-')})));
  const [storeBrands, setStoreBrands] = useState(brands);
  const [storeSettings, setStoreSettings] = useState({deliveryInside:70, deliveryOutside:120, freeShipThreshold:2000, storeName:'Optic Time Shop', logo:'/branding/optictime-logo.svg', favicon:'/branding/optictime-icon.svg'});
  const [homeSections, setHomeSections] = useState(sections.map(s=>({...s,category:s.filter.toLowerCase().replace(/[^a-z0-9]+/g,'-'),buttonText:'View the collection',active:true,placement:'after-story',productIds:[]})));
  const [newsletterBusy, setNewsletterBusy] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [mobileNavActive, setMobileNavActive] = useState('home');
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [orderDone, setOrderDone] = useState(null);
  const [customerAccountOpen, setCustomerAccountOpen] = useState(false);
  useEffect(() => {
    const handleSearchShortcut = event => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        searchInputRef.current?.focus();
        searchInputRef.current?.select();
      }
    };
    window.addEventListener('keydown', handleSearchShortcut);
    return () => window.removeEventListener('keydown', handleSearchShortcut);
  }, []);
  useEffect(() => { let alive = true; Promise.all([fetch('/api/products').then(r=>r.ok?r.json():[]),fetch('/api/categories').then(r=>r.ok?r.json():[]),fetch('/api/settings').then(r=>r.ok?r.json():null),fetch('/api/brands').then(r=>r.ok?r.json():[])]).then(([rawProducts,rawCategories,settings,rawBrands])=>{if(!alive)return;const cats=Array.isArray(rawCategories)?rawCategories:[];if(cats.length)setStoreCategories(cats);if(settings){const configuredName=String(settings.storeName||'').trim();const siteSettings={...settings,storeName:!configuredName||/^(royalman|shakil ecom|secrate|metr(r)?oma)$/i.test(configuredName)?'Optic Time Shop':configuredName};if(!settings.logo||/secrate|royalman|metr(r)?oma|shakil/i.test(String(settings.logo)))siteSettings.logo='/branding/optictime-logo.svg';if(!settings.favicon||/secrate|royalman|metr(r)?oma|shakil/i.test(String(settings.favicon)))siteSettings.favicon='/branding/optictime-icon.svg';setStoreSettings(s=>({...s,...siteSettings}));if(Array.isArray(settings.homepageSections))setHomeSections(settings.homepageSections);}if(Array.isArray(rawProducts)){const items=rawProducts.map(p=>({...p,category:cats.find(c=>c.slug===p.category)?.name||p.category,old:p.compareAt||null,badge:p.tag||'',image:p.image||p.images?.[0]||''}));setCatalog(items);}if(Array.isArray(rawBrands)&&rawBrands.length)setStoreBrands(rawBrands.map(x=>x.name));}).catch(()=>{}); return () => { alive = false; }; }, []);
  useEffect(() => { const timer = setInterval(() => setRemaining(value => Math.max(0, value - 1)), 1000); return () => clearInterval(timer); }, []);
  const activeHeroSlides = useMemo(() => (Array.isArray(storeSettings.sliders) ? storeSettings.sliders : []).filter(s => s.active !== false && s.image), [storeSettings.sliders]);
  const heroSlide = activeHeroSlides.length ? activeHeroSlides[slide % activeHeroSlides.length] : null;
  useEffect(() => {
    if (activeHeroSlides.length < 2) return;
    const timer = setInterval(() => setSlide(value => (value + 1) % activeHeroSlides.length), 5500);
    return () => clearInterval(timer);
  }, [activeHeroSlides.length]);
  useEffect(() => {
    document.title = `${storeSettings.storeName || 'Optic Time Shop'} — Online Store`;
    let icon = document.querySelector('link[rel="icon"]');
    if (!icon) { icon = document.createElement('link'); icon.rel = 'icon'; document.head.appendChild(icon); }
    icon.type = 'image/svg+xml';
    icon.href = storeSettings.favicon || '/branding/optictime-icon.svg';
  }, [storeSettings.storeName, storeSettings.favicon]);
  const heroAction = () => {
    const target = String(heroSlide?.btnLink || 'shop').trim().replace(/^#/, '');
    if (/^https?:\/\//i.test(target)) { window.location.assign(target); return; }
    const category = storeCategories.find(item => item.slug === target);
    if (category) { chooseCategory(category.name); return; }
    scrollTo(['shop', 'all', 'collections'].includes(target.toLowerCase()) ? 'products' : target);
  };
  const timeParts = [Math.floor(remaining / 3600), Math.floor((remaining % 3600) / 60), remaining % 60].map(value => String(value).padStart(2, '0'));
  const filtered = useMemo(() => catalog.filter(p => (!activeCat || p.category === activeCat) && (!activeBrand || (p.brand||'').toLowerCase() === activeBrand.toLowerCase()) && p.name.toLowerCase().includes(query.toLowerCase())), [catalog, activeCat, activeBrand, query]);
  const addCart = (name, quantity = 1) => { const p=catalog.find(x=>x.name===name); if(!p||p.soldOut||p.stock===0){setNotice('এই পণ্যটি আপাতত স্টকে নেই।');setTimeout(()=>setNotice(''),2200);return false;} setCartItems(items => ({...items, [name]:(items[name]||0)+quantity})); setNotice(`${name} added to your bag`); setTimeout(() => setNotice(''), 2200); return true; };
  const orderNow = (name, quantity = 1) => { if (!addCart(name, quantity)) return; setCartOpen(false); setCheckoutOpen(true); };
  const changeCart = (name, delta) => setCartItems(items => { const next={...items}; const qty=(next[name]||0)+delta; if(qty<=0) delete next[name]; else next[name]=qty; return next; });
  const toggleLike = (name) => setLiked(xs => xs.includes(name) ? xs.filter(x => x !== name) : [...xs, name]);
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };
  const chooseCategory = (category) => { setActiveCat(category); setActiveBrand(''); setQuery(''); scrollTo('products'); };
  const chooseBrand = (brand) => { setActiveCat(''); setActiveBrand(brand); setQuery(''); scrollTo('products'); };
  const subscribe = async e => { e.preventDefault(); const form=e.currentTarget; const email=new FormData(form).get('email'); setNewsletterBusy(true); try { const res=await fetch('/api/newsletter',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email})}); const data=await res.json(); if(!res.ok)throw new Error(data.error||'Could not subscribe'); setNotice('আপনার ইমেইলটি তালিকায় যোগ হয়েছে।'); form.reset(); } catch(err) { setNotice(err.message); } finally { setNewsletterBusy(false); setTimeout(()=>setNotice(''),3000); } };
  const cartTotal = Object.entries(cartItems).reduce((sum,[name,qty])=>sum+(catalog.find(p=>p.name===name)?.price||0)*qty,0);
  const renderHomeSections = placement => {
    const rows=homeSections.filter(s=>s.active!==false&&(s.placement||'after-story')===placement);
    if(!rows.length)return null;
    return <section className="catalog section-wrap">{rows.map((s,idx)=>{const filterName=storeCategories.find(c=>c.slug===s.category)?.name||s.filter||s.title;const chosen=Array.isArray(s.productIds)&&s.productIds.length?s.productIds.map(id=>catalog.find(p=>String(p.id)===String(id))).filter(Boolean):catalog.filter(p=>p.category===filterName);const shown=chosen.slice(0,Number(s.count)||5);if(!shown.length)return null;return <section className="catalog-section" id={filterName==='New Arrivals'?'new-arrivals':filterName==='Sunglasses'?'sunglasses':undefined} key={`${s.category}-${s.title}-${idx}`}><div className="catalog-head"><div><div className="eyebrow"><span/> {s.eyebrow}</div><h2>{s.title}</h2></div><button className="text-link" onClick={()=>{setActiveCat(filterName);setActiveBrand('');setQuery('');scrollTo('products')}}>{s.buttonText||'View the collection'} <ArrowRight size={15}/></button></div><ProductGrid items={shown} addCart={addCart} orderNow={orderNow} liked={liked} toggleLike={toggleLike} openProduct={setSelectedProduct}/></section>})}</section>;
  };
  const submitOrder = async customer => {
    const items = Object.entries(cartItems).map(([name,qty])=>{const p=catalog.find(x=>x.name===name);return p&&{id:p.id,productId:p.id,name:p.name,price:p.price,qty,image:p.image};}).filter(Boolean);
    const response = await fetch('/api/orders',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({items,customer})});
    const data = await response.json().catch(()=>null);
    if(!response.ok) throw new Error(data?.error||'অর্ডার নেওয়া যায়নি। আবার চেষ্টা করুন।');
    if (!data?.id) throw new Error('সার্ভার অর্ডারটি নিশ্চিত করেনি। আবার চেষ্টা করুন।');
    setCartItems({}); setCartOpen(false); setOrderDone(data); setCheckoutOpen(false);
  };
  if (checkoutOpen) return <CheckoutPage cartItems={cartItems} catalog={catalog} settings={storeSettings} onBack={()=>setCheckoutOpen(false)} onSubmit={submitOrder}/>;
  if (orderDone) return <OrderConfirmation order={orderDone} onContinue={()=>{setOrderDone(null);window.scrollTo({top:0,behavior:'smooth'});}}/>;
  if (customerAccountOpen) return <CustomerAccountPage settings={storeSettings} onBack={()=>setCustomerAccountOpen(false)}/>;
  if (accountOpen) return <CustomerOrderPage settings={storeSettings} onBack={()=>setAccountOpen(false)}/>;
  if (selectedProduct) return <ProductDetail item={selectedProduct} settings={storeSettings} onBack={()=>setSelectedProduct(null)} addCart={addCart} onBuyNow={orderNow} cart={cart} openBag={()=>{setSelectedProduct(null);setCartOpen(true)}} />;
  return <>
    <div className="announcement"><span>{storeSettings.announce && !/skincare|botanical/i.test(storeSettings.announce) ? storeSettings.announce : `Complimentary delivery on orders over ৳${(storeSettings.freeShipThreshold||2000).toLocaleString('en-BD')}`}</span><span className="ann-right"><Phone size={13}/> {formatPhone(storeSettings.phone || '8809613008080')} <i/> Open daily · 9 AM – 8 PM</span></div>
    <header className="site-header">
      <button className="icon-button mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">{menuOpen ? <X/> : <Menu/>}</button>
      <a className="wordmark" href="#top" aria-label={`${storeSettings.storeName || 'Royalman'} home`}><StoreLogo settings={storeSettings}/></a>
      <div className="header-search"><Search size={17}/><input ref={searchInputRef} value={query} onChange={e=>setQuery(e.target.value)} onKeyDown={e=>e.key==='Enter'&&scrollTo('products')} placeholder="Search watches, sunglasses, accessories…"/><kbd>Ctrl K</kbd><button className="search-submit" aria-label="Search products" onClick={()=>scrollTo('products')}><ArrowRight size={15}/></button></div>
    <div className="header-actions"><button className="icon-button account" onClick={()=>setCustomerAccountOpen(true)}><UserRound/><span>Account</span></button><button className="icon-button bag" onClick={()=>setCartOpen(true)}><ShoppingBag/><span>Bag</span><b>{cart}</b></button></div>
    </header>
    <nav className={`main-nav ${menuOpen?'open':''}`}>{storeCategories.slice(0,5).map(c=><button key={c.slug||c.name} onClick={()=>chooseCategory(c.name)}>{c.name}</button>)}<button className="shop-nav" onClick={()=>scrollTo('brand-strip')}>Brand <ChevronDown size={14}/></button><button className="shop-nav" onClick={()=>scrollTo('collections')}>All categories <ChevronDown size={14}/></button></nav>
    <main id="top">
      <section className="hero-shell">
        <div className="hero" style={{
          backgroundImage: heroSlide?.image
            ? `linear-gradient(90deg,rgba(13,20,17,.88),rgba(13,20,17,.25)),url('${heroSlide.image}')`
            : `linear-gradient(90deg,#101713 0%,rgba(16,23,19,.96) 37%,rgba(16,23,19,.72) 52%,rgba(16,23,19,.08) 78%),url('${assets.banner}')`,
          backgroundSize: heroSlide?.image ? 'cover,cover' : '100% 100%,auto 100%',
          backgroundPosition: heroSlide?.image ? 'center,center' : 'center,right center',
          backgroundRepeat: 'no-repeat,no-repeat',
          ...(heroSlide?.mobileImage ? {'--hero-mobile-image': `url("${heroSlide.mobileImage}")`} : {})
        }}>
          <div className="hero-content"><div className="eyebrow light"><span/> {heroSlide?.badge || 'OPTIC TIME · BANGLADESH'}</div><h1>{heroSlide?.title ? <>{heroSlide.title}{heroSlide.subtitle && <><br/><em>{heroSlide.subtitle}</em></>}</> : <>Time, with<br/><em>character.</em></>}</h1><p>{heroSlide?.description || <>Discover a considered collection of watches<br className="desktop"/> and accessories made for the moments that matter.</>}</p><button className="button button-gold" onClick={heroSlide ? heroAction : ()=>scrollTo('collections')}>{heroSlide?.btnText || 'Explore the collection'} <ArrowRight size={16}/></button><div className="hero-note"><span className="line"/> {storeSettings.storeName || 'Optic Time Shop'} · Bangladesh</div></div>
          {(activeHeroSlides.length > 1 || activeHeroSlides.length === 0) && <div className="hero-controls"><button onClick={()=>setSlide(value=>(value-1+(activeHeroSlides.length||2))%(activeHeroSlides.length||2))} aria-label="Previous slide"><ChevronLeft/></button><span>0{(slide%(activeHeroSlides.length||2))+1} <i/> 0{activeHeroSlides.length||2}</span><button onClick={()=>setSlide(value=>(value+1)%(activeHeroSlides.length||2))} aria-label="Next slide"><ChevronRight/></button></div>}<div className="hero-label">{(storeSettings.storeName || 'Royalman').toUpperCase()} · BANGLADESH</div>
        </div>
        <div className="hero-side"><div className="side-photo" style={{backgroundImage:`url('${assets.banner2}')`}}><span>THE ROYAL EDIT</span><div><small>Made for your moment</small><b>Everyday<br/>distinction.</b><button onClick={()=>scrollTo('new-arrivals')}>DISCOVER <ArrowRight size={13}/></button></div></div><div className="side-promo"><span className="promo-icon">✳</span><div><small>A LITTLE SOMETHING EXTRA</small><b>Complimentary gift box</b><span>With every watch purchase</span></div><ArrowRight size={17}/></div></div>
      </section>
      <section className="brand-strip" id="brand-strip"><div className="brand-lead"><span>THE NAMES YOU KNOW</span><b>Shop by brand</b></div>{storeBrands.slice(0,8).map((b,i)=><button className={`brand-name ${i===0?'serif':''}`} key={b} onClick={()=>chooseBrand(b)}>{b}</button>)}<button className="brand-all" onClick={()=>{setActiveCat('');setActiveBrand('');setQuery('');scrollTo('products')}}>All brands <ArrowRight size={14}/></button></section>
      {renderHomeSections('after-brands')}
      <section className="category-section section-wrap" id="collections"><div className="section-heading"><div><h2>Featured Category</h2></div><p>Get Your Desired Product from Featured Category!</p></div><div className={`category-grid${storeCategories.length === 1 ? ' category-grid--single' : ''}`}>{storeCategories.map((c,i)=>{const match=catalog.find(p=>p.category===c.name);const image=c.image||match?.image||watchFallbacks[i%watchFallbacks.length];return <button key={c.slug||c.name} className={`category-card cat-${i%8}`} onClick={()=>chooseCategory(c.name)}><img className="cat-image" src={image} alt={c.name} loading="lazy" onError={e=>{e.currentTarget.src=watchFallbacks[i%watchFallbacks.length]}}/><span className="cat-name">{c.name}</span></button>})}</div></section>
      {renderHomeSections('after-categories')}
      <section className="feature-banner" style={{backgroundImage:`linear-gradient(90deg,rgba(12,21,20,.84),rgba(12,21,20,.15)),url('${assets.banner2}')`}}><div><div className="eyebrow light"><span/> FOR THE MOMENTS THAT MATTER</div><h2>A better sense<br/>of <em>every day.</em></h2><p>Good design never asks for attention.<br/>It simply earns it.</p><button className="button button-outline" onClick={()=>scrollTo('products')}>Shop bestsellers <ArrowRight size={15}/></button></div><span className="feature-caption">{(storeSettings.storeName || 'Royalman').toUpperCase()} · BANGLADESH</span></section>
      {renderHomeSections('after-promo')}
      <section className="sale-section section-wrap" id="products"><div className="sale-top"><div className="sale-title"><span className="sale-star">✳</span><div><div className="eyebrow">{query||activeCat||activeBrand?'YOUR MATCHES':''}</div><h2>{query||activeCat||activeBrand?'Search Results':'FLASH SALE'}</h2></div></div><div className="sale-count"><span>ENDING OFFER</span><div><b>{timeParts[0]}</b><i>:</i><b>{timeParts[1]}</b></div><small>HOURS &nbsp; MINUTES &nbsp; SECONDS</small></div><button className="text-link" onClick={()=>{setActiveCat('');setActiveBrand('');setQuery('')}}>View More <ArrowRight size={15}/></button></div><ProductGrid items={query||activeCat||activeBrand?filtered:catalog.slice(0,8)} addCart={addCart} orderNow={orderNow} liked={liked} toggleLike={toggleLike} openProduct={setSelectedProduct}/></section>
      {renderHomeSections('after-sale')}
      <section className="story-band" id="about"><div className="story-image" style={{backgroundImage:`url('${assets.banner}')`}}><span>01 / 03</span></div><div className="story-copy"><div className="eyebrow"><span/> {(storeSettings.storeName || 'Royalman').toUpperCase()} · OUR POINT OF VIEW</div><h2>Not just a watch.<br/>A way to <em>show up.</em></h2><p>We believe the things you wear should feel considered. That is why every piece in our collection is chosen for its character, quality, and the confidence it brings to an ordinary day.</p><button className="text-link" onClick={()=>scrollTo('footer')}>A little about us <ArrowRight size={15}/></button><div className="story-sign">ROYALMAN <span>· Dhaka, Bangladesh</span></div></div></section>
      {renderHomeSections('after-story')}
      {renderHomeSections('before-newsletter')}
      <section className="newsletter"><div className="newsletter-mark">♛</div><div><div className="eyebrow light"><span/> A NOTE FROM {(storeSettings.storeName || 'Royalman').toUpperCase()}</div><h2>Good taste, <em>in your inbox.</em></h2><p>New arrivals, considered edits and the occasional good offer.</p></div><form onSubmit={subscribe}><input name="email" type="email" required placeholder="Your email address"/><button aria-label="Subscribe" disabled={newsletterBusy}><ArrowRight size={18}/></button></form></section>
      <section className="service-row">{[[Truck,'Thoughtful delivery','Across Bangladesh'],[ShieldCheck,'Quality, considered','Selected with care'],[ShoppingBag,'A gift, ready to give','Complimentary gift box'],[Headphones,'Here when you need us',formatPhone(storeSettings.phone || '8809613008080')]].map(([Icon,t,s])=><div className="service" key={t}><Icon/><div><b>{t}</b><span>{s}</span></div></div>)}</section>
    </main>
    {renderHomeSections('before-footer')}
    <footer id="footer"><div className="footer-main"><div className="footer-brand"><a className="wordmark footer-logo" href="#top" aria-label={`${storeSettings.storeName || 'Royalman'} home`}><StoreLogo settings={storeSettings}/></a><p>{storeSettings.storeName || 'Royalman'} is a curated destination for watches, sunglasses and everyday accessories.</p><div className="socials">{[['facebookUrl','Facebook','f'],['instagramUrl','Instagram','◎'],['tiktokUrl','TikTok','♪'],['youtubeUrl','YouTube','▶']].filter(([key])=>storeSettings[key]).map(([key,label,icon])=><a key={key} href={storeSettings[key]} target="_blank" rel="noreferrer" aria-label={label}>{icon}</a>)}</div></div><div className="footer-col"><b>EXPLORE</b><a href="#collections">Shop all</a><a href="#new-arrivals">New arrivals</a><a href="#sunglasses">Sunglasses</a><a href="#brand-strip">Shop by brand</a></div><div className="footer-col"><b>HERE TO HELP</b>{[['aboutUrl','About us'],['deliveryUrl','Delivery & returns'],['termsUrl','Warranty & terms'],['contactUrl','Contact us']].filter(([key])=>storeSettings[key]).map(([key,label])=><a key={key} href={storeSettings[key]} target="_blank" rel="noreferrer">{label}</a>)}</div><div className="footer-col contact-col"><b>GET IN TOUCH</b>{storeSettings.storeAddress&&<span><MapPin/>{storeSettings.storeAddress}</span>}{storeSettings.phone&&<a href={`tel:+${String(storeSettings.phone).replace(/\D/g,'')}`}><Phone/>{formatPhone(storeSettings.phone)}</a>}{storeSettings.storeEmail&&<a href={`mailto:${storeSettings.storeEmail}`}><Mail/>{storeSettings.storeEmail}</a>}{storeSettings.businessHours&&<span><Clock3/>{storeSettings.businessHours}</span>}</div></div><div className="footer-bottom"><span>© 2026 {storeSettings.storeName || 'Royalman'}.</span><span>Made with care in Bangladesh <i>✳</i></span><span>{[['privacyUrl','Privacy'],['termsUrl','Terms'],['refundUrl','Refund policy']].filter(([key])=>storeSettings[key]).map(([key,label],index)=><React.Fragment key={key}>{index>0&&' · '}<a href={storeSettings[key]} target="_blank" rel="noreferrer">{label}</a></React.Fragment>)}</span></div></footer>
    <nav className="mobile-bottom-nav" aria-label="Quick navigation">
      <button className={mobileNavActive==='home'?'active':''} aria-label="Home" onClick={()=>{setMobileNavActive('home');setActiveCat('');setActiveBrand('');setQuery('');window.scrollTo({top:0,behavior:'smooth'});}}><Home/><span>HOME</span></button>
      <button className={mobileNavActive==='shop'?'active':''} aria-label="Shop" onClick={()=>{setMobileNavActive('shop');scrollTo('collections');}}><LayoutGrid/><span>SHOP</span></button>
      <button className={mobileNavActive==='bag'?'active':''} aria-label={`Bag, ${cart} items`} onClick={()=>{setMobileNavActive('bag');setCartOpen(true);}}><span className="mobile-nav-icon"><ShoppingBag/>{cart>0&&<b>{cart}</b>}</span><span>BAG</span></button>
      <button className={mobileNavActive==='track'?'active':''} aria-label="Track order" onClick={()=>{setMobileNavActive('track');setAccountOpen(true);}}><MapPin/><span>TRACK<br/>ORDER</span></button>
      <button className={mobileNavActive==='account'?'active':''} aria-label="Account" onClick={()=>{setMobileNavActive('account');setCustomerAccountOpen(true);}}><UserRound/><span>ACCOUNT</span></button>
    </nav>
    {cartOpen&&<div className="drawer-backdrop" onMouseDown={e=>e.target===e.currentTarget&&setCartOpen(false)}><aside className="cart-drawer"><div className="drawer-heading"><div><small>YOUR ROYALMAN BAG</small><h2>Shopping bag <span>({cart})</span></h2></div><button className="drawer-close" onClick={()=>setCartOpen(false)} aria-label="Close bag"><X/></button></div>{cart===0?<div className="empty-cart"><ShoppingBag/><p>Your bag is empty.</p><button className="drawer-primary" onClick={()=>{setCartOpen(false);scrollTo('products')}}>Continue shopping</button></div>:<><div className="drawer-items">{Object.entries(cartItems).map(([name,quantity])=>{const item=catalog.find(p=>p.name===name);return <div className="drawer-item" key={name}><img src={item?.image||watchFallbacks[0]} alt=""/><div className="drawer-item-copy"><b>{name}</b><span>{taka(item?.price||0)}</span><div className="quantity-controls"><button onClick={()=>changeCart(name,-1)} aria-label="Decrease quantity">−</button><span>{quantity}</span><button onClick={()=>changeCart(name,1)} aria-label="Increase quantity">+</button></div></div><button className="remove-item" onClick={()=>changeCart(name,-quantity)} aria-label="Remove item">×</button></div>})}</div><div className="drawer-total"><span>Subtotal</span><b>{taka(cartTotal)}</b></div><button className="drawer-primary" onClick={()=>{setCartOpen(false);setCheckoutOpen(true)}}>Checkout securely <ArrowRight size={16}/></button><button className="continue-shopping" onClick={()=>setCartOpen(false)}>Continue shopping</button></>}</aside></div>}
    <a className="whatsapp" aria-label="Chat on WhatsApp" href={`https://wa.me/${String(storeSettings.whatsapp || storeSettings.phone || '8801821060161').replace(/\D/g,'')}`} target="_blank" rel="noreferrer"><Phone size={19}/></a>{notice&&<div className="toast"><span>✓</span>{notice}<button onClick={()=>setNotice('')}>×</button></div>}
  </>;
}

function CustomerOrderPage({onBack,settings}) {
  const [form,setForm]=useState({id:'',phone:''}),[order,setOrder]=useState(null),[error,setError]=useState(''),[busy,setBusy]=useState(false);
  const submit=async e=>{e.preventDefault();setBusy(true);setError('');setOrder(null);try{const qs=new URLSearchParams({id:form.id,phone:form.phone});const r=await fetch(`/api/track?${qs}`);const d=await r.json();if(!r.ok)throw new Error(d.error||'অর্ডার খুঁজে পাওয়া যায়নি।');setOrder(d);}catch(err){setError(err.message);}finally{setBusy(false);}};
  return <main className="account-page"><header className="checkout-header"><button onClick={onBack}>← Store</button><a className="wordmark" href="/" onClick={e=>{e.preventDefault();onBack();}}><StoreLogo settings={settings}/></a><span>ORDER ACCOUNT</span></header><section className="account-card"><div className="eyebrow"><span/> ORDER TRACKING</div><h1>Track your order</h1><p>অর্ডার নম্বর ও অর্ডারে দেওয়া মোবাইল নম্বর লিখুন।</p><form onSubmit={submit}><label>Order number<input required value={form.id} onChange={e=>setForm(v=>({...v,id:e.target.value.toUpperCase()}))} placeholder="DOT-XXXXXXXX"/></label><label>Mobile number<input required inputMode="numeric" value={form.phone} onChange={e=>setForm(v=>({...v,phone:e.target.value}))} placeholder="01XXXXXXXXX"/></label>{error&&<div className="checkout-error">{error}</div>}<button className="checkout-submit" disabled={busy}>{busy?'খোঁজা হচ্ছে…':'Track order'}</button></form>{order&&<div className="tracked-order"><div><span>Order</span><b>{order.id}</b></div><div><span>Status</span><b>{order.status}</b></div><div><span>Total</span><b>{taka(order.total||0)}</b></div><div><span>Payment</span><b>Cash on delivery</b></div><h3>Items</h3>{(order.items||[]).map((item,i)=><div className="tracked-item" key={`${item.id}-${i}`}><span>{item.name} × {item.qty}</span><b>{taka(item.subtotal||item.price*item.qty)}</b></div>)}</div>}</section></main>;
}

function CustomerAccountPage({settings,onBack}) {
  const tokenKey='metrroma_customer_token';
  const [customer,setCustomer]=useState(null),[loading,setLoading]=useState(true);
  const [step,setStep]=useState('phone'),[phone,setPhone]=useState(''),[name,setName]=useState(''),[code,setCode]=useState('');
  const [notice,setNotice]=useState(''),[error,setError]=useState(''),[busy,setBusy]=useState(false),[saving,setSaving]=useState(false);
  const [profile,setProfile]=useState({name:'',email:'',address:'',district:'',thana:'',area:'outside'});
  const token=()=>{try{return localStorage.getItem(tokenKey)||''}catch{return ''}};
  const applyCustomer=data=>{setCustomer(data);setProfile({name:data?.name||'',email:data?.email||'',address:data?.savedAddress?.address||'',district:data?.savedAddress?.district||'',thana:data?.savedAddress?.thana||'',area:data?.savedAddress?.area||'outside'});};
  useEffect(()=>{let live=true;const current=token();if(!current){setLoading(false);return()=>{live=false}}fetch('/api/customer/me',{headers:{'x-customer-token':current}}).then(async r=>{const d=await r.json().catch(()=>({}));if(!r.ok)throw new Error(d.error||'Session expired');return d.customer}).then(data=>{if(live)applyCustomer(data)}).catch(()=>{try{localStorage.removeItem(tokenKey)}catch{}}).finally(()=>{if(live)setLoading(false)});return()=>{live=false}},[]);
  const requestCode=async e=>{e.preventDefault();setBusy(true);setError('');setNotice('');try{const r=await fetch('/api/customer/send-otp',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({phone,name})});const d=await r.json().catch(()=>({}));if(!r.ok)throw new Error(d.error||'কোড পাঠানো যায়নি।');setStep('otp');setNotice(d.demoCode?`পরীক্ষার OTP: ${d.demoCode}`:(d.message||'আপনার ফোনে OTP পাঠানো হয়েছে।'));}catch(err){setError(err.message||'কোড পাঠানো যায়নি।')}finally{setBusy(false)}};
  const verifyCode=async e=>{e.preventDefault();setBusy(true);setError('');try{const r=await fetch('/api/customer/verify-otp',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({phone,code,name})});const d=await r.json().catch(()=>({}));if(!r.ok)throw new Error(d.error||'OTP সঠিক নয়।');if(d.token){try{localStorage.setItem(tokenKey,d.token)}catch{}}applyCustomer(d.customer);}catch(err){setError(err.message||'OTP যাচাই করা যায়নি।')}finally{setBusy(false)}};
  const saveProfile=async e=>{e.preventDefault();setSaving(true);setError('');setNotice('');try{const r=await fetch('/api/customer/profile',{method:'PUT',headers:{'Content-Type':'application/json','x-customer-token':token()},body:JSON.stringify({name:profile.name,email:profile.email,savedAddress:{address:profile.address,district:profile.district,thana:profile.thana,area:profile.area}})});const d=await r.json().catch(()=>({}));if(!r.ok)throw new Error(d.error||'প্রোফাইল সেভ করা যায়নি।');applyCustomer(d.customer);setNotice('প্রোফাইল সেভ হয়েছে।')}catch(err){setError(err.message||'প্রোফাইল সেভ করা যায়নি।')}finally{setSaving(false)}};
  const signOut=async()=>{try{await fetch('/api/customer/logout',{method:'POST',headers:{'x-customer-token':token()}})}catch{}try{localStorage.removeItem(tokenKey)}catch{}setCustomer(null);setStep('phone');setNotice('আপনি সাইন আউট করেছেন।')};
  return <main className="account-page customer-account-page"><header className="checkout-header"><button onClick={onBack}>← Store</button><a className="wordmark" href="/" onClick={e=>{e.preventDefault();onBack()}}><StoreLogo settings={settings}/></a><span>MY ACCOUNT</span></header>{loading?<section className="account-card"><p>আপনার account লোড হচ্ছে…</p></section>:customer?<section className="account-card account-dashboard"><div className="account-card-head"><div><div className="eyebrow"><span/> CUSTOMER ACCOUNT</div><h1>Welcome, {customer.name||'Customer'}</h1><p>{customer.phone} · {customer.tier||'Member'}</p></div><button className="account-signout" onClick={signOut}>Sign out</button></div>{notice&&<div className="account-notice">{notice}</div>}{error&&<div className="checkout-error">{error}</div>}<div className="account-stats"><div><span>Orders</span><b>{customer.ordersCount||0}</b></div><div><span>Lifetime spend</span><b>{taka(customer.totalSpent||0)}</b></div><div><span>Membership</span><b>{customer.tier||'Member'}</b></div></div><form className="account-profile-form" onSubmit={saveProfile}><h2>Profile & delivery address</h2><label>Full name<input required value={profile.name} onChange={e=>setProfile(v=>({...v,name:e.target.value}))}/></label><label>Email<input type="email" value={profile.email} onChange={e=>setProfile(v=>({...v,email:e.target.value}))} placeholder="name@example.com"/></label><label>District<input value={profile.district} onChange={e=>setProfile(v=>({...v,district:e.target.value,area:e.target.value.trim().toLowerCase()==='dhaka'?'inside':'outside'}))}/></label><label>Area / thana<input value={profile.thana} onChange={e=>setProfile(v=>({...v,thana:e.target.value}))}/></label><label className="account-address-field">Saved address<textarea rows="2" value={profile.address} onChange={e=>setProfile(v=>({...v,address:e.target.value}))}/></label><button className="checkout-submit account-save" disabled={saving}>{saving?'সেভ হচ্ছে…':'Save profile'}</button></form><section className="account-orders"><h2>My orders <span>{customer.orders?.length||0}</span></h2>{!customer.orders?.length?<p>এই account-এ এখনো কোনো order নেই।</p>:customer.orders.map(order=><article className="account-order" key={order.id}><div className="account-order-head"><div><b>{order.id}</b><small>{order.createdAt?new Date(order.createdAt).toLocaleDateString('en-BD'):'—'}</small></div><span className={`order-status status-${String(order.status||'').toLowerCase()}`}>{order.status||'Processing'}</span><strong>{taka(order.total||0)}</strong></div><div className="account-order-items">{(order.items||[]).map((item,i)=><span key={`${order.id}-${i}`}>{item.name} × {item.qty}</span>)}</div></article>)}</section></section>:<section className="account-card account-login"><div className="eyebrow"><span/> CUSTOMER ACCOUNT</div><h1>{step==='phone'?'Sign in or create an account':'Verify your number'}</h1><p>{step==='phone'?'ফোন নম্বর দিয়ে আপনার order, profile এবং saved address দেখুন।':`OTP পাঠানো হয়েছে ${phone} নম্বরে।`}</p>{notice&&<div className="account-notice">{notice}</div>}{error&&<div className="checkout-error">{error}</div>}{step==='phone'?<form onSubmit={requestCode}><label>Your name (optional)<input value={name} onChange={e=>setName(e.target.value)} autoComplete="name" placeholder="আপনার নাম"/></label><label>Mobile number<input required inputMode="numeric" autoComplete="tel" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="01XXXXXXXXX"/></label><button className="checkout-submit" disabled={busy}>{busy?'OTP পাঠানো হচ্ছে…':'Send verification code'}</button></form>:<form onSubmit={verifyCode}><label>6-digit verification code<input required inputMode="numeric" autoComplete="one-time-code" maxLength="6" value={code} onChange={e=>setCode(e.target.value.replace(/\D/g,'').slice(0,6))} placeholder="000000"/></label><button className="checkout-submit" disabled={busy}>{busy?'যাচাই হচ্ছে…':'Verify & sign in'}</button><button type="button" className="account-secondary" onClick={()=>{setStep('phone');setCode('');setError('');setNotice('')}}>Change phone number</button></form>}</section>}</main>;
}

function CheckoutPage({cartItems,catalog,settings,onBack,onSubmit}) {
  const [form,setForm]=useState({name:'',phone:'',district:'Dhaka',area:'inside',address:'',note:'',coupon:''});
  const [busy,setBusy]=useState(false), [error,setError]=useState(''), [couponInfo,setCouponInfo]=useState(null), [couponError,setCouponError]=useState('');
  const lines=Object.entries(cartItems).map(([name,qty])=>({product:catalog.find(p=>p.name===name),qty})).filter(x=>x.product);
  const subtotal=lines.reduce((s,x)=>s+x.product.price*x.qty,0), shipping=subtotal>=(Number(settings.freeShipThreshold)||2000)?0:(form.area==='inside'?(Number(settings.deliveryInside)||70):(Number(settings.deliveryOutside)||120));
  const update=(key,value)=>setForm(v=>({...v,[key]:value}));
  const applyCoupon=async()=>{setCouponError('');setCouponInfo(null);try{const r=await fetch('/api/coupon/validate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({code:form.coupon,subtotal,phone:form.phone})});const d=await r.json();if(!r.ok)throw new Error(d.error||'কুপন কোডটি গ্রহণ করা যায়নি।');setCouponInfo(d);}catch(err){setCouponError(err.message);}};
  const submit=async e=>{e.preventDefault();setBusy(true);setError('');try{await onSubmit(form);}catch(err){setError(err.message);}finally{setBusy(false);}};
  const total=Math.max(0,subtotal+shipping-(couponInfo?.discount||0));
  return <main className="checkout-page"><header className="checkout-header"><button onClick={onBack}>← Shop more</button><a className="wordmark" href="/" onClick={e=>{e.preventDefault();onBack();}}><StoreLogo settings={settings}/></a><span>SECURE CHECKOUT</span></header><div className="checkout-wrap"><div><div className="eyebrow"><span/> CASH ON DELIVERY</div><h1>Complete your order</h1><p className="checkout-intro">আপনার ডেলিভারির তথ্য দিন। অর্ডারটি admin panel-এ সংরক্ষিত হবে।</p><form className="checkout-form" onSubmit={submit}><label>Full name<input required minLength="2" autoComplete="name" value={form.name} onChange={e=>update('name',e.target.value)} placeholder="আপনার নাম"/></label><label>Mobile number<input required inputMode="numeric" pattern="01[3-9][0-9]{8}" autoComplete="tel" value={form.phone} onChange={e=>{update('phone',e.target.value);setCouponInfo(null)}} placeholder="01XXXXXXXXX"/></label><label>District<input required value={form.district} onChange={e=>update('district',e.target.value)} placeholder="জেলা"/></label><label>Delivery area<select value={form.area} onChange={e=>update('area',e.target.value)}><option value="inside">ঢাকার ভিতরে — ৳{settings.deliveryInside||70}</option><option value="outside">ঢাকার বাইরে — ৳{settings.deliveryOutside||120}</option></select></label><label className="checkout-full">Full delivery address<textarea required minLength="6" rows="3" autoComplete="street-address" value={form.address} onChange={e=>update('address',e.target.value)} placeholder="বাসা/রোড, এলাকা, থানা"/></label><label className="checkout-full">Order note (optional)<textarea rows="2" value={form.note} onChange={e=>update('note',e.target.value)} placeholder="ডেলিভারির জন্য অতিরিক্ত তথ্য"/></label><div className="checkout-payment checkout-full"><ShieldCheck size={19}/><span><b>Cash on delivery</b><small>পণ্য হাতে পেয়ে পেমেন্ট করুন</small></span></div>{error&&<div className="checkout-error checkout-full">{error}</div>}<button className="checkout-submit checkout-full" disabled={busy||!lines.length}>{busy?'অর্ডার হচ্ছে…':`অর্ডার নিশ্চিত করুন · ${taka(total)}`}</button></form></div><aside className="checkout-summary"><h2>Your order</h2>{lines.map(({product:p,qty})=><div className="checkout-line" key={p.id}><img src={p.image} alt=""/><span><b>{p.name}</b><small>Qty: {qty}</small></span><strong>{taka(p.price*qty)}</strong></div>)}<div className="coupon-row"><input value={form.coupon} onChange={e=>{update('coupon',e.target.value.toUpperCase());setCouponInfo(null)}} placeholder="Coupon code"/><button type="button" onClick={applyCoupon}>Apply</button></div>{couponError&&<small className="coupon-error">{couponError}</small>}{couponInfo&&<small className="coupon-success">Coupon applied · −{taka(couponInfo.discount)}</small>}<div className="checkout-total"><span>Subtotal</span><b>{taka(subtotal)}</b></div>{couponInfo&&<div className="checkout-total"><span>Discount</span><b>−{taka(couponInfo.discount)}</b></div>}<div className="checkout-total"><span>Delivery</span><b>{shipping===0?'FREE':taka(shipping)}</b></div><div className="checkout-grand"><span>Total</span><b>{taka(total)}</b></div><small className="checkout-help">ঢাকার ভিতরে ৳{settings.deliveryInside||70} · ঢাকার বাইরে ৳{settings.deliveryOutside||120} · ৳{settings.freeShipThreshold||2000}+ অর্ডারে delivery free</small></aside></div></main>;
}

function OrderConfirmation({order,onContinue}) { return <main className="order-confirmation"><div className="confirmation-card"><div className="confirmation-check">✓</div><div className="eyebrow">ORDER RECEIVED</div><h1>ধন্যবাদ! আপনার অর্ডারটি সম্পন্ন হয়েছে।</h1><p>অর্ডার নম্বর <b>{order.id}</b></p><p>মোট: <b>{taka(order.total||0)}</b> · Cash on delivery</p><button className="checkout-submit" onClick={onContinue}>Continue shopping <ArrowRight size={16}/></button></div></main>; }

function ProductDetail({item,settings,onBack,addCart,onBuyNow,cart,openBag}) {
  const [quantity,setQuantity]=useState(1), [photo,setPhoto]=useState(0), [tab,setTab]=useState('Description'), [message,setMessage]=useState('');
  const citizen=item.name.toLowerCase().includes('citizen');
  const pictures=[item.image, ...(citizen?['https://royalman.com.bd/wp-content/uploads/2026/09/Citizen-Classic-Chronograph-Analogue-Watch-for-Men-3-300x300.webp']:[])];
  const title=citizen?'Citizen Classic Chronograph Analogue Black Dial Watch for Men':item.name;
  const features=citizen?['Display: Analogue','Dial Color: Black','Case Shape: Round','Case Back: Stainless Steel','Features: 3 Subdials','Time Adjustment: Side Crown','Power Source: Battery','Strap Color: Black','Strap Material: Synthetic','Clasp Type: Tang Clasp','Water Resistance: Water Resistant','Dial Width: 35 mm','Strap Width: 21 mm']:['Premium finish and carefully selected materials','Designed for everyday wear','Complimentary gift box with watch purchase'];
  const submit=()=>{addCart(item.name);if(quantity>1)for(let n=1;n<quantity;n++)addCart(item.name);setMessage('Added to your bag');setTimeout(()=>setMessage(''),2000)};
  return <div className="detail-page"><div className="detail-topbar"><button className="detail-back" onClick={onBack}><ChevronLeft size={17}/> Continue shopping</button><a className="wordmark" href="#" onClick={e=>{e.preventDefault();onBack()}}><StoreLogo settings={settings}/></a><button className="detail-bag" onClick={openBag}><ShoppingBag size={18}/> Bag <b>{cart}</b></button></div><div className="detail-crumb">Home <ChevronRight size={13}/> Watches <ChevronRight size={13}/> {title}</div><main className="detail-main"><section className="detail-gallery"><div className="detail-main-photo"><span className="detail-sale">{item.badge||'-21%'}</span><img src={pictures[photo]||item.image} alt={title}/></div><div className="detail-thumbs">{pictures.map((src,i)=><button className={photo===i?'selected':''} onClick={()=>setPhoto(i)} key={src}><img src={src} alt={`${title} view ${i+1}`}/></button>)}</div></section><section className="detail-info"><div className="eyebrow"><span/> {(settings?.storeName || 'Royalman').toUpperCase()} WATCH COLLECTION</div><h1>{title}</h1><div className="detail-rating"><span>★★★★★</span> <small>Premium selection</small></div><div className="detail-prices">{item.old&&<del>{taka(item.old)}</del>}<b>{taka(item.price)}</b>{item.old&&<span>{item.badge||'SPECIAL PRICE'}</span>}</div><div className="detail-sku">SKU: {citizen?'CITI01':'RM-'+item.category.slice(0,3).toUpperCase()}</div><ul className="detail-perks"><li>1 years machine service warranty</li><li>Warranty card included in box</li><li>Limited time offer</li><li>Free watch box provided</li><li>Premium packaging with home delivery</li></ul><div className="detail-quantity"><span>Quantity</span><div><button onClick={()=>setQuantity(q=>Math.max(1,q-1))}>−</button><b>{quantity}</b><button onClick={()=>setQuantity(q=>q+1)}>+</button></div></div><div className="detail-actions"><button onClick={submit}>Add to cart</button><button onClick={()=>onBuyNow(item.name,quantity)}>Order Now <ArrowRight size={16}/></button></div>{message&&<div className="detail-message">✓ {message}</div>}<div className="detail-contact"><a href={`tel:+${String(settings.phone || '8809613008080').replace(/\D/g, '')}`}><Phone size={16}/> {formatPhone(settings.phone || '8809613008080')}</a><a href={`https://wa.me/${String(settings.whatsapp || settings.phone || '8801821060161').replace(/\D/g, '')}`} target="_blank" rel="noreferrer"><Phone size={16}/> {formatPhone(settings.whatsapp || settings.phone || '8801821060161')} · WhatsApp</a></div><div className="detail-safe"><Truck size={17}/> Fast delivery across Bangladesh <ShieldCheck size={17}/> Warranty included</div></section></main><section className="detail-tabs"><div className="detail-tabbar">{['Description','Shipping & Delivery','Warranty'].map(t=><button className={tab===t?'active':''} onClick={()=>setTab(t)} key={t}>{t}</button>)}</div>{tab==='Description'?<div className="detail-tabbody"><h2>{title}</h2><h3>Product Features</h3><div className="feature-list">{features.map(f=><span key={f}>{f}</span>)}</div></div>:tab==='Shipping & Delivery'?<div className="detail-tabbody"><h2>{settings.storeName || 'Royalman'} Delivery & Shipping</h2><p>Fast, reliable delivery to get your order to you safely.</p><div className="feature-list"><span>Dhaka (Regular): ৳70 · 1–3 business days</span><span>Outside Dhaka: ৳120 · 2–5 business days</span><span>Dhaka same-day express: ৳150 (orders before 11:30 AM)</span><span>Instant delivery in selected Dhaka areas: ৳200–৳300+, advance payment required.</span></div></div>:<div className="detail-tabbody"><h2>{settings.storeName || 'Royalman'} Warranty Policy</h2><p>Warranty covers manufacturing defects on the watch movement. This product includes 1 year machine service warranty. Scratches, accidental or water damage and normal wear are excluded. Contact customer support with your order ID to request a claim.</p></div>}</section><footer className="detail-footer"><span>© 2026 {settings.storeName || 'Royalman'} · Bangladesh</span><a href="tel:+8809613008080">{formatPhone(settings.phone || '8809613008080')}</a></footer></div>
}


function ProductGrid({items,addCart,orderNow,liked,toggleLike,openProduct}) { if(!items.length) return <div className="empty-results">No products match this selection. Try another category or search.</div>; return <div className="product-grid">{items.map((p,i)=><article className="product-card" key={`${p.id||p.name}-${i}`}><div className="product-photo" onClick={()=>openProduct?.(p)} role="button" tabIndex="0" onKeyDown={e=>e.key==='Enter'&&openProduct?.(p)}><img src={p.image || watchFallbacks[i%8]} alt={p.name} loading="lazy" onError={e=>{if(!e.currentTarget.dataset.fallback){e.currentTarget.dataset.fallback='1';e.currentTarget.src=watchFallbacks[i%8]}}}/>{p.badge&&<span className={`product-badge ${p.badge.includes('DELIVERY')?'delivery':''}`}>{p.badge}</span>}<button className={`heart ${liked.includes(p.name)?'liked':''}`} onClick={e=>{e.stopPropagation();toggleLike(p.name)}} aria-label="Add to wishlist"><Heart size={17} fill={liked.includes(p.name)?'currentColor':'none'}/></button><button className="quick-add" disabled={p.soldOut||p.stock===0} onClick={e=>{e.stopPropagation();addCart(p.name)}}>{p.soldOut||p.stock===0?'Sold out':<>Quick add <span>+</span></>}</button></div><div className="product-meta"><span>{p.category.toUpperCase()}</span><span className="stars">★★★★★</span></div><h3 onClick={()=>openProduct?.(p)}>{p.name}</h3><div className="price-row"><b>{taka(p.price)}</b>{Number(p.old || p.compareAt) > Number(p.price) && <del>{taka(Number(p.old || p.compareAt))}</del>}</div><button className="cart-button" disabled={p.soldOut||p.stock===0} onClick={()=>addCart(p.name)}>{p.soldOut||p.stock===0?'Sold out':'Add to cart'}</button><button className="order-button" disabled={p.soldOut||p.stock===0} onClick={()=>orderNow(p.name)}>Order Now</button></article>)}</div>; }

createRoot(document.getElementById('root')).render(<App/>);
