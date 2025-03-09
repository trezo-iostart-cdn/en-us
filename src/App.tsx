import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Wallet, ChevronRight, ExternalLink, Twitter, Facebook, Linkedin, Youtube } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface CryptoPrice {
  name: string;
  price: number;
  symbol: string;
}

function App() {
  const [cryptoPrices, setCryptoPrices] = useState<CryptoPrice[]>([
    { name: 'Bitcoin', symbol: 'BTC', price: 0 },
    { name: 'Ethereum', symbol: 'ETH', price: 0 },
    { name: 'Litecoin', symbol: 'LTC', price: 0 },
    { name: 'Cardano', symbol: 'ADA', price: 0 },
    { name: 'Solana', symbol: 'SOL', price: 0 },
    { name: 'Polkadot', symbol: 'DOT', price: 0 },
    { name: 'Ripple', symbol: 'XRP', price: 0 },
    { name: 'Dogecoin', symbol: 'DOGE', price: 0 },
    { name: 'Chainlink', symbol: 'LINK', price: 0 },
    { name: 'Uniswap', symbol: 'UNI', price: 0 }
  ]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const fetchPrices = async () => {
      setCryptoPrices(prev => prev.map(crypto => ({
        ...crypto,
        price: Math.random() * (crypto.symbol === 'BTC' ? 50000 : 5000)
      })));
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-astra-light flex flex-col">
      {/* Crypto Price Ticker */}
      <div className="bg-astra-green text-white py-2 overflow-hidden">
        <div className="flex animate-[scroll_30s_linear_infinite]">
          {cryptoPrices.map((crypto, index) => (
            <div key={index} className="flex items-center mx-4 whitespace-nowrap">
              <span className="font-bold">{crypto.symbol}</span>
              <span className="ml-2">${crypto.price.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-astra-green text-white py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold mb-6">Get Started with Trezor</h1>
              <p className="text-xl mb-8">Secure your digital assets with the world's most trusted hardware wallet</p>
              <a 
                href="https://trezor.io/start" 
                className="inline-flex items-center bg-white text-astra-green px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Now <ChevronRight className="ml-2" />
              </a>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80" 
                alt="Cryptocurrency Security" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section 
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16 flex-grow"
      >
        <h2 className="text-3xl font-bold text-astra-green mb-8">Complete Guide to Trezor.io/start</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Shield className="w-12 h-12 text-astra-green mb-4" />
            <h3 className="text-xl font-bold mb-3">Maximum Security</h3>
            <p>Your private keys never leave the device, ensuring complete protection of your digital assets.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Lock className="w-12 h-12 text-astra-green mb-4" />
            <h3 className="text-xl font-bold mb-3">Easy Setup</h3>
            <p>Follow our step-by-step guide at Trezor.io/start to configure your device in minutes.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Wallet className="w-12 h-12 text-astra-green mb-4" />
            <h3 className="text-xl font-bold mb-3">Multi-Currency Support</h3>
            <p>Store and manage multiple cryptocurrencies in one secure device.</p>
          </div>
        </div>

        <div className="prose max-w-none">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-astra-green mb-6">Getting Started with Your Trezor Device</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <p className="mb-4">Welcome to the comprehensive guide on setting up your Trezor hardware wallet. At <a href="https://trezor.io/start" className="text-astra-green hover:underline" target="_blank" rel="noopener noreferrer">Trezor.io/start</a>, you'll find everything you need to secure your cryptocurrency investments.</p>
                <img 
                  src="https://images.unsplash.com/photo-1623259838743-9f1e884fba59?auto=format&fit=crop&w=800&q=80" 
                  alt="Trezor Setup Guide" 
                  className="rounded-lg shadow-lg mb-4"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-astra-green mb-4">Initial Setup Process</h3>
                <ul className="list-disc pl-6 mb-6">
                  <li>Unbox your Trezor device and verify the security seals</li>
                  <li>Connect your device to your computer using the provided USB cable</li>
                  <li>Visit Trezor.io/start to download the Trezor Suite</li>
                  <li>Follow the on-screen instructions to initialize your device</li>
                  <li>Create and securely store your recovery seed</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold text-astra-green mb-4">Security Best Practices</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img 
                src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?auto=format&fit=crop&w=800&q=80" 
                alt="Security Practices" 
                className="rounded-lg shadow-lg"
              />
              <ul className="list-disc pl-6">
                <li>Never share your recovery seed with anyone</li>
                <li>Store your recovery seed in a secure, offline location</li>
                <li>Enable additional security features like PIN protection</li>
                <li>Regularly update your Trezor firmware</li>
                <li>Verify all transactions on the device screen</li>
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold text-astra-green mb-4">Managing Your Cryptocurrencies</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-4">Through the Trezor Suite, accessible via Trezor.io/start, you can:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Send and receive various cryptocurrencies</li>
                  <li>Monitor your portfolio in real-time</li>
                  <li>Exchange cryptocurrencies directly within the interface</li>
                  <li>View detailed transaction history</li>
                  <li>Set custom security policies</li>
                </ul>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800&q=80" 
                alt="Cryptocurrency Management" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://trezor.io/start" 
            className="inline-flex items-center bg-astra-green text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Trezor.io/start <ExternalLink className="ml-2" />
          </a>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-astra-green text-white mt-auto">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">About Trezor</h4>
              <p className="text-sm opacity-80">Secure your digital assets with the world's most trusted hardware wallet. Start your journey to financial sovereignty today.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="https://trezor.io/start" className="hover:text-white/80 transition-colors">Get Started</a></li>
                <li><a href="#" className="hover:text-white/80 transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white/80 transition-colors">Shop</a></li>
                <li><a href="#" className="hover:text-white/80 transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white/80 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white/80 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white/80 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white/80 transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white/80 transition-colors"><Twitter size={24} /></a>
                <a href="#" className="hover:text-white/80 transition-colors"><Facebook size={24} /></a>
                <a href="#" className="hover:text-white/80 transition-colors"><Linkedin size={24} /></a>
                <a href="#" className="hover:text-white/80 transition-colors"><Youtube size={24} /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>&copy; {new Date().getFullYear()} Trezor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;